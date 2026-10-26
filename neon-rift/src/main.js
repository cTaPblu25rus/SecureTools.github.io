import * as THREE from 'three';
import { EffectComposer } from 'three/examples/jsm/postprocessing/EffectComposer.js';
import { RenderPass } from 'three/examples/jsm/postprocessing/RenderPass.js';
import { UnrealBloomPass } from 'three/examples/jsm/postprocessing/UnrealBloomPass.js';
import { OutputPass } from 'three/examples/jsm/postprocessing/OutputPass.js';
import {
  SHIP_R, JUMP_V, GRAVITY, SLAM_V, BASE_SPEED, MAX_SPEED, KEY_TURN_SPEED, PLAYER_HALF_LEN,
  BIOMES, BIOME_LENGTH, SKINS, POWERUPS, UPGRADE_DUR, UPGRADE_COST, REVIVE_COST, DAILY_REWARDS, MISSION_TEMPLATES,
} from './config.js';
import { World, Palette, polar, angDiff, TAU } from './world.js';
import { Player } from './player.js';
import { Particles } from './fx.js';
import { AudioEngine, renderOffline } from './audio.js';
import { Input } from './input.js';
import { UI, fmt } from './ui.js';
import { botThink } from './bot.js';
import * as store from './storage.js';
import { t, setLang } from './i18n.js';

const params = new URLSearchParams(location.search);
const CAPTURE = params.has('capture');
const DEMO = params.has('demo');
const hex = (n) => '#' + n.toString(16).padStart(6, '0');
const today = () => { const d = new Date(); return d.getFullYear() + '-' + (d.getMonth() + 1) + '-' + d.getDate(); };

