// Bot brain: perception, aiming, navigation and objective play. It outputs the
// same command structure the local player produces, so bots follow the same rules.
import { DIFFICULTY, WEAPONS, TEAM } from './config.js';

const TAU = Math.PI * 2;
const wrap = (a) => { a = (a + Math.PI) % TAU; if (a < 0) a += TAU; return a - Math.PI; };

export class BotBrain {
  constructor(actor, G, diff) {
    this.a = actor;
    this.G = G;
    this.setDifficulty(diff);
    this.reset();
  }

  setDifficulty(diff) { this.D = DIFFICULTY[diff] || DIFFICULTY.normal; this.diff = diff; }

  reset() {
    this.path = null; this.pathI = 0; this.goal = null; this.repathT = 0;
    this.target = null; this.visible = false; this.seenFor = 0; this.reactT = 0; this.lastSeen = null;
    this.err = { y: 0, p: 0 };
    this.scanT = Math.random() * 0.2;
    this.burst = 0; this.burstPause = 0;
    this.strafe = 0; this.strafeT = 0;
    this.stuckT = 0; this.stuckN = 0; this.lastX = this.a.x; this.lastZ = this.a.z;
    this.task = null; this.spot = null; this.look = null; this.lookT = 0;
    this.heard = null; this.nadeDone = false; this.throwing = null;
    this.engageCrouch = false; this.aimHead = false;
    this.sideStep = 0;
    this.idleLookT = 0;
    this.wantYaw = this.a.yaw; this.wantPitch = 0;
    this.scopeHold = 0;
  }

  // ---------- perception ----------
  scan() {
    const G = this.G, a = this.a;
    if (a.flashT > 0.6) { this.visible = false; return; }
    const ex = a.x, ey = a.y + a.eyeHeight(), ez = a.z;
    const fyaw = a.yaw;
    let best = null, bestScore = Infinity;
    for (const e of G.actors) {
      if (!e.alive || !G.isEnemy(a, e)) continue;
      const dx = e.x - ex, dz = e.z - ez;
      const dist = Math.hypot(dx, dz);
      if (dist > 95) continue;
      const ang = Math.abs(wrap(Math.atan2(-dx, -dz) - fyaw));
      const hurtBy = a.lastAttacker === e && G.time - a.lastHurt < 2;
      const sticky = e === this.target && this.visible;
      if (ang > 1.15 && dist > 2.5 && !hurtBy && !sticky) continue;
      if (ang > 0.7 && !sticky && !hurtBy && Math.random() > this.D.spot) continue;
      const hy = e.y + e.eyeHeight(), cy = e.y + e.bodyHeight() * 0.6;
      let seen = G.grid.los(ex, ey, ez, e.x, hy, e.z) || G.grid.los(ex, ey, ez, e.x, cy, e.z);
      if (seen && G.fx.smokeBlocks(ex, ey, ez, e.x, cy, e.z)) seen = false;
      if (!seen) continue;
      const score = dist + ang * 8 - (sticky ? 6 : 0) - (hurtBy ? 10 : 0);
      if (score < bestScore) { bestScore = score; best = e; }
    }
    if (best) {
      if (best !== this.target || !this.visible) {
        const behind = Math.abs(wrap(Math.atan2(-(best.x - ex), -(best.z - ez)) - fyaw)) > 0.8;
        this.reactT = this.D.react * (0.7 + Math.random() * 0.6) * (behind ? 1.4 : 1) + (best === this.target ? 0 : 0.05);
        const dist = Math.hypot(best.x - ex, best.z - ez);
        const e0 = this.D.aimErr * (1 + dist / 30);
        this.err.y = (Math.random() - 0.5) * 2 * e0;
        this.err.p = (Math.random() - 0.5) * 1.2 * e0;
        this.aimHead = Math.random() < (this.diff === 'expert' ? 0.6 : this.diff === 'hard' ? 0.4 : this.diff === 'normal' ? 0.2 : 0.08);
        this.engageCrouch = dist > 18 && Math.random() < 0.35;
        this.strafe = Math.random() < this.D.strafe ? (Math.random() < 0.5 ? 1 : -1) : 0;
        this.strafeT = 0.3 + Math.random() * 0.5;
        if (!this.visible && Math.random() < 0.3) G.radio(a, 'r_enemy');
      }
      this.target = best;
      this.visible = true;
      best.spotted = G.time;
      this.lastSeen = { x: best.x, y: best.y, z: best.z, t: G.time };
      G.callout(a.team, best.x, best.z);
    } else {
      this.visible = false;
      if (this.target && !this.target.alive) this.target = null;
    }
    // Hearing.
    for (const n of G.noises) {
      if (G.time - n.t > 0.5 || !n.src || !G.isEnemy(a, n.src)) continue;
      if (Math.hypot(n.x - a.x, n.z - a.z) < n.r) this.heard = { x: n.x, y: n.y, z: n.z, t: n.t };
    }
  }

