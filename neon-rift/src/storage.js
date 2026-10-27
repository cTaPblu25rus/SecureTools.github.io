import { detectLang } from './i18n.js';

const KEY = 'neonrift_save_v1';

function defaults() {
  return {
    best: 0,
    bestDist: 0,
    shards: 0,
    skins: ['spark'],
    skin: 'spark',
    upgrades: { shield: 0, magnet: 0, boost: 0, x2: 0 },
    settings: {
      music: 0.7, sfx: 0.9, sensitivity: 1, quality: 'auto', vibration: true,
      lang: detectLang(), controls: 'swipe',
    },
    missions: null,      // [{tpl, level, target, progress, done}]
    missionLevel: 0,
    stats: { runs: 0, dist: 0, shards: 0, near: 0, jumps: 0 },
    daily: { last: '', streak: 0 },
    records: [],         // [{score, dist, date}]
    tutorialDone: false,
    challenge: null,     // {date, best, claimed}
  };
}

function merge(base, saved) {
  for (const k in saved) {
    if (base[k] && typeof base[k] === 'object' && !Array.isArray(base[k]) && saved[k] && typeof saved[k] === 'object') {
      merge(base[k], saved[k]);
    } else if (saved[k] !== undefined) {
      base[k] = saved[k];
    }
  }
  return base;
}

export function load() {
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) return merge(defaults(), JSON.parse(raw));
  } catch (e) { /* storage unavailable or corrupt: start fresh */ }
  return defaults();
}

export function save(data) {
  try { localStorage.setItem(KEY, JSON.stringify(data)); } catch (e) { /* ignore */ }
}

export function wipe() {
  try { localStorage.removeItem(KEY); } catch (e) { /* ignore */ }
  return defaults();
}
