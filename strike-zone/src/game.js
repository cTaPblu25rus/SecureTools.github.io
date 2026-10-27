// Match controller: teams, rounds, economy, bomb, drops, deathmatch and arms race.
import * as THREE from 'three';
import { TEAM, PHYS, RULES, WEAPONS, GEAR, GUNGAME, BOT_NAMES } from './config.js';
import { Grid, CELL, mulberry32 } from './grid.js';
import { Actor, makeWeapon, modelKey } from './actor.js';
import { BotBrain } from './bot.js';
import { updateWeapon, updateGrenades, damage } from './combat.js';
import { lossBonus } from './rules.js';
import { buildCharacter, buildGun, setCharacterGun, animateCharacter } from './models.js';
import { softSprite } from './textures.js';
import { audio } from './audio.js';
import { t } from './i18n.js';

const DM_WEAPONS = ['ak47', 'm4a1', 'awp', 'mp5', 'p90', 'm3', 'galil', 'famas', 'scout', 'deagle'];

export class Game {
  constructor({ def, scene, fx, ui, setup, playerName, autopilot = false, seed = Date.now() }) {
    this.def = def;
    this.grid = new Grid(def);
    this.scene = scene;
    this.fx = fx;
    this.ui = ui;
    this.setup = setup;
    this.mode = setup.mode;
    this.ffa = this.mode === 'gg';
    this.ff = !!setup.ff && !this.ffa;
    this.rng = mulberry32(seed);
    this.time = 0;
    this.phase = 'freeze';
    this.phaseT = 0;
    this.round = 0;
    this.score = [0, 0];
    this.lossStreak = [0, 0];
    this.actors = [];
    this.grenades = [];
    this.drops = [];
    this.noises = [];
    this.calls = [null, null];
    this.bomb = { planted: false, dropped: false };
    this.over = false;
    this.autopilot = autopilot;
    this.radioT = new Map();
    this.shakeAmt = 0;
    this.matchTime = 0;
    this.createActors(playerName);
    this.siteEntries = {};
  }

  // ---------- setup ----------
  createActors(playerName) {
    const s = this.setup;
    let team = s.team === 't' ? TEAM.T : s.team === 'ct' ? TEAM.CT : (this.rng() < 0.5 ? TEAM.T : TEAM.CT);
    this.player = new Actor(playerName || t('you'), team, false);
    this.listenerActor = this.player;
    this.viewActor = this.player;
    if (this.autopilot) this.player.brain = new BotBrain(this.player, this, s.diff);
    this.actors.push(this.player);
    const names = BOT_NAMES.slice().sort(() => this.rng() - 0.5);
    let ni = 0;
    const per = Math.max(1, Math.min(6, s.bots | 0));
    for (const tm of [TEAM.T, TEAM.CT]) {
      const n = tm === team ? per - 1 : per;
      for (let i = 0; i < n; i++) {
        const b = new Actor(names[ni++ % names.length], tm, true);
        b.brain = new BotBrain(b, this, s.diff);
        this.actors.push(b);
      }
    }
    for (const a of this.actors) {
      a.money = RULES.startMoney;
      a.model = buildCharacter(a.team);
      a.model.visible = false;
      this.scene.add(a.model);
    }
  }

  isEnemy(a, b) {
    if (!a || !b || a === b) return false;
    return this.ffa ? true : a.team !== b.team;
  }

  spawnCenter(team) {
    const r = team === TEAM.T ? this.def.spawnT : this.def.spawnCT;
    return this.grid.center((r[0] + r[2]) >> 1, (r[1] + r[3]) >> 1);
  }

  // A point on the T approach a short way out of the site, for CTs to watch.
  siteEntry(site, rng) {
    if (!this.siteEntries[site]) {
      const r = this.def.sites[site];
      const c = this.grid.center((r[0] + r[2]) >> 1, (r[1] + r[3]) >> 1);
      const ts = this.spawnCenter(TEAM.T);
      const p = this.grid.findPath(c.x, c.z, ts.x, ts.z) || [];
      const pts = [];
      let acc = 0, px = c.x, pz = c.z;
      for (const w of p) { acc += Math.hypot(w.x - px, w.z - pz); px = w.x; pz = w.z; if (acc > 8 && acc < 30) pts.push(w); }
      this.siteEntries[site] = pts.length ? pts : [ts];
    }
    const list = this.siteEntries[site];
    return list[(rng() * list.length) | 0];
  }

  siteAt(x, z) {
    for (const [k, r] of Object.entries(this.def.sites)) if (this.grid.inRect(x, z, r)) return k;
    return null;
  }

  inBuyZone(a) {
    if (this.mode !== 'bomb') return true;
    const r = a.team === TEAM.T ? this.def.spawnT : this.def.spawnCT;
    return this.grid.inRect(a.x, a.z, [r[0] - 3, r[1] - 3, r[2] + 3, r[3] + 3]);
  }

  canBuy(a) {
    if (!a.alive) return false;
    if (this.mode === 'gg') return false;
    if (this.mode === 'dm') return true;
    const t0 = this.phase === 'freeze' || (this.phase === 'live' && this.time - this.liveStart < RULES.buyTime);
    return t0 && this.inBuyZone(a);
  }