  // ---------- movement ----------
  goTo(x, z, cmd) {
    const a = this.a, G = this.G;
    if (!this.goal || Math.hypot(this.goal.x - x, this.goal.z - z) > 1.2 || this.repathT <= 0 || !this.path) {
      this.goal = { x, z };
      this.path = G.grid.findPath(a.x, a.z, x, z);
      this.pathI = 0;
      this.repathT = 3 + Math.random() * 2;
    }
    if (!this.path || this.pathI >= this.path.length) return true;
    let wp = this.path[this.pathI];
    let d = Math.hypot(wp.x - a.x, wp.z - a.z);
    const last = this.pathI === this.path.length - 1;
    if (d < (last ? 0.45 : 0.8) && Math.abs(wp.y - a.y) < 0.6) {
      this.pathI++;
      if (this.pathI >= this.path.length) return true;
      wp = this.path[this.pathI];
      d = Math.hypot(wp.x - a.x, wp.z - a.z);
    }
    const dx = (wp.x - a.x) / (d || 1), dz = (wp.z - a.z) / (d || 1);
    cmd.wx = dx; cmd.wz = dz;
    if (wp.y - a.y > 0.5 && d < 2.4 && a.onGround) cmd.jump = true;
    this.moveYaw = Math.atan2(-dx, -dz);
    return false;
  }

  remaining() {
    if (!this.path) return 0;
    let l = 0, px = this.a.x, pz = this.a.z;
    for (let i = this.pathI; i < this.path.length; i++) { l += Math.hypot(this.path[i].x - px, this.path[i].z - pz); px = this.path[i].x; pz = this.path[i].z; }
    return l;
  }

  checkStuck(dt, cmd) {
    const a = this.a;
    this.stuckT += dt;
    if (this.sideStep > 0) {
      this.sideStep -= dt;
      cmd.wx = this.sideX; cmd.wz = this.sideZ;
    }
    if (this.stuckT < 0.7) return;
    const moved = Math.hypot(a.x - this.lastX, a.z - this.lastZ);
    const wanted = Math.hypot(cmd.wx, cmd.wz) > 0.3;
    if (wanted && moved < 0.35) {
      this.stuckN++;
      cmd.jump = true;
      if (this.stuckN >= 2) {
        this.path = null;
        const ang = Math.random() * TAU;
        this.sideX = Math.cos(ang); this.sideZ = Math.sin(ang); this.sideStep = 0.45;
      }
    } else this.stuckN = 0;
    this.stuckT = 0; this.lastX = a.x; this.lastZ = a.z;
  }

  // ---------- aiming ----------
  aimAt(x, y, z, dt, rate = 1, err = true) {
    const a = this.a;
    const ex = a.x, ey = a.y + a.eyeHeight(), ez = a.z;
    const dx = x - ex, dy = y - ey, dz = z - ez;
    let yaw = Math.atan2(-dx, -dz), pitch = Math.atan2(dy, Math.hypot(dx, dz));
    if (err) {
      yaw += this.err.y - a.punchY * this.D.recoilComp;
      pitch += this.err.p - a.punchP * this.D.recoilComp;
    }
    this.turnTo(yaw, pitch, dt, rate);
    return { yaw, pitch, dist: Math.hypot(dx, dy, dz) };
  }

  turnTo(yaw, pitch, dt, rate = 1) {
    const a = this.a;
    const dyaw = wrap(yaw - a.yaw);
    const sp = this.D.turn * rate;
    const step = Math.min(Math.abs(dyaw), (sp * 0.35 + Math.abs(dyaw) * sp) * dt);
    a.yaw = wrap(a.yaw + Math.sign(dyaw) * step);
    const dp = pitch - a.pitch;
    a.pitch += Math.sign(dp) * Math.min(Math.abs(dp), (sp * 0.3 + Math.abs(dp) * sp) * dt);
    a.pitch = Math.max(-1.45, Math.min(1.45, a.pitch));
  }

