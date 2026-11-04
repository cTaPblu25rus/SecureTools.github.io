// =====================================================================================
//  TankDestructible.cs
//  Прочность, модули, экипаж, пожар, детонация БК, таран.
//
//  СЕРВЕР: единственный, кто меняет состояние (TakeDamage / ServerApply*).
//  КЛИЕНТ: только ClientApplySnapshot() из сети + события для UI/VFX.
//
//  Производительность:
//   * Все массивы выделяются один раз в Awake; модули/экипаж — struct'ы в массивах.
//   * Модули и экипаж адресуются битовыми масками -> перебор максимум 10/5 элементов.
//   * Update() мгновенно выходит, если нет пожара и ремонтов (_activeTimers == 0).
//   * События — делегаты со struct-аргументом, вызов не аллоцирует.
// =====================================================================================
using System;
using UnityEngine;

namespace TankGame.Combat
{
    public enum ModuleStatus : byte { Functional = 0, Damaged = 1, Destroyed = 2 }

    public enum DamageSource : byte { Shell = 0, HESplash = 1, Fire = 2, AmmoRackDetonation = 3, Ram = 4, Script = 5 }

    public struct ModuleState
    {
        public float Hp;
        public float MaxHp;
        public ModuleStatus Status;
        /// <summary>Осталось секунд до ремонта (только для Destroyed).</summary>
        public float RepairLeft;
    }

    /// <summary>Данные события получения урона (для UI, статистики, VFX).</summary>
    public struct DamageEvent
    {
        public float Damage;
        public float HpLeft;
        public HitZone Zone;
        public bool Penetrated;
        public DamageSource Source;
        public int AttackerNetId;
        public ModuleFlags ModulesDamaged;
        public ModuleFlags ModulesDestroyed;
        public CrewFlags CrewContused;
        public bool StartedFire;
    }

    public delegate void TankDamagedHandler(TankDestructible tank, in DamageEvent e);
    public delegate void TankDestroyedHandler(TankDestructible tank, DamageSource cause, int killerNetId);

    [DisallowMultipleComponent]
    public sealed class TankDestructible : MonoBehaviour
    {
        public const int ModuleCount = 10;
        public const int CrewCount = 5;

        [SerializeField] private TankConfig config;
        [Tooltip("Сетевой id. Выставляется сетевым слоем при спавне.")]
        [SerializeField] private int networkId;
        [SerializeField] private int teamId;
        [Tooltip("Rigidbody корпуса — для тарана (масса берётся из конфига, скорость — из столкновения).")]
        [SerializeField] private Rigidbody body;

        // ------------------------------ Состояние ------------------------------
        private float _hp;
        private readonly ModuleState[] _modules = new ModuleState[ModuleCount];
        private readonly bool[] _crewContused = new bool[CrewCount];
        private bool _burning;
        private float _fireLeft;
        private int _fireAttacker = -1;
        private int _activeTimers;      // пожар + модули в ремонте
        private bool _dead;
        private bool _stateDirty;       // нужно разослать снапшот
        private DeterministicRandom _rng;
        private ArmorPlate[] _plates;

        // ------------------------------ События --------------------------------
        public event TankDamagedHandler Damaged;
        public event TankDestroyedHandler Destroyed;
        /// <summary>Клиент: состояние обновилось из сети (перерисовать HP-бар, иконки модулей).</summary>
        public event Action<TankDestructible> StateChanged;

        // ------------------------------ Свойства -------------------------------
        public TankConfig Config => config;
        public int NetworkId { get => networkId; set { CombatNetwork.Unregister(this); networkId = value; CombatNetwork.Register(this); } }
        public int TeamId { get => teamId; set => teamId = value; }
        public float Hp => _hp;
        public float MaxHp => config != null ? config.maxHp : 1f;
        public bool IsDead => _dead;
        public bool IsBurning => _burning;
        public ArmorPlate[] Plates => _plates;
        public ModuleStatus GetModuleStatus(ModuleType m) => _modules[(int)m].Status;
        public bool IsCrewContused(CrewRole r) => _crewContused[(int)r];

        public bool IsImmobilized =>
            _modules[(int)ModuleType.TrackLeft].Status == ModuleStatus.Destroyed ||
            _modules[(int)ModuleType.TrackRight].Status == ModuleStatus.Destroyed ||
            _modules[(int)ModuleType.Engine].Status == ModuleStatus.Destroyed ||
            _modules[(int)ModuleType.Transmission].Status == ModuleStatus.Destroyed;

        // ---- Множители ТТХ от повреждений (читают контроллеры движения/орудия/обзора) ----

