// Weapons: firing, spread and recoil, hitscan against world and hitboxes,
// wall penetration, knife, grenades.
import { WEAPONS, HIT } from './config.js';
import { applyDamage, rangeFactor } from './rules.js';
import { PENETRABLE } from './grid.js';
import { audio } from './audio.js';

const TMP = { x: 0, y: 0, z: 0 };

// Ray vs actor hitboxes. Returns {t, zone} or null.
export function rayActor(a, ox, oy, oz, dx, dy, dz, maxT) {
  const px = a.x - ox, pz = a.z - oz;
  const dd = dx * dx + dz * dz;
  const tc = dd > 1e-8 ? (px * dx + pz * dz) / dd : 0;
  if (tc < -1 || tc > maxT + 1) return null;
  const ex = ox + dx * tc - a.x, ez = oz + dz * tc - a.z;
  if (dd > 1e-8 && ex * ex + ez * ez > 0.9 * 0.9) return null;
  const c = Math.cos(-a.yaw), s = Math.sin(-a.yaw);
  const rx = ox - a.x, rz = oz - a.z;
  const lx = rx * c + rz * s, lz = -rx * s + rz * c, ly = oy - a.y;
  const ldx = dx * c + dz * s, ldz = -dx * s + dz * c, ldy = dy;
  let best = null;
  for (const [zone, x0, y0, z0, x1, y1, z1] of a.hitboxes()) {
    let tmin = 0, tmax = maxT;
    const axes = [[lx, ldx, x0, x1], [ly, ldy, y0, y1], [lz, ldz, z0, z1]];
    let ok = true;
    for (const [o, d, lo, hi] of axes) {
      if (Math.abs(d) < 1e-9) { if (o < lo || o > hi) { ok = false; break; } continue; }
      let t1 = (lo - o) / d, t2 = (hi - o) / d;
      if (t1 > t2) { const q = t1; t1 = t2; t2 = q; }
      if (t1 > tmin) tmin = t1;
      if (t2 < tmax) tmax = t2;
      if (tmin > tmax) { ok = false; break; }
    }
    if (ok && (!best || tmin < best.t)) best = { t: tmin, zone };
  }
  return best;
}

export function spreadOf(a, def) {
  if (!def.spread && def.kind !== 'sniper') return 0;
  const sp = Math.min(1.2, a.speed2d / 6.2);
  let s = def.kind === 'sniper' ? (a.scope ? def.spread : def.unscoped) : def.spread;
  s += def.moveSpread * Math.max(0, sp - 0.3) * 1.4;
  if (!a.onGround) s += def.airSpread;
  if (a.crouch > 0.6 && a.onGround) s *= 0.72;
  s += Math.min(a.shotsFired, 14) * (def.spray || 0);
  return s;
}

function randomCone(dx, dy, dz, spread, rng) {
  if (spread <= 0) return [dx, dy, dz];
  // Build a basis around d and offset inside a disc.
  let ux = -dz, uy = 0, uz = dx;
  let ul = Math.hypot(ux, uz);
  if (ul < 1e-6) { ux = 1; uz = 0; ul = 1; }
  ux /= ul; uz /= ul;
  const vx = dy * uz - dz * uy, vy = dz * ux - dx * uz, vz = dx * uy - dy * ux;
  const r = spread * (rng() + rng()) * 0.5, a = rng() * Math.PI * 2;
  const ox = Math.cos(a) * r, oy = Math.sin(a) * r;
  const nx = dx + ux * ox + vx * oy, ny = dy + uy * ox + vy * oy, nz = dz + uz * ox + vz * oy;
  const l = Math.hypot(nx, ny, nz);
  return [nx / l, ny / l, nz / l];
}

function surfaceOf(G, cx, cz) {
  const c = G.grid.charAt(cx, cz);
  if (c === 'x' || c === 'X') return 'crate';
  if (c === 'o' || c === 'W') return 'metal';
  return 'stone';
}

