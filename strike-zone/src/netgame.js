// LAN multiplayer sessions. The host runs the real match and sends snapshots with
// events at 20 Hz; clients predict their own movement and shots, interpolate
// everyone else and replay events through the same handler as single player.
import { HostLink, ClientLink, NET_VER } from './net.js';
import { BotBrain } from './bot.js';
import { Actor, makeWeapon } from './actor.js';
import { RULES } from './config.js';
import { buildGun } from './models.js';
import { handleEvent } from './events.js';
import { updateWeapon } from './combat.js';

const SNAP_DT = 0.05;
const CMD_DT = 1 / 30;
const INTERP = 0.1;
const r2 = (v) => Math.round(v * 100) / 100;
const r4 = (v) => Math.round(v * 1e4) / 1e4;
const now = () => performance.now() / 1000;

// ---------- snapshot encoding ----------
function invOf(a) {
  const o = [];
  for (const s of [0, 1]) {
    const w = a.slots[s];
    o.push(w ? w.key : '', w ? w.clip : 0, w ? Math.min(999, w.reserve) : 0, w && w.silenced ? 1 : 0);
  }
  o.push(a.nades.he, a.nades.flash, a.nades.smoke);
  return o;
}

function applyInv(a, inv) {
  for (const [i, s] of [[0, 0], [4, 1]]) {
    const k = inv[i];
    if (!k) { a.slots[s] = null; continue; }
    let w = a.slots[s];
    if (!w || w.key !== k) w = a.slots[s] = makeWeapon(k);
    w.clip = inv[i + 1]; w.reserve = inv[i + 2]; w.silenced = !!inv[i + 3];
  }
  a.nades.he = inv[8]; a.nades.flash = inv[9]; a.nades.smoke = inv[10];
}

export function buildSnapshot(G, events) {
  const B = G.bomb;
  return {
    t: 's', tm: r4(G.time), ph: G.phase, pt: r2(isFinite(G.phaseT) ? G.phaseT : 1e9), r: G.round, sc: G.score, mt: r2(G.matchTime), ls: r4(G.liveStart || 0), ov: G.over ? 1 : 0,
    b: [B.planted ? 1 : 0, B.dropped ? 1 : 0, r2(B.x || 0), r2(B.y || 0), r2(B.z || 0), r2(B.timer || 0), B.defuser ? B.defuser.id : -1, B.exploded ? 1 : 0, B.defused ? 1 : 0],
    a: G.actors.map((a) => [
      a.id, r2(a.x), r2(a.y), r2(a.z), r4(a.yaw), r4(a.pitch), r2(a.crouch), a.alive ? 1 : 0, Math.ceil(Math.max(0, a.hp)), Math.round(a.armor),
      (a.helmet ? 1 : 0) | (a.kit ? 2 : 0) | (a.hasBomb ? 4 : 0) | (a.onGround ? 8 : 0) | (a.protectT > 0 ? 16 : 0) | (G.time - a.spotted < 1.2 ? 32 : 0),
      a.slot, a.nadeKey || '', invOf(a), a.money, a.kills, a.deaths, a.ggLevel, r2(a.plantT), r2(a.defuseT), r2(a.speed2d), a.tp || 0, a.scope,
      r2(a.vx), r2(a.vz), a.hsKills, a.mvps, Math.round(a.dmgDealt), r2(Math.max(0, a.respawnT)), a.lastAttacker ? a.lastAttacker.id : -1,
    ]),
    d: G.drops.map((d) => [d.id, d.key, r2(d.x), r2(d.y), r2(d.z), d.isBomb ? 1 : 0]),
    g: G.grenades.map((g) => [g.id, g.type, r2(g.x), r2(g.y), r2(g.z)]),
    ev: events,
  };
}