  buyError(a, key) {
    if (this.mode === 'gg') return 'buy_closed';
    if (this.mode === 'bomb') {
      if (!(this.phase === 'freeze' || (this.phase === 'live' && this.time - this.liveStart < RULES.buyTime))) return 'buy_closed';
      if (!this.inBuyZone(a)) return 'buy_zone';
    }
    const w = WEAPONS[key], g = GEAR[key];
    const item = w || g;
    if (!item) return 'no_money';
    if (item.team !== undefined && item.team >= 0 && item.team !== a.team && this.mode === 'bomb') return 'team_only';
    const price = this.mode === 'dm' ? 0 : item.price;
    if (key === 'vest' && a.armor >= 100) return 'have_it';
    if (key === 'vesthelm' && a.armor >= 100 && a.helmet) return 'have_it';
    if (key === 'kit' && a.kit) return 'have_it';
    if (w && w.kind === 'grenade' && a.nades[w.nade] >= (w.max || 1)) return 'have_it';
    if (w && w.slot <= 1 && a.slots[w.slot] && a.slots[w.slot].key === key) return 'have_it';
    let cost = price;
    if (key === 'vesthelm' && a.armor >= 100 && !a.helmet) cost = 350;
    if (a.money < cost) return 'no_money';
    return null;
  }

  buy(a, key, silent = false) {
    const err = this.buyError(a, key);
    if (err) { if (!silent && a === this.player) { this.ui.message(t(err), 1.5, 'warn'); audio.play('deny'); } return false; }
    const w = WEAPONS[key];
    let cost = this.mode === 'dm' ? 0 : (w || GEAR[key]).price;
    if (key === 'vesthelm' && a.armor >= 100 && !a.helmet && this.mode !== 'dm') cost = 350;
    a.money -= cost;
    if (key === 'vest') a.armor = 100;
    else if (key === 'vesthelm') { a.armor = 100; a.helmet = true; }
    else if (key === 'kit') a.kit = true;
    else if (w.kind === 'grenade') {
      a.nades[w.nade]++;
      if (!a.nadeKey) a.nadeKey = w.nade;
    } else {
      const old = a.slots[w.slot];
      if (old) this.dropWeapon(a, w.slot, true);
      a.slots[w.slot] = makeWeapon(key);
      if (a.brain && WEAPONS[key].silencer && this.rng() < 0.5) a.slots[w.slot].silenced = true;
      if (a.slot === w.slot) a.switchT = 0.6; else a.select(w.slot);
      if (this.mode === 'dm' && w.slot === 0 && a === this.player) this.dmChoice = key;
    }
    if (a === this.player) { audio.play('buy'); this.lastBuys = this.lastBuys || []; if (!this.buyingRebuy) this.recordBuy(key); }
    return true;
  }

  recordBuy(key) {
    if (!this.roundBuys) this.roundBuys = [];
    this.roundBuys.push(key);
    this.lastBuys = this.roundBuys.slice();
  }

  rebuy() {
    if (!this.lastBuys) return;
    this.buyingRebuy = true;
    for (const k of this.lastBuys) this.buy(this.player, k, true);
    this.buyingRebuy = false;
  }

  autobuy() {
    const a = this.player;
    const rifle = a.team === TEAM.T ? 'ak47' : 'm4a1';
    const order = [rifle, 'vesthelm', a.team === TEAM.CT ? 'kit' : null, 'he', 'flash', 'smoke'];
    if (!a.slots[0] && a.money < WEAPONS[rifle].price) order.unshift(a.team === TEAM.T ? 'galil' : 'famas', 'mp5');
    for (const k of order) if (k) { if (k === rifle || k === 'galil' || k === 'famas' || k === 'mp5') { if (!a.slots[0]) this.buy(a, k, true); } else this.buy(a, k, true); }
    if (this.mode === 'bomb' && a.money < 650 && !a.armor) this.buy(a, 'vest', true);
  }

  // ---------- match flow ----------
  start() {
    this.round = 0;
    this.score = [0, 0];
    for (const a of this.actors) { a.kills = a.deaths = a.score = a.hsKills = a.dmgDealt = 0; a.money = RULES.startMoney; a.clearInventory(); a.ggLevel = 0; }
    if (this.mode === 'bomb') this.startRound();
    else {
      this.phase = 'live';
      this.phaseT = this.mode === 'dm' ? RULES.dmTime : Infinity;
      this.liveStart = this.time;
      for (const a of this.actors) this.respawn(a);
      audio.say(t('go'));
      this.ui.message(t(this.mode === 'dm' ? 'mode_dm' : 'mode_gg'), 2.5, 'big');
    }
  }

  defaultPistol(a) { return a.team === TEAM.T ? 'glock' : 'usp'; }

