// A combatant: the local player or a bot. Holds physics state, health and inventory.
import { WEAPONS, PHYS, TEAM } from './config.js';

let nextId = 1;

export function makeWeapon(key) {
  const def = WEAPONS[key];
  return { key, def, clip: def.clip || 0, reserve: def.reserve || 0, silenced: false };
}

// Model variant for a weapon instance (silencer attached or not).
export function modelKey(w) { return w.silenced ? w.key + '_s' : w.key; }

export class Actor {
  constructor(name, team, isBot) {
    this.id = nextId++;
    this.name = name;
    this.team = team;
    this.isBot = isBot;
    this.model = null;
    this.brain = null;
    this.money = 0;
    this.kills = 0; this.deaths = 0; this.score = 0; this.hsKills = 0; this.dmgDealt = 0; this.roundKills = 0; this.mvps = 0;
    this.ggLevel = 0;
    this.resetBody();
    this.clearInventory();
    this.alive = false;
  }

  resetBody() {
    this.x = 0; this.y = 0; this.z = 0;
    this.vx = 0; this.vy = 0; this.vz = 0;
    this.onGround = true;
    this.yaw = 0; this.pitch = 0;
    this.hp = 100;
    this.crouch = 0;
    this.crouching = false;
    this.alive = true;
    this.deathT = 0;
    this.deathDir = 1;
    this.punchP = 0; this.punchY = 0;
    this.viewPunch = 0;
    this.shotsFired = 0;
    this.nextFire = 0;
    this.reloadT = 0;
    this.switchT = 0;
    this.scope = 0;
    this.flashT = 0; this.flashMax = 0;
    this.plantT = 0; this.defuseT = 0;
    this.stamina = 1;
    this.stepAcc = 0;
    this.spotted = -100;
    this.protectT = 0;
    this.fireAnim = 0;
    this.throwT = 0;
    this.speed2d = 0;
    this.stepUp = 0;
    this.lastHurt = -100;
    this.lastAttacker = null;
    this.respawnT = 0;
  }

  clearInventory() {
    this.slots = [null, null, makeWeapon('knife'), null, null];
    this.nades = { he: 0, flash: 0, smoke: 0 };
    this.nadeKey = null;
    this.hasBomb = false;
    this.armor = 0;
    this.helmet = false;
    this.kit = false;
    this.slot = 2;
    this.lastSlot = 2;
  }

  get w() {
    if (this.slot === 3) return this.nadeKey ? { key: this.nadeKey, def: WEAPONS[this.nadeKey], clip: 1, reserve: 0 } : this.slots[2];
    if (this.slot === 4) return this.hasBomb ? { key: 'bomb', def: WEAPONS.bomb, clip: 1, reserve: 0 } : this.slots[2];
    return this.slots[this.slot] || this.slots[2];
  }

  has(slot) {
    if (slot === 3) return this.nades.he + this.nades.flash + this.nades.smoke > 0;
    if (slot === 4) return this.hasBomb;
    return !!this.slots[slot];
  }

  firstNade() {
    for (const k of ['he', 'flash', 'smoke']) if (this.nades[k] > 0) return k;
    return null;
  }

  // Draw a weapon slot. Grenade slot cycles through owned types.
  select(slot) {
    if (!this.has(slot)) return false;
    if (slot === 3) {
      if (this.slot === 3) {
        const order = ['he', 'flash', 'smoke'];
        const i = order.indexOf(this.nadeKey);
        for (let k = 1; k <= 3; k++) { const n = order[(i + k) % 3]; if (this.nades[n] > 0) { this.nadeKey = n; break; } }
      } else if (!this.nadeKey || !this.nades[this.nadeKey]) this.nadeKey = this.firstNade();
    } else if (slot === this.slot) return false;
    if (slot !== this.slot) this.lastSlot = this.slot;
    this.slot = slot;
    const def = this.w.def;
    this.switchT = def.kind === 'knife' ? 0.35 : def.kind === 'sniper' ? 0.9 : def.kind === 'rifle' ? 0.75 : 0.55;
    this.reloadT = 0;
    this.scope = 0;
    this.shotsFired = 0;
    this.throwT = 0;
    this.plantT = 0;
    return true;
  }

  bestSlot() {
    if (this.slots[0]) return 0;
    if (this.slots[1]) return 1;
    return 2;
  }

  eyeHeight() { return PHYS.eye - (PHYS.eye - PHYS.crouchEye) * this.crouch; }
  bodyHeight() { return PHYS.height - (PHYS.height - PHYS.crouchHeight) * this.crouch; }

  maxSpeed() {
    let s = this.w.def.speed || 6;
    if (this.scope && this.w.def.kind === 'sniper') s *= 0.7;
    return s;
  }

  forward(out) {
    const cp = Math.cos(this.pitch);
    out.x = -Math.sin(this.yaw) * cp;
    out.y = Math.sin(this.pitch);
    out.z = -Math.cos(this.yaw) * cp;
    return out;
  }

  // Hitboxes in the actor's local frame (x right, y up, z forward is -z), scaled by crouch.
  hitboxes() {
    const k = this.bodyHeight() / PHYS.height;
    const hy = this.eyeHeight();
    return [
      ['head', -0.15, hy - 0.15, -0.16, 0.15, hy + 0.17, 0.15],
      ['chest', -0.27, 1.12 * k, -0.17, 0.27, 1.48 * k, 0.17],
      ['stomach', -0.23, 0.86 * k, -0.15, 0.23, 1.12 * k, 0.15],
      ['legs', -0.24, 0.0, -0.15, 0.24, 0.86 * k, 0.15],
      ['arms', -0.12, 1.1 * k, -0.62, 0.22, 1.42 * k, -0.17],
    ];
  }

  isT() { return this.team === TEAM.T; }
}
