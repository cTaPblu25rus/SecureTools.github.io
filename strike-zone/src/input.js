// Unified input: touch (floating joystick, swipe look, draggable fire buttons),
// keyboard + mouse with pointer lock, and gamepads.

const KEYMAP = {
  KeyW: 'fwd', ArrowUp: 'fwd', KeyS: 'back', ArrowDown: 'back', KeyA: 'left', ArrowLeft: 'left', KeyD: 'right', ArrowRight: 'right',
  Space: 'jump', ControlLeft: 'crouch', ControlRight: 'crouch', KeyC: 'crouch', ShiftLeft: 'walk', ShiftRight: 'walk', KeyE: 'use', Tab: 'score',
};
const PRESS = {
  KeyR: 'reload', Digit1: 'slot1', Digit2: 'slot2', Digit3: 'slot3', Digit4: 'slot4', Digit5: 'slot5', KeyQ: 'last', KeyG: 'drop', KeyB: 'buy',
  Escape: 'menu', KeyP: 'menu', Space: 'jump', KeyF: 'scope', KeyV: 'radio',
};

class Input {
  constructor() {
    this.move = { x: 0, y: 0 };
    this.lookDX = 0;
    this.lookDY = 0;
    this.held = { fire: false, fire2: false, jump: false, crouch: false, walk: false, use: false, score: false };
    this.keys = {};
    this.pressed = new Set();
    this.touches = new Map();
    this.touchMode = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
    this.crouchToggle = false;
    this.enabled = false;
    this.sens = 1;
    this.mouseSens = 1;
    this.invertY = false;
    this.onAnyPress = null;
    this.joy = null;
  }

  attach(canvas, touchLayer) {
    this.canvas = canvas;
    this.layer = touchLayer;
    this.joyEl = document.getElementById('joy');
    this.joyKnob = document.getElementById('joyKnob');
    window.addEventListener('keydown', (e) => {
      if (e.repeat) { if (KEYMAP[e.code] || e.code === 'Tab') e.preventDefault(); return; }
      if (e.code === 'Tab' || e.code === 'Space' || e.code.startsWith('Arrow')) e.preventDefault();
      this.keys[e.code] = true;
      const a = PRESS[e.code];
      if (a) this.pressed.add(a);
      if (KEYMAP[e.code] === 'crouch') this.crouchToggle = false;
      this.updateKeys();
      if (this.onAnyPress) this.onAnyPress(e.code);
    });
    window.addEventListener('keyup', (e) => { this.keys[e.code] = false; this.updateKeys(); });
    window.addEventListener('blur', () => { this.keys = {}; this.updateKeys(); this.held.fire = this.held.fire2 = false; });
    touchLayer.addEventListener('mousedown', (e) => {
      if (!this.enabled || e.target.closest('[data-act]')) return;
      if (document.pointerLockElement !== canvas) { this.lock(); return; }
      if (e.button === 0) this.held.fire = true;
      if (e.button === 2) { this.held.fire2 = true; this.pressed.add('scope'); }
    });
    window.addEventListener('mouseup', (e) => { if (e.button === 0) this.held.fire = false; if (e.button === 2) this.held.fire2 = false; });
    window.addEventListener('contextmenu', (e) => e.preventDefault());
    window.addEventListener('mousemove', (e) => {
      if (document.pointerLockElement !== canvas) return;
      this.lookDX += e.movementX * 0.0022 * this.mouseSens;
      this.lookDY += e.movementY * 0.0022 * this.mouseSens * (this.invertY ? -1 : 1);
    });
    window.addEventListener('wheel', (e) => { if (this.enabled) this.pressed.add(e.deltaY > 0 ? 'next' : 'prev'); }, { passive: true });
    document.addEventListener('pointerlockchange', () => {
      if (document.pointerLockElement !== canvas && this.enabled && !this.touchMode) this.pressed.add('unlocked');
    });

    const opts = { passive: false };
    touchLayer.addEventListener('pointerdown', (e) => this.pDown(e), opts);
    window.addEventListener('pointermove', (e) => this.pMove(e), opts);
    window.addEventListener('pointerup', (e) => this.pUp(e), opts);
    window.addEventListener('pointercancel', (e) => this.pUp(e), opts);
  }

