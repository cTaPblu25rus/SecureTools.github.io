// Match controller: teams, rounds, economy, bomb, drops, deathmatch and arms race.
import * as THREE from 'three';
import { TEAM, PHYS, RULES, WEAPONS, GEAR, GUNGAME, BOT_NAMES } from './config.js';
import { Grid, CELL, mulberry32 } from './grid.js';
import { Actor, makeWeapon, modelKey } from './actor.js';
import { BotBrain } from './bot.js';
import { updateWeapon, updateGrenades, damage, remoteAttack } from './combat.js';
import { handleEvent } from './events.js';
import { lossBonus } from './rules.js';
import { buildCharacter, buildGun, setCharacterGun, animateCharacter } from './models.js';
import { softSprite } from './textures.js';
import { audio } from './audio.js';
import { t } from './i18n.js';

const DM_WEAPONS = ['ak47', 'm4a1', 'awp', 'mp5', 'p90', 'm3', 'galil', 'famas', 'scout', 'deagle'];

export class Game {
  constructor({ def, scene, fx, ui, setup, playerName, autopilot = false, seed = Date.now(), role = 'solo', humans = [], roster = null, youId = null }) {
    this.role = role;
    this.net = null;
    this.outAtk = [];
    this.nextObjId = 1;
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
    this.byId = new Map();
    if (roster) this.syncRoster(roster, youId);
    else this.createActors(playerName, humans);
    this.siteEntries = {};
  }

  // ---------- events ----------
  // Runs an event locally and queues it for LAN clients when hosting.
  fire(ev) {
    handleEvent(this, ev);
    if (this.net) this.net.events.push(ev);
  }

  // src: actor (sound follows them; silent position for "me"), {x,y,z} or null.
  // opts.owner: only that actor's player hears it; opts.pred: their client already played it.
  sound(name, src, vol = 1, opts = {}) {
    const ev = { e: 'snd', n: name, v: vol };
    if (src && src.id !== undefined) ev.a = src.id;
    else if (src) ev.p = [src.x, src.y, src.z];
    if (opts.owner) ev.o = src.id;
    if (opts.pred) ev.pr = 1;
    this.fire(ev);
  }

  // Message for everyone, a team ({team}) or one actor ({to}).
  msg(key, dur, cls, opts = {}) {
    const ev = { e: 'msg', k: key, d: dur, c: cls };
    if (opts.to) ev.o = opts.to.id;
    if (opts.team !== undefined) ev.tm = opts.team;
    if (opts.args) ev.x = opts.args;
    this.fire(ev);
  }

  // ---------- setup ----------
  createActors(playerName, humans) {
    const s = this.setup;
    const people = [{ name: playerName || t('you'), team: s.team, local: true }, ...humans];
    const count = [0, 0];
    const teamOf = (pref) => (pref === 't' ? TEAM.T : pref === 'ct' ? TEAM.CT : -1);
    for (const h of people) { h.tm = this.ffa ? -1 : teamOf(h.team); if (h.tm >= 0) count[h.tm]++; }
    for (const h of people) {
      if (h.tm >= 0) continue;
      h.tm = count[0] === count[1] ? (this.rng() < 0.5 ? TEAM.T : TEAM.CT) : count[0] < count[1] ? TEAM.T : TEAM.CT;
      count[h.tm]++;
    }
    for (const h of people) {
      const a = new Actor(h.name, h.tm, false);
      if (h.local) {
        this.player = a;
        if (this.autopilot) a.brain = new BotBrain(a, this, s.diff);
      } else { a.remote = true; a.netId = h.netId; }
      this.actors.push(a);
    }
    this.listenerActor = this.player;
    this.viewActor = this.player;
    const names = BOT_NAMES.slice().sort(() => this.rng() - 0.5);
    let ni = 0;
    const per = Math.max(1, Math.min(6, s.bots | 0));
    for (const tm of [TEAM.T, TEAM.CT]) {
      for (let i = count[tm]; i < per; i++) {
        const b = new Actor(names[ni++ % names.length], tm, true);
        b.brain = new BotBrain(b, this, s.diff);
        this.actors.push(b);
      }
    }
    for (const a of this.actors) {
      a.money = RULES.startMoney;
      this.addModel(a);
    }
  }