        /// <summary>Множитель мощности/скорости. 0 = обездвижен.</summary>
        public float MobilityMultiplier
        {
            get
            {
                if (_dead || IsImmobilized) return 0f;
                float m = 1f;
                if (_modules[(int)ModuleType.Engine].Status == ModuleStatus.Damaged) m *= 0.5f;
                if (_modules[(int)ModuleType.Transmission].Status == ModuleStatus.Damaged) m *= 0.8f;
                if (_crewContused[(int)CrewRole.Driver]) m *= 0.85f;
                return m;
            }
        }

        /// <summary>Множитель времени перезарядки (>1 = медленнее).</summary>
        public float ReloadMultiplier
        {
            get
            {
                float m = 1f;
                if (_modules[(int)ModuleType.AmmoRack].Status != ModuleStatus.Functional) m *= 1.5f;
                if (_crewContused[(int)CrewRole.Loader]) m *= 1.25f;
                return m;
            }
        }

        /// <summary>Множитель времени сведения и разброса.</summary>
        public float AimMultiplier
        {
            get
            {
                float m = 1f;
                if (_modules[(int)ModuleType.Gun].Status != ModuleStatus.Functional) m *= 1.4f;
                if (_crewContused[(int)CrewRole.Gunner]) m *= 1.25f;
                return m;
            }
        }

        /// <summary>Множитель скорости поворота башни.</summary>
        public float TurretTraverseMultiplier =>
            _modules[(int)ModuleType.TurretRing].Status == ModuleStatus.Destroyed ? 0f :
            _modules[(int)ModuleType.TurretRing].Status == ModuleStatus.Damaged ? 0.5f : 1f;

        /// <summary>Множитель дальности обзора.</summary>
        public float ViewRangeMultiplier
        {
            get
            {
                float m = 1f;
                if (_modules[(int)ModuleType.Optics].Status != ModuleStatus.Functional) m *= 0.6f;
                if (_crewContused[(int)CrewRole.Commander]) m *= 0.9f;
                return m;
            }
        }

        /// <summary>Орудие уничтожено — стрелять нельзя до ремонта.</summary>
        public bool CanFire => !_dead && _modules[(int)ModuleType.Gun].Status != ModuleStatus.Destroyed;

        // =======================================================================
        //  Жизненный цикл
        // =======================================================================

        private void Awake()
        {
            if (body == null) body = GetComponent<Rigidbody>();
            _plates = GetComponentsInChildren<ArmorPlate>(true); // одна аллокация при спавне
            ResetState();
        }

        private void OnEnable() => CombatNetwork.Register(this);
        private void OnDisable() => CombatNetwork.Unregister(this);

        /// <summary>Полный ремонт (респаун / начало боя).</summary>
        public void ResetState()
        {
            _hp = MaxHp;
            _dead = false;
            _burning = false;
            _fireLeft = 0f;
            _activeTimers = 0;
            _rng = new DeterministicRandom((uint)(networkId * 7919 + 17) ^ (uint)Environment.TickCount);

            for (int i = 0; i < ModuleCount; i++)
            {
                float maxHp = config != null && config.modules != null && i < config.modules.Length
                    ? config.modules[i].MaxHp : 100f;
                _modules[i] = new ModuleState { Hp = maxHp, MaxHp = maxHp, Status = ModuleStatus.Functional };
            }
            for (int i = 0; i < CrewCount; i++) _crewContused[i] = false;
            _stateDirty = true;
        }

        private void Update()
        {
            if (_activeTimers == 0 || _dead || !CombatNetwork.IsServer) return;
            float dt = Time.deltaTime;

            // ---- Пожар ----
            if (_burning)
            {
                _fireLeft -= dt;
                float fireDmg = config.maxHp * config.fireDamagePerSecond * dt;
                // Пожар не шлёт событие каждый кадр (дорого по сети) — только снапшот.
                _hp -= fireDmg;
                _stateDirty = true;
                if (_hp <= 0f) { Die(DamageSource.Fire, _fireAttacker); return; }
                if (_fireLeft <= 0f) { _burning = false; _activeTimers--; }
            }

            // ---- Ремонт модулей ----
            for (int i = 0; i < ModuleCount; i++)
            {
                if (_modules[i].Status != ModuleStatus.Destroyed) continue;
                _modules[i].RepairLeft -= dt;
                if (_modules[i].RepairLeft <= 0f)
                {
                    _modules[i].Status = ModuleStatus.Damaged;
                    _modules[i].Hp = _modules[i].MaxHp * 0.5f;
                    _activeTimers--;
                    _stateDirty = true;
                }
            }
        }