// Fires one bullet with up to `pens` wall penetrations. Returns the end point.
function bullet(G, shooter, w, ox, oy, oz, dx, dy, dz, baseDmg) {
  const def = w.def;
  let pens = (def.kind === 'rifle' || def.kind === 'sniper' || w.key === 'deagle') ? 1 : 0;
  let dmg = baseDmg, travelled = 0, wallbang = false;
  const maxRange = 220;
  let sx = ox, sy = oy, sz = oz;
  const hitActors = new Set();
  for (let seg = 0; seg < 3; seg++) {
    const rem = maxRange - travelled;
    const wh = G.grid.raycast(sx, sy, sz, dx, dy, dz, rem);
    const wt = wh ? wh.t : rem;
    let best = null;
    for (const a of G.actors) {
      if (a === shooter || !a.alive || hitActors.has(a)) continue;
      if (!G.ff && !G.isEnemy(shooter, a)) continue;
      const h = rayActor(a, sx, sy, sz, dx, dy, dz, wt);
      if (h && (!best || h.t < best.t)) best = { a, t: h.t, zone: h.zone };
    }
    if (best) {
      const dist = travelled + best.t;
      const mult = best.zone === 'arms' ? 1 : HIT[best.zone];
      const amount = dmg * mult * rangeFactor(def, dist);
      const hx = sx + dx * best.t, hy = sy + dy * best.t, hz = sz + dz * best.t;
      G.fx.bloodHit(hx, hy, hz, dx, dy, dz, best.zone === 'head', G.grid);
      damage(G, best.a, shooter, amount, best.zone, def.pen, w.key, { wallbang, dir: [dx, dz] });
      hitActors.add(best.a);
      if (def.kind === 'sniper' && pens > 0) { dmg *= 0.6; sx = hx + dx * 0.05; sy = hy + dy * 0.05; sz = hz + dz * 0.05; travelled = dist; continue; }
      return [hx, hy, hz];
    }
    if (!wh) return [sx + dx * rem, sy + dy * rem, sz + dz * rem];
    const hx = sx + dx * wh.t, hy = sy + dy * wh.t, hz = sz + dz * wh.t;
    const surf = surfaceOf(G, wh.cx, wh.cz);
    G.fx.impact(hx, hy, hz, wh.nx, wh.ny, wh.nz, surf);
    if (G.rng() < 0.3) audio.play(G.rng() < 0.2 ? 'ricochet' : 'impact', { x: hx, y: hy, z: hz }, 0.6);
    G.noise(hx, hy, hz, 6, shooter);
    const ch = G.grid.charAt(wh.cx, wh.cz);
    const keep = PENETRABLE[ch];
    if (pens > 0 && keep && wh.ny === 0) {
      const thick = G.grid.exitDistance(sx, sy, sz, dx, dy, dz, wh.t, wh.cx, wh.cz);
      if (thick < 2.3) {
        pens--;
        dmg *= keep * (def.pen + 0.2);
        wallbang = true;
        travelled += wh.t + thick + 0.02;
        sx = hx + dx * (thick + 0.02); sy = hy + dy * (thick + 0.02); sz = hz + dz * (thick + 0.02);
        G.fx.impact(sx - dx * 0.03, sy - dy * 0.03, sz - dz * 0.03, dx, dy, dz, surf, false);
        continue;
      }
    }
    return [hx, hy, hz];
  }
  return [sx, sy, sz];
}

export function damage(G, victim, attacker, amount, zone, pen, weaponKey, opts = {}) {
  if (!victim.alive || G.over) return;
  if (victim.protectT > 0) return;
  if (attacker && attacker !== victim && !G.isEnemy(attacker, victim)) {
    if (!G.ff) return;
    amount *= 0.35;
  }
  const armorZone = zone === 'arms' ? 'chest' : zone === 'legs' ? 'legs' : zone;
  const helmetBefore = victim.helmet;
  const r = applyDamage(victim, amount, armorZone, pen);
  victim.lastHurt = G.time;
  victim.lastAttacker = attacker;
  victim.punchP += Math.min(0.09, r.hp * 0.0025);
  if (attacker && attacker !== victim) attacker.dmgDealt += Math.min(r.hp, r.hp + Math.min(0, victim.hp));
  G.onDamage(victim, attacker, r.hp, zone, opts.dir, r.armorHit && zone === 'head' && helmetBefore);
  if (victim.hp <= 0) G.kill(victim, attacker, weaponKey, { hs: zone === 'head', wallbang: !!opts.wallbang });
}