  addModel(a) {
    a.model = buildCharacter(a.team);
    a.model.visible = false;
    a.modelTeam = a.team;
    this.scene.add(a.model);
    this.byId.set(a.id, a);
  }

  // Roster entries: [id, name, team, isBot, isHuman]. Used by clients and after joins.
  rosterList() { return this.actors.map((a) => [a.id, a.name, a.team, a.isBot ? 1 : 0, a.isBot ? 0 : 1]); }

  syncRoster(list, youId) {
    const keep = new Set(list.map((r) => r[0]));
    for (const a of this.actors.slice()) {
      if (keep.has(a.id)) continue;
      if (a.model) this.scene.remove(a.model);
      this.actors.splice(this.actors.indexOf(a), 1);
      this.byId.delete(a.id);
    }
    for (const [id, name, team, isBot] of list) {
      let a = this.byId.get(id);
      if (!a) {
        a = new Actor(name, team, !!isBot);
        a.id = id;
        a.alive = false;
        a.deathT = 99;
        this.actors.push(a);
        this.addModel(a);
      }
      a.name = name;
      a.isBot = !!isBot;
      if (a.team !== team || a.modelTeam !== team) {
        a.team = team;
        this.scene.remove(a.model);
        this.addModel(a);
      }
    }
    if (youId !== undefined && youId !== null) this.player = this.byId.get(youId);
    if (!this.listenerActor || !keep.has(this.listenerActor.id)) this.listenerActor = this.player;
    if (!this.viewActor || !keep.has(this.viewActor.id)) this.viewActor = this.player;
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
    if (err) { if (!silent && !a.isBot) { this.msg(err, 1.5, 'warn', { to: a }); this.sound('deny', a, 1, { owner: true }); } return false; }
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
      if (this.mode === 'dm' && w.slot === 0) a.dmChoice = key;
    }
    if (!a.isBot) {
      this.sound('buy', a, 1, { owner: true });
      if (!a.buyingRebuy) { a.roundBuys = a.roundBuys || []; a.roundBuys.push(key); a.lastBuys = a.roundBuys.slice(); }
    }
    return true;
  }

  rebuy(a = this.player) {
    if (!a.lastBuys) return;
    a.buyingRebuy = true;
    for (const k of a.lastBuys) this.buy(a, k, true);
    a.buyingRebuy = false;
  }

  autobuy(a = this.player) {
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
      this.fire({ e: 'say', k: 'go' });
      this.msg(this.mode === 'dm' ? 'mode_dm' : 'mode_gg', 2.5, 'big');
    }
  }

  defaultPistol(a) { return a.team === TEAM.T ? 'glock' : 'usp'; }

  startRound() {
    this.round++;
    for (const a of this.actors) a.roundBuys = [];
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
      a.tp = (a.tp || 0) + 1;
      if (a.brain) a.brain.reset();
    }
    const ts = this.actors.filter((a) => a.team === TEAM.T);
    if (ts.length && this.mode === 'bomb') {
      const carrier = ts[(this.rng() * ts.length) | 0];
      carrier.hasBomb = true;
      if (!carrier.isBot && !(carrier === this.player && this.autopilot)) this.msg('have_bomb', 4, 'info', { to: carrier });
    }
    for (const a of this.actors) if (a.brain) a.brain.buy();
    this.fire({ e: 'rstart', r: this.round });
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
    // Round MVP: most kills on the winning team.
    const mvp = this.actors.filter((a) => a.team === winner).sort((a, b) => b.roundKills - a.roundKills)[0];
    if (mvp && mvp.roundKills > 0) mvp.mvps++;
    const key = winner === TEAM.T ? 't_win' : 'ct_win';
    this.lastWinner = winner;
    const ev = { e: 'rend', w: winner, r: reason };
    if (mvp && mvp.roundKills > 0) ev.mvp = mvp.id;
    this.fire(ev);
    const target = this.setup.rounds;
    if (this.score[winner] >= target || this.round >= target * 2 - 1) this.pendingEnd = true;
    return key;
  }

  endMatch(winnerTeam, winnerActor) {
    if (this.over) return;
    this.over = true;
    this.phase = 'over';
    const ev = { e: 'mend', wt: winnerTeam };
    if (winnerActor) ev.wa = winnerActor.id;
    this.fire(ev);
  }

  addMoney(a, n) {
    const before = a.money;
    a.money = Math.max(0, Math.min(RULES.maxMoney, a.money + n));
    if (!a.isBot && a.money !== before) this.fire({ e: 'money', o: a.id, n: a.money - before });
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
      const k = a.dmChoice ? a.dmChoice : (a.brain ? (a.dmPick || (a.dmPick = DM_WEAPONS[(this.rng() * DM_WEAPONS.length) | 0])) : 'ak47');
      if (WEAPONS[k].slot === 0) a.slots[0] = makeWeapon(k);
      a.nades.he = 1;
      a.slot = a.bestSlot();
    }
    a.switchT = 0.4;
    a.tp = (a.tp || 0) + 1;
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
    if (!a || this.ffa) return;
    const last = this.radioT.get(a.id) || -10;
    if (this.time - last < 6) return;
    this.radioT.set(a.id, this.time);
    this.fire({ e: 'chat', a: a.id, k: key });
  }

  stat(key, n, a = this.player, pred = false) {
    if (a.isBot) return;
    const ev = { e: 'stat', o: a.id, k: key, n };
    if (pred) { ev.pr = 1; ev.a = a.id; }
    this.fire(ev);
  }

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
    if (own && Math.random() < 0.4) setTimeout(() => audio.play('brass', null, 0.5), 450);
  }

  onDamage(victim, attacker, hp, zone, dir, helmetDink) {
    const ev = { e: 'dmg', v: victim.id, hp, z: zone, hd: helmetDink ? 1 : 0, k: victim.armor > 0 && zone !== 'legs' ? 1 : 0, kl: victim.hp <= 0 ? 1 : 0 };
    if (attacker) { ev.a = attacker.id; ev.ax = Math.round(attacker.x * 100) / 100; ev.az = Math.round(attacker.z * 100) / 100; }
    this.fire(ev);
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
      }
    } else if (!attacker || attacker === victim) {
      victim.kills = Math.max(0, victim.kills - (this.mode === 'bomb' ? 0 : 1));
    }
    const kev = { e: 'kill', v: victim.id, w: weaponKey, hs: hs ? 1 : 0, wb: wallbang ? 1 : 0, tk: teamKill ? 1 : 0 };
    if (attacker) kev.a = attacker.id;
    this.fire(kev);
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
    this.sound('levelUp', a, 1, { owner: true });
    if (a.alive) this.giveGG(a);
  }

  // ---------- drops ----------
  spawnDrop(key, a, w) {
    const model = buildGun(key);
    model.scale.setScalar(1.25);
    this.scene.add(model);
    const f = { x: -Math.sin(a.yaw), z: -Math.cos(a.yaw) };
    const d = {
      id: this.nextObjId++, key, w, model, x: a.x + f.x * 0.3, y: a.y + 1.1, z: a.z + f.z * 0.3,
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
    this.msg('bomb_dropped', 2, 'warn', { team: TEAM.T });
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
      if (!a.isBot) { this.msg('bomb_picked', 2, 'info', { to: a }); this.sound('pickup', a, 1, { owner: true }); }
      return true;
    }
    const def = WEAPONS[d.key];
    if (def.kind === 'grenade') {
      if (a.nades[def.nade] >= (def.max || 1)) return false;
      a.nades[def.nade]++;
      if (!a.nadeKey) a.nadeKey = def.nade;
      this.sound('pickup', a, 1, { owner: true });
      return true;
    }
    if (this.mode === 'gg') return false;
    const s = def.slot;
    if (a.slots[s]) {
      if (!swap) return false;
      this.dropWeapon(a, s, true);
    }
    a.slots[s] = d.w || makeWeapon(d.key);
    this.sound('pickup', a, 1, { owner: true });
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
    this.bomb = { planted: true, dropped: false, x: a.x, y: this.grid.topAt(a.x, a.z) + 0.07, z: a.z, site, timer: RULES.bombTime, defuser: null, beepT: 0, planter: a };
    this.makeBombModel(a.yaw);
    for (const x of this.actors) if (x.team === TEAM.T) this.addMoney(x, RULES.plantReward);
    this.stat('plants', 1, a);
    a.score += 2;
    this.sound('planted', { x: a.x, y: a.y, z: a.z }, 1);
    this.fire({ e: 'say', k: 'r_planted' });
    this.msg('bomb_planted', 3, 'big');
    this.noise(a.x, a.y, a.z, 100, a);
  }

  makeBombModel(yaw = 0) {
    const B = this.bomb;
    const model = buildGun('bomb');
    model.scale.setScalar(1.7);
    model.position.set(B.x, B.y, B.z);
    model.rotation.y = yaw;
    const led = new THREE.Sprite(new THREE.SpriteMaterial({ map: softSprite('spark'), color: 0xff2020, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
    led.scale.set(0.35, 0.35, 1);
    led.position.set(0, 0.08, 0);
    model.add(led);
    this.scene.add(model);
    B.model = model;
    B.led = led;
  }

  // Beeps and LED blink; runs on host and clients alike.
  bombBeep(dt) {
    const B = this.bomb;
    if (!B.planted || !B.led) return;
    const frac = Math.max(0, B.timer / RULES.bombTime);
    B.beepT = (B.beepT || 0) - dt;
    if (B.beepT <= 0) {
      B.beepT = 0.12 + frac * 0.95;
      audio.play('beep', { x: B.x, y: B.y + 0.2, z: B.z }, 1.2);
      B.led.visible = true;
      B.ledOff = this.time + 0.08;
    }
    if (B.ledOff && this.time > B.ledOff) B.led.visible = false;
  }

  updateBomb(dt) {
    const B = this.bomb;
    if (!B.planted || this.phase !== 'live') return;
    B.timer -= dt;
    this.bombBeep(dt);
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
    this.sound('bombExplode', { x: B.x, y: B.y + 1, z: B.z }, 2);
    this.fire({ e: 'expl', p: [B.x, B.y, B.z], big: 1 });
    for (const a of this.actors) {
      if (!a.alive) continue;
      const d = Math.hypot(a.x - B.x, a.z - B.z, (a.y - B.y) * 0.5);
      if (d > RULES.bombRadius) continue;
      const dmg = RULES.bombDamage * Math.pow(1 - d / RULES.bombRadius, 2);
      if (dmg >= 1) damage(this, a, null, dmg, 'blast', 0.75, 'bomb');
    }
    this.msg('bomb_exploded', 3, 'big');
    this.endRound(TEAM.T, 'bomb');
  }

  defuse(a) {
    const B = this.bomb;
    B.planted = false;
    B.defused = true;
    a.defuseT = 0;
    B.led.visible = false;
    this.stat('defuses', 1, a);
    a.score += 2;
    this.sound('defused', { x: B.x, y: B.y, z: B.z }, 1);
    this.fire({ e: 'say', k: 'r_defused' });
    this.msg('bomb_defused', 3, 'big');
    this.endRound(TEAM.CT, 'defuse');
  }

  shake(x, z, radius, amount) {
    const p = this.listenerActor;
    const d = Math.hypot(p.x - x, p.z - z);
    if (d < radius) this.shakeAmt = Math.max(this.shakeAmt, amount * (1 - d / radius));
  }

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
        this.sound('jump', a, 0.5, { owner: true, pred: true });
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
      if (a.fallSpeed > 11) { if (this.role === 'client') a.pendingFall = a.fallSpeed; else damage(this, a, null, (a.fallSpeed - 11) * 10, 'legs', 1, 'fall'); }
      if (a.fallSpeed > 4) {
        this.sound('land', a, 0.7, { pred: true });
        this.noise(a.x, a.y, a.z, 14, a);
      }
    }
    a.speed2d = Math.hypot(a.vx, a.vz);
    this.footsteps(a, dt, cmd.walk);
  }

  // Footsteps are audible when running.
  footsteps(a, dt, walk) {
    if (a.onGround && a.speed2d > 3.3 && !walk && a.crouch < 0.5) {
      a.stepAcc += a.speed2d * dt;
      if (a.stepAcc > 2.3) {
        a.stepAcc = 0;
        this.sound('step', a, a === this.listenerActor ? 0.25 : 0.9, { pred: true });
        this.noise(a.x, a.y, a.z, 20, a);
      }
    }
  }

  // ---------- LAN: remote players on the host ----------
  // Merges a command from a client into its actor's pending input.
  remoteInput(a, c) {
    const n = a.net || (a.net = { atk: [], slotSeq: -1, rl: 0, ss: -1 });
    if (Array.isArray(c.p) && c.p.length === 3 && c.p.every(Number.isFinite)) { n.pos = c.p; n.vel = Array.isArray(c.v) ? c.v : [0, 0, 0]; n.og = !!c.g; }
    if (Number.isFinite(c.y)) a.yaw = c.y;
    if (Number.isFinite(c.pt)) a.pitch = Math.max(-1.5, Math.min(1.5, c.pt));
    n.cr = Number.isFinite(c.c) ? Math.max(0, Math.min(1, c.c)) : 0;
    n.walk = !!c.w;
    n.use = !!c.u;
    if (c.up) n.usePressed = true;
    if (c.dr) n.drop = true;
    if (c.ss !== undefined && c.ss !== n.ss) { n.ss = c.ss; n.slot = c.s; n.nk = c.nk; }
    if (c.rl !== undefined && c.rl !== n.rl) { n.rl = c.rl; n.reload = true; }
    n.sil = c.sl; n.scope = c.sc;
    if (Array.isArray(c.at)) n.atk.push(...c.at.slice(0, 20));
    if (Number.isFinite(c.fall)) n.fall = Math.max(n.fall || 0, c.fall);
  }

  remoteStep(a, dt) {
    const n = a.net;
    if (!n) return;
    if (n.pos) {
      const [x, y, z] = n.pos;
      const since = Math.max(0.05, this.time - (n.applied ?? this.time - 0.1));
      const frozen = this.phase === 'freeze' || a.plantT > 0 || a.defuseT > 0;
      const lim = frozen ? 0.35 : (a.maxSpeed() * 1.6 + 2) * since + 0.8;
      const ok = Math.hypot(x - a.x, z - a.z) <= lim && !this.grid.blockedAt(x, z, PHYS.radius * 0.8, y, y + 1) && y >= this.grid.groundUnder(x, z, PHYS.radius * 0.5) - 0.6;
      if (ok) { a.x = x; a.y = y; a.z = z; a.vx = n.vel[0] || 0; a.vy = n.vel[1] || 0; a.vz = n.vel[2] || 0; a.onGround = n.og; }
      else { a.tp = (a.tp || 0) + 1; a.vx = a.vz = 0; }
      n.pos = null;
      n.applied = this.time;
    }
    a.crouch = n.cr;
    a.speed2d = Math.hypot(a.vx, a.vz);
    this.footsteps(a, dt, n.walk);
    if (n.fall > 11) damage(this, a, null, (n.fall - 11) * 10, 'legs', 1, 'fall');
    n.fall = 0;
    if (!a.alive) return;
    if (n.slot !== undefined && n.slot !== null) {
      if (n.slot === 3 && n.nk && a.nades[n.nk] > 0) a.nadeKey = n.nk;
      if (a.slot !== n.slot) a.select(n.slot);
      n.slot = null;
    }
    const w = a.w;
    if (w.def.silencer && n.sil !== undefined) w.silenced = !!n.sil;
    if (w.def.kind === 'sniper') a.scope = n.scope | 0;
    const cmd = { fire: false, alt: false, reload: !!n.reload, use: n.use, usePressed: !!n.usePressed, drop: !!n.drop };
    this.objectives(a, cmd, dt);
    if (a.plantT <= 0 && a.defuseT <= 0) updateWeapon(this, a, cmd, dt);
    for (const at of n.atk) remoteAttack(this, a, at);
    n.atk.length = 0;
    this.useAndDrop(a, cmd);
    n.reload = false; n.usePressed = false; n.drop = false;
  }

  useAndDrop(a, cmd) {
    if (cmd.usePressed && a.plantT <= 0 && a.defuseT <= 0) {
      const d = this.nearestDrop(a);
      if (d && this.tryPickup(a, d, true)) { this.drops.splice(this.drops.indexOf(d), 1); this.scene.remove(d.model); }
    }
    if (cmd.drop) {
      if (a.slot === 4 && a.hasBomb) this.dropBomb(a);
      else if (a.slot <= 1) this.dropWeapon(a, a.slot, false);
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
        if (a.plantT === 0) this.sound('plant', a, 0.8);
        a.plantT += dt;
        if (a.plantT >= RULES.plantTime) this.plant(a, site);
      } else {
        if (want && !site && !a.isBot && this.time - (a.siteHintT || -9) > 2) { a.siteHintT = this.time; this.msg('must_site', 1.5, 'warn', { to: a }); }
        a.plantT = 0;
      }
    }
    if (B.planted && a.team === TEAM.CT) {
      const near = Math.hypot(a.x - B.x, a.z - B.z) < 1.6 && Math.abs(a.y - B.y) < 1.4;
      if (cmd.use && near && (!B.defuser || B.defuser === a)) {
        if (!B.defuser) this.sound('defuse', { x: B.x, y: B.y, z: B.z }, 0.8);
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
    if (this.role === 'client') { if (this.client) this.client.step(dt, playerCmd); return; }
    if (this.over) { this.animate(dt); return; }
    this.time += dt;
    this.matchTime += dt;
    this.shakeAmt = Math.max(0, this.shakeAmt - dt * 1.8);
    // Phase timers.
    if (this.phase === 'freeze') {
      this.phaseT -= dt;
      if (this.phaseT <= 0) {
        this.phase = 'live'; this.phaseT = RULES.roundTime; this.liveStart = this.time;
        this.fire({ e: 'say', k: 'go' });
        this.msg('go', 1.5, 'big');
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
      if (a.remote) { this.remoteStep(a, dt); continue; }
      let cmd;
      if (a.brain) cmd = a.brain.think(dt);
      else if (a === this.player) cmd = playerCmd || { wx: 0, wz: 0 };
      else cmd = { wx: 0, wz: 0 };
      if (cmd.slot !== null && cmd.slot !== undefined) a.select(cmd.slot);
      this.applyMove(a, cmd, dt);
      this.objectives(a, cmd, dt);
      if (a.plantT <= 0 && a.defuseT <= 0) updateWeapon(this, a, cmd, dt);
      this.useAndDrop(a, cmd);
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
      if (a.modelTeam !== a.team) { this.scene.remove(a.model); this.addModel(a); }
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
