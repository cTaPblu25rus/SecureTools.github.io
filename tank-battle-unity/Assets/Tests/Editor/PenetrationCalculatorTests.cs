// EditMode-тесты (Window > General > Test Runner). Проверяют формулы без сцены и физики.
using NUnit.Framework;
using UnityEngine;
using TankGame.Combat;

public class PenetrationCalculatorTests
{
    private static readonly Vector3 Normal = Vector3.forward;

    // Направление полёта под углом deg к нормали листа (нормаль = +Z, снаряд летит в -Z).
    private static Vector3 DirAt(float deg)
    {
        float r = deg * Mathf.Deg2Rad;
        return new Vector3(Mathf.Sin(r), 0f, -Mathf.Cos(r));
    }

    private static ShotState Shot(ShellType type, float caliber, float pen, float angleDeg)
    {
        var s = ShellData.ExampleAP;
        s.Type = type; s.CaliberMm = caliber; s.Penetration100m = pen; s.Penetration500m = pen * 0.9f;
        s.ExplosionRadius = type == ShellType.HE ? 1.5f : 0f;
        return new ShotState { Shell = s, Direction = DirAt(angleDeg), PenetrationRoll = 1f, DamageRoll = 1f,
                               HeatSpacedDistance = -1f, Distance = 50f };
    }

    private static HitResult Hit(ref ShotState s, float armor, ArmorType type = ArmorType.Main)
    {
        PenetrationCalculator.Resolve(ref s, armor, 1f, type, 0f, Vector3.zero, Normal, out HitResult r);
        return r;
    }

    [Test] public void AP_Straight_EffectiveEqualsNominal()
    {
        var s = Shot(ShellType.AP, 100, 200, 0);
        var r = Hit(ref s, 150);
        Assert.AreEqual(HitOutcome.Penetration, r.Outcome);
        Assert.AreEqual(150f, r.EffectiveArmor, 0.5f);
    }

    [Test] public void AP_Normalization5Degrees()
    {
        var s = Shot(ShellType.AP, 100, 200, 60);
        var r = Hit(ref s, 100);
        Assert.AreEqual(55f, r.NormalizedAngle, 0.01f);
        Assert.AreEqual(100f / Mathf.Cos(55f * Mathf.Deg2Rad), r.EffectiveArmor, 0.5f);
    }

    [Test] public void AP_RicochetAbove70()
    {
        var s = Shot(ShellType.AP, 100, 300, 72);
        Assert.AreEqual(HitOutcome.Ricochet, Hit(ref s, 50).Outcome);
    }

    [Test] public void ThreeCaliberRule_NoRicochet()
    {
        var s = Shot(ShellType.AP, 155, 300, 80);
        var r = Hit(ref s, 50);
        Assert.IsTrue(r.ThreeCaliberRule);
        Assert.AreNotEqual(HitOutcome.Ricochet, r.Outcome);
    }

    [Test] public void TwoCaliberRule_BoostsNormalization()
    {
        var s = Shot(ShellType.AP, 120, 300, 60);
        var r = Hit(ref s, 50); // n = 5 * 1.4 * 120 / 100 = 8.4
        Assert.AreEqual(51.6f, r.NormalizedAngle, 0.1f);
    }

    [Test] public void HE_NonPen_PartialDamage()
    {
        var s = Shot(ShellType.HE, 152, 85, 0);
        s.Shell.Damage = 900;
        var r = Hit(ref s, 120);
        Assert.AreEqual(HitOutcome.HEDetonation, r.Outcome);
        Assert.AreEqual(0.5f * 900 - 1.1f * 120, r.Damage, 0.5f);
    }

    [Test] public void SpacedArmor_ConsumesPenetration()
    {
        var s = Shot(ShellType.AP, 100, 200, 0);
        Assert.AreEqual(HitOutcome.SpacedArmorPassed, Hit(ref s, 20, ArmorType.Spaced).Outcome);
        Assert.AreEqual(180f, s.CurrentPenetration(), 0.5f);
    }

    [Test] public void HEAT_LosesPenetrationInAirAfterSpaced()
    {
        var s = Shot(ShellType.HEAT, 105, 300, 0);
        Hit(ref s, 10, ArmorType.Spaced);
        s.Distance += 1f; // 1 м воздуха = -50% исходного пробития
        Assert.AreEqual(300 - 10 - 150, s.CurrentPenetration(), 0.5f);
    }

    [Test] public void Rng_IsDeterministic()
    {
        var a = new DeterministicRandom(123); var b = new DeterministicRandom(123);
        for (int i = 0; i < 1000; i++) Assert.AreEqual(a.Spread(0.25f), b.Spread(0.25f));
    }

    [Test] public void HitZone_ParsesRussianAlias()
    {
        Assert.IsTrue(HitZoneUtility.TryParse("НЛД", out var z));
        Assert.AreEqual(HitZone.HullLowerFront, z);
    }
}
