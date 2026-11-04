// =====================================================================================
//  ArmorPlate.cs
//  Бронелист — вешается на каждый коллайдер танка (лоб, НЛД, борт, экран, гусеница…).
//
//  Рекомендуемая настройка префаба:
//   * Отдельный дочерний объект на каждую бронедеталь с BoxCollider / выпуклым MeshCollider.
//   * Слой "Armor" (используется в LayerMask снаряда), коллайдер НЕ триггер.
//   * Нормаль поверхности коллайдера = реальная нормаль листа: угол наклона
//     берётся из геометрии автоматически, отдельно задавать его не нужно.
// =====================================================================================
using System.Collections.Generic;
using UnityEngine;

namespace TankGame.Combat
{
    [DisallowMultipleComponent]
    [RequireComponent(typeof(Collider))]
    public sealed class ArmorPlate : MonoBehaviour
    {
        [Header("Бронирование")]
        [Tooltip("Номинальная толщина брони, мм")]
        [SerializeField, Min(0f)] private float nominalThicknessMm = 100f;

        [Tooltip("Основная броня / экран / гусеница")]
        [SerializeField] private ArmorType armorType = ArmorType.Main;

        [Tooltip("Множитель угла наклона (коэффициент приведения). 1 = чистая геометрия. " +
                 ">1 — например, литая/криволинейная броня, которую коллайдер упрощает; <1 — ослабленная зона.")]
        [SerializeField, Range(0.25f, 3f)] private float slopeMultiplier = 1f;

        [Tooltip("Для экранов и гусениц: толщина основной брони ЗА листом, мм. " +
                 "Используется для расчёта урона ОФ, взорвавшегося на экране.")]
        [SerializeField, Min(0f)] private float mainArmorBehindMm = 0f;

        [Header("Что за листом")]
        [SerializeField] private HitZone hitZone = HitZone.HullFront;
        [Tooltip("Модули, которые могут получить крит при пробитии этого листа")]
        [SerializeField] private ModuleFlags modulesBehind = ModuleFlags.None;
        [Tooltip("Члены экипажа, которые могут быть контужены при пробитии этого листа")]
        [SerializeField] private CrewFlags crewBehind = CrewFlags.None;

        [Header("Ссылки")]
        [Tooltip("Родительский танк. Если пусто — ищется автоматически в родителях.")]
        [SerializeField] private TankDestructible owner;

        private Collider _collider;

        // Реестр Collider -> ArmorPlate. Позволяет при попадании Raycast'а найти лист
        // за O(1) без GetComponent (который заметно медленнее на мобильных CPU).
        private static readonly Dictionary<int, ArmorPlate> s_registry = new Dictionary<int, ArmorPlate>(512);

        public float NominalThickness => nominalThicknessMm;
        public ArmorType Type => armorType;
        public float SlopeMultiplier => slopeMultiplier;
        public float MainArmorBehind => mainArmorBehindMm;
        public HitZone Zone => hitZone;
        public ModuleFlags ModulesBehind => modulesBehind;
        public CrewFlags CrewBehind => crewBehind;
        public TankDestructible Owner => owner;
        public Collider Collider => _collider;

        private void Awake()
        {
            _collider = GetComponent<Collider>();
            if (owner == null) owner = GetComponentInParent<TankDestructible>();

            // Гусеница автоматически 'прикрывает' модуль своей гусеницы.
            if (armorType == ArmorType.Track && (modulesBehind & ModuleFlags.Tracks) == 0)
                modulesBehind |= hitZone == HitZone.TrackRight ? ModuleFlags.TrackRight : ModuleFlags.TrackLeft;
        }

        private void OnEnable()
        {
            if (_collider == null) _collider = GetComponent<Collider>();
            s_registry[_collider.GetInstanceID()] = this;
        }

        private void OnDisable()
        {
            if (_collider != null) s_registry.Remove(_collider.GetInstanceID());
        }

        /// <summary>Быстрый поиск бронелиста по коллайдеру (без GetComponent, без аллокаций).</summary>
        public static bool TryGet(Collider collider, out ArmorPlate plate)
        {
            if (collider == null) { plate = null; return false; }
            return s_registry.TryGetValue(collider.GetInstanceID(), out plate);
        }

        /// <summary>Позволяет задать параметры из кода (генерация танков, тесты).</summary>
        public void Configure(float thicknessMm, ArmorType type, HitZone zone,
                              ModuleFlags modules, CrewFlags crew, TankDestructible tank,
                              float slopeMul = 1f, float behindMm = 0f)
        {
            nominalThicknessMm = thicknessMm;
            armorType = type;
            hitZone = zone;
            modulesBehind = modules;
            crewBehind = crew;
            owner = tank;
            slopeMultiplier = slopeMul;
            mainArmorBehindMm = behindMm;
        }

#if UNITY_EDITOR
        // Визуализация толщины: зелёный — тонко, красный — толсто, синий — экран, серый — гусеница.
        private void OnDrawGizmosSelected()
        {
            Color c;
            switch (armorType)
            {
                case ArmorType.Spaced: c = new Color(0.2f, 0.5f, 1f, 0.35f); break;
                case ArmorType.Track: c = new Color(0.5f, 0.5f, 0.5f, 0.35f); break;
                default: c = Color.Lerp(new Color(0f, 1f, 0f, 0.35f), new Color(1f, 0f, 0f, 0.35f),
                                        Mathf.Clamp01(nominalThicknessMm / 250f)); break;
            }
            Gizmos.color = c;
            Gizmos.matrix = transform.localToWorldMatrix;
            if (TryGetComponent(out BoxCollider box)) Gizmos.DrawCube(box.center, box.size);
        }
#endif
    }
}
