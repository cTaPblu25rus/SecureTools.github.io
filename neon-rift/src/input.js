// Touch / mouse / keyboard / tilt input. Produces steering deltas and jump/slam requests.
export class Input {
  constructor(el, getSettings) {
    this.el = el; this.getSettings = getSettings;
    this.drag = 0;          // accumulated steering (radians) since last consume
    this.keyDir = 0;        // -1..1 from keyboard
    this.tilt = 0;          // -1..1 from device orientation
    this.jumpReq = 0; this.slamReq = 0; this.pauseReq = false;
    this.pointers = new Map();
    this.enabled = false;
    this.keys = new Set();
    this.usedKeyboard = false;

    el.addEventListener('pointerdown', (e) => this.down(e));
    window.addEventListener('pointermove', (e) => this.move(e));
    window.addEventListener('pointerup', (e) => this.up(e));
    window.addEventListener('pointercancel', (e) => this.pointers.delete(e.pointerId));
    window.addEventListener('keydown', (e) => this.key(e, true));
    window.addEventListener('keyup', (e) => this.key(e, false));
    window.addEventListener('deviceorientation', (e) => {
      if (e.gamma == null) return;
      // in landscape the roll axis is beta
      const landscape = window.innerWidth > window.innerHeight;
      let v = landscape ? e.beta * (screen.orientation && screen.orientation.angle === 270 ? -1 : 1) : e.gamma;
      v = Math.max(-35, Math.min(35, v)) / 35;
      this.tilt = Math.abs(v) < 0.08 ? 0 : v;
    });
  }
  requestTilt() {
    // iOS needs explicit permission; Android grants it automatically.
    const D = window.DeviceOrientationEvent;
    if (this.getSettings().controls === 'tilt' && D && typeof D.requestPermission === 'function') D.requestPermission().catch(() => {});
  }
  down(e) {
    if (!this.enabled) return;
    const s = this.getSettings();
    this.pointers.set(e.pointerId, { x: e.clientX, y: e.clientY, sx: e.clientX, sy: e.clientY, t: performance.now(), moved: 0, swiped: false });
    // a second finger, or any tap in tilt mode, jumps immediately
    if (this.pointers.size > 1 || s.controls === 'tilt') this.jumpReq = performance.now();
  }
  move(e) {
    const p = this.pointers.get(e.pointerId);
    if (!p || !this.enabled) return;
    const dx = e.clientX - p.x; const dy = e.clientY - p.y;
    p.x = e.clientX; p.y = e.clientY;
    p.moved += Math.abs(dx) + Math.abs(dy);
    const s = this.getSettings();
    if (s.controls !== 'tilt') {
      const w = Math.min(window.innerWidth, 900);
      this.drag += (dx / w) * Math.PI * 1.25 * s.sensitivity;
    }
    // vertical swipes (only when the gesture is mostly vertical)
    const tdy = e.clientY - p.sy; const tdx = e.clientX - p.sx;
    if (!p.swiped && Math.abs(tdy) > 42 && Math.abs(tdy) > Math.abs(tdx) * 1.4 && performance.now() - p.t < 350) {
      p.swiped = true;
      if (tdy < 0) this.jumpReq = performance.now(); else this.slamReq = performance.now();
    }
  }
  up(e) {
    const p = this.pointers.get(e.pointerId);
    this.pointers.delete(e.pointerId);
    if (!p || !this.enabled) return;
    const s = this.getSettings();
    if (s.controls !== 'tilt' && !p.swiped && p.moved < 14 && performance.now() - p.t < 260) this.jumpReq = performance.now();
  }
  key(e, down) {
    const k = e.code;
    if (down && (k === 'Escape' || k === 'KeyP')) { this.pauseReq = true; return; }
    const map = { ArrowLeft: 'L', KeyA: 'L', ArrowRight: 'R', KeyD: 'R' };
    if (map[k]) { if (down) this.keys.add(map[k]); else this.keys.delete(map[k]); this.usedKeyboard = true; }
    if (down && !e.repeat && (k === 'Space' || k === 'ArrowUp' || k === 'KeyW')) { this.jumpReq = performance.now(); this.usedKeyboard = true; e.preventDefault(); }
    if (down && !e.repeat && (k === 'ArrowDown' || k === 'KeyS')) { this.slamReq = performance.now(); e.preventDefault(); }
    this.keyDir = (this.keys.has('R') ? 1 : 0) - (this.keys.has('L') ? 1 : 0);
  }
  consumeDrag() { const d = this.drag; this.drag = 0; return d; }
  wantJump() { if (this.jumpReq && performance.now() - this.jumpReq < 140) return true; this.jumpReq = 0; return false; }
  clearJump() { this.jumpReq = 0; }
  wantSlam() { if (this.slamReq && performance.now() - this.slamReq < 140) { this.slamReq = 0; return true; } return false; }
  reset() { this.drag = 0; this.jumpReq = 0; this.slamReq = 0; this.pointers.clear(); }
}
