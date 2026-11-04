// =====================================================================================
//  PenetrationCalculator.cs
//  ЧИСТАЯ функция расчёта пробития: никаких MonoBehaviour, Physics, Time и аллокаций.
//  => одинаково работает на сервере (авторитетно) и на клиенте (предсказание траектории),
//     легко покрывается юнит-тестами.
//
//  Порядок расчёта при ударе снаряда в лист:
//    1. Угол встречи α = угол между направлением полёта и нормалью листа.
//    2. Правило 3 калибров: калибр > 3 × номинал  => рикошет невозможен.
//    3. Рикошет: α ≥ 70° (ББ/БП) или ≥ 85° (КС). ОФ не рикошетит.
//    4. Нормализация: α' = α − n  (ББ 5°, БП 2°, ОФ/КС 0°).
//       Правило 2 калибров: калибр > 2 × номинал => n × 1.4 × калибр / (2 × номинал).
//    5. Приведённая броня: T = номинал × множитель / cos(α').
//    6. Пробитие ≥ T  => пробитие. Экран/гусеница — 'съедают' T мм пробития.
//    7. ОФ без пробития: урон = 0.5 × альфа − 1.1 × броня (не меньше 0).
// =====================================================================================
using UnityEngine;

namespace TankGame.Combat
{
    public static class PenetrationCalculator
    {
        // ---------------- Константы баланса ----------------
        public const float RicochetAngleKinetic = 70f;   // ББ / БП
        public const float RicochetAngleHeat = 85f;      // КС
        public const float NormalizationAP = 5f;
        public const float NormalizationAPCR = 2f;
        public const float OvermatchNormalizationFactor = 1.4f;
        public const float HeatAirLossPerMeter = 0.5f;   // 5% на 10 см
        public const float HEDirectDamageFactor = 0.5f;  // доля альфы при непробитии ОФ
        public const float HEArmorAbsorbFactor = 1.1f;   // мм брони -> поглощённый урон
        public const float HESpacedArmorFactor = 0.5f;   // доп. ослабление ОФ, взорвавшегося на экране
        public const float RngSpread = 0.25f;            // ±25% урона и пробития

        // cos(88°) — ограничиваем, чтобы приведённая броня не уходила в бесконечность при скользящих углах.
        private const float MinCos = 0.0349f;

        /// <summary>
        /// Пробитие на дистанции. ББ/БП — линейная интерполяция 100 м → 500 м (за 500 м — экстраполяция
        /// с тем же наклоном). ОФ и КС не теряют пробитие с дистанцией.
        /// </summary>
        public static float GetPenetrationAtDistance(in ShellData shell, float distance)
        {
            if (shell.Type == ShellType.HE || shell.Type == ShellType.HEAT || distance <= 100f)
                return shell.Penetration100m;

            float perMeter = (shell.Penetration500m - shell.Penetration100m) * (1f / 400f);
            float pen = shell.Penetration100m + perMeter * (distance - 100f);
            return pen > 0f ? pen : 0f;
        }

        public static float GetRicochetAngle(ShellType type)
        {
            switch (type)
            {
                case ShellType.AP:
                case ShellType.APCR: return RicochetAngleKinetic;
                case ShellType.HEAT: return RicochetAngleHeat;
                default: return 181f; // ОФ — никогда
            }
        }

        public static float GetNormalization(ShellType type)
        {
            switch (type)
            {
                case ShellType.AP: return NormalizationAP;
                case ShellType.APCR: return NormalizationAPCR;
                default: return 0f;
            }
        }

        /// <summary>
        /// Угол встречи (градусы, 0 = по нормали, 90 = по касательной).
        /// direction — нормализованное направление полёта, normal — внешняя нормаль листа.
        /// </summary>
        public static float GetImpactAngle(Vector3 direction, Vector3 normal)
        {
            float cos = -(direction.x * normal.x + direction.y * normal.y + direction.z * normal.z);
            if (cos > 1f) cos = 1f; else if (cos < 0f) cos = 0f;
            return Mathf.Acos(cos) * Mathf.Rad2Deg;
        }

        /// <summary>Приведённая броня: номинал × множитель / cos(угол).</summary>
        public static float GetEffectiveArmor(float nominalMm, float slopeMultiplier, float angleDeg)
        {
            float cos = Mathf.Cos(angleDeg * Mathf.Deg2Rad);
            if (cos < MinCos) cos = MinCos;
            return nominalMm * slopeMultiplier / cos;
        }

        /// <summary>
        /// Главный метод: снаряд <paramref name="shot"/> ударил в лист <paramref name="plate"/>.
        /// Модифицирует <paramref name="shot"/> (потери пробития на экранах, счётчик рикошетов).
        /// </summary>
        public static void Resolve(ref ShotState shot, ArmorPlate plate, Vector3 point, Vector3 normal,
                                   out HitResult result)
        {
            Resolve(ref shot, plate.NominalThickness, plate.SlopeMultiplier, plate.Type,
                    plate.MainArmorBehind, point, normal, out result);
            result.Plate = plate;
            result.Zone = plate.Zone;
        }

