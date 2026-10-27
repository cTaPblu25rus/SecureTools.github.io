// Procedural synthwave soundtrack and sound effects (pure WebAudio, no assets).
// Every voice is a function of (ctx, destination, time) so the exact same
// music can be rendered offline for the trailer.

const midi = (n) => 440 * Math.pow(2, (n - 69) / 12);
const BPM = 124;
const STEP = 60 / BPM / 4; // 16th note

// A minor: Am - F - C - G (bass root + chord tones)
const PROG = [
  [33, [57, 60, 64, 69]],
  [29, [53, 57, 60, 65]],
  [36, [55, 60, 64, 67]],
  [31, [55, 59, 62, 67]],
];
const ARP = [0, 1, 2, 3, 2, 1, 2, 3, 0, 2, 1, 3, 2, 0, 3, 1];
const LEAD = [ // simple hook, one note per 8th, -1 = rest (2 bars = 16 slots)
  76, -1, 74, 72, -1, 72, 74, -1, 76, -1, 79, -1, 76, 74, 72, -1,
];

const noiseCache = new WeakMap();
function noise(ctx) {
  let b = noiseCache.get(ctx);
  if (!b) {
    b = ctx.createBuffer(1, ctx.sampleRate, ctx.sampleRate);
    const d = b.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    noiseCache.set(ctx, b);
  }
  return b;
}

function env(g, t, a, peak, d, sustain = 0.0001) {
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(peak, t + a);
  g.gain.exponentialRampToValueAtTime(Math.max(sustain, 0.0001), t + a + d);
}

function osc(ctx, type, freq, t, dur, out, peak, a = 0.005, detune = 0) {
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = type; o.frequency.setValueAtTime(freq, t); o.detune.value = detune;
  env(g, t, a, peak, dur);
  o.connect(g).connect(out);
  o.start(t); o.stop(t + a + dur + 0.05);
  return o;
}

function noiseHit(ctx, out, t, dur, peak, type, freq, q = 1) {
  const s = ctx.createBufferSource();
  s.buffer = noise(ctx);
  const f = ctx.createBiquadFilter();
  f.type = type; f.frequency.value = freq; f.Q.value = q;
  const g = ctx.createGain();
  env(g, t, 0.002, peak, dur);
  s.connect(f).connect(g).connect(out);
  s.start(t, Math.random() * 0.5); s.stop(t + dur + 0.05);
  return { s, f, g };
}

// ---------- instruments ----------
const V = {
  kick(ctx, out, t) {
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.frequency.setValueAtTime(160, t);
    o.frequency.exponentialRampToValueAtTime(42, t + 0.13);
    env(g, t, 0.002, 0.9, 0.32);
    o.connect(g).connect(out); o.start(t); o.stop(t + 0.4);
  },
  snare(ctx, out, t) {
    noiseHit(ctx, out, t, 0.18, 0.35, 'highpass', 1500);
    osc(ctx, 'triangle', 190, t, 0.09, out, 0.25);
  },
  hat(ctx, out, t, open) {
    noiseHit(ctx, out, t, open ? 0.12 : 0.035, open ? 0.09 : 0.07, 'highpass', 8000);
  },
  bass(ctx, out, t, note, dur) {
    const o = ctx.createOscillator(); const f = ctx.createBiquadFilter(); const g = ctx.createGain();
    o.type = 'sawtooth'; o.frequency.value = midi(note);
    f.type = 'lowpass'; f.Q.value = 6;
    f.frequency.setValueAtTime(1400, t); f.frequency.exponentialRampToValueAtTime(180, t + dur);
    env(g, t, 0.005, 0.32, dur);
    o.connect(f).connect(g).connect(out); o.start(t); o.stop(t + dur + 0.05);
  },
  arp(ctx, out, t, note, vol) {
    const o = osc(ctx, 'square', midi(note), t, 0.11, out, vol);
    return o;
  },
  pad(ctx, out, t, notes, dur) {
    const f = ctx.createBiquadFilter(); f.type = 'lowpass'; f.frequency.value = 1100;
    const g = ctx.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(0.055, t + dur * 0.3);
    g.gain.linearRampToValueAtTime(0.0001, t + dur);
    f.connect(g).connect(out);
    for (const n of notes.slice(0, 3)) {
      for (const d of [-9, 9]) {
        const o = ctx.createOscillator(); o.type = 'sawtooth';
        o.frequency.value = midi(n - 12); o.detune.value = d;
        o.connect(f); o.start(t); o.stop(t + dur + 0.05);
      }
    }
  },
  lead(ctx, out, t, note, dur) {
    const o = ctx.createOscillator(); const g = ctx.createGain(); const f = ctx.createBiquadFilter();
    o.type = 'sawtooth'; o.frequency.value = midi(note);
    const lfo = ctx.createOscillator(); const lg = ctx.createGain();
    lfo.frequency.value = 5.5; lg.gain.value = 6; lfo.connect(lg).connect(o.detune);
    f.type = 'lowpass'; f.frequency.value = 2600;
    env(g, t, 0.02, 0.07, dur);
    o.connect(f).connect(g).connect(out);
    o.start(t); o.stop(t + dur + 0.1); lfo.start(t); lfo.stop(t + dur + 0.1);
  },
};