class Game {
  constructor() {
    this.save = store.load();
    setLang(this.save.settings.lang);
    this.ensureMissions();

    this.canvas = document.getElementById('c');
    this.renderer = new THREE.WebGLRenderer({ canvas: this.canvas, antialias: true, powerPreference: 'high-performance', preserveDrawingBuffer: CAPTURE });
    this.renderer.setClearColor(0x000000);
    this.scene = new THREE.Scene();
    this.pal = new Palette();
    this.scene.fog = new THREE.Fog(0x000000, 30, 175);
    this.scene.fog.color = this.pal.fog;
    this.scene.background = this.pal.fog;
    this.camera = new THREE.PerspectiveCamera(72, 1, 0.1, 400);
    this.scene.add(this.camera);
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x303060, 1.6));
    const key = new THREE.DirectionalLight(0xffffff, 2.2); key.position.set(0.5, 1, 1.5);
    this.camera.add(key); this.camera.add(key.target); key.target.position.set(0, 0, -5);

    this.world = new World(this.scene, this.pal);
    this.player = new Player(this.scene);
    this.particles = new Particles(this.scene);
    this.audio = new AudioEngine();
    this.input = new Input(this.canvas, () => this.save.settings);
    this.ui = new UI(this);
    this.applyAudio();

    this.state = 'menu';
    this.attract = true;   // bot flies in the background of the menu
    this.botOn = false;
    this.time = 0; this.realTime = 0;
    this.shake = 0; this.timeScale = 1;
    this.camTheta = 0; this.camPos = new THREE.Vector3(); this.camLook = new THREE.Vector3(); this.up = new THREE.Vector3();
    this.showroom = false; this.showroomK = 0;
    this.fpsAcc = 0; this.fpsFrames = 0; this.lowFpsTime = 0;
    this.qualityLevel = null;

    this.setupComposer();
    this.applyQuality();
    this.player.setSkin(this.skinById(this.save.skin));
    this.newRun(true);
    this.resize();
    window.addEventListener('resize', () => this.resize());
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) { if (this.state === 'playing') this.pause(); this.audio.suspend(); } else this.audio.resume();
    });
    window.onAndroidBack = () => this.handleBack();
    window.onAndroidPause = () => { if (this.state === 'playing') this.pause(); this.audio.suspend(); };
    window.onAndroidResume = () => this.audio.resume();
    window.addEventListener('pointerdown', () => this.audio.unlock(), { once: false });
    this.setupInstall();

    this.ui.show('sMenu');
    this.audio.setMode('menu');
    setTimeout(() => this.checkDaily(), 600);
    document.getElementById('boot').classList.add('gone');
  }

  // ---------------- setup ----------------
  setupComposer() {
    this.composer = new EffectComposer(this.renderer);
    this.composer.addPass(new RenderPass(this.scene, this.camera));
    this.bloom = new UnrealBloomPass(new THREE.Vector2(256, 256), 0.8, 0.45, 0.32);
    this.composer.addPass(this.bloom);
    this.composer.addPass(new OutputPass());
  }
  applyQuality() {
    let q = this.save.settings.quality;
    if (q === 'auto') q = this.qualityLevel || (matchMedia('(pointer: coarse)').matches ? 'med' : 'high');
    this.activeQuality = q;
    const dpr = window.devicePixelRatio || 1;
    const cap = q === 'low' ? 1 : q === 'med' ? 1.5 : 2;
    this.renderer.setPixelRatio(Math.min(dpr, cap) * (q === 'low' ? 0.8 : 1));
    this.bloom.enabled = q !== 'low';
    this.resize();
  }
  resize() {
    const w = window.innerWidth; const h = window.innerHeight;
    this.renderer.setSize(w, h, false);
    this.composer.setSize(w, h);
    this.composer.setPixelRatio(this.renderer.getPixelRatio());
    this.bloom.resolution.set(w / 2, h / 2);
    this.camera.aspect = w / h;
    this.baseFov = w / h < 0.8 ? 78 : 68;
    this.camera.updateProjectionMatrix();
    this.particles.mat.uniforms.uScale.value = (h * this.renderer.getPixelRatio()) / (2 * Math.tan((this.camera.fov * Math.PI) / 360));
  }
  applyAudio() { this.audio.setVolumes(this.save.settings.music * 0.8, this.save.settings.sfx); }
  persist() { store.save(this.save); }
  skinById(id) { return SKINS.find((s) => s.id === id) || SKINS[0]; }
  vibrate(ms) {
    if (!this.save.settings.vibration || this.attract) return;
    try {
      if (window.AndroidBridge && window.AndroidBridge.vibrate) window.AndroidBridge.vibrate(ms);
      else if (navigator.vibrate) navigator.vibrate(ms);
    } catch (e) { /* ignore */ }
  }
  setupInstall() {
    window.addEventListener('beforeinstallprompt', (e) => {
      e.preventDefault(); this.installEvt = e;
      document.getElementById('btnInstall').classList.remove('hidden');
    });
    document.getElementById('btnInstall').addEventListener('click', (e) => {
      e.stopPropagation();
      if (this.installEvt) { this.installEvt.prompt(); this.installEvt = null; e.target.classList.add('hidden'); }
    });
  }

  // ---------------- runs ----------------
  newRun(attract, seed) {
    this.attract = attract;
    this.world.reset(seed ?? ((Math.random() * 1e9) | 0));
    this.tutorial = !attract && !this.save.tutorialDone && !DEMO;
    if (this.tutorial) this.world.useTutorial();
    this.particles.clear();
    this.run = {
      z: 0, dist: 0, theta: 0, omega: 0, h: 0, vy: 0, airborne: false, speed: BASE_SPEED,
      score: 0, shards: 0, mult: 1, combo: 0, comboTimer: 0, near: 0, jumps: 0, powerupsTaken: 0, maxMult: 1,
      lastJumpDist: 0, noJumpBest: 0, shardChain: 0, shardChainT: 0,
      powers: { shield: 0, magnet: 0, boost: 0, x2: 0 }, powerMax: { shield: 1, magnet: 1, boost: 1, x2: 1 },
      invuln: 0, revived: false, alive: true, deadT: 0, biome: 0, completed: new Set(),
    };
    this.time = 0;
    this.camTheta = 0;
    this.nextMilestone = 500;
    this.bestBroken = false;
    const bd = attract || DEMO ? 0 : this.save.bestDist;
    this.world.showBest(bd > 60 ? bd : 0, t('bestMark', { d: fmt(bd) }));
    this.pal.snap(BIOMES[0]);
    this.player.setVisible(true);
    this.player.place(0, 0, 0, 0, 0, 0, 0, false);
    this.player.resetTrail();
    this.timeScale = 1;
  }
  startRun() {
    this.audio.unlock();
    clearTimeout(this.ui.reviveTO);
    this.newRun(false, DEMO ? 1234 : undefined);
    this.state = 'playing';
    this.botOn = DEMO;
    this.input.enabled = true; this.input.reset();
    this.ui.show(null); this.ui.setHud(true); this.ui.resetHud();
    this.audio.setMode('game');
    this.player.setSkin(this.skinById(this.save.skin));
    this.player.resetTrail();
    if (this.tutorial) this.ui.hint(this.input.usedKeyboard ? 'hintSteerKeys' : 'hintSteer');
  }
  pause() {
    if (this.state !== 'playing') return;
    this.state = 'paused';
    this.ui.show('sPause');
  }
  resume() {
    if (this.state !== 'paused') return;
    this.state = 'playing';
    this.input.reset();
    this.ui.show(null);
  }
  toMenu() {
    clearTimeout(this.ui.reviveTO);
    this.state = 'menu';
    this.input.enabled = false;
    this.ui.setHud(false); this.ui.hint('');
    this.newRun(true);
    this.player.setSkin(this.skinById(this.save.skin));
    this.audio.setMode('menu');
    this.ui.show('sMenu');
    this.checkDaily();
  }
  handleBack() {
    if (this.state === 'playing') { this.pause(); return 'ok'; }
    if (this.state === 'paused') { this.resume(); return 'ok'; }
    if (this.ui.back()) return 'ok';
    if (this.state === 'over') { this.toMenu(); return 'ok'; }
    return 'exit';
  }
  setShowroom(on) {
    this.showroom = on;
    if (!on && this.previewId) { this.previewId = null; this.player.setSkin(this.skinById(this.save.skin)); this.player.resetTrail(); }
  }
  previewSkin(id) {
    this.previewId = id; this.player.setSkin(this.skinById(id)); this.player.resetTrail(); this.audio.play('click');
  }

  // ---------------- economy ----------------
  buySkin(id) {
    const sk = this.skinById(id); const sv = this.save;
    if (sv.skins.includes(id)) { sv.skin = id; this.audio.play('click'); }
    else if (sv.shards >= sk.price) { sv.shards -= sk.price; sv.skins.push(id); sv.skin = id; this.audio.play('buy'); this.ui.toast(t('bought')); }
    else { this.ui.toast(t('notEnough')); this.audio.play('crash'); return; }
    this.persist(); this.previewId = null;
    this.player.setSkin(sk); this.player.resetTrail();
    this.ui.renderShop();
  }
  buyUpgrade(k) {
    const sv = this.save; const lvl = sv.upgrades[k];
    if (lvl >= UPGRADE_COST.length) return;
    const cost = UPGRADE_COST[lvl];
    if (sv.shards < cost) { this.ui.toast(t('notEnough')); return; }
    sv.shards -= cost; sv.upgrades[k]++; this.persist();
    this.audio.play('buy'); this.ui.renderShop();
  }
  ensureMissions() {
    const sv = this.save;
    if (!sv.missions) sv.missions = [];
    const used = new Set(sv.missions.map((m) => m.tpl));
    while (sv.missions.length < 3) {
      const free = MISSION_TEMPLATES.filter((m) => !used.has(m.id));
      const tpl = free[Math.floor(Math.random() * free.length)];
      used.add(tpl.id);
      const lv = sv.missionLevel;
      sv.missions.push({ tpl: tpl.id, stat: tpl.stat, target: tpl.base + tpl.step * lv, reward: tpl.reward + 20 * lv, best: 0, done: false, claimed: false });
    }
  }
  claimMission(m) {
    const sv = this.save;
    sv.shards += m.reward; m.claimed = true;
    sv.missions = sv.missions.filter((x) => x !== m);
    sv.missionLevel++;
    this.ensureMissions(); this.persist();
    this.audio.play('buy');
    this.ui.renderMissions();
  }
  runStat(stat) {
    const r = this.run;
    return { dist: r.dist, shards: r.shards, near: r.near, jumps: r.jumps, powerups: r.powerupsTaken, score: r.score, combo: r.maxMult, nojump: r.noJumpBest }[stat];
  }
  checkMissions() {
    if (this.attract) return;
    for (const m of this.save.missions) {
      if (m.done) continue;
      const v = this.runStat(m.stat);
      if (v >= m.target) {
        m.done = true; m.best = m.target;
        this.ui.toast('🎯 ' + t('missionDone') + ' +' + m.reward);
        this.audio.play('mission');
      }
    }
  }
  checkDaily() {
    if ((CAPTURE && !params.has('daily')) || DEMO) return;
    const d = this.save.daily; const now = today();
    if (d.last === now) return;
    const y = new Date(); y.setDate(y.getDate() - 1);
    const yesterday = y.getFullYear() + '-' + (y.getMonth() + 1) + '-' + y.getDate();
    this.dailyStreak = d.last === yesterday ? Math.min(7, d.streak + 1) : 1;
    if (d.last === yesterday && d.streak >= 7) this.dailyStreak = 1;
    if (this.state === 'menu') this.ui.showDaily(this.dailyStreak);
  }
  claimDaily() {
    const reward = DAILY_REWARDS[this.dailyStreak - 1];
    this.save.shards += reward;
    this.save.daily = { last: today(), streak: this.dailyStreak };
    this.persist();
    this.audio.play('buy');
    this.ui.toast('+' + reward + ' 💎');
    this.ui.show('sMenu');
  }
  revive() {
    const cost = this.reviveCost();
    if (this.state !== 'over' || this.run.revived || this.save.shards < cost) return;
    this.save.shards -= cost; this.persist();
    clearTimeout(this.ui.reviveTO);
    const r = this.run;
    r.revived = true; r.alive = true; r.invuln = 2.5; r.h = 0; r.vy = 0; r.airborne = false;
    this.world.clearAhead(r.z, 70);
    this.player.setVisible(true); this.player.resetTrail();
    this.timeScale = 1;
    this.state = 'playing';
    this.input.reset();
    this.ui.show(null); this.ui.setHud(true);
    this.audio.setMode('game');
    this.audio.play('power');
    this.ui.flash();
  }
  reviveCost() { return REVIVE_COST; }
  share() {
    const text = t('shareText', { d: fmt(this.run.dist), s: fmt(this.run.score) });
    if (navigator.share) navigator.share({ title: 'NEON RIFT', text }).catch(() => {});
    else if (navigator.clipboard) navigator.clipboard.writeText(text).then(() => this.ui.toast('✔'));
  }
  resetProgress() {
    this.save = store.wipe();
    this.ensureMissions(); this.persist();
    location.reload();
  }

  // ---------------- simulation ----------------
  activatePower(type) {
    const r = this.run;
    const dur = UPGRADE_DUR[type][this.save.upgrades[type]];
    r.powers[type] = dur; r.powerMax[type] = dur;
    r.powerupsTaken++;
    this.audio.play('power');
    this.vibrate(30);
    this.ui.pop(t('up_' + type).toUpperCase(), hex(POWERUPS[type].color));
    polar(r.theta, SHIP_R - r.h, r.z - 1, this._v1 || (this._v1 = new THREE.Vector3()));
    this.particles.burst(this._v1, POWERUPS[type].color, 40, 8, 0.7, 0.5);
  }

  crash(o) {
    const r = this.run;
    this.lastCrash = o ? { kind: o.kind, low: o.low, dist: Math.floor(r.dist), h: +r.h.toFixed(2), speed: +r.speed.toFixed(1) } : null;
    r.alive = false; r.deadT = 0;
    this.state = this.attract ? 'menu' : 'dying';
    this.shake = 1.2;
    this.timeScale = 0.25;
    const p = this.player.root.position;
    this.particles.burst(p, this.player.skin.glow, 140, 16, 1.4, 0.6);
    this.particles.burst(p, 0xffffff, 60, 10, 0.9, 0.4);
    this.particles.burst(p, o && o.low ? this.pal.low.getHex() : this.pal.obstacle.getHex(), 80, 12, 1.2, 0.5);
    this.player.setVisible(false);
    this.audio.play('crash');
    this.vibrate(220);
    if (!this.attract) { this.ui.flash(); this.ui.hint(''); this.audio.setMode('menu'); }
  }

  gameOver() {
    const r = this.run; const sv = this.save;
    this.state = 'over';
    this.ui.setHud(false);
    const score = Math.floor(r.score);
    const isBest = score > sv.best;
    if (!r.counted) {
      r.counted = true;
      sv.stats.runs++;
    }
    // account the run (only the delta since a previous revive-death)
    const prev = r.accounted || { dist: 0, shards: 0 };
    sv.stats.dist += r.dist - prev.dist;
    sv.shards += r.shards - prev.shards;
    sv.stats.shards += r.shards - prev.shards;
    r.accounted = { dist: r.dist, shards: r.shards };
    if (isBest) sv.best = score;
    sv.bestDist = Math.max(sv.bestDist, Math.floor(r.dist));
    for (const m of sv.missions) m.best = Math.max(m.best, Math.min(m.target, this.runStat(m.stat)));
    // records (replace this run's earlier entry after revive)
    if (r.recordRef) sv.records.splice(sv.records.indexOf(r.recordRef), 1);
    const d = new Date();
    r.recordRef = { score, dist: Math.floor(r.dist), date: d.getDate() + '.' + (d.getMonth() + 1) + '.' + d.getFullYear() };
    sv.records.push(r.recordRef);
    sv.records.sort((a, b) => b.score - a.score);
    sv.records = sv.records.slice(0, 10);
    if (!sv.records.includes(r.recordRef)) r.recordRef = null;
    this.persist();
    this.ui.showOver({ score, dist: r.dist, shards: r.shards }, isBest, !r.revived && !DEMO, this.reviveCost(), sv.missions);
    this.input.enabled = false;
  }

  step(dt) {
    const r = this.run;
    const playing = this.state === 'playing' || (this.attract && r.alive);
    if (this.state === 'paused' || this.state === 'over') {
      this.render(dt, false);
      return;
    }
    if (this.input.pauseReq) {
      this.input.pauseReq = false;
      if (this.state === 'playing') this.pause();
    }
    // slow-motion recovery
    this.timeScale += (1 - this.timeScale) * Math.min(1, dt * (r.alive ? 3 : 0.8));
    const sdt = dt * this.timeScale * (this.attract && this.showroomK > 0.5 ? 0.35 : 1);
    this.realTime += dt;
    this.time += sdt;

    if (playing) this.simulate(sdt);
    else if (!r.alive) {
      r.deadT += dt;
      if (this.attract && r.deadT > 1.6) this.newRun(true);
      else if (this.state === 'dying' && r.deadT > 1.3) this.gameOver();
    }
    this.pal.update(dt);
    this.world.update(sdt, this.time, r.z, r.speed, r.powers.boost > 0);
    this.particles.update(sdt);
    this.render(dt, true);
  }

  simulate(dt) {
    const r = this.run; const w = this.world; const inp = this.input;
    const bot = this.attract || this.botOn;
    if (this.attract && this.showroom) r.invuln = 0.5;
    // speed
    const target = Math.min(MAX_SPEED, BASE_SPEED + r.dist * 0.0075) * (r.powers.boost > 0 ? 1.75 : 1);
    r.speed += (target - r.speed) * Math.min(1, dt * (r.powers.boost > 0 ? 3 : 1.2));
    w.spawn(r.z, r.dist, Math.min(MAX_SPEED, BASE_SPEED + r.dist * 0.0075), this.time);

    // steering
    const oldTheta = r.theta;
    let dTheta = 0;
    if (bot) {
      const b = botThink(r, w, this.time, 4.2);
      const want = b.target - r.theta;
      dTheta = Math.max(-4.2 * dt, Math.min(4.2 * dt, want * Math.min(1, dt * 9)));
      if (b.jump) inp.jumpReq = performance.now();
      if (this.attract) inp.drag = 0;
    } else {
      const s = this.save.settings;
      dTheta += inp.consumeDrag();
      dTheta += inp.keyDir * KEY_TURN_SPEED * s.sensitivity * dt;
      if (s.controls === 'tilt') dTheta += inp.tilt * KEY_TURN_SPEED * 1.2 * s.sensitivity * dt;
    }
    r.theta += dTheta;
    r.omega += ((dTheta / Math.max(dt, 1e-4)) - r.omega) * Math.min(1, dt * 10);

    // jump / gravity
    if (inp.wantJump() && !r.airborne) {
      inp.clearJump();
      r.vy = JUMP_V; r.airborne = true; r.jumps++;
      r.noJumpBest = Math.max(r.noJumpBest, r.dist - r.lastJumpDist);
      r.lastJumpDist = r.dist;
      this.audio.play('jump');
    }
    if (r.airborne && inp.wantSlam()) { r.vy = SLAM_V; this.audio.play('slam'); }
    if (r.airborne) {
      r.vy -= GRAVITY * dt; r.h += r.vy * dt;
      if (r.h <= 0) {
        r.h = 0; r.vy = 0; r.airborne = false;
        this.audio.play('land');
        this.particles.burst(polar(r.theta, SHIP_R + 0.4, r.z, this._v2 || (this._v2 = new THREE.Vector3())), this.pal.grid.getHex(), 12, 4, 0.4, 0.25);
      }
    }
    if (!r.airborne) r.noJumpBest = Math.max(r.noJumpBest, r.dist - r.lastJumpDist);

    // advance
    const oldZ = r.z;
    r.z -= r.speed * dt;
    r.dist = -r.z;
    for (const k in r.powers) if (r.powers[k] > 0) r.powers[k] = Math.max(0, r.powers[k] - dt);
    r.invuln = Math.max(0, r.invuln - dt);
    const boost = r.powers.boost > 0;

    // obstacles (swept in z and in angle)
    const steps = Math.max(1, Math.ceil(Math.abs(r.theta - oldTheta) * SHIP_R / 0.4));
    for (let i = w.obstacles.length - 1; i >= 0; i--) {
      const o = w.obstacles[i];
      const front = o.z - o.depth / 2; const back = o.z + o.depth / 2;
      if (back < r.z - PLAYER_HALF_LEN || front > oldZ + PLAYER_HALF_LEN) {
        if (!o.passed && front > r.z + PLAYER_HALF_LEN) this.passObstacle(o);
        continue;
      }
      let clear = Infinity;
      for (let k = 1; k <= steps; k++) clear = Math.min(clear, w.angularClear(o, o.a, oldTheta + (r.theta - oldTheta) * (k / steps)));
      const overlapA = clear < 0;
      const above = r.h - o.h;
      const hit = overlapA && above < -0.05;
      const c = overlapA ? above : clear;
      o.minClear = Math.min(o.minClear, Math.max(0, c));
      if (hit) {
        if (boost) { this.smash(o); continue; }
        if (r.invuln > 0) continue;
        if (r.powers.shield > 0) {
          r.powers.shield = 0; r.invuln = 1.0;
          this.smash(o);
          this.audio.play('shield'); this.ui.pop(t('shieldBroken'), '#40c4ff'); this.vibrate(80);
          continue;
        }
        this.crash(o);
        return;
      }
    }

    // shards
    const sp = this.player.root.position;
    const magnet = r.powers.magnet > 0;
    for (const s of w.shards) {
      if (!s.alive) continue;
      const dz = s.z - r.z;
      if (magnet && !s.magnet && dz < 2 && dz > -22) s.magnet = true;
      let got = false;
      if (s.magnet) {
        const m = s.mesh.position;
        m.lerp(sp, Math.min(1, dt * 9));
        m.z += (r.z - oldZ) * 0.5;
        if (m.distanceToSquared(sp) < 1.2) got = true;
      } else if (Math.abs(dz) < 1.25 && Math.abs(angDiff(s.theta, r.theta)) * SHIP_R < 0.95 && Math.abs(s.lift - r.h) < 1.1) got = true;
      if (got) {
        s.alive = false;
        r.shards++;
        r.shardChain = r.shardChainT > 0 ? r.shardChain + 1 : 0; r.shardChainT = 0.6;
        r.combo += 0.34; r.comboTimer = 3;
        r.score += 10 * r.mult * (r.powers.x2 > 0 ? 2 : 1);
        this.audio.play('shard', r.shardChain);
        this.particles.burst(s.mesh.position, this.pal.shard.getHex(), 10, 5, 0.45, 0.3);
      }
    }
    r.shardChainT -= dt;
    // power-up items
    for (const it of w.items) {
      if (!it.alive) continue;
      if (Math.abs(it.z - r.z) < 1.5 && Math.abs(angDiff(it.theta, r.theta)) * SHIP_R < 1.25 && r.h < 1.8) {
        it.alive = false; this.activatePower(it.type);
      }
    }

    // combo & score
    r.comboTimer -= dt;
    if (r.comboTimer <= 0) r.combo = Math.max(0, r.combo - dt * 1.5);
    r.mult = Math.min(8, 1 + Math.floor(r.combo / 5));
    r.maxMult = Math.max(r.maxMult, r.mult);
    r.score += (oldZ - r.z) * r.mult * (r.powers.x2 > 0 ? 2 : 1);

    // biome
    const bi = Math.floor(r.dist / BIOME_LENGTH) % BIOMES.length;
    if (bi !== r.biome) {
      r.biome = bi;
      this.pal.setTarget(BIOMES[bi]);
      if (!this.attract) {
        this.ui.biome(BIOMES[bi].name[this.save.settings.lang] || BIOMES[bi].name.en, hex(BIOMES[bi].grid));
        this.audio.play('biome');
      }
    }

    if (!this.attract) {
      if (r.dist >= this.nextMilestone) {
        const m = Math.floor(r.dist / 500) * 500;
        this.ui.pop(t('meters', { d: fmt(m) }), '#7cf8ff');
        this.nextMilestone = m + 500;
      }
      if (!this.bestBroken && this.world.bestRing.visible && r.dist > this.save.bestDist) {
        this.bestBroken = true;
        this.ui.toast('🏆 ' + t('beatBest'));
        this.audio.play('mission');
        this.particles.burst(this.player.root.position, 0xffd54a, 60, 12, 1, 0.5);
      }
      this.checkMissions();
      this.audio.setIntensity(Math.min(1, r.dist / 2500));
      this.ui.hud(r, Math.max(0, Math.min(1, r.comboTimer / 3)));
      if (this.tutorial) this.tutorialHints();
    }
  }

  tutorialHints() {
    const d = this.run.dist; const kb = this.input.usedKeyboard;
    if (d < 112) this.ui.hint(kb ? 'hintSteerKeys' : 'hintSteer');
    else if (d < 186) this.ui.hint(this.run.airborne ? '' : (kb ? 'hintJumpKeys' : 'hintJump'));
    else if (d < 258) this.ui.hint('hintGap');
    else if (d < 320) this.ui.hint('hintGo');
    else { this.ui.hint(''); this.tutorial = false; this.save.tutorialDone = true; this.persist(); }
  }

  passObstacle(o) {
    o.passed = true;
    const r = this.run;
    if (o.minClear < 0.45 && r.powers.boost <= 0 && r.alive) {
      r.near++; r.combo += 1; r.comboTimer = 3;
      r.score += 25 * r.mult;
      if (!this.attract) {
        this.ui.pop(t('near') + ' +' + 25 * r.mult, '#ffd54a');
        this.audio.play('near'); this.vibrate(15);
      }
      this.particles.burst(this.player.root.position, 0xffd54a, 14, 6, 0.4, 0.25);
    }
  }

  smash(o) {
    const center = polar(o.a, 6 - o.h / 2, o.z, new THREE.Vector3());
    this.particles.burst(center, o.low ? this.pal.low.getHex() : this.pal.obstacle.getHex(), 50, 14, 0.9, 0.5);
    this.world.removeObstacle(o);
    this.shake = Math.max(this.shake, 0.4);
    this.run.score += 50;
    this.audio.play('slam');
  }

  // ---------------- camera & render ----------------
  render(dt, live) {
    const r = this.run;
    const k = 1 - Math.exp(-dt * 9);
    this.camTheta += angDiff(r.theta, this.camTheta) * k;
    const speedK = Math.min(1, (r.speed - BASE_SPEED) / (MAX_SPEED - BASE_SPEED));
    const boost = r.powers.boost > 0;

    // ship pose
    if (r.alive) {
      const bank = Math.max(-0.7, Math.min(0.7, r.omega * 0.09));
      const pitch = r.airborne ? Math.max(-0.35, Math.min(0.4, r.vy * 0.025)) : 0;
      this.player.place(r.theta, r.h + Math.sin(this.time * 3) * 0.04, r.z, bank, pitch, this.time, speedK, boost);
      this.player.shield.visible = r.powers.shield > 0 || (!this.attract && r.invuln > 0 && Math.floor(this.time * 10) % 2 === 0);
      this.player.magnetRing.visible = r.powers.magnet > 0;
    }

    // showroom camera (hangar) blends in
    this.showroomK += ((this.showroom ? 1 : 0) - this.showroomK) * Math.min(1, dt * 4);
    const ct = this.camTheta;
    const lift = r.h * 0.45;
    polar(ct, SHIP_R - 2.5 - lift, r.z + 6.6, this.camPos);
    polar(ct, SHIP_R - 1.4 - lift * 0.6, r.z - 14, this.camLook);
    if (this.showroomK > 0.001) {
      const phi = Math.sin(this.realTime * 0.45) * 1.1;
      const th = r.theta;
      const ship = polar(th, SHIP_R - r.h, r.z, new THREE.Vector3());
      const upv = new THREE.Vector3(-Math.sin(th), Math.cos(th), 0);
      const right = new THREE.Vector3(Math.cos(th), Math.sin(th), 0);
      const sp = ship.clone().addScaledVector(upv, 1.1).addScaledVector(right, Math.sin(phi) * 3.3);
      sp.z -= Math.cos(phi) * 3.3;
      this.camPos.lerp(sp, this.showroomK);
      this.camLook.lerp(ship, this.showroomK);
    }
    this.camera.position.copy(this.camPos);
    this.up.set(-Math.sin(ct), Math.cos(ct), 0);
    this.camera.up.copy(this.up);
    if (this.shake > 0) {
      const s = this.shake * 0.35;
      this.camera.position.x += (Math.random() - 0.5) * s;
      this.camera.position.y += (Math.random() - 0.5) * s;
      this.shake = Math.max(0, this.shake - dt * 2.5);
    }
    this.camera.lookAt(this.camLook);
    const fov = this.baseFov + speedK * 10 + (boost ? 12 : 0) - this.showroomK * 12;
    const off = this.showroomK * 0.26;
    if (off > 0.002 || (this.camera.view && this.camera.view.enabled)) {
      if (off > 0.002) this.camera.setViewOffset(1000, 1000, 0, off * 1000, 1000, 1000); else this.camera.clearViewOffset();
      this.camera.updateProjectionMatrix();
    }
    if (Math.abs(this.camera.fov - fov) > 0.05) {
      this.camera.fov += (fov - this.camera.fov) * Math.min(1, dt * 3);
      this.camera.updateProjectionMatrix();
    }
    this.bloom.strength = 0.75 + (boost ? 0.35 : 0);
    if (this.noRender) return;
    if (this.bloom.enabled) this.composer.render(dt); else this.renderer.render(this.scene, this.camera);

    if (live && !CAPTURE) this.autoQuality(dt);
  }

  autoQuality(dt) {
    if (this.save.settings.quality !== 'auto') return;
    this.fpsAcc += dt; this.fpsFrames++;
    if (this.fpsAcc < 1) return;
    const fps = this.fpsFrames / this.fpsAcc;
    this.fpsAcc = 0; this.fpsFrames = 0;
    if (fps < 42) this.lowFpsTime++; else this.lowFpsTime = 0;
    if (this.lowFpsTime >= 3 && this.activeQuality !== 'low') {
      this.qualityLevel = this.activeQuality === 'high' ? 'med' : 'low';
      this.lowFpsTime = 0;
      this.applyQuality();
    }
  }
}