  startRound() {
    this.round++;
    this.roundBuys = [];
    this.phase = 'freeze';
    this.phaseT = RULES.freezeTime;
    this.roundStart = this.time;
    this.liveStart = this.time + RULES.freezeTime;
    if (this.bomb.model) this.scene.remove(this.bomb.model);
    this.bomb = { planted: false, dropped: false };
    this.pendingEnd = false;
    this.clearDrops();
    for (const g of this.grenades) if (g.model) this.scene.remove(g.model);
    this.grenades.length = 0;
    this.fx.clear();
    this.calls = [null, null];
    this.tPlan = Object.keys(this.def.sites)[(this.rng() * Object.keys(this.def.sites).length) | 0];
    const used = new Set();
    for (const a of this.actors) {
      const survived = a.alive && this.round > 1;
      if (!survived) {
        const keepMoney = a.money;
        a.clearInventory();
        a.money = keepMoney;
        a.slots[1] = makeWeapon(this.defaultPistol(a));
      }
      a.hasBomb = false;
      const hp = 100;
      const armor = survived ? a.armor : 0, helmet = survived ? a.helmet : false, kit = survived ? a.kit : false;
      a.resetBody();
      a.hp = hp; a.armor = armor; a.helmet = helmet; a.kit = kit;
      if (!this.round || this.round === 1) { a.armor = 0; a.helmet = false; a.kit = false; }
      // Refill ammo for survivors.
      for (const s of [0, 1]) if (a.slots[s]) a.slots[s].reserve = Math.max(a.slots[s].reserve, a.slots[s].def.reserve);
      const rect = a.team === TEAM.T ? this.def.spawnT : this.def.spawnCT;
      const p = this.grid.randomCellIn(rect, this.rng, (cx, cz) => used.has(cx + ',' + cz));
      used.add(Math.floor(p.x / CELL) + ',' + Math.floor(p.z / CELL));
      a.x = p.x + (this.rng() - 0.5) * 0.6; a.z = p.z + (this.rng() - 0.5) * 0.6; a.y = this.grid.groundUnder(a.x, a.z, PHYS.radius);
      const enemy = this.spawnCenter(a.team === TEAM.T ? TEAM.CT : TEAM.T);
      a.yaw = Math.atan2(-(enemy.x - a.x), -(enemy.z - a.z)) + (this.rng() - 0.5) * 0.6;
      a.pitch = 0;
      a.slot = a.bestSlot(); a.lastSlot = 2;
      a.roundKills = 0;
      if (a.brain) a.brain.reset();
    }
    const ts = this.actors.filter((a) => a.team === TEAM.T);
    if (ts.length && this.mode === 'bomb') {
      const carrier = ts[(this.rng() * ts.length) | 0];
      carrier.hasBomb = true;
      if (carrier === this.player && !this.autopilot) this.ui.message(t('have_bomb'), 4, 'info');
    }
    for (const a of this.actors) if (a.brain && a !== this.player) a.brain.buy();
    if (this.autopilot) this.player.brain.buy();
    this.ui.roundStart(this.round);
    audio.play('roundStart');
  }

  endRound(winner, reason) {
    if (this.phase === 'post') return;
    this.phase = 'post';
    this.phaseT = RULES.roundEndTime;
    this.score[winner]++;
    const loser = 1 - winner;
    this.lossStreak[winner] = 0;
    this.lossStreak[loser]++;
    const winMoney = reason === 'bomb' || reason === 'defuse' ? RULES.winBomb : reason === 'time' ? RULES.winTime : RULES.winElim;
    const lossMoney = lossBonus(this.lossStreak[loser]);
    for (const a of this.actors) this.addMoney(a, a.team === winner ? winMoney : lossMoney);
    const p = this.player;
    if (p.team === winner) this.stat('wins', 1); else this.stat('losses', 1);
    // Round MVP: most kills on the winning team.
    const mvp = this.actors.filter((a) => a.team === winner).sort((a, b) => b.roundKills - a.roundKills)[0];
    if (mvp && mvp.roundKills > 0) mvp.mvps++;
    const key = winner === TEAM.T ? 't_win' : 'ct_win';
    this.lastWinner = winner;
    this.ui.roundEnd(winner, reason, mvp && mvp.roundKills > 0 ? mvp : null);
    audio.play(p.team === winner ? 'win' : 'lose');
    audio.say(t(winner === TEAM.T ? 'r_twin' : 'r_ctwin'));
    const target = this.setup.rounds;
    if (this.score[winner] >= target || this.round >= target * 2 - 1) this.pendingEnd = true;
    return key;
  }

  endMatch(winnerTeam, winnerActor) {
    if (this.over) return;
    this.over = true;
    this.phase = 'over';
    const p = this.player;
    const won = this.ffa ? winnerActor === p : winnerTeam === p.team;
    this.stat('matches', 1);
    const sorted = this.actors.slice().sort((a, b) => b.kills - a.kills || a.deaths - b.deaths);
    if (sorted[0] === p) this.stat('mvp', 1);
    this.ui.matchEnd({ won, winnerTeam, winnerActor, score: this.score.slice(), actors: sorted, mvp: sorted[0] });
    audio.play(won ? 'win' : 'lose');
  }

  addMoney(a, n) {
    a.money = Math.max(0, Math.min(RULES.maxMoney, a.money + n));
    if (a === this.player && n) this.ui.money(n);
  }

  // ---------- spawns for DM / GG ----------
  respawn(a) {
    a.resetBody();
    a.clearInventory();
    const cells = this.grid.floorCells();
    let best = null, bestD = -1;
    for (let k = 0; k < 16; k++) {
      const i = cells[(this.rng() * cells.length) | 0];
      const c = this.grid.center(i % this.grid.w, (i / this.grid.w) | 0);
      let d = Infinity;
      for (const e of this.actors) if (e !== a && e.alive && this.isEnemy(a, e)) d = Math.min(d, Math.hypot(e.x - c.x, e.z - c.z));
      if (d > bestD) { bestD = d; best = c; }
    }
    a.x = best.x; a.z = best.z; a.y = this.grid.groundUnder(a.x, a.z, PHYS.radius);
    a.yaw = this.rng() * Math.PI * 2;
    a.protectT = 2;
    if (this.mode === 'gg') this.giveGG(a);
    else {
      a.slots[1] = makeWeapon('deagle');
      a.armor = 100; a.helmet = true;
      const k = a === this.player && this.dmChoice ? this.dmChoice : (a.brain ? (a.dmPick || (a.dmPick = DM_WEAPONS[(this.rng() * DM_WEAPONS.length) | 0])) : 'ak47');
      if (WEAPONS[k].slot === 0) a.slots[0] = makeWeapon(k);
      a.nades.he = 1;
      a.slot = a.bestSlot();
    }
    a.switchT = 0.4;
    if (a.brain) a.brain.reset();
  }

