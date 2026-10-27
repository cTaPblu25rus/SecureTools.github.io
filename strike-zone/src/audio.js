// All sound is synthesized with WebAudio; world sounds go through panners for 3D hearing.

const SHOT = {
  knife: null,
  pistol: { lp: 3600, dur: 0.16, thump: 150, vol: 0.55, crack: 0.5 },
  deagle: { lp: 2600, dur: 0.3, thump: 95, vol: 0.85, crack: 0.7 },
  shotgun: { lp: 1700, dur: 0.42, thump: 70, vol: 1.0, crack: 0.5 },
  smg: { lp: 4200, dur: 0.12, thump: 160, vol: 0.45, crack: 0.45 },
  rifle: { lp: 2900, dur: 0.2, thump: 110, vol: 0.7, crack: 0.65 },
  m4a1: { lp: 2000, dur: 0.16, thump: 120, vol: 0.5, crack: 0.3 },
  sniper: { lp: 2100, dur: 0.55, thump: 70, vol: 1.0, crack: 1.0 },
  silenced: { lp: 1300, dur: 0.09, thump: 260, vol: 0.32, crack: 0.12 },
};

class Audio {
  constructor() {
    this.ctx = null;
    this.volume = 0.8;
    this.voice = true;
    this.lang = 'ru';
    this.active = 0;
    this.listener = { x: 0, y: 0, z: 0 };
  }

  init() {
    if (this.ctx) { if (this.ctx.state === 'suspended') this.ctx.resume(); return; }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return;
    this.ctx = new AC();
    this.master = this.ctx.createGain();
    this.master.gain.value = this.volume;
    const comp = this.ctx.createDynamicsCompressor();
    comp.threshold.value = -14; comp.ratio.value = 6; comp.attack.value = 0.002; comp.release.value = 0.2;
    this.master.connect(comp).connect(this.ctx.destination);
    const len = this.ctx.sampleRate;
    this.noise = this.ctx.createBuffer(1, len, this.ctx.sampleRate);
    const d = this.noise.getChannelData(0);
    for (let i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    // Brown noise for wind and explosions.
    this.brown = this.ctx.createBuffer(1, len * 2, this.ctx.sampleRate);
    const b = this.brown.getChannelData(0);
    let last = 0;
    for (let i = 0; i < b.length; i++) { last = (last + 0.02 * (Math.random() * 2 - 1)) / 1.02; b[i] = last * 3.5; }
  }

  setVolume(v) { this.volume = v; if (this.master) this.master.gain.value = v; }
  suspend() { if (this.ctx && this.ctx.state === 'running') this.ctx.suspend(); }
  resume() { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); }

  setListener(x, y, z, yaw) {
    this.listener.x = x; this.listener.y = y; this.listener.z = z;
    if (!this.ctx) return;
    const L = this.ctx.listener;
    const fx = -Math.sin(yaw), fz = -Math.cos(yaw);
    if (L.positionX) {
      const t = this.ctx.currentTime;
      L.positionX.setValueAtTime(x, t); L.positionY.setValueAtTime(y, t); L.positionZ.setValueAtTime(z, t);
      L.forwardX.setValueAtTime(fx, t); L.forwardY.setValueAtTime(0, t); L.forwardZ.setValueAtTime(fz, t);
      L.upX.setValueAtTime(0, t); L.upY.setValueAtTime(1, t); L.upZ.setValueAtTime(0, t);
    } else {
      L.setPosition(x, y, z);
      L.setOrientation(fx, 0, fz, 0, 1, 0);
    }
  }

  // Output node for a sound: panned when it has a world position.
  out(pos, vol, maxDist = 90) {
    const g = this.ctx.createGain();
    g.gain.value = vol;
    if (pos) {
      const dist = Math.hypot(pos.x - this.listener.x, pos.y - this.listener.y, pos.z - this.listener.z);
      if (dist > maxDist) return null;
      const p = this.ctx.createPanner();
      p.panningModel = 'equalpower';
      p.distanceModel = 'inverse';
      p.refDistance = 4;
      p.rolloffFactor = 1.1;
      p.maxDistance = maxDist;
      if (p.positionX) { p.positionX.value = pos.x; p.positionY.value = pos.y; p.positionZ.value = pos.z; }
      else p.setPosition(pos.x, pos.y, pos.z);
      g.connect(p).connect(this.master);
    } else g.connect(this.master);
    return g;
  }