// ---------------- boot ----------------
function boot() {
  const game = new Game();
  window.__game = game;
  if (CAPTURE) {
    // Deterministic stepping hooks for the trailer recorder.
    game.audio.log = [];
    let clock = 0;
    game.audio.clock = () => clock;
    // CSS animations follow the virtual clock so captured frames stay in sync.
    const animStart = new WeakMap();
    const syncAnims = () => {
      for (const a of document.getAnimations()) {
        if (!animStart.has(a)) animStart.set(a, clock);
        const tt = (clock - animStart.get(a)) * 1000;
        const end = a.effect ? a.effect.getComputedTiming().endTime : Infinity;
        if (tt >= end) { if (a.playState !== 'finished') a.finish(); } else { a.pause(); a.currentTime = tt; }
      }
    };
    window.__nr = {
      step(n, dt = 1 / 30) { for (let i = 0; i < n; i++) { clock += dt; game.step(dt); } syncAnims(); },
      warp(dist) {
        const r = game.run;
        r.z = -dist; r.dist = dist; r.lastJumpDist = dist;
        game.world.reset(dist | 0); game.world.cursor = r.z - 60;
        r.biome = Math.floor(dist / BIOME_LENGTH) % BIOMES.length;
        game.pal.snap(BIOMES[r.biome]);
      },
      // headless balance test: simulate without rendering, report crashes
      fast(n, dt = 1 / 60) { game.noRender = true; for (let i = 0; i < n; i++) game.step(dt); game.noRender = false; },
      lastCrash() { return game.lastCrash; },
      css(text) { const st = document.createElement('style'); st.textContent = text; document.head.appendChild(st); },
      preview(id) { game.previewSkin(id); },
      caption(html, center) { game.ui.caption(html, center); },
      play(bot = true) { game.startRun(); game.botOn = bot; },
      menu() { game.toMenu(); },
      open(id) { game.ui.open(id); },
      show(id) { game.ui.show(id); },
      power(type) { game.activatePower(type); },
      state() { const r = game.run; return { state: game.state, dist: r.dist, score: r.score, alive: r.alive, shards: r.shards }; },
      async audio(duration) {
        const wav = await renderOffline(duration, game.audio.log, game.save.settings.music * 0.8, game.save.settings.sfx);
        const bytes = new Uint8Array(wav); let s = '';
        for (let i = 0; i < bytes.length; i += 0x8000) s += String.fromCharCode.apply(null, bytes.subarray(i, i + 0x8000));
        return btoa(s);
      },
    };
    return;
  }
  if (DEMO) game.startRun();
  let last = performance.now();
  const loop = (now) => {
    const dt = Math.min(0.05, (now - last) / 1000);
    last = now;
    game.step(dt);
    requestAnimationFrame(loop);
  };
  requestAnimationFrame(loop);
}

if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', boot); else boot();

if ('serviceWorker' in navigator && location.protocol === 'https:' && !CAPTURE) {
  navigator.serviceWorker.register('sw.js').catch(() => {});
}