function knifeAttack(G, a, heavy) {
  const def = WEAPONS.knife;
  const f = a.forward(TMP);
  const ox = a.x, oy = a.y + a.eyeHeight(), oz = a.z;
  let best = null;
  for (const v of G.actors) {
    if (v === a || !v.alive || !G.isEnemy(a, v)) continue;
    const h = rayActor(v, ox, oy, oz, f.x, f.y, f.z, def.reach);
    if (h && (!best || h.t < best.t)) best = { v, ...h };
  }
  // A generous cone so close stabs land on touch screens too.
  if (!best) {
    for (const v of G.actors) {
      if (v === a || !v.alive || !G.isEnemy(a, v)) continue;
      const dx = v.x - a.x, dz = v.z - a.z, d = Math.hypot(dx, dz);
      if (d > def.reach + 0.3 || Math.abs(v.y - a.y) > 1.2) continue;
      const dot = (dx * f.x + dz * f.z) / (d * Math.hypot(f.x, f.z) || 1);
      if (dot > 0.8) { best = { v, t: d, zone: 'chest' }; break; }
    }
  }
  audio.play('knife', a.isBot ? { x: a.x, y: a.y + 1.5, z: a.z } : null, 0.7);
  a.fireAnim = heavy ? 0.6 : 0.4;
  if (best) {
    // Back stabs are lethal like the original.
    const fy = -Math.sin(best.v.yaw), fz = -Math.cos(best.v.yaw);
    const back = (best.v.x - a.x) * fy + (best.v.z - a.z) * fz > 0;
    let dmg = heavy ? def.dmg2 : def.dmg;
    if (back) dmg *= heavy ? 3 : 1.5;
    if (best.zone === 'head') dmg *= 1.2;
    audio.play('knifeHit', { x: best.v.x, y: best.v.y + 1.3, z: best.v.z }, 0.9);
    G.fx.bloodHit(best.v.x, best.v.y + 1.2, best.v.z, f.x, 0, f.z, false, G.grid);
    damage(G, best.v, a, dmg, best.zone === 'head' ? 'head' : 'chest', 0.85, 'knife', { dir: [f.x, f.z] });
    return;
  }
  const wh = G.grid.raycast(ox, oy, oz, f.x, f.y, f.z, def.reach);
  if (wh) {
    audio.play('knifeWall', { x: ox + f.x * wh.t, y: oy + f.y * wh.t, z: oz + f.z * wh.t }, 0.6);
    G.fx.impact(ox + f.x * wh.t, oy + f.y * wh.t, oz + f.z * wh.t, wh.nx, wh.ny, wh.nz, 'stone');
  }
}

function shoot(G, a, w) {
  const def = w.def;
  w.clip--;
  a.shotsFired++;
  a.fireAnim = 1;
  a.lastShot = G.time;
  const eyeY = a.y + a.eyeHeight();
  const spread = spreadOf(a, def) * (w.silenced ? 0.85 : 1);
  const yaw = a.yaw + a.punchY, pitch = a.pitch + a.punchP;
  const cp = Math.cos(pitch);
  const dx = -Math.sin(yaw) * cp, dy = Math.sin(pitch), dz = -Math.cos(yaw) * cp;
  const pellets = def.pellets || 1;
  const muzzle = G.muzzleOf(a);
  for (let p = 0; p < pellets; p++) {
    const [rx, ry, rz] = randomCone(dx, dy, dz, spread, G.rng);
    const end = bullet(G, a, w, a.x, eyeY, a.z, rx, ry, rz, def.dmg * (w.silenced ? 0.9 : 1));
    if (p === 0 || p % 3 === 0) {
      if (!a.isBot || G.rng() < 0.5) G.fx.tracer(muzzle.x, muzzle.y, muzzle.z, end[0], end[1], end[2]);
    }
  }
  if (a === G.player) { G.stat('shots', 1); }
  // View kick: mostly vertical at first, then the spray sways sideways.
  const n = a.shotsFired;
  const kick = def.recoil * (n < 3 ? 0.9 : n < 10 ? 1.15 : 0.5) * (a.crouch > 0.6 ? 0.8 : 1);
  a.punchP = Math.min(0.24, a.punchP + kick);
  if (n === 1) a.sprayPhase = G.rng() * 6.28;
  const side = n < 4 ? 0 : Math.sin(n * 0.5 + a.sprayPhase) * def.recoilX * 2.2;
  a.punchY = Math.max(-0.13, Math.min(0.13, a.punchY + side + (G.rng() - 0.5) * def.recoilX));
  a.viewPunch = Math.min(1, a.viewPunch + kick * 8);
  audio.shot(w.silenced ? 'silenced' : w.key, def.kind, a === G.listenerActor ? null : { x: a.x, y: eyeY, z: a.z });
  G.noise(a.x, eyeY, a.z, w.silenced ? 14 : def.kind === 'pistol' ? 35 : 55, a);
  G.onShot(a, muzzle, w.silenced);
  if (def.kind !== 'shotgun' && def.kind !== 'sniper') G.ejectShell(a);
  if (a.protectT > 0) a.protectT = 0;
  if (def.kind === 'sniper') { a.scopeRestore = a.scope; a.scope = 0; }
}