  busy(limit = 36) { return !this.ctx || this.active > limit; }
  track(node, dur) {
    this.active++;
    setTimeout(() => { this.active--; try { node.disconnect(); } catch (e) { /* already gone */ } }, dur * 1000 + 100);
  }

  noiseBurst(dst, t, dur, type, freq, q, vol, rate = 1, buf) {
    vol = Math.max(0.0002, vol);
    const src = this.ctx.createBufferSource();
    src.buffer = buf || this.noise;
    src.playbackRate.value = rate;
    const f = this.ctx.createBiquadFilter();
    f.type = type; f.frequency.value = freq; f.Q.value = q;
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.004);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    src.connect(f).connect(g).connect(dst);
    src.start(t, Math.random() * 0.5);
    src.stop(t + dur + 0.05);
    return f;
  }

  tone(dst, t, f0, f1, dur, vol, type = 'sine') {
    vol = Math.max(0.0002, vol);
    const o = this.ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(f0, t);
    if (f1 !== f0) o.frequency.exponentialRampToValueAtTime(Math.max(1, f1), t + dur);
    const g = this.ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.exponentialRampToValueAtTime(vol, t + 0.005);
    g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
    o.connect(g).connect(dst);
    o.start(t); o.stop(t + dur + 0.05);
  }

  shot(weaponKey, kind, pos) {
    if (this.busy()) return;
    let k = kind === 'pistol' ? (weaponKey === 'deagle' ? 'deagle' : 'pistol') : kind;
    if (weaponKey === 'm4a1') k = 'm4a1';
    if (weaponKey === 'silenced') k = 'silenced';
    const s = SHOT[k];
    if (!s) return;
    const dist = pos ? Math.hypot(pos.x - this.listener.x, pos.z - this.listener.z) : 0;
    const far = Math.min(1, dist / 60);
    const dst = this.out(pos, s.vol * (pos ? 1.4 : 1), 140);
    if (!dst) return;
    const t = this.ctx.currentTime;
    const lp = s.lp * (1 - far * 0.6);
    this.noiseBurst(dst, t, s.dur, 'lowpass', lp, 0.7, 0.9, 0.9 + Math.random() * 0.2);
    this.noiseBurst(dst, t, 0.04, 'highpass', 2500, 0.5, s.crack * (1 - far), 1);
    this.tone(dst, t, s.thump * 1.6, s.thump * 0.45, 0.12 + s.dur * 0.3, 0.7);
    if (dist > 30) this.noiseBurst(dst, t + 0.05 + dist / 900, s.dur * 2.2, 'lowpass', 600, 0.4, 0.25, 0.6);
    this.track(dst, s.dur * 3);
  }

  play(name, pos = null, vol = 1) {
    if (!this.ctx) return;
    if (name !== 'beep' && name !== 'explode' && this.busy(44)) return;
    const dst = this.out(pos, vol, name === 'explode' ? 200 : name === 'step' ? 32 : 70);
    if (!dst) return;
    const t = this.ctx.currentTime;
    let dur = 0.3;
    switch (name) {
      case 'step': this.noiseBurst(dst, t, 0.07, 'bandpass', 700 + Math.random() * 500, 1.2, 0.5, 0.8); this.noiseBurst(dst, t, 0.05, 'lowpass', 220, 1, 0.5); dur = 0.1; break;
      case 'land': this.noiseBurst(dst, t, 0.12, 'lowpass', 400, 1, 0.8); dur = 0.15; break;
      case 'jump': this.noiseBurst(dst, t, 0.06, 'bandpass', 900, 1, 0.25); dur = 0.1; break;
      case 'empty': this.tone(dst, t, 1800, 1500, 0.03, 0.3, 'square'); dur = 0.05; break;
      case 'reload': {
        this.noiseBurst(dst, t, 0.05, 'bandpass', 2400, 3, 0.5);
        this.tone(dst, t + 0.02, 900, 600, 0.05, 0.2, 'square');
        this.noiseBurst(dst, t + 0.45, 0.06, 'bandpass', 1800, 3, 0.6);
        this.tone(dst, t + 0.47, 700, 400, 0.06, 0.25, 'square');
        dur = 0.6; break;
      }
      case 'bolt': this.noiseBurst(dst, t + 0.25, 0.08, 'bandpass', 1500, 2, 0.6); this.noiseBurst(dst, t + 0.45, 0.06, 'bandpass', 2200, 2, 0.6); dur = 0.6; break;
      case 'silencer': for (let i = 0; i < 4; i++) this.noiseBurst(dst, t + i * 0.25, 0.05, 'bandpass', 3000 - i * 300, 4, 0.3); dur = 1.1; break;
      case 'brass': this.tone(dst, t, 4200 + Math.random() * 800, 3800, 0.05, 0.06, 'triangle'); dur = 0.08; break;
      case 'shell': this.noiseBurst(dst, t, 0.06, 'bandpass', 1300, 2, 0.5); this.tone(dst, t, 500, 300, 0.06, 0.2, 'triangle'); dur = 0.1; break;
      case 'draw': this.noiseBurst(dst, t, 0.08, 'highpass', 3000, 1, 0.25); dur = 0.1; break;
      case 'knife': this.noiseBurst(dst, t, 0.18, 'bandpass', 3200, 0.8, 0.45, 1.3); dur = 0.2; break;
      case 'knifeHit': this.noiseBurst(dst, t, 0.12, 'lowpass', 900, 1, 0.8); this.tone(dst, t, 300, 120, 0.1, 0.4); dur = 0.15; break;
      case 'knifeWall': this.tone(dst, t, 2600, 2400, 0.12, 0.25, 'square'); this.noiseBurst(dst, t, 0.06, 'highpass', 4000, 1, 0.4); dur = 0.15; break;
      case 'hit': this.noiseBurst(dst, t, 0.08, 'lowpass', 700, 1, 0.7); this.tone(dst, t, 220, 110, 0.07, 0.5); dur = 0.1; break;
      case 'headshot': this.tone(dst, t, 2300, 2000, 0.25, 0.5, 'triangle'); this.tone(dst, t, 4600, 4000, 0.18, 0.18, 'sine'); this.noiseBurst(dst, t, 0.05, 'highpass', 3500, 1, 0.5); dur = 0.3; break;
      case 'kevlar': this.noiseBurst(dst, t, 0.06, 'bandpass', 1600, 2, 0.6); this.tone(dst, t, 500, 300, 0.05, 0.3, 'square'); dur = 0.1; break;
      case 'impact': this.noiseBurst(dst, t, 0.05, 'bandpass', 1800 + Math.random() * 1500, 1.5, 0.25); dur = 0.08; break;
      case 'ricochet': this.tone(dst, t, 3500 + Math.random() * 1500, 1200, 0.25, 0.12, 'sine'); dur = 0.3; break;
      case 'bounce': this.tone(dst, t, 800, 500, 0.05, 0.35, 'triangle'); this.noiseBurst(dst, t, 0.04, 'bandpass', 1500, 2, 0.3); dur = 0.1; break;
      case 'pin': this.tone(dst, t, 2800, 2500, 0.05, 0.25, 'square'); this.noiseBurst(dst, t + 0.1, 0.05, 'highpass', 4000, 1, 0.3); dur = 0.2; break;
      case 'throw': this.noiseBurst(dst, t, 0.15, 'bandpass', 1100, 0.8, 0.3); dur = 0.2; break;
      case 'explode': {
        this.noiseBurst(dst, t, 1.6, 'lowpass', 900, 0.7, 1.0, 0.7, this.brown);
        this.noiseBurst(dst, t, 0.35, 'lowpass', 3000, 0.5, 0.8, 1);
        this.tone(dst, t, 90, 30, 1.0, 1.0);
        dur = 1.8; break;
      }
      case 'bombExplode': {
        this.noiseBurst(dst, t, 3.2, 'lowpass', 700, 0.7, 1.0, 0.5, this.brown);
        this.noiseBurst(dst, t, 0.6, 'lowpass', 2500, 0.5, 1.0, 0.8);
        this.tone(dst, t, 70, 22, 2.4, 1.0);
        dur = 3.5; break;
      }
      case 'flashbang': this.noiseBurst(dst, t, 0.5, 'highpass', 1500, 0.6, 1.0); this.tone(dst, t, 160, 60, 0.3, 0.7); dur = 0.6; break;
      case 'ring': this.tone(dst, t, 3400, 3300, 2.6 * vol + 0.4, 0.12 * vol + 0.02); dur = 3; break;
      case 'smoke': this.noiseBurst(dst, t, 1.4, 'bandpass', 1400, 0.4, 0.5, 0.6); dur = 1.5; break;
      case 'beep': this.tone(dst, t, 2350, 2350, 0.09, 0.35, 'sine'); dur = 0.12; break;
      case 'plant': for (let i = 0; i < 7; i++) this.tone(dst, t + i * 0.32, 1300 + (i % 3) * 180, 1300 + (i % 3) * 180, 0.06, 0.25, 'square'); dur = 2.4; break;
      case 'planted': this.tone(dst, t, 1900, 1900, 0.12, 0.4); this.tone(dst, t + 0.18, 1900, 1900, 0.12, 0.4); dur = 0.4; break;
      case 'defuse': for (let i = 0; i < 5; i++) this.noiseBurst(dst, t + i * 0.4, 0.06, 'bandpass', 2600, 4, 0.35); dur = 2.2; break;
      case 'defused': this.tone(dst, t, 900, 1800, 0.3, 0.35, 'triangle'); dur = 0.4; break;
      case 'buy': this.tone(dst, t, 1400, 1400, 0.06, 0.25, 'square'); this.tone(dst, t + 0.07, 2100, 2100, 0.1, 0.25, 'square'); dur = 0.2; break;
      case 'deny': this.tone(dst, t, 300, 200, 0.18, 0.3, 'square'); dur = 0.2; break;
      case 'pickup': this.noiseBurst(dst, t, 0.07, 'bandpass', 2000, 2, 0.5); this.tone(dst, t + 0.05, 600, 900, 0.06, 0.2, 'triangle'); dur = 0.15; break;
      case 'click': this.tone(dst, t, 1200, 900, 0.04, 0.2, 'triangle'); dur = 0.05; break;
      case 'roundStart': this.tone(dst, t, 660, 660, 0.12, 0.25, 'square'); this.tone(dst, t + 0.14, 880, 880, 0.2, 0.25, 'square'); dur = 0.4; break;
      case 'win': [523, 659, 784, 1046].forEach((f, i) => this.tone(dst, t + i * 0.12, f, f, 0.3, 0.22, 'triangle')); dur = 0.8; break;
      case 'lose': [440, 370, 311, 262].forEach((f, i) => this.tone(dst, t + i * 0.16, f, f, 0.35, 0.22, 'triangle')); dur = 1; break;
      case 'levelUp': [660, 880, 1320].forEach((f, i) => this.tone(dst, t + i * 0.07, f, f, 0.12, 0.25, 'square')); dur = 0.4; break;
      case 'hurt': this.noiseBurst(dst, t, 0.12, 'lowpass', 500, 1, 0.9); dur = 0.15; break;
      default: dur = 0.05;
    }
    this.track(dst, dur);
  }

  startAmbience(theme) {
    if (!this.ctx) return;
    this.stopAmbience();
    const src = this.ctx.createBufferSource();
    src.buffer = this.brown; src.loop = true;
    const f = this.ctx.createBiquadFilter(); f.type = 'bandpass'; f.frequency.value = theme === 'industrial' ? 220 : 420; f.Q.value = 0.6;
    const g = this.ctx.createGain(); g.gain.value = theme === 'night' ? 0.05 : 0.08;
    const lfo = this.ctx.createOscillator(); lfo.frequency.value = 0.07;
    const lg = this.ctx.createGain(); lg.gain.value = 0.04;
    lfo.connect(lg).connect(g.gain);
    src.connect(f).connect(g).connect(this.master);
    src.start(); lfo.start();
    this.amb = { src, lfo, g };
  }

  stopAmbience() {
    if (!this.amb) return;
    try { this.amb.src.stop(); this.amb.lfo.stop(); this.amb.g.disconnect(); } catch (e) { /* stopped */ }
    this.amb = null;
  }

  // Radio voice lines through speech synthesis when the platform has it.
  say(text) {
    if (!this.voice || !text || typeof speechSynthesis === 'undefined') return;
    try {
      speechSynthesis.cancel();
      const u = new SpeechSynthesisUtterance(text);
      u.lang = this.lang === 'ru' ? 'ru-RU' : 'en-US';
      u.rate = 1.15; u.pitch = 0.8; u.volume = Math.min(1, this.volume * 1.1);
      speechSynthesis.speak(u);
    } catch (e) { /* no voice */ }
  }
}

export const audio = new Audio();