  giveGG(a) {
    const key = GUNGAME[Math.min(a.ggLevel, GUNGAME.length - 1)];
    a.slots[0] = null; a.slots[1] = null;
    if (key !== 'knife') {
      const w = makeWeapon(key);
      w.reserve = 999;
      a.slots[WEAPONS[key].slot] = w;
    }
    a.slot = a.bestSlot();
    a.switchT = 0.4;
  }

  // ---------- events from combat ----------
  noise(x, y, z, r, src) {
    this.noises.push({ x, y, z, r, src, t: this.time });
    if (this.noises.length > 60) this.noises.splice(0, this.noises.length - 60);
  }

  callout(team, x, z) { this.calls[team] = { x, z, t: this.time }; }

  radio(a, key) {
    if (!a || a.team !== this.player.team || this.ffa) return;
    const last = this.radioT.get(a.id) || -10;
    if (this.time - last < 6) return;
    this.radioT.set(a.id, this.time);
    this.ui.chat(a, t(key));
  }

  stat(key, n) { if (!this.autopilot) this.ui.stat(key, n); }

  muzzleOf(a) {
    const cp = Math.cos(a.pitch);
    const fx = -Math.sin(a.yaw) * cp, fy = Math.sin(a.pitch), fz = -Math.cos(a.yaw) * cp;
    const rx = Math.cos(a.yaw), rz = -Math.sin(a.yaw);
    const fp = a === this.player && !this.thirdPerson ? 0.55 : 0.75;
    return { x: a.x + fx * fp + rx * 0.12, y: a.y + a.eyeHeight() + fy * fp - 0.12, z: a.z + fz * fp + rz * 0.12 };
  }

  ejectShell(a) {
    const p = this.listenerActor;
    if (Math.hypot(a.x - p.x, a.z - p.z) > 18) return;
    const rx = Math.cos(a.yaw), rz = -Math.sin(a.yaw);
    const fx = -Math.sin(a.yaw), fz = -Math.cos(a.yaw);
    const own = a === this.viewActor;
    const x = a.x + rx * (own ? 0.18 : 0.15) + fx * (own ? 0.35 : 0.5), y = a.y + a.eyeHeight() - (own ? 0.12 : 0.25), z = a.z + rz * (own ? 0.18 : 0.15) + fz * (own ? 0.35 : 0.5);
    this.fx.norm.emit(x, y, z, rx * 2.2 + (this.rng() - 0.5), 1.8 + this.rng(), rz * 2.2 + (this.rng() - 0.5), 0.6, 0.035, 0.85, 0.62, 0.22, 1, 9);
    if (own && this.rng() < 0.4) setTimeout(() => audio.play('brass', null, 0.5), 450);
  }

  onShot(a, muzzle, silenced) {
    if (silenced) { this.ui.shot(a, true); return; }
    if (a.model && a.model.visible) { a.model.userData.flash.visible = true; a.flashOff = this.time + 0.05; a.model.userData.flash.material.rotation = this.rng() * 6; }
    if (a !== this.player || this.autopilot) this.fx.flashLight(muzzle.x, muzzle.y, muzzle.z, 2.5, 0xffc070, 0.05);
    this.ui.shot(a);
  }

  onDamage(victim, attacker, hp, zone, dir, helmetDink) {
    if (attacker === this.player) {
      this.ui.hitmarker(zone === 'head', victim.hp <= 0);
      this.stat('hits', 1);
    }
    if (victim === this.player) {
      if (attacker && attacker !== victim) {
        const ang = Math.atan2(attacker.x - victim.x, attacker.z - victim.z);
        this.ui.damageDir(ang, hp);
      }
      this.ui.hurt(hp);
      audio.play('hurt', null, 0.5);
    }
    const pos = { x: victim.x, y: victim.y + 1.3, z: victim.z };
    if (zone === 'head') audio.play('headshot', victim === this.player ? null : pos, helmetDink ? 0.7 : 1);
    else if (zone !== 'blast') audio.play(victim.armor > 0 && zone !== 'legs' ? 'kevlar' : 'hit', victim === this.player ? null : pos, 0.8);
    if (victim.brain && attacker) { victim.brain.heard = { x: attacker.x, y: attacker.y, z: attacker.z, t: this.time }; }
  }