// mode: 'menu' | 'game'; intensity 0..1
function scheduleStep(ctx, bus, step, t, mode, intensity) {
  const bar = Math.floor(step / 16);
  const s = step % 16;
  const [root, chord] = PROG[bar % 4];
  const game = mode === 'game';
  if (s === 0) V.pad(ctx, bus.music, t, chord, STEP * 16);
  // arpeggio
  const arpVol = game ? 0.045 : 0.03;
  if (game || s % 2 === 0) {
    const n = chord[ARP[s]] + (game && intensity > 0.45 && s % 4 === 3 ? 12 : 0);
    V.arp(ctx, bus.delay, t, n, arpVol);
  }
  if (!game) {
    if (s % 4 === 2) V.hat(ctx, bus.music, t, false);
    return;
  }
  if (s % 4 === 0) V.kick(ctx, bus.music, t);
  if (s === 4 || s === 12) V.snare(ctx, bus.music, t);
  if (s % 2 === 1) V.hat(ctx, bus.music, t, s % 4 === 3 && intensity > 0.3);
  if (s % 2 === 0) V.bass(ctx, bus.music, t, root + (s % 8 === 6 ? 12 : 0), STEP * 1.8);
  if (intensity > 0.25 && s % 2 === 0) {
    const n = LEAD[((bar % 2) * 8) + s / 2];
    if (n > 0 && bar % 8 >= 4) V.lead(ctx, bus.delay, t, n, STEP * 2.2);
  }
}

