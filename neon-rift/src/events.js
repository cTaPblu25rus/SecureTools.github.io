import * as THREE from 'three';
import { BOSS_EVERY, BOSS_FIRST } from './config.js';
import { TAU, mulberry32, GLOW_TEX, LOW_H, HIGH_H } from './world.js';
import { t } from './i18n.js';

const hex = (n) => '#' + n.toString(16).padStart(6, '0');
const BOSS_AHEAD = 46;      // boss hovers this far in front of the ship
const FIGHT_LIMIT = 42;     // seconds before the boss gives up
const EVENTS = ['rain', 'dark', 'vortex'];

// The Rift Sentinel: a hovering eye in the middle of the tunnel.
function buildBoss() {
  const g = new THREE.Group();
  const shell = new THREE.Mesh(new THREE.IcosahedronGeometry(1.7, 1),
    new THREE.MeshBasicMaterial({ color: 0x220011 }));
  const wire = new THREE.LineSegments(new THREE.EdgesGeometry(new THREE.IcosahedronGeometry(1.75, 1)),
    new THREE.LineBasicMaterial({ color: 0xff003c }));
  const eye = new THREE.Mesh(new THREE.SphereGeometry(0.78, 24, 16), new THREE.MeshBasicMaterial({ color: 0xffffff }));
  eye.position.z = 1.2;
  const pupil = new THREE.Mesh(new THREE.SphereGeometry(0.38, 16, 12), new THREE.MeshBasicMaterial({ color: 0x000000 }));
  eye.add(pupil); pupil.position.z = 0.55;
  const ringMat = new THREE.MeshBasicMaterial({ color: 0xff003c, transparent: true, opacity: 0.9 });
  const r1 = new THREE.Mesh(new THREE.TorusGeometry(2.2, 0.07, 6, 64), ringMat);
  const r2 = new THREE.Mesh(new THREE.TorusGeometry(2.5, 0.05, 6, 64), ringMat);
  const spikes = new THREE.Group();
  const spikeGeo = new THREE.ConeGeometry(0.22, 1.1, 5);
  for (let i = 0; i < 8; i++) {
    const s = new THREE.Mesh(spikeGeo, wire.material);
    const a = (i / 8) * TAU;
    s.position.set(Math.cos(a) * 1.95, Math.sin(a) * 1.95, 0);
    s.rotation.z = a - Math.PI / 2;
    spikes.add(s);
  }
  const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: GLOW_TEX, color: 0xff003c, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false, opacity: 0.8 }));
  glow.scale.set(10, 10, 1);
  g.add(glow, shell, wire, eye, r1, r2, spikes);
  g.userData = { shell, wire, eye, pupil, r1, r2, spikes, glow, ringMat };
  g.traverse((o) => { if (o.material) o.material.fog = false; });
  g.visible = false;
  return g;
}

// Runs set pieces during a run: Sentinel boss fights and random events.
export class Director {
  constructor(game) {
    this.g = game;
    this.mesh = buildBoss();
    game.scene.add(this.mesh);
    this.v = new THREE.Vector3();
    this.reset(1);
  }

  reset(seed) {
    this.rng = mulberry32((seed ^ 0x5bd1e995) >>> 0);
    this.nextBossAt = BOSS_FIRST;
    this.level = 0;
    this.boss = null;
    this.warned = false;
    this.event = null;
    this.nextEventAt = 280 + this.rng() * 120;
    this.drift = 0;
    this.fogNear = 25; this.fogFar = 175;
    this.mesh.visible = false;
    this.g.world.holdAt = null;
    this.g.ui.bossBar(null);
  }

  get quiet() { return this.g.attract; }
  banner(text, color, sub) { if (!this.quiet) this.g.ui.banner(text, color, sub); }
  sfx(name) { if (!this.quiet) this.g.audio.play(name); }

  update(dt) {
    const r = this.g.run; const w = this.g.world;
    if (this.g.tutorial) return;
    // ---- boss scheduling ----
    if (!this.boss) {
      if (r.dist > this.nextBossAt - 230 && w.holdAt === null) w.holdAt = -(this.nextBossAt - 50);
      if (!this.warned && r.dist > this.nextBossAt - 120) {
        this.warned = true;
        this.banner(t('bossWarn'), '#ff003c', t('bossName'));
        this.sfx('alarm');
      }
      if (r.dist >= this.nextBossAt) this.startBoss();
    } else this.updateBoss(dt);

    // ---- random events (never during a boss) ----
    if (this.event) {
      const e = this.event;
      e.t += dt;
      const k = Math.min(1, e.t / 0.8, (e.dur - e.t) / 0.8);
      if (e.type === 'rain') {
        e.acc += dt;
        while (e.acc > 0.22) {
          e.acc -= 0.22;
          w.shardLine(this.rng() * TAU, r.z - 75 - this.rng() * 20, 3, 2.6, (this.rng() - 0.5) * 0.2);
        }
      } else if (e.type === 'dark') {
        this.fogNear = 25 - 19 * k; this.fogFar = 175 - 120 * k;
        r.eventMult = 2;
      } else if (e.type === 'vortex') {
        this.drift = e.dir * 1.0 * Math.max(0, k);
      }
      if (e.t >= e.dur) this.endEvent();
    } else if (!this.boss && r.dist > this.nextEventAt) {
      const nearBoss = r.dist > this.nextBossAt - 240;
      if (nearBoss) this.nextEventAt = this.nextBossAt + 260;
      else this.startEvent(EVENTS[Math.floor(this.rng() * EVENTS.length)]);
    }
  }