        private void LateUpdate()
        {
            // Снапшот рассылается максимум раз в кадр, сколько бы попаданий ни пришло.
            if (_stateDirty && CombatNetwork.IsServer)
            {
                _stateDirty = false;
                var snap = CaptureSnapshot();
                CombatNetwork.ServerReportTankState(this, in snap);
            }
        }

        // =======================================================================
        //  Публичный API урона (СЕРВЕР)
        // =======================================================================

        /// <summary>
        /// API из ТЗ. Строковая зона ("HullSide", "НЛД", "Hatch"…) парсится без аллокаций;
        /// модули и экипаж берутся по умолчанию для зоны.
        /// </summary>
        public void TakeDamage(float damage, bool penetrated, string hitZone)
        {
            HitZoneUtility.TryParse(hitZone, out HitZone zone);
            TakeDamage(damage, penetrated, zone);
        }

        /// <summary>То же, но с enum-зоной (предпочтительно — быстрее).</summary>
        public void TakeDamage(float damage, bool penetrated, HitZone zone, int attackerNetId = -1)
        {
            ApplyDamage(damage, penetrated, zone, HitZoneUtility.DefaultModules(zone), HitZoneUtility.DefaultCrew(zone),
                        DamageSource.Script, attackerNetId, 1f);
        }

        /// <summary>Применить результат PenetrationCalculator (вызывается Projectile на сервере).</summary>
        public void ServerApplyHit(in HitResult hit, int attackerNetId)
        {
            ArmorPlate plate = hit.Plate;
            ModuleFlags modules = plate != null ? plate.ModulesBehind : HitZoneUtility.DefaultModules(hit.Zone);
            CrewFlags crew = plate != null ? plate.CrewBehind : HitZoneUtility.DefaultCrew(hit.Zone);

            switch (hit.Outcome)
            {
                case HitOutcome.Penetration:
                    ApplyDamage(hit.Damage, true, hit.Zone, modules, crew, DamageSource.Shell, attackerNetId, 1f);
                    break;

                case HitOutcome.HEDetonation:
                    // Непробивший ОФ: частичный урон + шанс крита только внешних модулей, без экипажа.
                    ApplyDamage(hit.Damage, false, hit.Zone, modules & ModuleFlags.External, CrewFlags.None,
                                DamageSource.Shell, attackerNetId, config.heNonPenCritScale);
                    break;

                case HitOutcome.SpacedArmorPassed:
                case HitOutcome.AbsorbedBySpacedArmor:
                    // Попадание в гусеницу ломает её даже без урона по ХП.
                    if (plate != null && plate.Type == ArmorType.Track)
                        ServerDamageModules(modules & ModuleFlags.Tracks, hit.Damage > 0f ? hit.Damage : 0f,
                                            hit.Penetration, attackerNetId, hit.Zone);
                    break;

                case HitOutcome.NonPenetration:
                    // Урона нет, но событие нужно для статистики 'заблокировано бронёй'.
                    RaiseDamaged(0f, false, hit.Zone, DamageSource.Shell, attackerNetId, 0, 0, 0, false);
                    break;
            }
        }

        /// <summary>Урон взрывной волной ОФ (без критов экипажа, только внешние модули).</summary>
        public void ServerApplySplash(float damage, HitZone zone, ModuleFlags modulesNear, int attackerNetId)
        {
            ApplyDamage(damage, false, zone, modulesNear & ModuleFlags.External, CrewFlags.None,
                        DamageSource.HESplash, attackerNetId, config.heNonPenCritScale);
        }

        // =======================================================================
        //  Внутренняя логика
        // =======================================================================

        private void ApplyDamage(float damage, bool penetrated, HitZone zone, ModuleFlags modules, CrewFlags crew,
                                 DamageSource source, int attacker, float critScale)
        {
            if (!CombatNetwork.IsServer)
            {
                // Клиент не имеет права менять ХП — ждёт снапшот от сервера.
                return;
            }
            if (_dead || config == null) return;

            damage = Mathf.Round(damage); // в WoT урон целочисленный
            if (damage < 0f) damage = 0f;
            _hp -= damage;

            ModuleFlags damaged = 0, destroyed = 0;
            CrewFlags contused = 0;
            bool fire = false;

            // Криты возможны при пробитии, а у ОФ — и без него (с уменьшенным шансом).
            if ((penetrated || source == DamageSource.HESplash || critScale < 1f) && damage > 0f)
                RollCrits(modules, crew, damage, critScale, ref damaged, ref destroyed, ref contused, ref fire);

            if (fire && !_burning)
            {
                _burning = true;
                _fireLeft = config.fireDuration;
                _fireAttacker = attacker;
                _activeTimers++;
            }

            _stateDirty = true;
            RaiseDamaged(damage, penetrated, zone, source, attacker, damaged, destroyed, contused, fire);

            // Детонация боеукладки — мгновенное уничтожение.
            if ((destroyed & ModuleFlags.AmmoRack) != 0)
            {
                _hp = 0f;
                Die(DamageSource.AmmoRackDetonation, attacker);
                return;
            }

            if (_hp <= 0f) Die(source, attacker);
        }