function throwNade(G, a) {
  const key = a.nadeKey;
  if (!key || a.nades[key] <= 0) return;
  a.nades[key]--;
  const f = a.forward(TMP);
  const pitch = Math.min(1.3, a.pitch + 0.12);
  const cp = Math.cos(pitch);
  const speed = 16 + (a.speed2d > 1 ? 2 : 0);
  const ox = a.x + f.x * 0.4, oy = a.y + a.eyeHeight() - 0.1, oz = a.z + f.z * 0.4;
  let sx = ox, sz = oz;
  if (G.grid.topAt(sx, sz) > oy) { sx = a.x; sz = a.z; }
  G.grenades.push({
    type: key, owner: a, x: sx, y: oy, z: sz,
    vx: -Math.sin(a.yaw) * cp * speed + a.vx * 0.5, vy: Math.sin(pitch) * speed + 1.5, vz: -Math.cos(a.yaw) * cp * speed + a.vz * 0.5,
    t: 0, fuse: key === 'smoke' ? 2.2 : 1.6, still: 0, model: G.makeNadeModel(key),
  });
  audio.play('throw', a.isBot ? { x: a.x, y: a.y + 1.5, z: a.z } : null, 0.8);
  if (a !== G.player || G.autopilot) G.radio(a, key === 'flash' ? 'r_flash' : key === 'smoke' ? 'r_smoke' : 'r_he');
  a.fireAnim = 0.6;
  // Switch to the next grenade or the best gun.
  const next = a.firstNade();
  if (next) { a.nadeKey = next; a.switchT = 0.5; }
  else { a.nadeKey = null; a.slot = a.lastSlot !== 3 && a.has(a.lastSlot) ? a.lastSlot : a.bestSlot(); a.switchT = 0.5; }
}

