// =====================================================================================
//  Projectile.cs
//  Баллистический снаряд: парабола под гравитацией, детекция попаданий Raycast'ом
//  по отрезку пути за физический шаг (никакого 'туннелирования' на 1000 м/с),
//  обработка экранов, рикошетов и взрыва ОФ.
//
//  Почему не Rigidbody:
//   * Rigidbody + быстрый снаряд = пропуски коллизий даже с Continuous Dynamic;
//   * свой интегратор детерминирован при одинаковом fixedDeltaTime — сервер и клиент
//     получают одинаковую траекторию по (точка, направление, shotId);
//   * дешевле: один Raycast за шаг, без контактов и солвера.
//
//  Без аллокаций: снаряды берутся из ProjectilePool, Physics.Raycast(out RaycastHit)
//  и OverlapSphereNonAlloc со статическими буферами.
// =====================================================================================
using UnityEngine;

namespace TankGame.Combat
{
    public delegate void ProjectileImpactHandler(Vector3 point, Vector3 normal, HitOutcome outcome, ShellType shell);

    [DisallowMultipleComponent]
    public sealed class Projectile : MonoBehaviour
    {
        [Tooltip("Слои, с которыми сталкивается снаряд (Armor + Terrain + Buildings)")]
        [SerializeField] private LayerMask hitMask = ~0;
        [SerializeField, Min(0)] private int maxRicochets = 2;
        [Tooltip("Доля скорости, сохраняемая после рикошета")]
        [SerializeField, Range(0.1f, 1f)] private float ricochetSpeedFactor = 0.75f;
        [SerializeField, Min(0.5f)] private float maxLifetime = 6f;
        [SerializeField] private TrailRenderer trail;

        /// <summary>Глобальное событие удара — подпишите менеджер VFX/звука (без аллокаций).</summary>
        public static event ProjectileImpactHandler Impact;

        // Сколько поверхностей снаряд может обработать за один FixedUpdate (экран + гусеница + борт…).
        private const int MaxHitsPerStep = 6;
        // Сдвиг за поверхность, чтобы следующий Raycast не попал в тот же коллайдер.
        private const float SkinOffset = 0.01f;

        // Общие буферы для всех снарядов (Unity однопоточен для физических запросов).
        private static readonly Collider[] s_overlap = new Collider[48];
        private static readonly TankDestructible[] s_splashTanks = new TankDestructible[16];
        private static readonly float[] s_splashDamage = new float[16];
        private static readonly ArmorPlate[] s_splashPlates = new ArmorPlate[16];

        private ShotState _shot;
        private Vector3 _velocity;
        private float _life;
        private bool _authoritative;
        private ArmorPlate _lastPlate;
        private Transform _tr;

        public bool IsActive { get; private set; }
        public ref readonly ShotState Shot => ref _shot;

        private void Awake()
        {
            _tr = transform;
            if (trail == null) trail = GetComponent<TrailRenderer>();
        }

        /// <summary>
        /// Запуск снаряда. Вызывается ProjectilePool.Fire.
        /// </summary>
        /// <param name="authoritative">true на сервере/хосте — снаряд наносит урон.
        /// false на клиенте — только визуал и предсказание траектории.</param>
        public void Launch(in ShellData shell, Vector3 position, Vector3 direction,
                           TankDestructible owner, uint shotId, bool authoritative)
        {
            if (_tr == null) _tr = transform; // префаб мог быть неактивен => Awake ещё не вызывался
            direction.Normalize();

            // ГСЧ из shotId: одинаковые броски урона/пробития на сервере и клиентах.
            var rng = new DeterministicRandom(shotId);

            _shot = new ShotState
            {
                Shell = shell,
                ShotId = shotId,
                Owner = owner,
                OwnerNetId = owner != null ? owner.NetworkId : -1,
                Direction = direction,
                Distance = 0f,
                PenetrationRoll = rng.Spread(PenetrationCalculator.RngSpread),
                DamageRoll = rng.Spread(PenetrationCalculator.RngSpread),
                PenetrationLost = 0f,
                HeatSpacedDistance = -1f,
                Ricochets = 0,
            };

            _velocity = direction * shell.Velocity;
            _life = 0f;
            _authoritative = authoritative;
            _lastPlate = null;
            IsActive = true;

            _tr.SetPositionAndRotation(position, Quaternion.LookRotation(direction));
            if (trail != null) trail.Clear();
            gameObject.SetActive(true);
        }