        private void RollCrits(ModuleFlags modules, CrewFlags crew, float damage, float critScale,
                               ref ModuleFlags damaged, ref ModuleFlags destroyed, ref CrewFlags contused, ref bool fire)
        {
            // ---- Модули ----
            int mask = (int)modules;
            for (int i = 0; mask != 0 && i < ModuleCount; i++, mask >>= 1)
            {
                if ((mask & 1) == 0) continue;
                ref readonly ModuleConfig mc = ref config.GetModule(i);
                if (!_rng.Chance(mc.HitChance * critScale)) continue;

                ModuleStatus newStatus = DamageModule(i, damage);
                var bit = (ModuleFlags)(1 << i);
                if (newStatus == ModuleStatus.Destroyed) destroyed |= bit;
                else if (newStatus == ModuleStatus.Damaged) damaged |= bit;

                // Возгорание: двигатель 15% (по умолчанию), топливный бак 10%.
                if (newStatus != ModuleStatus.Functional)
                {
                    if (i == (int)ModuleType.Engine && _rng.Chance(config.engineFireChance)) fire = true;
                    else if (i == (int)ModuleType.FuelTank && _rng.Chance(config.fuelTankFireChance)) fire = true;
                }
            }

            // ---- Экипаж ----
            int crewMask = (int)crew;
            for (int i = 0; crewMask != 0 && i < CrewCount; i++, crewMask >>= 1)
            {
                if ((crewMask & 1) == 0 || _crewContused[i]) continue;
                if (!_rng.Chance(config.crewHitChance * critScale)) continue;
                _crewContused[i] = true;
                contused |= (CrewFlags)(1 << i);
            }
        }

        /// <summary>Наносит урон модулю, возвращает его новый статус.</summary>
        private ModuleStatus DamageModule(int index, float damage)
        {
            ref ModuleState m = ref _modules[index];
            if (m.Status == ModuleStatus.Destroyed) return ModuleStatus.Destroyed;

            m.Hp -= damage;
            if (m.Hp <= 0f)
            {
                m.Hp = 0f;
                m.Status = ModuleStatus.Destroyed;
                m.RepairLeft = config.GetModule(index).RepairTime;
                _activeTimers++;
            }
            else if (m.Hp <= m.MaxHp * 0.5f)
            {
                m.Status = ModuleStatus.Damaged;
            }
            return m.Status;
        }

        /// <summary>
        /// Прямое повреждение модулей без урона по ХП (гусеница, поглотившая снаряд).
        /// Урон по гусенице берётся как максимум из урона и пробития — сбить гусеницу должен
        /// почти любой снаряд среднего калибра.
        /// </summary>
        private void ServerDamageModules(ModuleFlags modules, float damage, float penetration, int attacker, HitZone zone)
        {
            if (!CombatNetwork.IsServer || _dead || modules == 0) return;
            float moduleDamage = damage > penetration ? damage : penetration;
            ModuleFlags damaged = 0, destroyed = 0;
            int mask = (int)modules;
            for (int i = 0; mask != 0 && i < ModuleCount; i++, mask >>= 1)
            {
                if ((mask & 1) == 0) continue;
                ModuleStatus s = DamageModule(i, moduleDamage);
                if (s == ModuleStatus.Destroyed) destroyed |= (ModuleFlags)(1 << i);
                else if (s == ModuleStatus.Damaged) damaged |= (ModuleFlags)(1 << i);
            }
            _stateDirty = true;
            RaiseDamaged(0f, false, zone, DamageSource.Shell, attacker, damaged, destroyed, 0, false);
        }

        private void Die(DamageSource cause, int killer)
        {
            if (_dead) return;
            _dead = true;
            _hp = 0f;
            if (_burning) { _burning = false; }
            _activeTimers = 0;
            _stateDirty = true;
            Destroyed?.Invoke(this, cause, killer);
        }

        private void RaiseDamaged(float damage, bool pen, HitZone zone, DamageSource src, int attacker,
                                  ModuleFlags damaged, ModuleFlags destroyed, CrewFlags contused, bool fire)
        {
            if (Damaged == null) return;
            var e = new DamageEvent
            {
                Damage = damage, HpLeft = _hp, Zone = zone, Penetrated = pen, Source = src,
                AttackerNetId = attacker, ModulesDamaged = damaged, ModulesDestroyed = destroyed,
                CrewContused = contused, StartedFire = fire,
            };
            Damaged(this, in e);
        }