  // ---------- decision ----------
  think(dt) {
    const G = this.G, a = this.a;
    const cmd = { wx: 0, wz: 0, walk: false, crouch: false, jump: false, fire: false, alt: false, use: false, reload: false, slot: null };
    if (!a.alive) return cmd;
    this.repathT -= dt;
    this.scanT -= dt;
    if (this.scanT <= 0) { this.scanT = 0.12 + Math.random() * 0.1; this.scan(); }
    if (G.phase === 'freeze') {
      if (a.slot !== a.bestSlot()) cmd.slot = a.bestSlot();
      this.idleLook(dt);
      return cmd;
    }
    if (this.throwing) { this.doThrow(dt, cmd); return cmd; }
    if (this.visible && this.target && this.target.alive) {
      this.engage(dt, cmd);
    } else {
      this.seenFor = 0;
      this.burst = 0;
      this.objective(dt, cmd);
      // Keep weapons ready.
      const w = a.w;
      if (w.def.clip && w.clip < w.def.clip * 0.5 && w.reserve > 0 && a.reloadT <= 0 && (!this.lastSeen || G.time - this.lastSeen.t > 1.5)) cmd.reload = true;
      if (cmd.slot === null && !a.hasBomb && a.slot !== a.bestSlot() && a.slot !== 3) cmd.slot = a.bestSlot();
      if (a.slot === 4 && !cmd.use) cmd.slot = a.bestSlot();
    }
    this.checkStuck(dt, cmd);
    return cmd;
  }

  engage(dt, cmd) {
    const G = this.G, a = this.a, t = this.target;
    this.seenFor += dt;
    this.reactT -= dt;
    // Error converges while tracking.
    const conv = Math.exp(-dt * (1.6 + (this.diff === 'expert' ? 2 : this.diff === 'hard' ? 1.2 : 0.4)));
    this.err.y *= conv; this.err.p *= conv;
    const jit = this.D.aimErr * 0.25 * dt * 8;
    this.err.y += (Math.random() - 0.5) * jit; this.err.p += (Math.random() - 0.5) * jit * 0.6;
    const ty = t.y + (this.aimHead ? t.eyeHeight() + 0.02 : t.bodyHeight() * 0.68);
    const lead = 0.06;
    const aim = this.aimAt(t.x + t.vx * lead, ty, t.z + t.vz * lead, dt, 1);
    const dist = aim.dist;
    let w = a.w;
    // Weapon choice.
    if (a.slot === 3 || a.slot === 4) cmd.slot = a.bestSlot();
    if (w.def.clip && w.clip === 0) {
      if (a.slot === 0 && a.slots[1] && a.slots[1].clip > 0 && dist < 18) cmd.slot = 1;
      else if (w.reserve > 0) cmd.reload = true;
      else if (a.slots[1] && a.slot !== 1) cmd.slot = 1;
      else cmd.slot = 2;
    }
    if (a.slot === 2 && (a.slots[0] || a.slots[1]) && dist > 3) cmd.slot = a.bestSlot();
    w = a.w;
    const def = w.def;
    // Movement during the fight.
    if (def.kind === 'knife') {
      cmd.wx = (t.x - a.x) / (dist || 1); cmd.wz = (t.z - a.z) / (dist || 1);
      if (Math.random() < 0.02) cmd.jump = true;
    } else {
      const sideX = Math.cos(a.yaw), sideZ = -Math.sin(a.yaw);
      this.strafeT -= dt;
      if (this.strafeT <= 0) { this.strafeT = 0.35 + Math.random() * 0.55; if (this.strafe) this.strafe = -this.strafe; }
      const longRange = dist > 14 && (def.kind === 'rifle' || def.kind === 'sniper');
      if (this.strafe && !longRange && !(def.kind === 'sniper')) { cmd.wx = sideX * this.strafe; cmd.wz = sideZ * this.strafe; }
      if (this.engageCrouch && def.kind !== 'sniper') cmd.crouch = true;
      if (def.kind === 'shotgun' && dist > 9) { const k = 1 / (dist || 1); cmd.wx = (t.x - a.x) * k; cmd.wz = (t.z - a.z) * k; }
    }
    // Pull the trigger once on target.
    const cur = { yaw: a.yaw, pitch: a.pitch };
    const offY = Math.abs(wrap(aim.yaw - this.err.y - cur.yaw)), offP = Math.abs(aim.pitch - this.err.p - cur.pitch);
    const tol = Math.atan2(0.4, dist) + 0.015;
    const onTarget = offY < tol * 1.6 && offP < tol * 2;
    if (this.reactT > 0 || !onTarget || a.switchT > 0) return;
    if (def.kind === 'sniper') {
      if (a.scope === 0 && dist > 5 && G.time >= a.nextFire && a.scopeRestore === undefined) { cmd.alt = true; this.scopeHold = 0; return; }
      this.scopeHold += dt;
      if (this.scopeHold > 0.18 + (this.diff === 'easy' ? 0.4 : 0.1) && !a.prevFire) cmd.fire = true;
      return;
    }
    if (def.kind === 'knife') { if (dist < 1.9) cmd.fire = true; if (dist < 1.6 && Math.random() < 0.3) cmd.alt = true; return; }
    if (def.auto) {
      if (this.burstPause > 0) { this.burstPause -= dt; return; }
      const maxBurst = dist < 8 ? 30 : dist < 20 ? this.D.burst : Math.max(2, this.D.burst >> 1);
      if (a.shotsFired >= maxBurst) { this.burstPause = 0.18 + Math.random() * 0.3 + dist * 0.006; return; }
      cmd.fire = true;
    } else {
      if (!a.prevFire && G.time >= a.nextFire + (dist > 20 ? 0.12 : 0.02)) cmd.fire = true;
    }
  }