        private void FixedUpdate()
        {
            if (!IsActive) return;

            float dt = Time.fixedDeltaTime;
            _life += dt;
            if (_life > maxLifetime || _shot.Distance > _shot.Shell.MaxRange)
            {
                Despawn();
                return;
            }

            // Полунеявный Эйлер: сначала скорость, потом позиция — стабильная парабола.
            _velocity += Physics.gravity * (_shot.Shell.GravityMultiplier * dt);

            Vector3 position = _tr.position;
            float speed = _velocity.magnitude;
            if (speed < 1f) { Despawn(); return; }

            Vector3 dir = _velocity / speed;
            float remaining = speed * dt;

            for (int hits = 0; hits < MaxHitsPerStep && remaining > 0f; hits++)
            {
                _shot.Direction = dir;

                if (!Physics.Raycast(position, dir, out RaycastHit hit, remaining, hitMask, QueryTriggerInteraction.Ignore))
                {
                    position += dir * remaining;
                    _shot.Distance += remaining;
                    remaining = 0f;
                    break;
                }

                _shot.Distance += hit.distance;
                remaining -= hit.distance;
                position = hit.point;

                StepAction action = ProcessHit(ref hit, ref dir);
                if (action == StepAction.Stop)
                {
                    _tr.position = position;
                    Despawn();
                    return;
                }

                if (action == StepAction.Reflect)
                {
                    speed *= ricochetSpeedFactor;
                    _velocity = dir * speed;
                    remaining *= ricochetSpeedFactor;
                }

                // Продолжаем полёт за поверхностью.
                position += dir * SkinOffset;
                remaining -= SkinOffset;
            }

            _tr.SetPositionAndRotation(position, Quaternion.LookRotation(dir));
        }

        private enum StepAction : byte { Continue, Reflect, Stop }

        private StepAction ProcessHit(ref RaycastHit hit, ref Vector3 dir)
        {
            // ---------- Не броня (земля, дом, камень) ----------
            if (!ArmorPlate.TryGet(hit.collider, out ArmorPlate plate) || plate.Owner == null)
            {
                if (_shot.Shell.Type == ShellType.HE && _authoritative)
                    ServerExplode(hit.point, null);
                Impact?.Invoke(hit.point, hit.normal, HitOutcome.None, _shot.Shell.Type);
                return StepAction.Stop;
            }

            // Свой танк и только что обработанный лист — пролетаем насквозь.
            if (plate.Owner == _shot.Owner || plate == _lastPlate) return StepAction.Continue;
            _lastPlate = plate;

            // Мёртвый танк — 'коробка' брони: поглощает снаряд без расчётов.
            if (plate.Owner.IsDead)
            {
                Impact?.Invoke(hit.point, hit.normal, HitOutcome.NonPenetration, _shot.Shell.Type);
                return StepAction.Stop;
            }

            // ---------- Расчёт пробития (одинаков на сервере и клиенте) ----------
            PenetrationCalculator.Resolve(ref _shot, plate, hit.point, hit.normal, out HitResult result);

            if (_authoritative)
            {
                TankDestructible target = plate.Owner;
                target.ServerApplyHit(in result, _shot.OwnerNetId);
                CombatNetwork.ServerReportHit(in result, _shot.ShotId, _shot.OwnerNetId, target.NetworkId);

                // Взрыв ОФ задевает соседние танки (пробивший ОФ тоже даёт сплэш по чужим).
                if (_shot.Shell.Type == ShellType.HE)
                    ServerExplode(hit.point, target);
            }

            Impact?.Invoke(hit.point, hit.normal, result.Outcome, _shot.Shell.Type);

            switch (result.Outcome)
            {
                case HitOutcome.Ricochet:
                    if (_shot.Ricochets > maxRicochets) return StepAction.Stop;
                    dir = Vector3.Reflect(dir, hit.normal);
                    _lastPlate = null; // после рикошета снаряд может попасть в другую часть того же танка
                    return StepAction.Reflect;

                case HitOutcome.SpacedArmorPassed:
                    return StepAction.Continue;

                default: // Penetration, NonPenetration, Absorbed, HEDetonation
                    return StepAction.Stop;
            }
        }