  lock() {
    if (this.touchMode || !this.canvas.requestPointerLock) return;
    try { const p = this.canvas.requestPointerLock(); if (p && p.catch) p.catch(() => {}); } catch (e) { /* not allowed */ }
  }
  unlock() { if (document.pointerLockElement) document.exitPointerLock(); }

  updateKeys() {
    const k = (a) => Object.keys(KEYMAP).some((c) => KEYMAP[c] === a && this.keys[c]);
    if (!this.joy) {
      this.move.x = (k('right') ? 1 : 0) - (k('left') ? 1 : 0);
      this.move.y = (k('fwd') ? 1 : 0) - (k('back') ? 1 : 0);
    }
    this.held.jump = k('jump');
    this.held.walk = k('walk');
    this.held.use = k('use') || this.touchUse;
    this.held.score = k('score') || this.touchScore;
    if (!this.crouchToggle) this.held.crouch = k('crouch');
  }

  pDown(e) {
    if (e.pointerType === 'mouse') return;
    this.touchMode = true;
    e.preventDefault();
    const btn = e.target.closest('[data-act]');
    const x = e.clientX, y = e.clientY;
    if (btn) {
      const act = btn.dataset.act;
      this.touches.set(e.pointerId, { type: 'btn', act, x, y, el: btn });
      btn.classList.add('down');
      this.buttonDown(act);
      return;
    }
    if (!this.enabled) return;
    if (x < window.innerWidth * 0.42 && !this.joy) {
      this.joy = { id: e.pointerId, ox: x, oy: y };
      this.touches.set(e.pointerId, { type: 'joy', x, y });
      if (this.joyEl) { this.joyEl.style.left = x + 'px'; this.joyEl.style.top = y + 'px'; this.joyEl.classList.add('on'); }
      this.setJoy(x, y);
    } else {
      this.touches.set(e.pointerId, { type: 'look', x, y });
    }
  }

  setJoy(x, y) {
    const R = 55 * (this.btnScale || 1);
    let dx = (x - this.joy.ox) / R, dy = (y - this.joy.oy) / R;
    const len = Math.hypot(dx, dy);
    if (len > 1) { dx /= len; dy /= len; }
    // Let the joystick base follow a finger that travels past the rim.
    if (len > 1.6) { this.joy.ox = x - dx * R * 1.6; this.joy.oy = y - dy * R * 1.6; if (this.joyEl) { this.joyEl.style.left = this.joy.ox + 'px'; this.joyEl.style.top = this.joy.oy + 'px'; } }
    const dead = 0.12;
    const m = Math.hypot(dx, dy);
    const s = m < dead ? 0 : (m - dead) / (1 - dead) / (m || 1);
    this.move.x = dx * s;
    this.move.y = -dy * s;
    this.held.walk = m < 0.55 && m >= dead;
    if (this.joyKnob) this.joyKnob.style.transform = `translate(${dx * R}px, ${dy * R}px)`;
  }

  pMove(e) {
    const tch = this.touches.get(e.pointerId);
    if (!tch) return;
    e.preventDefault();
    const x = e.clientX, y = e.clientY;
    if (tch.type === 'joy') { this.setJoy(x, y); return; }
    if (tch.type === 'look' || (tch.type === 'btn' && (tch.act === 'fire' || tch.act === 'fire2'))) {
      const k = 0.0048 * this.sens;
      this.lookDX += (x - tch.x) * k;
      this.lookDY += (y - tch.y) * k * (this.invertY ? -1 : 1);
    }
    tch.x = x; tch.y = y;
  }