  idleLook(dt) {
    const a = this.a;
    this.idleLookT -= dt;
    if (this.idleLookT <= 0) {
      this.idleLookT = 1 + Math.random() * 2.5;
      if (this.look) { this.wantYaw = Math.atan2(-(this.look.x - a.x), -(this.look.z - a.z)) + (Math.random() - 0.5) * 0.7; }
      else this.wantYaw = a.yaw + (Math.random() - 0.5) * 1.8;
      this.wantPitch = (Math.random() - 0.5) * 0.12;
    }
    this.turnTo(this.wantYaw, this.wantPitch, dt, 0.35);
  }

  lookAlongPath(dt) {
    if (this.moveYaw === undefined) return;
    let yaw = this.moveYaw, pitch = 0;
    const G = this.G;
    if (this.heard && G.time - this.heard.t < 2) {
      const a = this.a;
      yaw = Math.atan2(-(this.heard.x - a.x), -(this.heard.z - a.z));
    }
    this.turnTo(yaw, pitch, dt, 0.45);
  }

  objective(dt, cmd) {
    const G = this.G, a = this.a;
    // Chase the last known enemy position for a while.
    if (this.lastSeen && G.time - this.lastSeen.t < 3.5 && this.target && this.target.alive && !(a.hasBomb && G.phase === 'live')) {
      const done = this.goTo(this.lastSeen.x, this.lastSeen.z, cmd);
      this.aimAt(this.lastSeen.x, this.lastSeen.y + 1.4, this.lastSeen.z, dt, 0.6, false);
      if (done) this.lastSeen = null;
      // Throw an HE grenade at a target that just broke line of sight.
      if (a.nades.he > 0 && G.time - this.lastSeen?.t > 0.8 && Math.random() < 0.01) this.startThrow('he', this.lastSeen);
      return;
    }
    if (G.mode !== 'bomb') { this.roam(dt, cmd); return; }
    if (a.team === TEAM.T) this.playT(dt, cmd); else this.playCT(dt, cmd);
  }

  roam(dt, cmd) {
    const G = this.G, a = this.a;
    if (this.heard && G.time - this.heard.t < 4 && (!this.task || this.task.kind !== 'heard')) {
      this.task = { kind: 'heard', x: this.heard.x, z: this.heard.z };
    }
    const call = G.calls[a.team];
    if ((!this.task || this.task.done) && call && G.time - call.t < 5 && Math.random() < 0.5) this.task = { kind: 'call', x: call.x, z: call.z };
    if (!this.task || this.task.done) {
      const cells = G.grid.floorCells();
      const i = cells[(Math.random() * cells.length) | 0];
      const c = G.grid.center(i % G.grid.w, (i / G.grid.w) | 0);
      this.task = { kind: 'roam', x: c.x, z: c.z };
    }
    if (this.goTo(this.task.x, this.task.z, cmd)) this.task.done = true;
    this.lookAlongPath(dt);
  }