        /// <summary>
        /// Взрывная волна ОФ (только сервер). Для каждого танка в радиусе выбирается лист,
        /// дающий НАИБОЛЬШИЙ урон (ближайший и тонкий), — как 'слабое место' в WoT.
        /// Требование: коллайдеры брони — выпуклые (Box/Sphere/Capsule/convex Mesh) для ClosestPoint.
        /// </summary>
        private void ServerExplode(Vector3 point, TankDestructible directTarget)
        {
            float radius = _shot.Shell.ExplosionRadius;
            if (radius <= 0f) return;

            int count = Physics.OverlapSphereNonAlloc(point, radius, s_overlap, hitMask, QueryTriggerInteraction.Ignore);
            int tanks = 0;

            for (int i = 0; i < count; i++)
            {
                Collider col = s_overlap[i];
                if (!ArmorPlate.TryGet(col, out ArmorPlate plate)) continue;
                TankDestructible tank = plate.Owner;
                if (tank == null || tank == directTarget || tank.IsDead) continue;

                float distance = Vector3.Distance(point, col.ClosestPoint(point));
                float armor = plate.Type == ArmorType.Main
                    ? plate.NominalThickness
                    : plate.NominalThickness + plate.MainArmorBehind;
                float dmg = PenetrationCalculator.GetHESplashDamage(in _shot.Shell, _shot.DamageRoll, distance, armor);
                if (dmg <= 0f) continue;

                // Дедупликация по танку: оставляем максимальный урон.
                int slot = -1;
                for (int t = 0; t < tanks; t++) if (s_splashTanks[t] == tank) { slot = t; break; }
                if (slot < 0)
                {
                    if (tanks >= s_splashTanks.Length) continue;
                    slot = tanks++;
                    s_splashTanks[slot] = tank;
                    s_splashDamage[slot] = 0f;
                }
                if (dmg > s_splashDamage[slot])
                {
                    s_splashDamage[slot] = dmg;
                    s_splashPlates[slot] = plate;
                }
            }

            for (int t = 0; t < tanks; t++)
            {
                ArmorPlate p = s_splashPlates[t];
                TankDestructible tank = s_splashTanks[t];
                tank.ServerApplySplash(s_splashDamage[t], p.Zone, p.ModulesBehind, _shot.OwnerNetId);

                var r = new HitResult
                {
                    Outcome = HitOutcome.HESplash, Plate = p, Zone = p.Zone, Point = point,
                    Damage = s_splashDamage[t], EffectiveArmor = p.NominalThickness,
                };
                CombatNetwork.ServerReportHit(in r, _shot.ShotId, _shot.OwnerNetId, tank.NetworkId);

                s_splashTanks[t] = null; // не держим ссылки в статическом буфере
                s_splashPlates[t] = null;
            }
        }

        private void Despawn()
        {
            if (!IsActive) return;
            IsActive = false;
            _shot.Owner = null;
            _lastPlate = null;
            ProjectilePool.Release(this);
        }

#if UNITY_EDITOR
        private void OnDrawGizmos()
        {
            if (!IsActive) return;
            Gizmos.color = Color.yellow;
            Gizmos.DrawLine(transform.position, transform.position + _velocity * 0.05f);
        }
#endif
    }
}