const cleanName = (n) => String(n || '').replace(/[<>&"\u0000-\u001f]/g, '').trim().slice(0, 16) || 'Player';

// ---------- host ----------
export class HostSession {
  constructor(app) {
    this.app = app;
    this.role = 'host';
    this.players = new Map();
    this.G = null;
    this.snapT = 0;
    this.hostTeam = 'auto';
    this.link = new HostLink({
      onOpen: () => {},
      onMessage: (id, m) => this.onMessage(id, m),
      onClose: (id) => this.onClose(id),
      onLost: () => this.app.netEnded('host_failed'),
    });
  }

  async start(name, setup) {
    this.name = cleanName(name);
    this.setup = { ...setup };
    this.hostTeam = setup.team || 'auto';
    this.ips = await this.link.start();
    this.updateInfo();
    this.infoTimer = setInterval(() => this.updateInfo(), 2000);
    return this.ips;
  }

  updateInfo() {
    this.link.info({ n: this.name, m: this.setup.map, md: this.setup.mode, p: this.players.size + 1, v: NET_VER, g: this.G && !this.G.over ? 1 : 0 });
  }

  lobbyState() {
    return {
      t: 'lobby', host: this.name, setup: this.setup, inGame: !!(this.G && !this.G.over), ips: this.ips,
      players: [{ id: 0, name: this.name, team: this.hostTeam, host: 1 }, ...[...this.players.values()].map((p) => ({ id: p.id, name: p.name, team: p.team }))],
    };
  }

  broadcastLobby() {
    const st = this.lobbyState();
    this.link.broadcast(st);
    this.app.onLobby(st);
    this.updateInfo();
  }

  setHostTeam(team) { this.hostTeam = team; this.broadcastLobby(); }
  setSetup(setup) { this.setup = { ...setup }; this.broadcastLobby(); }

  actorOf(id) { return this.G ? this.G.actors.find((a) => a.remote && a.netId === id) : null; }

  onMessage(id, m) {
    const p = this.players.get(id);
    if (m.t === 'hello') {
      if (m.v !== NET_VER) { this.link.send(id, { t: 'err', k: 'net_version' }); setTimeout(() => this.link.kick(id), 300); return; }
      if (this.players.size >= 11) { this.link.send(id, { t: 'err', k: 'net_full' }); setTimeout(() => this.link.kick(id), 300); return; }
      this.players.set(id, { id, name: cleanName(m.name), team: 'auto' });
      this.link.send(id, { t: 'welcome', id });
      this.broadcastLobby();
      if (this.G && !this.G.over) this.joinMidGame(id);
      return;
    }
    if (!p) return;
    const a = this.actorOf(id);
    switch (m.t) {
      case 'team':
        if (['auto', 't', 'ct'].includes(m.team)) { p.team = m.team; this.broadcastLobby(); }
        break;
      case 'c':
        if (a && m.c && typeof m.c === 'object') this.G.remoteInput(a, m.c);
        break;
      case 'buy':
        if (a && typeof m.k === 'string') this.G.buy(a, m.k);
        break;
      case 'rebuy':
        if (a) this.G.rebuy(a);
        break;
      case 'autobuy':
        if (a) this.G.autobuy(a);
        break;
      case 'ping':
        this.link.send(id, { t: 'pong', ts: m.ts });
        break;
      default:
    }
  }

  onClose(id) {
    const p = this.players.get(id);
    if (!p) return;
    this.players.delete(id);
    const a = this.actorOf(id);
    if (a) {
      // The leaver's actor stays in the match as a bot.
      a.remote = false;
      a.isBot = true;
      a.net = null;
      a.netId = undefined;
      a.brain = new BotBrain(a, this.G, this.setup.diff);
      this.G.msg('net_left', 3, 'info', { args: [p.name] });
      this.broadcastRoster();
    }
    this.broadcastLobby();
  }

  startMatch() {
    const setup = { ...this.setup, team: this.hostTeam };
    const humans = [...this.players.values()].map((p) => ({ netId: p.id, name: p.name, team: p.team }));
    const G = this.app.startGame(setup, { role: 'host', humans, session: this });
    this.G = G;
    G.net = { events: [] };
    this.snapT = 0;
    for (const p of this.players.values()) this.sendStart(p.id);
    this.updateInfo();
  }

  sendStart(id) {
    const a = this.actorOf(id);
    if (!a) return;
    this.link.send(id, { t: 'start', setup: this.G.setup, roster: this.G.rosterList(), you: a.id, snap: buildSnapshot(this.G, []) });
  }

  joinMidGame(id) {
    const p = this.players.get(id);
    const G = this.G;
    const humans = [0, 0];
    for (const x of G.actors) if (!x.isBot) humans[x.team]++;
    const wantTeam = p.team === 't' ? 0 : p.team === 'ct' ? 1 : humans[0] <= humans[1] ? 0 : 1;
    const bots = G.actors.filter((x) => x.isBot && !x.remote && x !== G.player);
    bots.sort((x, y) => (x.team === wantTeam ? 0 : 1) - (y.team === wantTeam ? 0 : 1) || (x.alive ? 1 : 0) - (y.alive ? 1 : 0));
    let a = G.ffa ? bots[0] : bots.find((x) => x.team === wantTeam) || null;
    if (a) {
      a.brain = null;
      a.isBot = false;
      a.remote = true;
      a.netId = id;
      a.net = null;
      a.name = p.name;
    } else {
      a = new Actor(p.name, G.ffa ? wantTeam : wantTeam, false);
      a.remote = true;
      a.netId = id;
      a.money = RULES.startMoney;
      a.alive = false;
      a.deathT = 99;
      a.respawnT = 1;
      G.actors.push(a);
      G.addModel(a);
    }
    G.msg('net_joined', 3, 'info', { args: [p.name] });
    this.broadcastRoster();
    this.sendStart(id);
  }

  broadcastRoster() { if (this.G) this.link.broadcast({ t: 'roster', list: this.G.rosterList() }); }

  tick(dt) {
    if (!this.G) return;
    this.snapT -= dt;
    if (this.snapT > 0) return;
    this.snapT += SNAP_DT;
    if (this.snapT < 0) this.snapT = SNAP_DT;
    const ev = this.G.net.events;
    this.G.net.events = [];
    if (this.players.size) this.link.broadcast(buildSnapshot(this.G, ev));
  }

  matchClosed() { this.G = null; this.updateInfo(); }

  stop() {
    clearInterval(this.infoTimer);
    this.link.broadcast({ t: 'bye' });
    setTimeout(() => this.link.stop(), 100);
    this.G = null;
  }
}

// ---------- client ----------
export class ClientSession {
  constructor(app) {
    this.app = app;
    this.role = 'client';
    this.G = null;
    this.sync = null;
    this.link = new ClientLink({
      onMessage: (m) => this.onMessage(m),
      onClose: (code) => this.app.netEnded(code === 4000 ? 'net_no_host' : 'net_lost'),
    });
  }

  async join(addr, name) {
    await this.link.connect(addr);
    this.addr = addr;
    this.link.send({ t: 'hello', v: NET_VER, name: cleanName(name) });
  }

  send(obj) { this.link.send(obj); }
  setTeam(team) { this.send({ t: 'team', team }); }

  onMessage(m) {
    switch (m.t) {
      case 'welcome': this.myId = m.id; break;
      case 'lobby': this.lobby = m; this.app.onLobby(m); break;
      case 'start': {
        const G = this.app.startGame(m.setup, { role: 'client', roster: m.roster, youId: m.you, session: this });
        this.G = G;
        this.sync = new ClientSync(G, this);
        G.client = this.sync;
        if (m.snap) this.sync.apply(m.snap);
        break;
      }
      case 's': if (this.sync) this.sync.apply(m); break;
      case 'roster': if (this.G) this.G.syncRoster(m.list); break;
      case 'err': this.app.netEnded(m.k); break;
      case 'bye': this.app.netEnded('net_host_left'); break;
      case 'tolobby': this.app.toLobby(); break;
      default:
    }
  }

  matchClosed() {
    if (this.sync) this.sync.dispose();
    this.G = null;
    this.sync = null;
  }

  stop() {
    this.matchClosed();
    this.link.close();
  }
}

class ClientSync {
  constructor(G, session) {
    this.G = G;
    this.s = session;
    this.started = false;
    this.cmdT = 0;
    this.slotSeq = 0;
    this.lastAction = -9;
    this.acc = { up: false, dr: false };
    this.drops = new Map();
    this.nades = new Map();
  }

  apply(snap) {
    const G = this.G;
    if (!this.started) { G.time = snap.tm; this.started = true; }
    else { const d = snap.tm - G.time; if (Math.abs(d) > 1) G.time = snap.tm; else G.time += d * 0.1; }
    G.phase = snap.ph; G.phaseT = snap.pt > 1e8 ? Infinity : snap.pt; G.round = snap.r; G.score = snap.sc; G.matchTime = snap.mt; G.liveStart = snap.ls;
    this.applyBomb(snap.b);
    this.applyActors(snap.a);
    this.applyObjects(snap.d, this.drops, 1.25, true);
    this.applyObjects(snap.g, this.nades, 1.3, false);
    G.drops = [...this.drops.values()];
    for (const ev of snap.ev || []) {
      if (ev.pr && ev.a === G.player.id) continue;
      if (ev.e === 'rstart') this.roundReset();
      if (ev.e === 'mend') G.over = true;
      handleEvent(G, ev);
    }
    G.over = !!snap.ov;
  }

  roundReset() {
    const G = this.G;
    if (G.bomb.model) G.scene.remove(G.bomb.model);
    G.bomb = { planted: false, dropped: false };
    G.fx.clear();
  }

  applyBomb(b) {
    const G = this.G;
    const B = G.bomb;
    const planted = !!b[0];
    if (planted && !B.planted) {
      if (B.model) G.scene.remove(B.model);
      G.bomb = { planted: true, dropped: false, x: b[2], y: b[3], z: b[4], timer: b[5], beepT: 0 };
      G.makeBombModel();
    } else if (!planted && B.planted) {
      B.planted = false;
      if (B.led) B.led.visible = false;
      if (b[7] && B.model) { G.scene.remove(B.model); B.model = null; }
    }
    const C = G.bomb;
    C.timer = b[5];
    C.dropped = !!b[1];
    if (!C.planted) { C.x = b[2]; C.y = b[3]; C.z = b[4]; }
    C.defuser = b[6] >= 0 ? G.byId.get(b[6]) : null;
    C.exploded = !!b[7];
    C.defused = !!b[8];
  }

  applyActors(list) {
    const G = this.G, t = now();
    for (const e of list) {
      const a = G.byId.get(e[0]);
      if (!a) continue;
      const wasAlive = a.alive, alive = !!e[7];
      const teleported = a.tp !== e[21];
      const f = e[10];
      a.hp = e[8]; a.armor = e[9];
      a.helmet = !!(f & 1); a.kit = !!(f & 2); a.hasBomb = !!(f & 4); a.protectT = f & 16 ? 1 : 0;
      if (f & 32) a.spotted = G.time;
      a.money = e[14]; a.kills = e[15]; a.deaths = e[16]; a.ggLevel = e[17]; a.plantT = e[18]; a.defuseT = e[19];
      a.hsKills = e[25]; a.mvps = e[26]; a.dmgDealt = e[27]; a.respawnT = e[28];
      a.lastAttacker = e[29] >= 0 ? G.byId.get(e[29]) || null : null;
      a.alive = alive;
      if (!alive && wasAlive) { a.deathT = 0; a.deathDir = Math.random() < 0.5 ? 1 : -1; }
      a.tp = e[21];
      if (a === G.player) {
        const busy = G.time - this.lastAction < 0.8 || a.reloadT > 0 || a.throwT > 0;
        if (teleported || alive !== wasAlive) {
          a.x = e[1]; a.y = e[2]; a.z = e[3]; a.vx = a.vy = a.vz = 0;
          a.yaw = e[4]; a.pitch = e[5];
          applyInv(a, e[13]);
          a.nadeKey = e[12] || a.firstNade();
          a.slot = e[11];
          a.reloadT = 0; a.switchT = 0.3; a.scope = 0; a.throwT = 0;
          a.punchP = a.punchY = 0; a.shotsFired = 0;
          if (alive) { a.onGround = true; a.stamina = 1; }
          this.lastAction = -9;
        } else if (!busy) {
          applyInv(a, e[13]);
          if (e[12] && e[12] !== a.nadeKey && a.slot !== 3) a.nadeKey = e[12];
          if (e[11] !== a.slot && a.has(e[11])) { a.select(e[11]); if (e[11] === 3 && e[12]) a.nadeKey = e[12]; }
          if (!a.has(a.slot)) a.select(a.bestSlot());
        }
        continue;
      }
      const buf = a.nb || (a.nb = []);
      if (teleported) buf.length = 0;
      buf.push([t, e[1], e[2], e[3], e[4], e[5]]);
      if (buf.length > 12) buf.shift();
      if (teleported || !wasAlive) { a.x = e[1]; a.y = e[2]; a.z = e[3]; a.yaw = e[4]; a.pitch = e[5]; }
      a.crouch = e[6];
      applyInv(a, e[13]);
      a.nadeKey = e[12] || null;
      a.slot = a.has(e[11]) ? e[11] : a.bestSlot();
      a.speed2d = e[20]; a.onGround = !!(f & 8); a.scope = e[22]; a.vx = e[23]; a.vz = e[24];
    }
  }

  applyObjects(list, map, scale, isDrop) {
    const G = this.G;
    const seen = new Set();
    for (const o of list || []) {
      seen.add(o[0]);
      let x = map.get(o[0]);
      if (!x) {
        const model = buildGun(o[1]);
        model.scale.setScalar(scale);
        if (isDrop) model.rotation.set(0, (o[0] * 1.3) % 6.28, o[5] ? 0 : Math.PI / 2);
        G.scene.add(model);
        x = { id: o[0], key: o[1], model, isBomb: isDrop && !!o[5] };
        map.set(o[0], x);
      }
      x.x = o[2]; x.y = o[3]; x.z = o[4];
      x.model.position.set(x.x, x.y, x.z);
    }
    for (const [id, x] of map) if (!seen.has(id)) { G.scene.remove(x.model); map.delete(id); }
  }

  step(dt, cmd) {
    const G = this.G, a = G.player;
    G.time += dt;
    G.matchTime += dt;
    if (G.phase === 'freeze' || G.phase === 'post' || (G.phase === 'live' && !G.bomb.planted)) G.phaseT -= dt;
    if (G.bomb.planted) G.bomb.timer -= dt;
    G.shakeAmt = Math.max(0, G.shakeAmt - dt * 1.8);
    if (a.alive && cmd && !G.over) {
      const slot0 = a.slot, nk0 = a.nadeKey;
      if (cmd.slot !== null && cmd.slot !== undefined) a.select(cmd.slot);
      G.applyMove(a, cmd, dt);
      if (a.plantT <= 0 && a.defuseT <= 0) {
        const n0 = G.outAtk.length, rl0 = a.reloadSeq;
        updateWeapon(G, a, cmd, dt);
        if (G.outAtk.length > n0 || cmd.reload || cmd.alt || a.reloadSeq !== rl0) this.lastAction = G.time;
      }
      if (a.slot !== slot0 || a.nadeKey !== nk0) { this.slotSeq++; this.lastAction = G.time; }
      if (cmd.usePressed) this.acc.up = true;
      if (cmd.drop) this.acc.dr = true;
      if (a.flashT > 0) a.flashT -= dt;
    }
    // Other players are drawn a little in the past, between two snapshots.
    const rt = now() - INTERP;
    for (const x of G.actors) {
      if (!x.alive) { x.deathT += dt; continue; }
      if (x === a || !x.nb || !x.nb.length) continue;
      const b = x.nb;
      let i = b.length - 1;
      while (i > 0 && b[i - 1][0] > rt) i--;
      const p = b[i - 1] || b[i], q = b[i];
      const span = q[0] - p[0];
      const k = span > 1e-4 ? Math.max(0, Math.min(1, (rt - p[0]) / span)) : 1;
      x.x = p[1] + (q[1] - p[1]) * k;
      x.y = p[2] + (q[2] - p[2]) * k;
      x.z = p[3] + (q[3] - p[3]) * k;
      let dy = q[4] - p[4];
      dy = Math.atan2(Math.sin(dy), Math.cos(dy));
      x.yaw = p[4] + dy * k;
      x.pitch = p[5] + (q[5] - p[5]) * k;
      if (x.fireAnim > 0) x.fireAnim = Math.max(0, x.fireAnim - dt * 4);
    }
    for (const n of this.nades.values()) { n.model.rotation.x += dt * 6; n.model.rotation.z += dt * 3; }
    G.bombBeep(dt);
    G.animate(dt);
    this.sendCmd(dt, cmd);
  }

  sendCmd(dt, cmd) {
    const G = this.G, a = G.player;
    this.cmdT -= dt;
    const urgent = G.outAtk.length > 0 && this.cmdT < CMD_DT / 2;
    if (this.cmdT > 0 && !urgent) return;
    this.cmdT = CMD_DT;
    const w = a.w;
    const c = {
      p: [r4(a.x), r4(a.y), r4(a.z)], v: [r2(a.vx), r2(a.vy), r2(a.vz)], g: a.onGround ? 1 : 0, y: r4(a.yaw), pt: r4(a.pitch), c: r2(a.crouch),
      w: cmd && cmd.walk ? 1 : 0, u: cmd && cmd.use ? 1 : 0, ss: this.slotSeq, s: a.slot, nk: a.nadeKey, rl: a.reloadSeq || 0, sl: w.silenced ? 1 : 0, sc: a.scope,
    };
    if (this.acc.up) c.up = 1;
    if (this.acc.dr) c.dr = 1;
    if (G.outAtk.length) c.at = G.outAtk.splice(0);
    if (a.pendingFall) { c.fall = r2(a.pendingFall); a.pendingFall = 0; }
    this.acc.up = this.acc.dr = false;
    this.s.send({ t: 'c', c });
  }

  dispose() {
    for (const x of this.drops.values()) this.G.scene.remove(x.model);
    for (const x of this.nades.values()) this.G.scene.remove(x.model);
    this.drops.clear();
    this.nades.clear();
  }
}