  kill(victim, attacker, weaponKey, { hs = false, wallbang = false } = {}) {
    if (!victim.alive) return;
    victim.alive = false;
    victim.hp = 0;
    victim.deaths++;
    victim.deathT = 0;
    victim.deathDir = this.rng() < 0.5 ? 1 : -1;
    victim.plantT = 0; victim.defuseT = 0;
    victim.respawnT = RULES.dmRespawn;
    if (this.bomb.defuser === victim) this.bomb.defuser = null;
    const teamKill = attacker && attacker !== victim && !this.isEnemy(attacker, victim);
    if (attacker && attacker !== victim) {
      if (teamKill) { attacker.kills--; this.addMoney(attacker, -RULES.killReward); }
      else {
        attacker.kills++;
        attacker.roundKills++;
        if (hs) attacker.hsKills++;
        if (this.mode === 'bomb') this.addMoney(attacker, (WEAPONS[weaponKey] && WEAPONS[weaponKey].kill) || RULES.killReward);
        if (attacker === this.player) { this.stat('kills', 1); if (hs) this.stat('hs', 1); }
      }
    } else if (!attacker || attacker === victim) {
      victim.kills = Math.max(0, victim.kills - (this.mode === 'bomb' ? 0 : 1));
    }
    if (victim === this.player) { this.stat('deaths', 1); this.ui.died(attacker, weaponKey); }
    this.ui.killfeed(attacker, victim, weaponKey, hs, wallbang);
    // Drop the best gun and the bomb.
    if (this.mode === 'bomb') {
      const s = victim.slots[0] ? 0 : victim.slots[1] ? 1 : -1;
      if (s >= 0) this.dropWeapon(victim, s, false);
      if (victim.hasBomb) this.dropBomb(victim);
      const nade = victim.firstNade();
      if (nade && this.rng() < 0.5) this.spawnDrop(nade, victim, null);
    }
    if (this.mode === 'gg' && attacker && attacker !== victim && !teamKill) this.ggProgress(attacker, victim, weaponKey);
    if (this.mode === 'dm' && attacker && attacker !== victim && !teamKill) {
      this.score[attacker.team]++;
      if (this.score[attacker.team] >= RULES.dmFragLimit) this.endMatch(attacker.team, null);
    }
  }

  ggProgress(a, victim, weaponKey) {
    if (weaponKey === 'knife' && victim.ggLevel > 0 && a.ggLevel !== GUNGAME.length - 1) victim.ggLevel--;
    if (a.ggLevel >= GUNGAME.length - 1) { this.endMatch(a.team, a); return; }
    a.ggLevel++;
    if (a === this.player) audio.play('levelUp');
    if (a.alive) this.giveGG(a);
  }

  // ---------- drops ----------
  spawnDrop(key, a, w) {
    const model = buildGun(key);
    model.scale.setScalar(1.25);
    this.scene.add(model);
    const f = { x: -Math.sin(a.yaw), z: -Math.cos(a.yaw) };
    const d = {
      key, w, model, x: a.x + f.x * 0.3, y: a.y + 1.1, z: a.z + f.z * 0.3,
      vx: f.x * 3 + a.vx * 0.4, vy: 1.5, vz: f.z * 3 + a.vz * 0.4, rest: false, by: a, t: this.time,
    };
    this.drops.push(d);
    return d;
  }

  dropWeapon(a, slot, replace) {
    const w = a.slots[slot];
    if (!w || w.key === 'knife') return null;
    a.slots[slot] = null;
    const d = this.spawnDrop(w.key, a, w);
    if (!replace && a.slot === slot) a.select(a.bestSlot());
    if (replace) d.vx *= 0.5;
    return d;
  }

  dropBomb(a) {
    if (!a.hasBomb) return;
    a.hasBomb = false;
    if (a.slot === 4) a.select(a.bestSlot());
    const d = this.spawnDrop('bomb', a, null);
    d.isBomb = true;
    this.bomb.dropped = true;
    this.bomb.dropRef = d;
    this.bomb.x = d.x; this.bomb.z = d.z; this.bomb.y = d.y;
    if (this.player.team === TEAM.T) this.ui.message(t('bomb_dropped'), 2, 'warn');
  }

  clearDrops() {
    for (const d of this.drops) this.scene.remove(d.model);
    this.drops.length = 0;
  }

  updateDrops(dt) {
    for (let i = this.drops.length - 1; i >= 0; i--) {
      const d = this.drops[i];
      if (!d.rest) {
        d.vy -= 20 * dt;
        const nx = d.x + d.vx * dt, nz = d.z + d.vz * dt;
        if (this.grid.topAt(nx, d.z) > d.y) d.vx = -d.vx * 0.3; else d.x = nx;
        if (this.grid.topAt(d.x, nz) > d.y) d.vz = -d.vz * 0.3; else d.z = nz;
        d.y += d.vy * dt;
        const floor = this.grid.topAt(d.x, d.z) + 0.04;
        if (d.y <= floor) { d.y = floor; d.vy = 0; d.vx *= 0.5; d.vz *= 0.5; if (Math.hypot(d.vx, d.vz) < 0.2) d.rest = true; }
        d.model.position.set(d.x, d.y, d.z);
        d.model.rotation.set(0, d.t * 7 % 6.28, Math.PI / 2 * (d.isBomb ? 0 : 1));
        if (d.isBomb) { this.bomb.x = d.x; this.bomb.y = d.y; this.bomb.z = d.z; }
      }
      // Walk-over pickup.
      for (const a of this.actors) {
        if (!a.alive || Math.hypot(a.x - d.x, a.z - d.z) > 1.0 || Math.abs(a.y - d.y) > 1.3) continue;
        if (d.by === a && this.time - d.t < 1.2) continue;
        if (this.tryPickup(a, d, false)) { this.drops.splice(i, 1); this.scene.remove(d.model); break; }
      }
    }
  }

