# Tank Battle: система бронепробития и урона (Unity, C#)

Боевое ядро мобильной игры про танки в стиле WoT. Сюда входят баллистика, приведённая броня, рикошеты, экраны, урон ОФ, модули, экипаж, пожар, детонация боеукладки и таран. Логика рассчитана на авторитетный сервер.

Минимальная версия: Unity 2021.3 LTS. Внешних зависимостей нет, используется C# 7.2.

## Файлы

| Файл | Назначение |
|---|---|
| `BallisticsTypes.cs` | Перечисления (`ShellType`, `ArmorType`, `HitOutcome`, модули и экипаж в виде битовых масок), `ShellData`, `ShotState`, `HitResult` и детерминированный ГСЧ `DeterministicRandom` |
| `HitZones.cs` | Зоны попадания (ВЛД, НЛД, борт, корма, лючки…) и разбор строковой зоны без аллокаций |
| `ArmorPlate.cs` | Бронелист на коллайдере: толщина, тип, множитель угла, модули и экипаж за листом, ссылка на `TankDestructible` |
| `PenetrationCalculator.cs` | Чистая функция расчёта пробития, общая для сервера и клиента |
| `Projectile.cs` | Полёт по параболе в `FixedUpdate`, Raycast по отрезку пути, экраны, рикошеты, сплэш ОФ |
| `ProjectilePool.cs` | Пул снарядов и выдача `shotId` |
| `TankDestructible.cs` | ХП, модули, экипаж, криты, пожар, ремонт, таран, сетевые снапшоты |
| `TankConfig.cs` | ScriptableObject с ТТХ: огневая мощь, живучесть, мобильность, обзор и маскировка, параметры критов |
| `CombatNetwork.cs` | Интерфейс репликации `ICombatReplicator`, сетевые сообщения и разделение сервер/клиент |
| `Tests/Editor/*` | EditMode-тесты формул (запуск через Test Runner) |

## Формулы

1. **Угол встречи** α — угол между направлением полёта и нормалью листа (нормаль коллайдера).
2. **Правило 3 калибров**: если калибр больше трёх номиналов брони, рикошет невозможен.
3. **Рикошет** проверяется по фактическому углу, до нормализации: от 70° для ББ и БП, от 85° для КС. ОФ не рикошетит. После рикошета снаряд отражается и летит дальше, отражений может быть не больше `maxRicochets`.
4. **Нормализация**: ББ −5°, БП −2°, ОФ и КС 0°.
   **Правило 2 калибров**: если калибр больше двух номиналов, нормализация умножается на 1.4 × калибр / (2 × номинал).