  startEvent(type) {
    const dur = { rain: 6.5, dark: 9, vortex: 8 }[type];
    this.event = { type, t: 0, dur, acc: 0, dir: this.rng() < 0.5 ? -1 : 1 };
    const col = { rain: '#7cf8ff', dark: '#b388ff', vortex: '#ffd54a' }[type];
    this.banner(t('ev_' + type), col, t('ev_' + type + '_sub'));
    this.sfx('biome');
  }
  endEvent() {
    this.event = null;
    this.drift = 0; this.fogNear = 25; this.fogFar = 175;
    this.g.run.eventMult = 1;
    this.nextEventAt = this.g.run.dist + 480 + this.rng() * 300;
  }

  // ---------------- boss ----------------
  startBoss() {
    if (this.event) this.endEvent();
    this.bossStart = this.g.run.dist;
    const hp = 3 + Math.min(3, this.level);
    this.boss = { hp, maxHp: hp, t: 0, attackT: 1.6, attacks: 0, enter: 0, hitFlash: 0, dying: 0, lastAngle: 0 };
    this.mesh.visible = true;
    this.mesh.scale.setScalar(0.01);
    const pal = this.g.pal;
    this.mesh.userData.wire.material.color.copy(pal.obstacle);
    this.mesh.userData.ringMat.color.copy(pal.accent);
    this.mesh.userData.glow.material.color.copy(pal.obstacle);
    if (!this.quiet) {
      this.g.ui.bossBar(1, t('bossName') + (this.level ? ' ' + 'I'.repeat(Math.min(3, this.level + 1)) : ''));
      this.g.ui.hint('bossHint');
      this.hintT = 3.5;
    }
    this.sfx('alarm');
    this.g.audio.setIntensity(1);
  }

  updateBoss(dt) {
    const b = this.boss; const r = this.g.run; const w = this.g.world;
    const ud = this.mesh.userData;
    b.t += dt;
    if (this.hintT > 0 && (this.hintT -= dt) <= 0) this.g.ui.hint('');
    // pose
    const z = r.z - BOSS_AHEAD;
    b.enter = Math.min(1, b.enter + dt * 0.8);
    const wob = Math.sin(b.t * 1.7) * 0.6;
    this.mesh.position.set(Math.sin(b.t * 0.9) * 0.6, Math.cos(b.t * 1.3) * 0.4 + wob * 0.2, z);
    const s = 2.2 * (b.dying > 0 ? 1 + b.dying * 0.6 : 1) * (0.3 + 0.7 * b.enter) * (1 + b.hitFlash * 0.25);
    this.mesh.scale.setScalar(s);
    ud.shell.rotation.y += dt * 0.6; ud.wire.rotation.y = ud.shell.rotation.y; ud.wire.rotation.x += dt * 0.3;
    ud.r1.rotation.x = b.t * 1.4; ud.r1.rotation.y = b.t * 0.7;
    ud.r2.rotation.y = -b.t * 1.1; ud.r2.rotation.x = b.t * 0.5;
    ud.spikes.rotation.z = b.t * 0.8;
    // the eye tracks the ship
    this.v.copy(this.g.player.root.position).sub(this.mesh.position).normalize();
    ud.eye.position.copy(this.v).multiplyScalar(1.25);
    ud.eye.lookAt(this.g.player.root.position);
    ud.eye.material.color.setRGB(1, 1 - b.hitFlash * 0.8, 1 - b.hitFlash * 0.8);
    b.hitFlash = Math.max(0, b.hitFlash - dt * 3);
    ud.glow.material.opacity = 0.6 + 0.3 * Math.sin(b.t * 6);

    if (b.dying > 0) {
      b.dying += dt;
      if (Math.random() < 0.5) this.g.particles.burst(this.mesh.position, this.g.pal.obstacle.getHex(), 8, 10, 0.6, 0.6);
      if (b.dying > 1.2) this.finishBoss(true);
      return;
    }
    if (b.t > FIGHT_LIMIT) { this.finishBoss(false); return; }
    if (b.enter < 1) return;

    // attacks launch from the boss toward the ship
    b.attackT -= dt;
    if (b.attackT <= 0) {
      b.attackT = Math.max(0.85, 1.5 - this.level * 0.12);
      this.attack(z + 3);
      b.attacks++;
      if (b.attacks >= 2) this.dropCore(z + 3 + (r.speed * b.attackT) / 2);
    }
    w.holdAt = Infinity;   // keep normal generation paused while the fight lasts
  }

