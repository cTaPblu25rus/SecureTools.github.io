// Logic tests that run in plain Node: maps, collisions, ray casts, pathfinding, economy.
import assert from 'node:assert/strict';
import { Grid, CELL, mulberry32 } from '../src/grid.js';
import { MAPS } from '../src/maps.js';
import { WEAPONS, RULES, GUNGAME, BUY_MENU, GEAR } from '../src/config.js';
import { applyDamage, lossBonus, rangeFactor } from '../src/rules.js';

let passed = 0;
function test(name, fn) {
  try { fn(); passed++; console.log('  ok  ' + name); }
  catch (e) { console.error('FAIL  ' + name + '\n' + e.stack); process.exitCode = 1; }
}

for (const def of MAPS) {
  const g = new Grid(def);
  const rng = mulberry32(7);
  test(`${def.id}: spawns are walkable floor`, () => {
    for (const rect of [def.spawnT, def.spawnCT]) {
      let n = 0;
      for (let z = rect[1]; z <= rect[3]; z++) for (let x = rect[0]; x <= rect[2]; x++) if (g.walk[g.idx(x, z)]) n++;
      assert.ok(n >= 5, 'spawn has at least 5 walkable cells, got ' + n);
    }
  });
  test(`${def.id}: every floor cell reachable from T spawn`, () => {
    const s = g.randomCellIn(def.spawnT, rng);
    let unreachable = 0;
    for (let i = 0; i < g.walk.length; i++) {
      if (g.heights[i] > 0.01) continue;
      const c = g.center(i % g.w, (i / g.w) | 0);
      const p = g.findPath(s.x, s.z, c.x, c.z);
      if (!p) unreachable++;
    }
    assert.equal(unreachable, 0);
  });
  test(`${def.id}: spawns reach each other and sites`, () => {
    const t = g.randomCellIn(def.spawnT, rng), ct = g.randomCellIn(def.spawnCT, rng);
    assert.ok(g.findPath(t.x, t.z, ct.x, ct.z), 'T->CT');
    assert.ok(g.findPath(ct.x, ct.z, t.x, t.z), 'CT->T');
    for (const k of Object.keys(def.sites)) {
      const s = g.randomCellIn(def.sites[k], rng);
      assert.ok(g.findPath(t.x, t.z, s.x, s.z), 'T->' + k);
      assert.ok(g.findPath(ct.x, ct.z, s.x, s.z), 'CT->' + k);
    }
  });
  if (def.modes.includes('bomb')) test(`${def.id}: CT reach sites before T`, () => {
    const len = (p) => { let l = 0; for (let i = 1; i < p.length; i++) l += Math.hypot(p[i].x - p[i - 1].x, p[i].z - p[i - 1].z); return l; };
    for (const k of Object.keys(def.sites)) {
      const r = def.sites[k];
      const c = g.center((r[0] + r[2]) >> 1, (r[1] + r[3]) >> 1);
      const tS = g.center((def.spawnT[0] + def.spawnT[2]) >> 1, (def.spawnT[1] + def.spawnT[3]) >> 1);
      const cS = g.center((def.spawnCT[0] + def.spawnCT[2]) >> 1, (def.spawnCT[1] + def.spawnCT[3]) >> 1);
      const lt = len([tS, ...g.findPath(tS.x, tS.z, c.x, c.z)]), lc = len([cS, ...g.findPath(cS.x, cS.z, c.x, c.z)]);
      console.log(`        site ${k}: T ${lt.toFixed(0)} m, CT ${lc.toFixed(0)} m`);
      assert.ok(lc < lt, `CT path ${lc} should be shorter than T path ${lt}`);
    }
  });
  test(`${def.id}: no line of sight between spawns`, () => {
    let seen = 0;
    for (let z0 = def.spawnT[1]; z0 <= def.spawnT[3]; z0++) for (let x0 = def.spawnT[0]; x0 <= def.spawnT[2]; x0++)
      for (let z1 = def.spawnCT[1]; z1 <= def.spawnCT[3]; z1++) for (let x1 = def.spawnCT[0]; x1 <= def.spawnCT[2]; x1++) {
        const a = g.center(x0, z0), b = g.center(x1, z1);
        if (g.los(a.x, a.y + 1.6, a.z, b.x, b.y + 1.6, b.z)) seen++;
      }
    if (def.modes.includes('bomb')) assert.equal(seen, 0, 'spawn cells see each other: ' + seen);
  });
  test(`${def.id}: sites contain walkable cells`, () => {
    for (const r of Object.values(def.sites)) {
      let n = 0;
      for (let z = r[1]; z <= r[3]; z++) for (let x = r[0]; x <= r[2]; x++) if (g.walk[g.idx(x, z)] && g.heights[g.idx(x, z)] < 1) n++;
      assert.ok(n >= 10);
    }
  });
}