5. **Приведённая броня** = номинал × `slopeMultiplier` / cos(α'), где cos ограничен снизу значением cos 88°.
6. **Пробитие** = пробитие на дистанции × ГСЧ ±25% − всё, что поглотили экраны. Для ББ и БП пробитие линейно интерполируется между 100 и 500 м. КС после экрана теряет 50% пробития на каждый метр полёта.
7. **Экран или гусеница** уменьшает пробитие на свою приведённую толщину. Если снаряд застрял в гусенице, гусеница всё равно получает урон.
8. **ОФ без пробития**: урон = 0.5 × альфа − 1.1 × броня. Если ОФ взорвался на экране, учитывается экран вместе с основной бронёй за ним, а результат дополнительно умножается на 0.5.
9. **Сплэш ОФ**: урон = 0.5 × альфа × (1 − d/R) − 1.1 × броня ближайшего листа. Для каждого соседнего танка берётся максимальный урон из всех его листов.

## Криты (`TankDestructible`)

- При пробитии каждый модуль за листом получает крит с шансом `HitChance` из конфига. Урон модулю равен урону снаряда. На 50% прочности модуль становится «повреждён», на 0% — «уничтожен» и чинится по таймеру `RepairTime`.
- **Двигатель**: при повреждении пожар начинается с шансом **15%** (`engineFireChance`). **Топливный бак**: с шансом 10%.
- **Боеукладка**: если она уничтожена, происходит детонация и танк погибает мгновенно.
- **Гусеница**: если она уничтожена, танк обездвижен (`MobilityMultiplier = 0`).
- **Экипаж**: контузия с шансом 33%. Контузия влияет на `ReloadMultiplier`, `AimMultiplier`, `MobilityMultiplier` и `ViewRangeMultiplier`. Контроллеры движения, орудия и обзора должны читать эти множители.
- **Таран**: урон считается от кинетической энергии через приведённую массу и делится обратно пропорционально массе, поэтому лёгкий танк страдает сильнее.

API из ТЗ: `TakeDamage(float damage, bool penetrated, string hitZone)`. Принимает строки `"HullSide"`, `"НЛД"`, `"Hatch"` и т.п.

## Настройка префаба танка

```
Tank (Rigidbody, TankDestructible[config])
 ├─ Hull
 │   ├─ UFP      BoxCollider + ArmorPlate(120мм, Main, HullFront,      Transmission | Driver)
 │   ├─ LFP      BoxCollider + ArmorPlate(80мм,  Main, HullLowerFront, Transmission | FuelTank)
 │   ├─ SideL    BoxCollider + ArmorPlate(80мм,  Main, HullSide,       AmmoRack | Loader)
 │   ├─ Screen   BoxCollider + ArmorPlate(10мм,  Spaced, mainArmorBehind=80)
 │   ├─ Rear     BoxCollider + ArmorPlate(45мм,  Main, HullRear,       Engine | FuelTank)
 │   └─ TrackL   BoxCollider + ArmorPlate(20мм,  Track, TrackLeft)
 └─ Turret
     ├─ Front    ArmorPlate(200мм, TurretFront, Gun | Gunner | Commander)
     ├─ Mantlet  ArmorPlate(250мм, GunMantlet,  Gun)
     └─ Cupola   ArmorPlate(60мм,  Hatch,       Optics | Commander, slopeMultiplier < 1 — ослабленная зона)
```

- Каждый бронелист — отдельный **выпуклый** коллайдер на слое `Armor`, без галочки Trigger. Выпуклость нужна для `ClosestPoint` в расчёте сплэша.
- Угол наклона задавать не нужно: он берётся из нормали коллайдера. Поверните коллайдер так же, как стоит реальный лист.
- В `Projectile.hitMask` включите слои `Armor`, `Terrain` и `Buildings`.
- На сцену добавьте `ProjectilePool` с префабом снаряда. Префаб — `Projectile` и, если нужен след, `TrailRenderer`.

## Мультиплеер (авторитетный сервер)

```
Клиент A ──(ввод: выстрел)──► Сервер
                              shotId = ProjectilePool.NextShotId()
                              ProjectilePool.Fire(shell, muzzle, dir, tank, shotId, authoritative: true)
                              ──RPC FireShell(shellIndex, muzzle, dir, shotId, ownerNetId)──► все клиенты
Клиенты:  ProjectilePool.Fire(..., shotId, authoritative: false)   // визуал + предсказание рикошета
Сервер при попадании: PenetrationCalculator → TankDestructible.ServerApplyHit
                      → ICombatReplicator.BroadcastHit(HitResultMessage)       // маркер «Пробитие!»
                      → ICombatReplicator.BroadcastTankState(TankDamageSnapshot) // ХП, модули (не чаще 1 раза в кадр)
```

- Броски ГСЧ для урона и пробития зависят только от `shotId`, поэтому на всех машинах они одинаковые.
- Клиент не может изменить ХП: `ApplyDamage` проверяет `CombatNetwork.IsServer`.
- Офлайн и тренировочный режим работают по умолчанию: `IsServer = true`, `Replicator = null`.

Пример адаптера для Netcode for GameObjects:

```csharp
public class NgoCombatReplicator : NetworkBehaviour, ICombatReplicator
{
    public override void OnNetworkSpawn()
    {
        CombatNetwork.IsServer = IsServer;
        if (IsServer) CombatNetwork.Replicator = this;
    }

    public void BroadcastHit(in HitResultMessage m) =>
        HitClientRpc(m.ShotId, m.AttackerNetId, m.TargetNetId, (byte)m.Outcome, (byte)m.Zone,
                     m.Damage, m.EffectiveArmor, m.Penetration, m.ImpactAngle, m.Point);

    public void BroadcastTankState(int id, in TankDamageSnapshot s) =>
        StateClientRpc(id, s.Hp, (ushort)s.DamagedModules, (ushort)s.DestroyedModules,
                       (byte)s.ContusedCrew, s.Burning, s.Dead);

    [ClientRpc] void HitClientRpc(uint shot, int att, int tgt, byte outc, byte zone, ushort dmg,
                                  ushort arm, ushort pen, byte ang, Vector3 p)
    {
        if (IsServer) return; // на хосте событие уже вызвано локально
        CombatNetwork.ClientReceiveHit(new HitResultMessage {
            ShotId = shot, AttackerNetId = att, TargetNetId = tgt, Outcome = (HitOutcome)outc,
            Zone = (HitZone)zone, Damage = dmg, EffectiveArmor = arm, Penetration = pen,
            ImpactAngle = ang, Point = p });
    }

    [ClientRpc] void StateClientRpc(int id, ushort hp, ushort dmg, ushort des, byte crew, bool fire, bool dead) =>
        CombatNetwork.ClientReceiveTankState(id, new TankDamageSnapshot {
            Hp = hp, DamagedModules = (ModuleFlags)dmg, DestroyedModules = (ModuleFlags)des,
            ContusedCrew = (CrewFlags)crew, Burning = fire, Dead = dead });
}
```

## Оптимизация под мобильные устройства

- В боевом цикле **нет аллокаций**. Снаряды берутся из пула. Физические запросы — `Physics.Raycast(out RaycastHit)` и `OverlapSphereNonAlloc` со статическими буферами. Данные хранятся в struct'ах и передаются через `in`/`ref`. События — делегаты со struct-аргументом. `Enum.ToString()` нигде не вызывается.
- Бронелист по коллайдеру ищется в словаре по InstanceID, без `GetComponent`.
- Модули и экипаж хранятся как битовые маски, поэтому перебор занимает максимум 10 и 5 итераций.
- `TankDestructible.Update` сразу выходит, если у танка нет пожара и ремонтов.
- Снаряд не использует Rigidbody: один Raycast за физический шаг, без туннелирования на скорости 1000 м/с. Траектория детерминирована.
