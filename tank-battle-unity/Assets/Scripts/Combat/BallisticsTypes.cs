// =====================================================================================
//  BallisticsTypes.cs
//  Базовые типы боевой системы: перечисления, данные снаряда, результат попадания,
//  детерминированный ГСЧ. Всё — value-типы (struct/enum) => ноль аллокаций в горячем цикле.
// =====================================================================================
using System;
using UnityEngine;

namespace TankGame.Combat
{
    /// <summary>Тип снаряда.</summary>
    public enum ShellType : byte
    {
        /// <summary>Бронебойный (ББ). Нормализация 5°, рикошет от 70°.</summary>
        AP = 0,
        /// <summary>Подкалиберный (БП). Нормализация 2°, рикошет от 70°, сильнее теряет пробитие с дистанцией.</summary>
        APCR = 1,
        /// <summary>Осколочно-фугасный (ОФ). Не рикошетит, при непробитии наносит частичный урон.</summary>
        HE = 2,
        /// <summary>Кумулятивный (КС). Без нормализации, рикошет от 85°, теряет пробитие в воздухе после экрана.</summary>
        HEAT = 3,
    }

    /// <summary>Тип бронелиста.</summary>
    public enum ArmorType : byte
    {
        /// <summary>Основная броня — за ней находятся модули и экипаж.</summary>
        Main = 0,
        /// <summary>Экран — поглощает пробитие, урона по ХП не наносит.</summary>
        Spaced = 1,
        /// <summary>Гусеница — работает как экран, но при попадании повреждает модуль гусеницы.</summary>
        Track = 2,
    }

    /// <summary>Итог взаимодействия снаряда с одним бронелистом.</summary>
    public enum HitOutcome : byte
    {
        None = 0,
        /// <summary>Пробитие основной брони — полный урон + криты.</summary>
        Penetration = 1,
        /// <summary>Непробитие основной брони (ББ/БП/КС) — урон 0.</summary>
        NonPenetration = 2,
        /// <summary>Рикошет — снаряд отражается и летит дальше.</summary>
        Ricochet = 3,
        /// <summary>Экран/гусеница пробиты, снаряд летит дальше с уменьшенным пробитием.</summary>
        SpacedArmorPassed = 4,
        /// <summary>Снаряд полностью поглощён экраном/гусеницей.</summary>
        AbsorbedBySpacedArmor = 5,
        /// <summary>ОФ не пробил броню и взорвался на ней — частичный урон.</summary>
        HEDetonation = 6,
        /// <summary>Урон от взрывной волны ОФ по соседнему танку.</summary>
        HESplash = 7,
    }

    /// <summary>Индексы модулей. Значение = номер бита в <see cref="ModuleFlags"/>.</summary>
    public enum ModuleType : byte
    {
        Engine = 0,
        AmmoRack = 1,
        FuelTank = 2,
        Transmission = 3,
        Gun = 4,
        TurretRing = 5,
        Optics = 6,
        Radio = 7,
        TrackLeft = 8,
        TrackRight = 9,
    }

    /// <summary>Битовая маска модулей — какие модули стоят за бронелистом. Одно ushort вместо массива.</summary>
    [Flags]
    public enum ModuleFlags : ushort
    {
        None = 0,
        Engine = 1 << (int)ModuleType.Engine,
        AmmoRack = 1 << (int)ModuleType.AmmoRack,
        FuelTank = 1 << (int)ModuleType.FuelTank,
        Transmission = 1 << (int)ModuleType.Transmission,
        Gun = 1 << (int)ModuleType.Gun,
        TurretRing = 1 << (int)ModuleType.TurretRing,
        Optics = 1 << (int)ModuleType.Optics,
        Radio = 1 << (int)ModuleType.Radio,
        TrackLeft = 1 << (int)ModuleType.TrackLeft,
        TrackRight = 1 << (int)ModuleType.TrackRight,

        /// <summary>Внешние модули, которые может повредить непробивший ОФ.</summary>
        External = Gun | Optics | TrackLeft | TrackRight,
        Tracks = TrackLeft | TrackRight,
    }

    /// <summary>Индексы членов экипажа. Значение = номер бита в <see cref="CrewFlags"/>.</summary>
    public enum CrewRole : byte
    {
        Commander = 0,
        Gunner = 1,
        Driver = 2,
        Loader = 3,
        RadioOperator = 4,
    }

    [Flags]
    public enum CrewFlags : byte
    {
        None = 0,
        Commander = 1 << (int)CrewRole.Commander,
        Gunner = 1 << (int)CrewRole.Gunner,
        Driver = 1 << (int)CrewRole.Driver,
        Loader = 1 << (int)CrewRole.Loader,
        RadioOperator = 1 << (int)CrewRole.RadioOperator,
    }

    /// <summary>
    /// Неизменяемые параметры снаряда (настраиваются в <see cref="TankConfig"/>).
    /// Struct, передаётся по <c>in</c> — без копирования и без GC.
    /// </summary>
    [Serializable]
    public struct ShellData
    {
        [Tooltip("Тип снаряда")]
        public ShellType Type;

        [Tooltip("Калибр, мм — нужен для правил 2 и 3 калибров")]
        public float CaliberMm;

        [Tooltip("Средний разовый урон (альфа), ед. прочности")]
        public float Damage;

        [Tooltip("Бронепробитие на 100 м, мм (базовое)")]
        public float Penetration100m;

        [Tooltip("Бронепробитие на 500 м, мм. Для ОФ и КС игнорируется (не падает с дистанцией)")]
        public float Penetration500m;