        /// <summary>Перегрузка без ссылки на MonoBehaviour — для юнит-тестов и headless-сервера.</summary>
        public static void Resolve(ref ShotState shot, float nominalMm, float slopeMultiplier, ArmorType armorType,
                                   float mainArmorBehindMm, Vector3 point, Vector3 normal, out HitResult r)
        {
            r = default;
            r.Point = point;
            r.Normal = normal;

            ShellType type = shot.Shell.Type;
            float caliber = shot.Shell.CaliberMm;
            float nominal = nominalMm > 0.01f ? nominalMm : 0.01f;

            // ---- 1. Угол встречи ----
            float impactAngle = GetImpactAngle(shot.Direction, normal);
            r.ImpactAngle = impactAngle;

            // ---- 2. Правила калибров (не для ОФ) ----
            bool kineticOrHeat = type != ShellType.HE;
            r.ThreeCaliberRule = kineticOrHeat && caliber > 3f * nominal;
            r.TwoCaliberRule = kineticOrHeat && caliber > 2f * nominal;

            // ---- 3. Рикошет (по ФАКТИЧЕСКОМУ углу, до нормализации) ----
            if (!r.ThreeCaliberRule && impactAngle >= GetRicochetAngle(type))
            {
                r.Outcome = HitOutcome.Ricochet;
                r.NormalizedAngle = impactAngle;
                r.EffectiveArmor = GetEffectiveArmor(nominal, slopeMultiplier, impactAngle);
                r.Penetration = shot.CurrentPenetration();
                shot.Ricochets++;
                return;
            }

            // ---- 4. Нормализация ----
            float normalization = GetNormalization(type);
            if (r.TwoCaliberRule && normalization > 0f)
                normalization *= OvermatchNormalizationFactor * caliber / (2f * nominal);

            float angle = impactAngle - normalization;
            if (angle < 0f) angle = 0f;
            r.NormalizedAngle = angle;

            // ---- 5. Приведённая броня и текущее пробитие ----
            float effective = GetEffectiveArmor(nominal, slopeMultiplier, angle);
            float penetration = shot.CurrentPenetration();
            r.EffectiveArmor = effective;
            r.Penetration = penetration;

            float alpha = shot.Shell.Damage * shot.DamageRoll;

            // ---- 6a. Экран / гусеница ----
            if (armorType != ArmorType.Main)
            {
                if (type == ShellType.HE)
                {
                    // ОФ всегда взрывается на экране. Урон по танку считается через экран + основную броню
                    // и дополнительно ослабляется — экран 'забирает' часть осколков.
                    float armor = effective + mainArmorBehindMm;
                    r.Outcome = HitOutcome.HEDetonation;
                    r.Damage = Positive((HEDirectDamageFactor * alpha - HEArmorAbsorbFactor * armor) * HESpacedArmorFactor);
                    return;
                }

                if (penetration > effective)
                {
                    shot.PenetrationLost += effective;
                    if (type == ShellType.HEAT && shot.HeatSpacedDistance < 0f)
                        shot.HeatSpacedDistance = shot.Distance; // с этого момента КС теряет пробитие в воздухе
                    r.Outcome = HitOutcome.SpacedArmorPassed;
                }
                else
                {
                    r.Outcome = HitOutcome.AbsorbedBySpacedArmor;
                }
                return;
            }

            // ---- 6b. Основная броня ----
            if (penetration >= effective)
            {
                r.Outcome = HitOutcome.Penetration;
                r.Damage = alpha;
                return;
            }

            // ---- 7. Непробитие ----
            if (type == ShellType.HE)
            {
                r.Outcome = HitOutcome.HEDetonation;
                r.Damage = Positive(HEDirectDamageFactor * alpha - HEArmorAbsorbFactor * effective);
            }
            else
            {
                r.Outcome = HitOutcome.NonPenetration;
                r.Damage = 0f;
            }
        }

        /// <summary>
        /// Урон взрывной волны ОФ по танку, находящемуся на расстоянии <paramref name="distance"/>
        /// от точки взрыва. <paramref name="armorMm"/> — номинальная броня ближайшего к взрыву листа
        /// (для экранов — экран + броня за ним).
        /// </summary>
        public static float GetHESplashDamage(in ShellData shell, float damageRoll, float distance, float armorMm)
        {
            float radius = shell.ExplosionRadius;
            if (radius <= 0f || distance >= radius) return 0f;
            float falloff = 1f - distance / radius;
            return Positive(HEDirectDamageFactor * shell.Damage * damageRoll * falloff - HEArmorAbsorbFactor * armorMm);
        }

        private static float Positive(float v) => v > 0f ? v : 0f;
    }
}