  tryPickup(a, d, swap) {
    if (d.isBomb) {
      if (a.team !== TEAM.T || this.mode !== 'bomb') return false;
      a.hasBomb = true;
      this.bomb.dropped = false;
      this.bomb.dropRef = null;
      if (a === this.player) { this.ui.message(t('bomb_picked'), 2, 'info'); audio.play('pickup'); }
      return true;
    }
    const def = WEAPONS[d.key];
    if (def.kind === 'grenade') {
      if (a.nades[def.nade] >= (def.max || 1)) return false;
      a.nades[def.nade]++;
      if (!a.nadeKey) a.nadeKey = def.nade;
      if (a === this.player) audio.play('pickup');
      return true;
    }
    if (this.mode === 'gg') return false;
    const s = def.slot;
    if (a.slots[s]) {
      if (!swap) return false;
      this.dropWeapon(a, s, true);
    }
    a.slots[s] = d.w || makeWeapon(d.key);
    if (a === this.player) audio.play('pickup');
    if (a.slot === s || swap || (s === 0 && a.slot !== 3 && a.slot !== 4)) { a.slot = -1; a.select(s); }
    return true;
  }

  nearestDrop(a) {
    let best = null, bd = 1.8;
    for (const d of this.drops) {
      if (d.isBomb) continue;
      const dist = Math.hypot(a.x - d.x, a.z - d.z);
      if (dist < bd && Math.abs(a.y - d.y) < 1.3) { bd = dist; best = d; }
    }
    return best;
  }