        [Tooltip("Начальная скорость снаряда, м/с")]
        public float Velocity;

        [Tooltip("Множитель гравитации. Игровая баллистика обычно 'круче' реальной (1.5–3)")]
        public float GravityMultiplier;

        [Tooltip("Максимальная дальность полёта, м (после неё снаряд исчезает)")]
        public float MaxRange;

        [Tooltip("Радиус разлёта осколков ОФ, м (для остальных типов = 0)")]
        public float ExplosionRadius;

        /// <summary>Пример 'стандартного' ББ — удобно для тестов.</summary>
        public static ShellData ExampleAP => new ShellData
        {
            Type = ShellType.AP, CaliberMm = 100f, Damage = 320f,
            Penetration100m = 200f, Penetration500m = 190f,
            Velocity = 900f, GravityMultiplier = 2f, MaxRange = 720f, ExplosionRadius = 0f,
        };
    }

    /// <summary>
    /// Изменяемое состояние конкретного выстрела. Живёт внутри <see cref="Projectile"/>.
    /// Все случайные величины (разброс урона и пробития) бросаются ОДИН раз при выстреле
    /// из seed = shotId, поэтому сервер и клиент получают одинаковые значения.
    /// </summary>
    public struct ShotState
    {
        public ShellData Shell;
        public uint ShotId;
        public int OwnerNetId;
        /// <summary>Танк-стрелок (чтобы не попасть в себя). Может быть null.</summary>
        public TankDestructible Owner;

        /// <summary>Текущее нормализованное направление полёта.</summary>
        public Vector3 Direction;
        /// <summary>Пройденная дистанция, м.</summary>
        public float Distance;

        /// <summary>Множитель пробития ±25% (бросается при выстреле).</summary>
        public float PenetrationRoll;
        /// <summary>Множитель урона ±25% (бросается при выстреле).</summary>
        public float DamageRoll;

        /// <summary>Сколько мм пробития уже 'съели' экраны и гусеницы.</summary>
        public float PenetrationLost;
        /// <summary>Дистанция, на которой КС прошёл экран (-1 = не проходил). Для потерь в воздухе.</summary>
        public float HeatSpacedDistance;
        public int Ricochets;

        /// <summary>
        /// Текущее пробитие с учётом дистанции, ГСЧ, экранов и (для КС) потерь в воздухе за экраном.
        /// </summary>
        public float CurrentPenetration()
        {
            float basePen = PenetrationCalculator.GetPenetrationAtDistance(in Shell, Distance) * PenetrationRoll;
            float pen = basePen - PenetrationLost;

            if (Shell.Type == ShellType.HEAT && HeatSpacedDistance >= 0f)
            {
                // КС после экрана теряет 5% исходного пробития на каждые 10 см пути (=50% на метр).
                float air = Distance - HeatSpacedDistance;
                pen -= basePen * PenetrationCalculator.HeatAirLossPerMeter * air;
            }

            return pen > 0f ? pen : 0f;
        }
    }

    /// <summary>
    /// Результат расчёта попадания в один бронелист. Генерируется на сервере,
    /// сжимается в <see cref="HitResultMessage"/> и рассылается клиентам.
    /// </summary>
    public struct HitResult
    {
        public HitOutcome Outcome;
        public ArmorPlate Plate;          // только сервер/локально, по сети не передаётся
        public HitZone Zone;
        public Vector3 Point;
        public Vector3 Normal;

        /// <summary>Фактический угол встречи (от нормали), градусы.</summary>
        public float ImpactAngle;
        /// <summary>Угол после нормализации, градусы.</summary>
        public float NormalizedAngle;
        /// <summary>Приведённая броня, мм.</summary>
        public float EffectiveArmor;
        /// <summary>Пробитие снаряда в момент удара, мм.</summary>
        public float Penetration;
        /// <summary>Итоговый урон по прочности (до применения к танку).</summary>
        public float Damage;

        /// <summary>Сработало правило 3 калибров (рикошет невозможен).</summary>
        public bool ThreeCaliberRule;
        /// <summary>Сработало правило 2 калибров (усиленная нормализация).</summary>
        public bool TwoCaliberRule;
    }

    /// <summary>
    /// Быстрый детерминированный ГСЧ xorshift32. Struct — не аллоцирует, в отличие от System.Random.
    /// Одинаковый seed => одинаковая последовательность на сервере и клиенте.
    /// </summary>
    public struct DeterministicRandom
    {
        private uint _state;

        public DeterministicRandom(uint seed)
        {
            // Перемешиваем seed (хеш Кнута), 0 недопустим для xorshift.
            _state = seed * 2654435761u ^ 0x9E3779B9u;
            if (_state == 0) _state = 0x6D2B79F5u;
        }

        public uint NextUInt()
        {
            uint x = _state;
            x ^= x << 13;
            x ^= x >> 17;
            x ^= x << 5;
            _state = x;
            return x;
        }

        /// <summary>Равномерно в [0, 1).</summary>
        public float NextFloat() => (NextUInt() >> 8) * (1f / 16777216f);

        /// <summary>true с вероятностью p (0..1).</summary>
        public bool Chance(float p) => NextFloat() < p;

        /// <summary>
        /// Множитель вида 1 ± spread с 'колоколообразным' (треугольным) распределением:
        /// средние значения выпадают чаще крайних — как в WoT (±25%).
        /// </summary>
        public float Spread(float spread)
        {
            float t = NextFloat() + NextFloat() - 1f; // [-1, 1), треугольное
            return 1f + t * spread;
        }
    }
}