// Advances an actor's weapon state from its command. cmd: {fire, alt, reload}
export function updateWeapon(G, a, cmd, dt) {
  if (a.switchT > 0) a.switchT -= dt;
  if (a.fireAnim > 0) a.fireAnim = Math.max(0, a.fireAnim - dt * 4);
  a.viewPunch = Math.max(0, a.viewPunch - dt * 6);
  // Recoil settles back toward the crosshair.
  const rec = Math.min(1, dt * (G.time - (a.lastShot || 0) > 0.12 ? 7 : 2.5));
  a.punchP -= a.punchP * rec;
  a.punchY -= a.punchY * rec;
  const w = a.w;
  const def = w.def;
  if (G.time - (a.lastShot || 0) > (def.rate || 0.1) + 0.12) a.shotsFired = Math.max(0, a.shotsFired - dt * 14);
  if (a.scopeRestore !== undefined && G.time >= a.nextFire && def.kind === 'sniper') { a.scope = a.scopeRestore; a.scopeRestore = undefined; }

  const pressed = cmd.fire && !a.prevFire;
  a.prevFire = cmd.fire;

  // Reload state.
  if (a.reloadT > 0) {
    a.reloadT -= dt;
    if (a.reloadT <= 0) {
      if (def.shellReload) {
        if (w.reserve > 0 && w.clip < def.clip) { w.clip++; w.reserve--; audio.play('shell', a.isBot ? { x: a.x, y: a.y + 1.4, z: a.z } : null, 0.6); }
        if (w.reserve > 0 && w.clip < def.clip) a.reloadT = def.reload;
      } else {
        const need = def.clip - w.clip;
        const take = Math.min(need, w.reserve);
        w.clip += take; w.reserve -= take;
      }
    }
  }
  const canReload = def.clip && w.clip < def.clip && w.reserve > 0 && a.reloadT <= 0 && a.switchT <= 0;
  if (cmd.reload && canReload) startReload(a, def);

  if (cmd.alt) {
    if (def.kind === 'sniper' && a.switchT <= 0 && a.reloadT <= 0) { a.scope = (a.scope + 1) % 3; audio.play('click', null, 0.4); }
    else if (def.silencer && a.switchT <= 0 && a.reloadT <= 0) {
      w.silenced = !w.silenced;
      a.switchT = 1.6;
      audio.play('silencer', a.isBot ? { x: a.x, y: a.y + 1.4, z: a.z } : null, 0.7);
    }
    else if (def.kind === 'knife' && G.time >= a.nextFire && a.switchT <= 0) { knifeAttack(G, a, true); a.nextFire = G.time + def.rate2; }
  }

  if (a.switchT > 0) return;

  switch (def.kind) {
    case 'knife':
      if (cmd.fire && G.time >= a.nextFire) { knifeAttack(G, a, false); a.nextFire = G.time + def.rate; }
      return;
    case 'grenade':
      if (!cmd.fire) a.needRelease = false;
      if (cmd.fire && !a.needRelease && a.throwT <= 0) {
        a.needRelease = true; a.throwT = 0.38; audio.play('pin', a.isBot ? { x: a.x, y: a.y + 1.4, z: a.z } : null, 0.6); }
      if (a.throwT > 0) { a.throwT -= dt; if (a.throwT <= 0) throwNade(G, a); }
      return;
    case 'bomb':
      return;
    default: break;
  }
  if (!cmd.fire || G.time < a.nextFire) return;
  if (!def.auto && !pressed) return;
  if (a.reloadT > 0 && !(def.shellReload && w.clip > 0)) return;
  if (w.clip <= 0) {
    if (pressed || def.auto) {
      if (G.time >= (a.emptyT || 0)) { audio.play('empty', a.isBot ? { x: a.x, y: a.y + 1.4, z: a.z } : null, 0.6); a.emptyT = G.time + 0.3; }
      if (w.reserve > 0 && a.reloadT <= 0) startReload(a, def);
    }
    return;
  }
  a.reloadT = 0;
  shoot(G, a, w);
  a.nextFire = G.time + def.rate;
  if (def.kind === 'sniper' || w.key === 'm3') audio.play(def.kind === 'sniper' ? 'bolt' : 'shell', a.isBot ? { x: a.x, y: a.y + 1.4, z: a.z } : null, 0.5);
}

export function startReload(a, def) {
  a.reloadT = def.reload;
  a.scope = 0;
  a.scopeRestore = undefined;
  a.reloadStart = def.shellReload ? def.reload : def.reload;
  audio.play('reload', a.isBot ? { x: a.x, y: a.y + 1.4, z: a.z } : null, a.isBot ? 0.5 : 0.7);
}