  playT(dt, cmd) {
    const G = this.G, a = this.a;
    const B = G.bomb;
    if (B.planted) {
      // Guard the planted bomb.
      if (!this.task || this.task.kind !== 'guard') {
        const spot = G.grid.randomCellIn([Math.floor(B.x / 2) - 4, Math.floor(B.z / 2) - 4, Math.floor(B.x / 2) + 4, Math.floor(B.z / 2) + 4], Math.random);
        this.task = { kind: 'guard', x: spot.x, z: spot.z };
      }
      if (this.goTo(this.task.x, this.task.z, cmd)) { this.look = this.look || { x: B.x, z: B.z }; this.idleLook(dt); cmd.crouch = Math.random() < 0.002 ? !cmd.crouch : this.task.crouch; }
      else this.lookAlongPath(dt);
      return;
    }
    if (B.dropped && !a.hasBomb) {
      // Nearest living T fetches a dropped bomb.
      const ts = G.actors.filter((x) => x.alive && x.team === TEAM.T);
      ts.sort((p, q) => Math.hypot(p.x - B.x, p.z - B.z) - Math.hypot(q.x - B.x, q.z - B.z));
      if (ts[0] === a) { this.goTo(B.x, B.z, cmd); this.lookAlongPath(dt); return; }
    }
    const site = G.tPlan;
    const rect = G.def.sites[site];
    if (a.hasBomb) {
      if (!this.task || this.task.kind !== 'plant' || this.task.site !== site) {
        const p = G.grid.randomCellIn(rect, Math.random, (cx, cz) => G.grid.h(cx, cz) > 0.01);
        this.task = { kind: 'plant', site, x: p.x, z: p.z };
      }
      const inSite = G.grid.inRect(a.x, a.z, rect);
      if (this.goTo(this.task.x, this.task.z, cmd) || (inSite && a.plantT > 0)) {
        if (inSite) { cmd.use = true; cmd.wx = cmd.wz = 0; cmd.crouch = true; }
        else this.task = null;
      } else this.lookAlongPath(dt);
      return;
    }
    // Escorts: move to the site, throw utility on entry, then hold.
    if (!this.task || this.task.kind !== 'push' || this.task.site !== site) {
      const p = G.grid.randomCellIn(rect, Math.random);
      this.task = { kind: 'push', site, x: p.x, z: p.z };
      this.nadeDone = false;
    }
    const sx = (rect[0] + rect[2] + 1), sz = (rect[1] + rect[3] + 1);
    const dSite = Math.hypot(a.x - sx, a.z - sz);
    if (!this.nadeDone && dSite < 22 && dSite > 9) {
      this.nadeDone = true;
      const k = a.nades.smoke && Math.random() < 0.6 ? 'smoke' : a.nades.flash ? 'flash' : null;
      if (k && Math.random() < 0.65) { this.startThrow(k, { x: sx + (Math.random() - 0.5) * 6, y: 1, z: sz + (Math.random() - 0.5) * 6 }); return; }
    }
    // Wait for the bomb carrier a little so the team arrives together.
    const carrier = G.actors.find((x) => x.alive && x.hasBomb);
    if (carrier && carrier !== a && dSite < 18 && Math.hypot(carrier.x - sx, carrier.z - sz) > dSite + 14) { this.idleLook(dt); return; }
    if (this.goTo(this.task.x, this.task.z, cmd)) {
      this.look = this.look || { x: G.spawnCenter(TEAM.CT).x, z: G.spawnCenter(TEAM.CT).z };
      this.idleLook(dt);
    } else this.lookAlongPath(dt);
    if (G.time - G.roundStart > 8 && this.remaining() > 20 && Math.random() < 0.001) cmd.walk = false;
  }

