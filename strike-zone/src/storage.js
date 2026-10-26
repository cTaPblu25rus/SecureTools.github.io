const KEY = 'strikezone.v1';

export const DEFAULT_SETTINGS = {
  lang: (typeof navigator !== 'undefined' && navigator.language && !navigator.language.startsWith('ru')) ? 'en' : 'ru',
  volume: 0.8, voice: true, sens: 1, mouseSens: 1, fov: 90, quality: 'auto', showFps: false,
  aimAssist: true, autoFire: false, invertY: false, btnScale: 1, btnAlpha: 0.6, crosshair: 'green', vibrate: true, leftFire: true,
};
export const DEFAULT_SETUP = { map: 'sands', mode: 'bomb', team: 'auto', bots: 4, diff: 'normal', rounds: 8, ff: false };
export const DEFAULT_STATS = { kills: 0, deaths: 0, hs: 0, shots: 0, hits: 0, wins: 0, losses: 0, matches: 0, plants: 0, defuses: 0, mvp: 0, time: 0 };

function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch (e) { return {}; }
}

const data = load();
export const store = {
  settings: { ...DEFAULT_SETTINGS, ...(data.settings || {}) },
  setup: { ...DEFAULT_SETUP, ...(data.setup || {}) },
  stats: { ...DEFAULT_STATS, ...(data.stats || {}) },
  tutorialSeen: !!data.tutorialSeen,
  save() {
    try {
      localStorage.setItem(KEY, JSON.stringify({ settings: this.settings, setup: this.setup, stats: this.stats, tutorialSeen: this.tutorialSeen }));
    } catch (e) { /* storage unavailable */ }
  },
};