  // ---------- bomb ----------
  plant(a, site) {
    a.hasBomb = false;
    a.plantT = 0;
    a.select(a.bestSlot());
    const model = buildGun('bomb');
    model.scale.setScalar(1.7);
    model.position.set(a.x, this.grid.topAt(a.x, a.z) + 0.07, a.z);
    model.rotation.y = a.yaw;
    const led = new THREE.Sprite(new THREE.SpriteMaterial({ map: softSprite('spark'), color: 0xff2020, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    led.scale.set(0.35, 0.35, 1);
    led.position.set(0, 0.08, 0);
    model.add(led);
    this.scene.add(model);
    this.bomb = { planted: true, dropped: false, x: a.x, y: model.position.y, z: a.z, site, timer: RULES.bombTime, defuser: null, model, led, beepT: 0, planter: a };
    for (const x of this.actors) if (x.team === TEAM.T) this.addMoney(x, RULES.plantReward);
    if (a === this.player) this.stat('plants', 1);
    a.score += 2;
    audio.play('planted', { x: a.x, y: a.y, z: a.z }, 1);
    audio.say(t('r_planted'));
    this.ui.message(t('bomb_planted'), 3, 'big');
    this.noise(a.x, a.y, a.z, 100, a);
    this.ui.bombPlanted(site);
  }

  updateBomb(dt) {
    const B = this.bomb;
    if (!B.planted || this.phase !== 'live') return;
    B.timer -= dt;
    const frac = Math.max(0, B.timer / RULES.bombTime);
    const interval = 0.12 + frac * 0.95;
    B.beepT -= dt;
    if (B.beepT <= 0) {
      B.beepT = interval;
      audio.play('beep', { x: B.x, y: B.y + 0.2, z: B.z }, 1.2);
      B.led.visible = true;
      B.ledOff = this.time + 0.08;
    }
    if (B.ledOff && this.time > B.ledOff) B.led.visible = false;
    if (B.defuser) {
      const d = B.defuser;
      if (!d.alive) { B.defuser = null; d.defuseT = 0; }
    }
    if (B.timer <= 0) this.explodeBomb();
  }

  explodeBomb() {
    const B = this.bomb;
    B.planted = false;
    B.exploded = true;
    this.scene.remove(B.model);
    audio.play('bombExplode', { x: B.x, y: B.y + 1, z: B.z }, 2);
    this.fx.explosion(B.x, B.y, B.z, true);
    this.shake(B.x, B.z, 60, 1.6);
    for (const a of this.actors) {
      if (!a.alive) continue;
      const d = Math.hypot(a.x - B.x, a.z - B.z, (a.y - B.y) * 0.5);
      if (d > RULES.bombRadius) continue;
      const dmg = RULES.bombDamage * Math.pow(1 - d / RULES.bombRadius, 2);
      if (dmg >= 1) damage(this, a, null, dmg, 'blast', 0.75, 'bomb');
    }
    this.ui.message(t('bomb_exploded'), 3, 'big');
    this.endRound(TEAM.T, 'bomb');
  }

  defuse(a) {
    const B = this.bomb;
    B.planted = false;
    B.defused = true;
    a.defuseT = 0;
    B.led.visible = false;
    if (a === this.player) this.stat('defuses', 1);
    a.score += 2;
    audio.play('defused', { x: B.x, y: B.y, z: B.z }, 1);
    audio.say(t('r_defused'));
    this.ui.message(t('bomb_defused'), 3, 'big');
    this.endRound(TEAM.CT, 'defuse');
  }

  shake(x, z, radius, amount) {
    const p = this.listenerActor;
    const d = Math.hypot(p.x - x, p.z - z);
    if (d < radius) this.shakeAmt = Math.max(this.shakeAmt, amount * (1 - d / radius));
  }

  onFlashed(dur) { this.ui.flash(dur); audio.play('ring', null, Math.min(1, dur / 4)); }

  makeNadeModel(key) {
    const m = buildGun(key);
    m.scale.setScalar(1.3);
    this.scene.add(m);
    return m;
  }

  // ---------- per-frame ----------
  applyMove(a, cmd, dt) {
    let max = a.maxSpeed();
    a.crouching = !!cmd.crouch;
    const tc = a.crouching ? 1 : 0;
    a.crouch += Math.sign(tc - a.crouch) * Math.min(Math.abs(tc - a.crouch), dt * 7);
    if (cmd.walk) max *= PHYS.walkMul;
    if (a.crouch > 0.5) max *= PHYS.crouchMul;
    if (a.plantT > 0 || a.defuseT > 0 || this.phase === 'freeze') max = 0;
    a.stamina = Math.min(1, a.stamina + dt * 1.6);
    max *= a.stamina;
    let wx = cmd.wx || 0, wz = cmd.wz || 0;
    const wl = Math.hypot(wx, wz);
    if (wl > 1) { wx /= wl; wz /= wl; }
    const wishLen = Math.min(1, wl);
    if (a.onGround) {
      const sp = Math.hypot(a.vx, a.vz);
      if (sp > 0) {
        const drop = Math.max(sp, 2) * PHYS.friction * dt;
        const ns = Math.max(0, sp - drop) / sp;
        a.vx *= ns; a.vz *= ns;
      }
      if (wishLen > 0) {
        const dirx = wx / (wl || 1), dirz = wz / (wl || 1);
        const target = max * wishLen;
        const cur = a.vx * dirx + a.vz * dirz;
        const add = target - cur;
        if (add > 0) { const acc = Math.min(add, PHYS.accel * dt * Math.max(1, target / 4)); a.vx += dirx * acc; a.vz += dirz * acc; }
      }
      if (cmd.jump && a.alive && this.phase !== 'freeze' && a.plantT <= 0 && a.defuseT <= 0) {
        a.vy = PHYS.jumpSpeed * (a.crouch > 0.5 ? 0.9 : 1);
        a.onGround = false;
        if (a === this.listenerActor) audio.play('jump', null, 0.5);
      }
    } else if (wishLen > 0) {
      const dirx = wx / (wl || 1), dirz = wz / (wl || 1);
      const cur = a.vx * dirx + a.vz * dirz;
      const add = Math.min(1.2, max * wishLen) - cur;
      if (add > 0) { const acc = Math.min(add, PHYS.airAccel * dt * max); a.vx += dirx * acc; a.vz += dirz * acc; }
    }
    a.fallSpeed = 0;
    const landed = this.grid.move(a, dt);
    if (landed) {
      a.stamina = Math.min(a.stamina, 0.72);
      if (a.fallSpeed > 11) damage(this, a, null, (a.fallSpeed - 11) * 10, 'legs', 1, 'fall');
      if (a.fallSpeed > 4) {
        audio.play('land', a === this.listenerActor ? null : { x: a.x, y: a.y, z: a.z }, 0.7);
        this.noise(a.x, a.y, a.z, 14, a);
      }
    }
    a.speed2d = Math.hypot(a.vx, a.vz);
    // Footsteps are audible when running.
    if (a.onGround && a.speed2d > 3.3 && !cmd.walk && a.crouch < 0.5) {
      a.stepAcc += a.speed2d * dt;
      if (a.stepAcc > 2.3) {
        a.stepAcc = 0;
        audio.play('step', a === this.listenerActor ? null : { x: a.x, y: a.y, z: a.z }, a === this.listenerActor ? 0.25 : 0.9);
        this.noise(a.x, a.y, a.z, 20, a);
      }
    }
  }

  separate() {
    const A = this.actors;
    for (let i = 0; i < A.length; i++) {
      const a = A[i];
      if (!a.alive) continue;
      for (let j = i + 1; j < A.length; j++) {
        const b = A[j];
        if (!b.alive || Math.abs(a.y - b.y) > 1.6) continue;
        const dx = b.x - a.x, dz = b.z - a.z;
        const d = Math.hypot(dx, dz);
        const min = PHYS.radius * 2;
        if (d >= min || d < 1e-5) continue;
        const push = (min - d) / 2;
        const nx = dx / d, nz = dz / d;
        if (!this.grid.blockedAt(a.x - nx * push, a.z - nz * push, PHYS.radius, a.y, a.y + 1)) { a.x -= nx * push; a.z -= nz * push; }
        if (!this.grid.blockedAt(b.x + nx * push, b.z + nz * push, PHYS.radius, b.y, b.y + 1)) { b.x += nx * push; b.z += nz * push; }
      }
    }
  }

  objectives(a, cmd, dt) {
    if (this.mode !== 'bomb' || this.phase !== 'live' || !a.alive) return;
    const B = this.bomb;
    if (a.hasBomb && !B.planted) {
      const want = cmd.use || (a.slot === 4 && cmd.fire);
      const site = this.siteAt(a.x, a.z);
      if (want && site && a.onGround) {
        if (a.slot !== 4) { a.select(4); a.switchT = 0; }
        if (a.plantT === 0) audio.play('plant', a === this.listenerActor ? null : { x: a.x, y: a.y + 1, z: a.z }, 0.8);
        a.plantT += dt;
        if (a.plantT >= RULES.plantTime) this.plant(a, site);
      } else {
        if (want && !site && a === this.player && this.time - (this.siteHintT || -9) > 2) { this.siteHintT = this.time; this.ui.message(t('must_site'), 1.5, 'warn'); }
        a.plantT = 0;
      }
    }
    if (B.planted && a.team === TEAM.CT) {
      const near = Math.hypot(a.x - B.x, a.z - B.z) < 1.6 && Math.abs(a.y - B.y) < 1.4;
      if (cmd.use && near && (!B.defuser || B.defuser === a)) {
        if (!B.defuser) audio.play('defuse', { x: B.x, y: B.y, z: B.z }, 0.8);
        B.defuser = a;
        a.defuseT += dt;
        if (a.defuseT >= (a.kit ? RULES.defuseKitTime : RULES.defuseTime)) this.defuse(a);
      } else if (B.defuser === a) { B.defuser = null; a.defuseT = 0; }
    }
  }

  checkRoundEnd() {
    if (this.mode !== 'bomb' || this.phase !== 'live') return;
    const aliveT = this.actors.some((a) => a.alive && a.team === TEAM.T);
    const aliveCT = this.actors.some((a) => a.alive && a.team === TEAM.CT);
    if (!aliveCT) { this.endRound(TEAM.T, 'elim'); return; }
    if (!aliveT && !this.bomb.planted) { this.endRound(TEAM.CT, 'elim'); return; }
    if (!this.bomb.planted && this.phaseT <= 0) this.endRound(TEAM.CT, 'time');
  }

  update(dt, playerCmd) {
    if (this.over) { this.animate(dt); return; }
    this.time += dt;
    this.matchTime += dt;
    this.shakeAmt = Math.max(0, this.shakeAmt - dt * 1.8);
    // Phase timers.
    if (this.phase === 'freeze') {
      this.phaseT -= dt;
      if (this.phaseT <= 0) {
        this.phase = 'live'; this.phaseT = RULES.roundTime; this.liveStart = this.time;
        audio.say(t('go'));
        this.ui.message(t('go'), 1.5, 'big');
      }
    } else if (this.phase === 'live') {
      if (!this.bomb.planted) this.phaseT -= dt;
      if (this.mode === 'dm' && this.phaseT <= 0) {
        const w = this.score[0] === this.score[1] ? -1 : this.score[0] > this.score[1] ? 0 : 1;
        this.endMatch(w, null);
      }
    } else if (this.phase === 'post') {
      this.phaseT -= dt;
      if (this.phaseT <= 0) {
        if (this.pendingEnd) {
          const w = this.score[0] === this.score[1] ? -1 : this.score[0] > this.score[1] ? 0 : 1;
          this.endMatch(w, null);
          return;
        }
        this.startRound();
      }
    }

    for (const a of this.actors) {
      if (!a.alive) {
        a.deathT += dt;
        if (this.mode !== 'bomb' && !this.over) {
          a.respawnT -= dt;
          if (a.respawnT <= 0) this.respawn(a);
        }
        continue;
      }
      if (a.protectT > 0) a.protectT -= dt;
      if (a.flashT > 0) a.flashT -= dt;
      let cmd;
      if (a.brain) cmd = a.brain.think(dt);
      else cmd = playerCmd || { wx: 0, wz: 0 };
      if (cmd.slot !== null && cmd.slot !== undefined) a.select(cmd.slot);
      this.applyMove(a, cmd, dt);
      this.objectives(a, cmd, dt);
      if (a.plantT <= 0 && a.defuseT <= 0) updateWeapon(this, a, cmd, dt);
      if (cmd.usePressed && a.plantT <= 0 && a.defuseT <= 0) {
        const d = this.nearestDrop(a);
        if (d && this.tryPickup(a, d, true)) { this.drops.splice(this.drops.indexOf(d), 1); this.scene.remove(d.model); }
      }
      if (cmd.drop) {
        if (a.slot === 4 && a.hasBomb) this.dropBomb(a);
        else if (a.slot <= 1) this.dropWeapon(a, a.slot, false);
      }
    }
    this.separate();
    updateGrenades(this, dt);
    this.updateDrops(dt);
    this.updateBomb(dt);
    this.checkRoundEnd();
    if (this.noises.length && this.time - this.noises[0].t > 2) this.noises.shift();
    this.animate(dt);
  }

  animate(dt) {
    for (const a of this.actors) {
      const m = a.model;
      const hideSelf = a === this.viewActor && !this.thirdPerson && a.alive;
      m.visible = !hideSelf && (a.alive || a.deathT < 12) && this.phase !== 'none';
      if (!m.visible) continue;
      m.position.set(a.x, a.y, a.z);
      m.rotation.y = a.yaw;
      const key = a.alive ? modelKey(a.w) : m.userData.gunKey;
      setCharacterGun(m, a.alive ? key : null);
      if (a.flashOff && this.time > a.flashOff) { m.userData.flash.visible = false; a.flashOff = 0; }
      animateCharacter(m, { speed: a.alive ? a.speed2d : 0, crouch: a.crouch, air: !a.onGround, pitch: a.pitch, dead: !a.alive, deathT: a.deathT, deathDir: a.deathDir, dt, fireT: a.fireAnim });
    }
  }

  dispose() {
    for (const a of this.actors) if (a.model) this.scene.remove(a.model);
    this.clearDrops();
    for (const g of this.grenades) if (g.model) this.scene.remove(g.model);
    if (this.bomb.model) this.scene.remove(this.bomb.model);
  }
}