// Grenade projectiles: bounce on the heightfield and detonate.
export function updateGrenades(G, dt) {
  const grid = G.grid;
  for (let i = G.grenades.length - 1; i >= 0; i--) {
    const g = G.grenades[i];
    g.t += dt;
    const steps = 4, sdt = dt / steps;
    for (let s = 0; s < steps; s++) {
      g.vy -= 20 * sdt;
      const nx = g.x + g.vx * sdt, ny = g.y + g.vy * sdt, nz = g.z + g.vz * sdt;
      let bounced = false;
      if (grid.topAt(nx, g.z) > g.y) { g.vx = -g.vx * 0.45; bounced = true; } else g.x = nx;
      if (grid.topAt(g.x, nz) > g.y) { g.vz = -g.vz * 0.45; bounced = true; } else g.z = nz;
      const floor = grid.topAt(g.x, g.z) + 0.05;
      if (ny < floor) {
        g.y = floor;
        if (Math.abs(g.vy) > 2) bounced = true;
        g.vy = -g.vy * 0.35;
        g.vx *= 0.65; g.vz *= 0.65;
        if (Math.abs(g.vy) < 0.8) g.vy = 0;
      } else g.y = ny;
      if (bounced && g.t - (g.lastBounce || 0) > 0.08) { g.lastBounce = g.t; audio.play('bounce', { x: g.x, y: g.y, z: g.z }, 0.6); }
    }
    const spd = Math.hypot(g.vx, g.vy, g.vz);
    if (spd < 0.5) g.still += dt;
    if (g.model) { g.model.position.set(g.x, g.y, g.z); g.model.rotation.x += spd * dt * 2; g.model.rotation.z += spd * dt; }
    const ready = g.type === 'smoke' ? (g.t > g.fuse && g.still > 0.15) || g.t > 5 : g.t > g.fuse;
    if (!ready) continue;
    G.grenades.splice(i, 1);
    if (g.model) G.scene.remove(g.model);
    detonate(G, g);
  }
}

function detonate(G, g) {
  const pos = { x: g.x, y: g.y, z: g.z };
  if (g.type === 'he') {
    audio.play('explode', pos, 1.2);
    G.fx.explosion(g.x, g.y, g.z, false);
    G.noise(g.x, g.y, g.z, 60, g.owner);
    G.shake(g.x, g.z, 14, 0.6);
    for (const a of G.actors) {
      if (!a.alive) continue;
      const d = Math.hypot(a.x - g.x, a.y + 1 - g.y, a.z - g.z);
      if (d > 10) continue;
      if (!G.grid.los(g.x, g.y + 0.3, g.z, a.x, a.y + 1.2, a.z) && !G.grid.los(g.x, g.y + 0.3, g.z, a.x, a.y + 0.4, a.z)) continue;
      const dmg = 100 * Math.pow(1 - d / 10, 1.3);
      if (dmg < 1) continue;
      damage(G, a, g.owner, dmg, 'blast', 0.5, 'he', { dir: [a.x - g.x, a.z - g.z] });
    }
  } else if (g.type === 'flash') {
    audio.play('flashbang', pos, 1.1);
    G.fx.flashLight(g.x, g.y + 0.5, g.z, 60, 0xffffff, 0.25);
    for (let k = 0; k < 10; k++) G.fx.add.emit(g.x, g.y + 0.2, g.z, (G.rng() - 0.5) * 8, G.rng() * 6, (G.rng() - 0.5) * 8, 0.4, 0.25, 1, 1, 1, 1, 10);
    for (const a of G.actors) {
      if (!a.alive) continue;
      const ex = a.x, ey = a.y + a.eyeHeight(), ez = a.z;
      const d = Math.hypot(ex - g.x, ey - g.y, ez - g.z);
      if (d > 30 || !G.grid.los(g.x, g.y + 0.2, g.z, ex, ey, ez) || G.fx.smokeBlocks(g.x, g.y + 0.2, g.z, ex, ey, ez)) continue;
      const f = a.forward(TMP);
      const dot = ((g.x - ex) * f.x + (g.y - ey) * f.y + (g.z - ez) * f.z) / (d || 1);
      const facing = dot > 0.6 ? 1 : dot > 0 ? 0.6 : 0.22;
      const dur = Math.max(0, 4.8 * facing * (1 - d / 32));
      if (dur < 0.25) continue;
      if (dur > a.flashT) { a.flashT = dur; a.flashMax = dur; }
      if (a === G.player) G.onFlashed(dur);
    }
  } else if (g.type === 'smoke') {
    audio.play('smoke', pos, 1);
    G.fx.smoke(g.x, g.y, g.z, 18);
  }
}