  pUp(e) {
    const tch = this.touches.get(e.pointerId);
    if (!tch) return;
    this.touches.delete(e.pointerId);
    if (tch.type === 'joy') {
      this.joy = null;
      this.move.x = this.move.y = 0;
      this.held.walk = false;
      if (this.joyEl) this.joyEl.classList.remove('on');
      if (this.joyKnob) this.joyKnob.style.transform = '';
      this.updateKeys();
    } else if (tch.type === 'btn') {
      tch.el.classList.remove('down');
      this.buttonUp(tch.act);
    }
  }

  buttonDown(act) {
    switch (act) {
      case 'fire': case 'fire2': this.held.fire = true; break;
      case 'jump': this.held.jump = true; this.pressed.add('jump'); break;
      case 'crouch': this.crouchToggle = true; this.held.crouch = !this.held.crouch; break;
      case 'use': this.touchUse = true; this.held.use = true; break;
      case 'score': this.touchScore = !this.touchScore; this.held.score = this.touchScore; break;
      default: this.pressed.add(act);
    }
  }

  buttonUp(act) {
    switch (act) {
      case 'fire': case 'fire2': {
        let still = false;
        for (const t of this.touches.values()) if (t.type === 'btn' && (t.act === 'fire' || t.act === 'fire2')) still = true;
        this.held.fire = still;
        break;
      }
      case 'jump': this.held.jump = false; this.updateKeys(); break;
      case 'use': this.touchUse = false; this.updateKeys(); break;
      default: break;
    }
  }

  pollGamepad(dt) {
    const pads = navigator.getGamepads ? navigator.getGamepads() : [];
    const p = pads && Array.from(pads).find((g) => g && g.connected);
    if (!p) { if (this.padActive) { this.padActive = false; this.held.fire = false; } return; }
    const dz = (v) => (Math.abs(v) < 0.15 ? 0 : v);
    const lx = dz(p.axes[0]), ly = dz(p.axes[1]), rx = dz(p.axes[2]), ry = dz(p.axes[3]);
    if (lx || ly || rx || ry || p.buttons.some((b) => b.pressed)) this.padActive = true;
    if (!this.padActive) return;
    if (!this.joy && !Object.values(this.keys).some(Boolean)) { this.move.x = lx; this.move.y = -ly; }
    this.lookDX += Math.sign(rx) * rx * rx * dt * 3.2 * this.sens;
    this.lookDY += Math.sign(ry) * ry * ry * dt * 2.4 * this.sens * (this.invertY ? -1 : 1);
    const b = (i) => p.buttons[i] && p.buttons[i].pressed;
    const prev = this.padPrev || [];
    const edge = (i, act) => { if (b(i) && !prev[i]) this.pressed.add(act); };
    this.held.fire = b(7) || this.held.fire && this.touches.size > 0;
    edge(6, 'scope'); edge(0, 'jump'); edge(2, 'reload'); edge(3, 'next'); edge(4, 'prev'); edge(5, 'next'); edge(9, 'menu'); edge(8, 'buy'); edge(12, 'slot1'); edge(13, 'slot3');
    this.held.jump = b(0);
    this.held.crouch = b(1) || b(11);
    this.held.use = b(14) || this.touchUse || Object.keys(KEYMAP).some((c) => KEYMAP[c] === 'use' && this.keys[c]);
    this.padPrev = p.buttons.map((x) => x.pressed);
  }

  consume(a) { if (this.pressed.has(a)) { this.pressed.delete(a); return true; } return false; }
  takeLook() { const d = [this.lookDX, this.lookDY]; this.lookDX = this.lookDY = 0; return d; }
  reset() {
    this.pressed.clear(); this.lookDX = this.lookDY = 0; this.held.fire = this.held.fire2 = false;
    this.held.crouch = false; this.crouchToggle = false; this.touchUse = false; this.touchScore = false; this.held.use = false; this.held.score = false;
    for (const t of this.touches.values()) if (t.el) t.el.classList.remove('down');
    this.touches.clear(); this.joy = null; this.move.x = this.move.y = 0;
    if (this.joyEl) this.joyEl.classList.remove('on');
  }
}

export const input = new Input();