// ---------- sound effects ----------
const SFX = {
  shard(ctx, out, t, p = 0) {
    const base = 1046 * Math.pow(2, Math.min(p, 12) / 12);
    osc(ctx, 'sine', base, t, 0.08, out, 0.16);
    osc(ctx, 'sine', base * 1.5, t + 0.045, 0.12, out, 0.12);
  },
  jump(ctx, out, t) {
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = 'triangle';
    o.frequency.setValueAtTime(220, t); o.frequency.exponentialRampToValueAtTime(660, t + 0.15);
    env(g, t, 0.005, 0.2, 0.18);
    o.connect(g).connect(out); o.start(t); o.stop(t + 0.25);
  },
  land(ctx, out, t) {
    noiseHit(ctx, out, t, 0.09, 0.12, 'lowpass', 500);
  },
  slam(ctx, out, t) {
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.frequency.setValueAtTime(500, t); o.frequency.exponentialRampToValueAtTime(80, t + 0.18);
    env(g, t, 0.005, 0.25, 0.2);
    o.connect(g).connect(out); o.start(t); o.stop(t + 0.3);
  },
  near(ctx, out, t) {
    const { f } = noiseHit(ctx, out, t, 0.28, 0.3, 'bandpass', 600, 2);
    f.frequency.setValueAtTime(400, t); f.frequency.exponentialRampToValueAtTime(4000, t + 0.25);
  },
  power(ctx, out, t) {
    [0, 4, 7, 12, 16].forEach((n, i) => osc(ctx, 'square', midi(72 + n), t + i * 0.05, 0.12, out, 0.08));
  },
  crash(ctx, out, t) {
    noiseHit(ctx, out, t, 0.9, 0.7, 'lowpass', 1800);
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(220, t); o.frequency.exponentialRampToValueAtTime(30, t + 0.8);
    env(g, t, 0.005, 0.4, 0.8);
    o.connect(g).connect(out); o.start(t); o.stop(t + 1);
  },
  shield(ctx, out, t) {
    noiseHit(ctx, out, t, 0.3, 0.3, 'highpass', 3000);
    [0, 7, 12].forEach((n, i) => osc(ctx, 'sine', midi(88 - n), t + i * 0.04, 0.2, out, 0.1));
  },
  click(ctx, out, t) { osc(ctx, 'sine', 1400, t, 0.04, out, 0.1); },
  buy(ctx, out, t) { [0, 7, 12, 19].forEach((n, i) => osc(ctx, 'triangle', midi(76 + n), t + i * 0.06, 0.15, out, 0.12)); },
  biome(ctx, out, t) {
    const { f } = noiseHit(ctx, out, t, 1.6, 0.18, 'bandpass', 300, 4);
    f.frequency.setValueAtTime(200, t); f.frequency.exponentialRampToValueAtTime(6000, t + 1.5);
    osc(ctx, 'sine', midi(57), t, 1.4, out, 0.15, 0.3);
  },
  alarm(ctx, out, t) {
    for (let i = 0; i < 3; i++) {
      const o = ctx.createOscillator(); const g = ctx.createGain();
      o.type = 'sawtooth';
      o.frequency.setValueAtTime(440, t + i * 0.42); o.frequency.linearRampToValueAtTime(880, t + i * 0.42 + 0.2);
      o.frequency.linearRampToValueAtTime(440, t + i * 0.42 + 0.4);
      env(g, t + i * 0.42, 0.02, 0.09, 0.38);
      o.connect(g).connect(out); o.start(t + i * 0.42); o.stop(t + i * 0.42 + 0.45);
    }
  },
  laser(ctx, out, t) {
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = 'square';
    o.frequency.setValueAtTime(1800, t); o.frequency.exponentialRampToValueAtTime(140, t + 0.22);
    env(g, t, 0.003, 0.08, 0.22);
    o.connect(g).connect(out); o.start(t); o.stop(t + 0.3);
  },
  bossHit(ctx, out, t) {
    noiseHit(ctx, out, t, 0.35, 0.4, 'bandpass', 900, 1.5);
    [0, 3, 7].forEach((n, i) => osc(ctx, 'square', midi(64 + n), t + i * 0.04, 0.14, out, 0.08));
  },
  bossDie(ctx, out, t) {
    for (let i = 0; i < 4; i++) noiseHit(ctx, out, t + i * 0.25, 0.6, 0.5, 'lowpass', 2400 - i * 400);
    const o = ctx.createOscillator(); const g = ctx.createGain();
    o.type = 'sawtooth';
    o.frequency.setValueAtTime(600, t); o.frequency.exponentialRampToValueAtTime(25, t + 1.4);
    env(g, t, 0.01, 0.35, 1.4);
    o.connect(g).connect(out); o.start(t); o.stop(t + 1.5);
  },
  mission(ctx, out, t) { [0, 4, 7, 12].forEach((n, i) => osc(ctx, 'square', midi(79 + n), t + i * 0.08, 0.18, out, 0.07)); },
};

function makeBus(ctx, dest, musicVol, sfxVol) {
  const comp = ctx.createDynamicsCompressor();
  comp.threshold.value = -12; comp.ratio.value = 4;
  comp.connect(dest);
  const music = ctx.createGain(); music.gain.value = musicVol; music.connect(comp);
  const sfx = ctx.createGain(); sfx.gain.value = sfxVol; sfx.connect(comp);
  const delay = ctx.createGain(); delay.connect(music);
  const dl = ctx.createDelay(1); dl.delayTime.value = STEP * 3;
  const fb = ctx.createGain(); fb.gain.value = 0.32;
  const wet = ctx.createGain(); wet.gain.value = 0.5;
  delay.connect(dl); dl.connect(fb).connect(dl); dl.connect(wet).connect(music);
  return { comp, music, sfx, delay };
}

