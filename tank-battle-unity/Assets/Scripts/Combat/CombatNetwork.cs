// =====================================================================================
//  CombatNetwork.cs
//  Тонкая прослойка между боевой логикой и любым сетевым стеком
//  (Netcode for GameObjects, Mirror, Fish-Net, Photon Fusion, свой UDP).
//
//  Модель: АВТОРИТЕТНЫЙ СЕРВЕР.
//   * Сервер/хост: летит 'настоящий' снаряд, считает пробитие, меняет ХП и модули,
//     рассылает HitResultMessage + TankDamageSnapshot.
//   * Клиент: летит визуальный снаряд с тем же shotId (траектория детерминирована),
//     клиент может ПРЕДСКАЗАТЬ рикошет/взрыв для эффектов, но ХП не трогает —
//     ждёт сообщения от сервера.
//  Офлайн / тренировка: IsServer = true, Replicator = null — всё работает локально.
// =====================================================================================
using System.Collections.Generic;
using UnityEngine;

namespace TankGame.Combat
{
    /// <summary>Компактное сетевое сообщение о попадании (~28 байт).</summary>
    public struct HitResultMessage
    {
        public uint ShotId;
        public int AttackerNetId;
        public int TargetNetId;
        public HitOutcome Outcome;
        public HitZone Zone;
        public ushort Damage;          // урон целый, как в WoT
        public ushort EffectiveArmor;  // мм
        public ushort Penetration;     // мм
        public byte ImpactAngle;       // градусы 0..90
        public Vector3 Point;

        public static HitResultMessage From(in HitResult r, uint shotId, int attacker, int target)
        {
            return new HitResultMessage
            {
                ShotId = shotId,
                AttackerNetId = attacker,
                TargetNetId = target,
                Outcome = r.Outcome,
                Zone = r.Zone,
                Damage = ClampU16(r.Damage),
                EffectiveArmor = ClampU16(r.EffectiveArmor),
                Penetration = ClampU16(r.Penetration),
                ImpactAngle = (byte)Mathf.Clamp(Mathf.RoundToInt(r.ImpactAngle), 0, 90),
                Point = r.Point,
            };
        }

        private static ushort ClampU16(float v) => (ushort)Mathf.Clamp(Mathf.RoundToInt(v), 0, ushort.MaxValue);
    }

    /// <summary>Снимок состояния повреждений танка для синхронизации клиентов (~9 байт).</summary>
    public struct TankDamageSnapshot
    {
        public ushort Hp;
        public ModuleFlags DamagedModules;   // жёлтые
        public ModuleFlags DestroyedModules; // красные
        public CrewFlags ContusedCrew;
        public bool Burning;
        public bool Dead;
    }

    /// <summary>Реализуйте поверх своего сетевого стека (ClientRpc / Broadcast / Reliable channel).</summary>
    public interface ICombatReplicator
    {
        /// <summary>Сервер -> все клиенты: результат попадания (для маркеров 'Пробитие!', 'Рикошет!').</summary>
        void BroadcastHit(in HitResultMessage message);

        /// <summary>Сервер -> все клиенты: новое состояние ХП/модулей/экипажа танка.</summary>
        void BroadcastTankState(int tankNetId, in TankDamageSnapshot snapshot);
    }

    public delegate void HitMessageHandler(in HitResultMessage message);

    public static class CombatNetwork
    {
        /// <summary>true на выделенном сервере, хосте и в офлайне. Выставляется сетевым слоем.</summary>
        public static bool IsServer = true;

        /// <summary>null в офлайне — тогда сообщения доставляются локально.</summary>
        public static ICombatReplicator Replicator;

        /// <summary>Клиентское событие о попадании — подписывается UI/звук/VFX.</summary>
        public static event HitMessageHandler HitReceived;

        // Реестр танков по сетевому id — для применения снапшотов на клиенте.
        private static readonly Dictionary<int, TankDestructible> s_tanks = new Dictionary<int, TankDestructible>(32);

        internal static void Register(TankDestructible tank) => s_tanks[tank.NetworkId] = tank;

        internal static void Unregister(TankDestructible tank)
        {
            if (s_tanks.TryGetValue(tank.NetworkId, out var t) && t == tank) s_tanks.Remove(tank.NetworkId);
        }

        public static bool TryGetTank(int netId, out TankDestructible tank) => s_tanks.TryGetValue(netId, out tank);

        // -------------------- Сервер --------------------

        internal static void ServerReportHit(in HitResult r, uint shotId, int attacker, int target)
        {
            var msg = HitResultMessage.From(in r, shotId, attacker, target);
            if (Replicator != null) Replicator.BroadcastHit(in msg);
            // Хост/офлайн: локальный игрок тоже должен увидеть маркер.
            HitReceived?.Invoke(in msg);
        }

        internal static void ServerReportTankState(TankDestructible tank, in TankDamageSnapshot snapshot)
        {
            Replicator?.BroadcastTankState(tank.NetworkId, in snapshot);
        }

        // -------------------- Клиент (вызываются из RPC-обработчиков) --------------------

        public static void ClientReceiveHit(in HitResultMessage msg) => HitReceived?.Invoke(in msg);

        public static void ClientReceiveTankState(int tankNetId, in TankDamageSnapshot snapshot)
        {
            if (s_tanks.TryGetValue(tankNetId, out var tank)) tank.ClientApplySnapshot(in snapshot);
        }
    }
}