        // =======================================================================
        //  Таран (физика движения из ТЗ): урон зависит от массы и скорости.
        // =======================================================================

        private void OnCollisionEnter(Collision collision)
        {
            if (!CombatNetwork.IsServer || _dead || config == null) return;
            if (!ArmorPlate.TryGet(collision.collider, out ArmorPlate otherPlate)) return;
            TankDestructible other = otherPlate.Owner;
            if (other == null || other == this || other.config == null) return;
            if (!config.ramFriendlyFire && other.teamId == teamId) return;

            float relSpeed = collision.relativeVelocity.magnitude;
            if (relSpeed < config.ramMinSpeed) return;

            // Каждый танк получает свой OnCollisionEnter и считает урон себе сам.
            float dmg = ComputeRamDamage(config.massTons, other.config.massTons, relSpeed, config.ramDamagePerKJ);
            ApplyDamage(dmg, false, HitZone.HullFront, ModuleFlags.Tracks, CrewFlags.None,
                        DamageSource.Ram, other.networkId, 0.3f);
        }

        /// <summary>
        /// Урон тарана: кинетическая энергия соударения (через приведённую массу) делится
        /// между танками обратно пропорционально массе — лёгкий танк страдает сильнее.
        /// </summary>
        public static float ComputeRamDamage(float myMassT, float otherMassT, float relSpeedMs, float damagePerKJ)
        {
            float m1 = myMassT * 1000f, m2 = otherMassT * 1000f;
            float reducedMass = m1 * m2 / (m1 + m2);
            float energyKJ = 0.5f * reducedMass * relSpeedMs * relSpeedMs * 0.001f;
            float myShare = m2 / (m1 + m2);
            return energyKJ * myShare * damagePerKJ;
        }

        // =======================================================================
        //  Сетевая синхронизация
        // =======================================================================

        public TankDamageSnapshot CaptureSnapshot()
        {
            var s = new TankDamageSnapshot
            {
                Hp = (ushort)Mathf.Clamp(Mathf.CeilToInt(_hp), 0, ushort.MaxValue),
                Burning = _burning,
                Dead = _dead,
            };
            for (int i = 0; i < ModuleCount; i++)
            {
                if (_modules[i].Status == ModuleStatus.Damaged) s.DamagedModules |= (ModuleFlags)(1 << i);
                else if (_modules[i].Status == ModuleStatus.Destroyed) s.DestroyedModules |= (ModuleFlags)(1 << i);
            }
            for (int i = 0; i < CrewCount; i++)
                if (_crewContused[i]) s.ContusedCrew |= (CrewFlags)(1 << i);
            return s;
        }

        /// <summary>Клиент: применить состояние, присланное сервером.</summary>
        public void ClientApplySnapshot(in TankDamageSnapshot s)
        {
            if (CombatNetwork.IsServer) return; // на хосте состояние уже актуально
            bool wasDead = _dead;
            _hp = s.Hp;
            _burning = s.Burning;
            _dead = s.Dead;
            for (int i = 0; i < ModuleCount; i++)
            {
                var bit = (ModuleFlags)(1 << i);
                _modules[i].Status = (s.DestroyedModules & bit) != 0 ? ModuleStatus.Destroyed
                                   : (s.DamagedModules & bit) != 0 ? ModuleStatus.Damaged
                                   : ModuleStatus.Functional;
            }
            for (int i = 0; i < CrewCount; i++)
                _crewContused[i] = (s.ContusedCrew & (CrewFlags)(1 << i)) != 0;

            StateChanged?.Invoke(this);
            if (!wasDead && _dead) Destroyed?.Invoke(this, DamageSource.Shell, -1);
        }

        /// <summary>Починить все модули и вылечить экипаж (ремкомплект/аптечка). СЕРВЕР.</summary>
        public void ServerRepairAll(bool extinguish)
        {
            if (!CombatNetwork.IsServer || _dead) return;
            for (int i = 0; i < ModuleCount; i++)
            {
                if (_modules[i].Status == ModuleStatus.Destroyed) _activeTimers--;
                _modules[i].Status = ModuleStatus.Functional;
                _modules[i].Hp = _modules[i].MaxHp;
            }
            for (int i = 0; i < CrewCount; i++) _crewContused[i] = false;
            if (extinguish && _burning) { _burning = false; _activeTimers--; }
            _stateDirty = true;
        }
    }
}