  attack(z) {
    const r = this.g.run; const w = this.g.world; const rng = this.rng;
    const lv = this.level;
    w.kind = 'boss';
    const pool = ['aim', 'aim', 'ring', 'hurdle'];
    if (lv >= 1 || this.boss.attacks > 3) pool.push('spin', 'slide');
    if (lv >= 2) pool.push('double');
    const kind = pool[Math.floor(rng() * pool.length)];
    // predict where the ship will be
    const aim = r.theta;
    let a = aim;
    switch (kind) {
      case 'aim':
        w.addObstacle({ z, a0: aim, aw: 0.55, h: HIGH_H, depth: 1.4, arms: lv >= 1 ? [0, Math.PI] : [0] });
        break;
      case 'ring':
        a = aim + (rng() < 0.5 ? -1 : 1) * (1.2 + rng() * 1.4);
        w.addObstacle({ z, a0: a + Math.PI, aw: Math.PI - 0.8, h: HIGH_H, depth: 1.2 });
        break;
      case 'hurdle':
        w.addObstacle({ z, a0: aim, aw: Math.PI + 1, h: LOW_H, depth: 0.6 });
        break;
      case 'spin':
        w.addObstacle({ z, a0: aim + 0.6, aw: 0.42, h: HIGH_H, depth: 1.2, arms: [0, TAU / 3, (2 * TAU) / 3], spin: (rng() < 0.5 ? -1 : 1) * (1.1 + lv * 0.2) });
        break;
      case 'slide':
        w.addObstacle({ z, a0: aim, aw: 0.5, h: HIGH_H, depth: 1.4, arms: [0, Math.PI], ampl: 1.1, freq: 2.2, phase: rng() * TAU });
        break;
      case 'double':
        w.addObstacle({ z, a0: aim, aw: 0.5, h: LOW_H, depth: 0.8, arms: [0, TAU / 3, (2 * TAU) / 3] });
        w.addObstacle({ z: z - 2.2, a0: aim + Math.PI / 3, aw: 0.5, h: HIGH_H, depth: 0.8, arms: [0, TAU / 3, (2 * TAU) / 3] });
        break;
    }
    this.boss.lastAngle = a;
    this.sfx('laser');
    this.g.particles.burst(this.mesh.position, this.g.pal.obstacle.getHex(), 18, 9, 0.5, 0.5);
  }

  dropCore(z) {
    const w = this.g.world;
    let th = this.g.run.theta + (this.rng() - 0.5) * 2.4;
    for (let k = 0; k < 12 && w.blockedAt(th, z, 0); k++) th += 0.5;
    w.addItem('core', th, z);
  }

  hit() {
    const b = this.boss;
    if (!b || b.dying) return;
    b.hp--; b.hitFlash = 1;
    this.g.shake = Math.max(this.g.shake, 0.5);
    this.g.particles.burst(this.mesh.position, 0xffffff, 40, 14, 0.8, 0.6);
    this.sfx('bossHit');
    this.g.vibrate(60);
    if (!this.quiet) this.g.ui.bossBar(b.hp / b.maxHp);
    if (b.hp <= 0) { b.dying = 0.01; this.sfx('bossDie'); }
  }

  finishBoss(won) {
    const r = this.g.run; const w = this.g.world;
    this.mesh.visible = false;
    this.boss = null;
    this.warned = false;
    w.holdAt = null;
    w.cursor = r.z - 70;
    this.nextBossAt = Math.max(this.bossStart + BOSS_EVERY, r.dist + 400);
    this.nextEventAt = Math.max(this.nextEventAt, r.dist + 220);
    if (!this.quiet) { this.g.ui.bossBar(null); this.g.ui.hint(''); }
    this.g.audio.setIntensity(Math.min(1, r.dist / 2500));
    if (won) {
      const reward = 60 + this.level * 30;
      r.shards += reward;
      r.score += 2000 * (this.level + 1);
      r.bosses++;
      this.g.particles.burst(this.mesh.position, this.g.pal.obstacle.getHex(), 160, 22, 1.6, 0.8);
      this.g.particles.burst(this.mesh.position, 0xffffff, 80, 16, 1.2, 0.6);
      this.g.shake = 1;
      if (!this.quiet) {
        this.g.ui.flash();
        this.banner(t('bossDown'), '#ffd54a', '+' + reward + ' 💎');
      }
      this.sfx('mission');
    } else {
      this.banner(t('bossFled'), hex(0x9aa6c8), '');
    }
    this.level++;
  }
}