  playCT(dt, cmd) {
    const G = this.G, a = this.a;
    const B = G.bomb;
    if (B.planted) {
      const d = Math.hypot(a.x - B.x, a.z - B.z);
      const defuser = B.defuser;
      if (d < 1.3 && (!defuser || defuser === a)) {
        cmd.use = true; cmd.wx = cmd.wz = 0; cmd.crouch = true;
        this.aimAt(B.x, B.y, B.z, dt, 0.8, false);
        return;
      }
      if (defuser && defuser !== a && d < 10) {
        this.look = { x: a.x * 2 - B.x, z: a.z * 2 - B.z };
        this.idleLook(dt);
        return;
      }
      this.goTo(B.x, B.z, cmd);
      this.lookAlongPath(dt);
      return;
    }
    // Rotate on teammates' callouts.
    const call = G.calls[a.team];
    if (this.task && this.task.kind === 'hold' && this.task.arrived && call && G.time - call.t < 2 && !this.task.rotated && Math.hypot(call.x - a.x, call.z - a.z) > 12 && Math.random() < 0.45) {
      this.task = { kind: 'rotate', x: call.x, z: call.z };
    }
    if (!this.task || this.task.kind === 'rotate' && this.task.done) {
      const sites = Object.keys(G.def.sites);
      const idx = G.actors.filter((x) => x.team === TEAM.CT).indexOf(a);
      const site = sites[idx % sites.length];
      const p = G.grid.randomCellIn(G.def.sites[site], Math.random);
      this.task = { kind: 'hold', site, x: p.x, z: p.z, crouch: Math.random() < 0.3, rotated: false };
      this.look = G.siteEntry(site, Math.random);
    }
    if (this.goTo(this.task.x, this.task.z, cmd)) {
      this.task.arrived = true;
      if (this.task.kind === 'rotate') { this.task.done = true; this.task.rotated = true; }
      if (this.task.crouch) cmd.crouch = true;
      this.idleLook(dt);
    } else this.lookAlongPath(dt);
  }

  startThrow(key, target) {
    if (!this.a.nades[key] || !target) return;
    this.throwing = { key, x: target.x, y: target.y || 0, z: target.z, t: 0 };
  }

  doThrow(dt, cmd) {
    const a = this.a, T = this.throwing;
    T.t += dt;
    if (a.slot !== 3 || a.nadeKey !== T.key) {
      if (a.slot !== 3) cmd.slot = 3;
      else if (a.nades[T.key] > 0) a.nadeKey = T.key;
      if (T.t > 2) this.throwing = null;
      return;
    }
    const d = Math.hypot(T.x - a.x, T.z - a.z);
    const pitch = Math.max(0.1, Math.min(0.75, 0.08 + d * 0.022));
    this.turnTo(Math.atan2(-(T.x - a.x), -(T.z - a.z)), pitch, dt, 1.4);
    if (T.t > 0.6 && a.switchT <= 0 && a.throwT <= 0) cmd.fire = !a.prevFire;
    if (T.t > 1.8 || (a.slot !== 3)) this.throwing = null;
  }

  // ---------- economy ----------
  buy() {
    const G = this.G, a = this.a;
    if (G.mode !== 'bomb') return;
    const T = a.team === TEAM.T;
    const rifle = T ? 'ak47' : 'm4a1', cheap = T ? 'galil' : 'famas';
    const r = Math.random();
    const team = G.actors.filter((x) => x.team === a.team);
    const awpOnTeam = team.some((x) => x.slots[0] && x.slots[0].key === 'awp');
    const eco = G.round > 1 && a.money < 2300 && !a.slots[0];
    const b = (k) => G.buy(a, k, true);
    if (!a.slots[0] && !eco) {
      if (a.money >= 6000 && r < 0.22 && !awpOnTeam) b('awp');
      else if (a.money >= WEAPONS[rifle].price + 1000) b(rifle);
      else if (a.money >= 3000 && r < 0.6) b(cheap);
      else if (a.money >= 2500 && r < 0.4) b(r < 0.2 ? 'p90' : 'mp5');
      else if (a.money >= 2900 && r < 0.15) b('scout');
    }
    if (G.round === 1 || eco) {
      if (a.money >= 650 && r < 0.45) b('vest');
      else if (a.money >= 650 && r < 0.7) b('deagle');
    }
    if (a.money >= 1000 && (!a.helmet || a.armor < 70)) b('vesthelm');
    else if (a.money >= 650 && a.armor < 50 && !eco) b('vest');
    if (!T && a.money >= 400 && Math.random() < 0.65) b('kit');
    if (a.money >= 500 && Math.random() < 0.6) b('he');
    if (a.money >= 400 && Math.random() < 0.55) b('flash');
    if (a.money >= 500 && Math.random() < 0.45) b('smoke');
  }
}
