// =====================================================================================
//  ProjectilePool.cs
//  Пул снарядов: Instantiate/Destroy во время боя = GC-спайки и фризы на мобильных.
//  Все снаряды создаются при загрузке карты (prewarm) и переиспользуются.
// =====================================================================================
using System.Collections.Generic;
using UnityEngine;

namespace TankGame.Combat
{
    public sealed class ProjectilePool : MonoBehaviour
    {
        [SerializeField] private Projectile prefab;
        [Tooltip("14 танков × ~3 снаряда в воздухе + запас")]
        [SerializeField, Min(1)] private int prewarmCount = 64;
        [Tooltip("Можно ли расширять пул, если снаряды закончились")]
        [SerializeField] private bool allowGrowth = true;

        private static ProjectilePool s_instance;
        private Stack<Projectile> _free;
        private Transform _root;

        // Счётчик выстрелов сервера — уникальный shotId (seed ГСЧ, ключ для сети).
        private static uint s_nextShotId = 1;

        private void Awake()
        {
            if (s_instance != null && s_instance != this) { Destroy(gameObject); return; }
            s_instance = this;
            _root = transform;
            _free = new Stack<Projectile>(prewarmCount);
            for (int i = 0; i < prewarmCount; i++) _free.Push(Create());
        }

        private void OnDestroy()
        {
            if (s_instance == this) s_instance = null;
        }

        private Projectile Create()
        {
            Projectile p = Instantiate(prefab, _root);
            p.gameObject.SetActive(false);
            return p;
        }

        /// <summary>СЕРВЕР: выдать новый уникальный id выстрела (передайте его клиентам вместе с точкой и направлением).</summary>
        public static uint NextShotId() => s_nextShotId++;

        /// <summary>
        /// Выпустить снаряд.
        /// Сервер: <c>Fire(shell, muzzle, dir, tank, ProjectilePool.NextShotId(), true)</c>, затем RPC клиентам.
        /// Клиент (в обработчике RPC): тот же вызов с полученным shotId и <c>authoritative: false</c>.
        /// </summary>
        public static Projectile Fire(in ShellData shell, Vector3 muzzle, Vector3 direction,
                                      TankDestructible owner, uint shotId, bool authoritative)
        {
            if (s_instance == null)
            {
                Debug.LogError("ProjectilePool отсутствует на сцене");
                return null;
            }

            Projectile p;
            if (s_instance._free.Count > 0) p = s_instance._free.Pop();
            else if (s_instance.allowGrowth) p = s_instance.Create();
            else return null;

            p.Launch(in shell, muzzle, direction, owner, shotId, authoritative);
            return p;
        }

        internal static void Release(Projectile p)
        {
            p.gameObject.SetActive(false);
            if (s_instance != null) s_instance._free.Push(p);
        }
    }
}