export class AudioEngine {
  constructor() {
    this.ctx = null; this.bus = null;
    this.musicVol = 0.7; this.sfxVol = 0.9;
    this.mode = 'off'; this.intensity = 0;
    this.step = 0; this.nextTime = 0; this.timer = null;
    this.log = null; // when set, sfx/music changes are recorded for offline render
    this.clock = () => 0;
  }
  unlock() {
    if (!this.ctx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      if (!AC) return;
      this.ctx = new AC();
      this.bus = makeBus(this.ctx, this.ctx.destination, this.musicVol, this.sfxVol);
      this.timer = setInterval(() => this.tick(), 25);
    }
    if (this.ctx.state === 'suspended') this.ctx.resume();
  }
  setVolumes(music, sfx) {
    this.musicVol = music; this.sfxVol = sfx;
    if (this.bus) {
      this.bus.music.gain.setTargetAtTime(music, this.ctx.currentTime, 0.05);
      this.bus.sfx.gain.setTargetAtTime(sfx, this.ctx.currentTime, 0.05);
    }
  }
  setMode(mode) {
    if (this.log) this.log.push({ t: this.clock(), type: 'mode', mode });
    if (mode === this.mode) return;
    this.mode = mode;
    if (this.ctx) {
      // restart phrase on the next 16th so game music starts on the downbeat
      this.step = 0; this.nextTime = this.ctx.currentTime + 0.06;
    }
  }
  setIntensity(v) { this.intensity = v; }
  suspend() { if (this.ctx && this.ctx.state === 'running') this.ctx.suspend(); }
  resume() { if (this.ctx && this.ctx.state === 'suspended') this.ctx.resume(); }
  tick() {
    const ctx = this.ctx;
    if (!ctx || ctx.state !== 'running' || this.mode === 'off') return;
    if (this.nextTime < ctx.currentTime) this.nextTime = ctx.currentTime + 0.02;
    while (this.nextTime < ctx.currentTime + 0.12) {
      scheduleStep(ctx, this.bus, this.step, this.nextTime, this.mode, this.intensity);
      this.step++; this.nextTime += STEP;
    }
  }
  play(name, p) {
    if (this.log) this.log.push({ t: this.clock(), type: 'sfx', name, p });
    if (!this.ctx || this.ctx.state !== 'running' || !SFX[name]) return;
    SFX[name](this.ctx, this.bus.sfx, this.ctx.currentTime + 0.005, p);
  }
}

// Render the soundtrack + logged sfx offline; returns a WAV ArrayBuffer.
export async function renderOffline(duration, events, musicVol = 0.7, sfxVol = 0.9) {
  const rate = 44100;
  const ctx = new OfflineAudioContext(2, Math.ceil(rate * duration), rate);
  const bus = makeBus(ctx, ctx.destination, musicVol, sfxVol);
  const modes = events.filter((e) => e.type === 'mode').sort((a, b) => a.t - b.t);
  let mode = 'off'; let mi = 0; let step = 0;
  for (let t = 0.05; t < duration; t += STEP) {
    while (mi < modes.length && modes[mi].t <= t) {
      if (modes[mi].mode !== mode) { mode = modes[mi].mode; step = 0; }
      mi++;
    }
    if (mode !== 'off') scheduleStep(ctx, bus, step, t, mode, Math.min(1, t / 20));
    step++;
  }
  for (const e of events) {
    if (e.type === 'sfx' && SFX[e.name] && e.t < duration - 0.1) SFX[e.name](ctx, bus.sfx, e.t + 0.01, e.p);
  }
  const buf = await ctx.startRendering();
  return encodeWav(buf);
}

function encodeWav(buf) {
  const ch = buf.numberOfChannels; const len = buf.length;
  const out = new DataView(new ArrayBuffer(44 + len * ch * 2));
  const ws = (o, s) => { for (let i = 0; i < s.length; i++) out.setUint8(o + i, s.charCodeAt(i)); };
  ws(0, 'RIFF'); out.setUint32(4, 36 + len * ch * 2, true); ws(8, 'WAVE'); ws(12, 'fmt ');
  out.setUint32(16, 16, true); out.setUint16(20, 1, true); out.setUint16(22, ch, true);
  out.setUint32(24, buf.sampleRate, true); out.setUint32(28, buf.sampleRate * ch * 2, true);
  out.setUint16(32, ch * 2, true); out.setUint16(34, 16, true); ws(36, 'data');
  out.setUint32(40, len * ch * 2, true);
  const data = []; for (let c = 0; c < ch; c++) data.push(buf.getChannelData(c));
  let o = 44;
  for (let i = 0; i < len; i++) {
    for (let c = 0; c < ch; c++) {
      const v = Math.max(-1, Math.min(1, data[c][i]));
      out.setInt16(o, v < 0 ? v * 0x8000 : v * 0x7fff, true); o += 2;
    }
  }
  return out.buffer;
}
