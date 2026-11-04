// =====================================================================================
//  HitZones.cs
//  Зоны попадания (НЛД, борт, корма, лючки…) и их 'по умолчанию' модули/экипаж.
//  Разбор строковой зоны — без аллокаций (сравнение OrdinalIgnoreCase по статическому массиву).
// =====================================================================================
using System;

namespace TankGame.Combat
{
    public enum HitZone : byte
    {
        HullFront = 0,      // ВЛД — верхняя лобовая деталь
        HullLowerFront = 1, // НЛД — нижняя лобовая деталь (часто ослабленная зона)
        HullSide = 2,
        HullRear = 3,
        EngineDeck = 4,     // крыша МТО
        TurretFront = 5,
        GunMantlet = 6,     // маска орудия
        TurretSide = 7,
        TurretRear = 8,
        Hatch = 9,          // лючки / командирская башенка (ослабленная зона)
        TrackLeft = 10,
        TrackRight = 11,
        Count = 12,
    }

    public static class HitZoneUtility
    {
        // Индекс = (int)HitZone. Английские имена + русские синонимы.
        private static readonly string[] s_names =
        {
            "HullFront", "HullLowerFront", "HullSide", "HullRear", "EngineDeck",
            "TurretFront", "GunMantlet", "TurretSide", "TurretRear", "Hatch",
            "TrackLeft", "TrackRight",
        };

        private static readonly string[] s_aliases =
        {
            "ВЛД", "НЛД", "Борт", "Корма", "МТО",
            "ЛобБашни", "Маска", "БортБашни", "КормаБашни", "Люк",
            "ЛеваяГусеница", "ПраваяГусеница",
        };

        // Модули, которые потенциально стоят за зоной (используется в TakeDamage(string)).
        private static readonly ModuleFlags[] s_modules =
        {
            /* HullFront      */ ModuleFlags.Transmission | ModuleFlags.Radio,
            /* HullLowerFront */ ModuleFlags.Transmission | ModuleFlags.FuelTank,
            /* HullSide       */ ModuleFlags.AmmoRack | ModuleFlags.FuelTank,
            /* HullRear       */ ModuleFlags.Engine | ModuleFlags.FuelTank,
            /* EngineDeck     */ ModuleFlags.Engine,
            /* TurretFront    */ ModuleFlags.Gun | ModuleFlags.Optics,
            /* GunMantlet     */ ModuleFlags.Gun,
            /* TurretSide     */ ModuleFlags.AmmoRack | ModuleFlags.TurretRing,
            /* TurretRear     */ ModuleFlags.AmmoRack | ModuleFlags.Radio,
            /* Hatch          */ ModuleFlags.Optics,
            /* TrackLeft      */ ModuleFlags.TrackLeft,
            /* TrackRight     */ ModuleFlags.TrackRight,
        };

        private static readonly CrewFlags[] s_crew =
        {
            /* HullFront      */ CrewFlags.Driver | CrewFlags.RadioOperator,
            /* HullLowerFront */ CrewFlags.Driver,
            /* HullSide       */ CrewFlags.Driver | CrewFlags.Loader,
            /* HullRear       */ CrewFlags.None,
            /* EngineDeck     */ CrewFlags.None,
            /* TurretFront    */ CrewFlags.Gunner | CrewFlags.Commander,
            /* GunMantlet     */ CrewFlags.Gunner,
            /* TurretSide     */ CrewFlags.Loader | CrewFlags.Commander,
            /* TurretRear     */ CrewFlags.Loader,
            /* Hatch          */ CrewFlags.Commander,
            /* TrackLeft      */ CrewFlags.None,
            /* TrackRight     */ CrewFlags.None,
        };

        /// <summary>Парсит строку зоны ("HullSide", "НЛД", "hatch"…). Без аллокаций.</summary>
        public static bool TryParse(string value, out HitZone zone)
        {
            if (!string.IsNullOrEmpty(value))
            {
                for (int i = 0; i < s_names.Length; i++)
                {
                    if (string.Equals(value, s_names[i], StringComparison.OrdinalIgnoreCase) ||
                        string.Equals(value, s_aliases[i], StringComparison.OrdinalIgnoreCase))
                    {
                        zone = (HitZone)i;
                        return true;
                    }
                }
            }
            zone = HitZone.HullFront;
            return false;
        }

        public static ModuleFlags DefaultModules(HitZone zone) =>
            (uint)zone < (uint)s_modules.Length ? s_modules[(int)zone] : ModuleFlags.None;

        public static CrewFlags DefaultCrew(HitZone zone) =>
            (uint)zone < (uint)s_crew.Length ? s_crew[(int)zone] : CrewFlags.None;

        /// <summary>Имя зоны без аллокаций (Enum.ToString() аллоцирует!).</summary>
        public static string Name(HitZone zone) =>
            (uint)zone < (uint)s_names.Length ? s_names[(int)zone] : "Unknown";
    }
}
