// =====================================================================================
//  TankConfig.cs
//  ScriptableObject с ТТХ танка (Часть 2 ТЗ): огневая мощь, живучесть, мобильность,
//  обзор/маскировка, а также параметры модулей и критов.
//  Одно ассет-описание на модель танка — все экземпляры его разделяют (экономия памяти).
// =====================================================================================
using System;
using UnityEngine;

namespace TankGame.Combat
{
    [Serializable]
    public struct ModuleConfig
    {
        [Tooltip("Прочность модуля")] public float MaxHp;
        [Tooltip("Шанс получить крит, если модуль за пробитым листом (0..1)")] public float HitChance;
        [Tooltip("Время ремонта из 'уничтожен' в 'повреждён', с")] public float RepairTime;
    }

    [CreateAssetMenu(menuName = "Tanks/Tank Config", fileName = "TankConfig")]
    public sealed class TankConfig : ScriptableObject
    {
        [Header("Общее")]
        public string displayName = "Tank";
        [Min(1)] public int tier = 8;
        [Min(1f)] public float massTons = 45f;

        // ----------------------------- Огневая мощь -----------------------------
        [Header("Огневая мощь")]
        [Tooltip("Боекомплект: ББ, БП, ОФ, КС и т.д.")]
        public ShellData[] shells = { ShellData.ExampleAP };
        [Tooltip("Время перезарядки, с (скорострельность = 60 / reload)")]
        [Min(0.1f)] public float reloadTime = 7.5f;
        [Tooltip("Время сведения, с")]
        [Min(0.1f)] public float aimTime = 2.1f;
        [Tooltip("Разброс на 100 м, м")]
        [Min(0.01f)] public float dispersion100m = 0.36f;
        [Tooltip("Угол склонения орудия (УВН вниз), градусы, отрицательный")]
        public float gunDepression = -8f;
        [Tooltip("Угол возвышения орудия (УВН вверх), градусы")]
        public float gunElevation = 20f;

        // ------------------------------- Живучесть ------------------------------
        [Header("Живучесть")]
        [Min(1f)] public float maxHp = 1600f;
        [Tooltip("Справочно для UI: броня корпуса лоб/борт/корма, мм")]
        public Vector3 hullArmor = new Vector3(120f, 80f, 45f);
        [Tooltip("Справочно для UI: броня башни лоб/борт/корма, мм")]
        public Vector3 turretArmor = new Vector3(200f, 100f, 60f);

        // ------------------------------- Мобильность ----------------------------
        [Header("Мобильность")]
        public float maxSpeedForward = 50f;   // км/ч
        public float maxSpeedReverse = 18f;   // км/ч
        public float enginePowerHp = 750f;    // л.с.
        public float hullTraverseSpeed = 40f; // град/с
        public float turretTraverseSpeed = 36f;
        [Tooltip("Сопротивление грунта (меньше = лучше): твёрдый / средний / мягкий")]
        public Vector3 terrainResistance = new Vector3(0.9f, 1.1f, 2.0f);

        /// <summary>Удельная мощность, л.с./т — определяет разгон.</summary>
        public float PowerToWeight => enginePowerHp / massTons;
        public float RateOfFire => 60f / reloadTime;

        // --------------------------- Обзор и маскировка -------------------------
        [Header("Обзор и маскировка")]
        public float viewRange = 390f;               // м
        [Range(0f, 1f)] public float camoStationary = 0.15f;
        [Range(0f, 1f)] public float camoMoving = 0.08f;
        [Range(0f, 1f)] public float camoAfterShot = 0.03f;

        // ------------------------------- Модули ---------------------------------
        [Header("Модули (индекс = ModuleType)")]
        public ModuleConfig[] modules = DefaultModules();

        [Header("Криты")]
        [Tooltip("Шанс пожара при повреждении двигателя")]
        [Range(0f, 1f)] public float engineFireChance = 0.15f;
        [Tooltip("Шанс пожара при повреждении топливного бака")]
        [Range(0f, 1f)] public float fuelTankFireChance = 0.10f;
        [Tooltip("Шанс контузии каждого члена экипажа за пробитым листом")]
        [Range(0f, 1f)] public float crewHitChance = 0.33f;
        [Tooltip("Множитель шанса критов для непробившего ОФ (по внешним модулям)")]
        [Range(0f, 1f)] public float heNonPenCritScale = 0.5f;

        [Header("Пожар")]
        public float fireDuration = 6f;                 // с
        [Tooltip("Урон пожара в секунду, доля от макс. ХП")]
        [Range(0f, 0.1f)] public float fireDamagePerSecond = 0.012f;

        [Header("Таран")]
        [Tooltip("Минимальная относительная скорость для урона, м/с")]
        public float ramMinSpeed = 3f;
        [Tooltip("Урон тарана на 1 кДж кинетической энергии")]
        public float ramDamagePerKJ = 0.25f;
        public bool ramFriendlyFire = false;

        public ref readonly ModuleConfig GetModule(int index) => ref modules[index];

        private void OnValidate()
        {
            if (modules == null || modules.Length != TankDestructible.ModuleCount)
            {
                var fixedArr = DefaultModules();
                if (modules != null)
                    for (int i = 0; i < Mathf.Min(modules.Length, fixedArr.Length); i++) fixedArr[i] = modules[i];
                modules = fixedArr;
            }
        }

        private static ModuleConfig[] DefaultModules()
        {
            var m = new ModuleConfig[TankDestructible.ModuleCount];
            m[(int)ModuleType.Engine] = new ModuleConfig { MaxHp = 220f, HitChance = 0.45f, RepairTime = 8f };
            m[(int)ModuleType.AmmoRack] = new ModuleConfig { MaxHp = 230f, HitChance = 0.27f, RepairTime = 8f };
            m[(int)ModuleType.FuelTank] = new ModuleConfig { MaxHp = 200f, HitChance = 0.45f, RepairTime = 8f };
            m[(int)ModuleType.Transmission] = new ModuleConfig { MaxHp = 200f, HitChance = 0.40f, RepairTime = 8f };
            m[(int)ModuleType.Gun] = new ModuleConfig { MaxHp = 300f, HitChance = 0.33f, RepairTime = 8f };
            m[(int)ModuleType.TurretRing] = new ModuleConfig { MaxHp = 250f, HitChance = 0.45f, RepairTime = 8f };
            m[(int)ModuleType.Optics] = new ModuleConfig { MaxHp = 120f, HitChance = 0.45f, RepairTime = 8f };
            m[(int)ModuleType.Radio] = new ModuleConfig { MaxHp = 100f, HitChance = 0.45f, RepairTime = 8f };
            m[(int)ModuleType.TrackLeft] = new ModuleConfig { MaxHp = 250f, HitChance = 1.00f, RepairTime = 10f };
            m[(int)ModuleType.TrackRight] = new ModuleConfig { MaxHp = 250f, HitChance = 1.00f, RepairTime = 10f };
            return m;
        }
    }
}