const g = new Grid(MAPS[0]);
test('raycast hits floor from above', () => {
  const h = g.raycast(20 * CELL + 1, 5, 20 * CELL + 1, 0, -1, 0, 100);
  assert.ok(h); assert.equal(h.ny, 1); assert.ok(Math.abs(h.t - 5) < 1e-6);
});
test('raycast hits outer wall horizontally', () => {
  const p = g.center(20, 25);
  const h = g.raycast(p.x, 1.6, p.z, 1, 0, 0, 500);
  assert.ok(h); assert.equal(h.nx, -1);
});
test('raycast misses into the sky', () => {
  const p = g.center(20, 25);
  assert.equal(g.raycast(p.x, 1.6, p.z, 0, 1, 0, 100), null);
});
test('los blocked by wall, clear in open', () => {
  const a = g.center(19, 25), b = g.center(20, 25);
  assert.ok(g.los(a.x, 1.6, a.z, b.x, 1.6, b.z));
  const c = g.center(10, 25);
  assert.ok(!g.los(a.x, 1.6, a.z, c.x, 1.6, c.z));
});
test('body collides with wall and slides', () => {
  const p = g.center(19, 25);
  const b = { x: p.x, y: 0, z: p.z, vx: -6, vy: 0, vz: 1, onGround: true };
  for (let i = 0; i < 120; i++) g.move(b, 1 / 60);
  assert.ok(b.x >= 18 * CELL + 0.35, 'stopped at wall x=' + b.x);
  assert.ok(b.z > p.z + 1, 'slid along wall');
});
test('body walks up stairs onto catwalk', () => {
  const p = g.center(21, 16);
  const b = { x: p.x, y: 0, z: p.z, vx: 5, vy: 0, vz: 0, onGround: true };
  for (let i = 0; i < 90; i++) { b.vx = 5; g.move(b, 1 / 60); }
  assert.ok(Math.abs(b.y - 1.5) < 1e-6, 'on catwalk y=' + b.y);
});
test('crate needs a jump', () => {
  const c = g.center(20, 12); // mid box
  const b = { x: c.x, y: 0, z: c.z + 2.5, vx: 0, vy: 0, vz: -5, onGround: true };
  for (let i = 0; i < 60; i++) { b.vz = -5; g.move(b, 1 / 60); }
  assert.ok(b.y === 0 && b.z > c.z + 1, 'blocked by crate');
  b.vy = 6.6; b.onGround = false;
  for (let i = 0; i < 20; i++) { b.vz = -5; g.move(b, 1 / 60); }
  assert.ok(Math.abs(b.y - 1) < 1e-6, 'standing on crate y=' + b.y);
});
test('path waypoints are increasing toward goal', () => {
  const a = g.center(20, 35), b = g.center(32, 5);
  const p = g.findPath(a.x, a.z, b.x, b.z);
  assert.ok(p && p.length > 2);
  const end = p[p.length - 1];
  assert.ok(Math.hypot(end.x - b.x, end.z - b.z) < 0.01);
});
test('path smoothing walks straight across open area', () => {
  const a = g.center(15, 34), b = g.center(24, 34);
  const p = g.findPath(a.x, a.z, b.x, b.z);
  assert.equal(p.length, 1);
});

test('armor absorbs damage, helmet protects head', () => {
  const v = { hp: 100, armor: 100, helmet: false };
  const r1 = applyDamage(v, 36, 'chest', 0.78);
  assert.equal(r1.hp, Math.round(36 * 0.78));
  assert.ok(v.armor < 100);
  const v2 = { hp: 100, armor: 100, helmet: false };
  applyDamage(v2, 36 * 4, 'head', 0.78);
  assert.ok(v2.hp <= 0, 'AK headshot without helmet kills');
  const v3 = { hp: 100, armor: 100, helmet: true };
  applyDamage(v3, 36 * 4, 'head', 0.78);
  assert.ok(v3.hp <= 0, 'AK headshot through helmet still kills');
  const v4 = { hp: 100, armor: 100, helmet: true };
  applyDamage(v4, 25 * 4, 'head', 0.47);
  assert.ok(v4.hp > 0, 'Glock headshot through helmet does not kill');
  const v5 = { hp: 100, armor: 100, helmet: true };
  applyDamage(v5, 25 * 0.75, 'legs', 0.47);
  assert.equal(v5.armor, 100, 'legs ignore armor');
});
test('AWP body shot kills armored target', () => {
  const v = { hp: 100, armor: 100, helmet: true };
  applyDamage(v, WEAPONS.awp.dmg * rangeFactor(WEAPONS.awp, 30), 'chest', WEAPONS.awp.pen);
  assert.ok(v.hp <= 0);
});
test('loss bonus ladder', () => {
  assert.deepEqual([1, 2, 3, 4, 5, 6].map(lossBonus), [1400, 1900, 2400, 2900, 3400, 3400]);
});
test('weapon table is complete', () => {
  for (const [k, w] of Object.entries(WEAPONS)) {
    assert.ok(w.name && w.kind && w.slot >= 0, k);
    if (['pistol', 'smg', 'rifle', 'sniper', 'shotgun'].includes(w.kind)) assert.ok(w.clip > 0 && w.reserve > 0 && w.rate > 0 && w.dmg > 0, k);
  }
  for (const k of GUNGAME) assert.ok(WEAPONS[k], k);
  for (const c of BUY_MENU) for (const k of c.items) assert.ok(WEAPONS[k] || GEAR[k], k);
  assert.ok(RULES.bombTime > RULES.defuseTime);
});

console.log(`\n${passed} tests passed`);
