// Core tuning constants and content tables for NEON RIFT.

export const R = 6;                 // tunnel radius (m)
export const SHIP_R = R - 0.55;     // radius at which the ship rides
export const PLAYER_HALF_W = 0.5;   // ship half-width (m) used for collision
export const PLAYER_HALF_LEN = 0.75;
export const JUMP_V = 12.5;
export const GRAVITY = 40;
export const SLAM_V = -26;
export const BASE_SPEED = 22;
export const MAX_SPEED = 58;
export const KEY_TURN_SPEED = 3.4;  // rad/s for keyboard steering
export const SPAWN_AHEAD = 190;
export const BIOME_LENGTH = 900;

export const BIOMES = [
  { id: 'neon', name: { ru: 'Неоновый город', en: 'Neon City' },
    wall: 0x0a0420, grid: 0x00e5ff, accent: 0xff2bd6, obstacle: 0xff2bd6, low: 0xffe600, fog: 0x07021a, shard: 0x7cf8ff },
  { id: 'magma', name: { ru: 'Магматическое ядро', en: 'Magma Core' },
    wall: 0x1a0502, grid: 0xff6a00, accent: 0xffd000, obstacle: 0xff2a2a, low: 0x00e5ff, fog: 0x160301, shard: 0xffe27a },
  { id: 'ice', name: { ru: 'Ледяная пустота', en: 'Frozen Void' },
    wall: 0x020c1a, grid: 0x7fd8ff, accent: 0xffffff, obstacle: 0x3d7bff, low: 0xff4fd8, fog: 0x020914, shard: 0xe6fbff },
  { id: 'toxic', name: { ru: 'Токсичный сектор', en: 'Toxic Sector' },
    wall: 0x041405, grid: 0x39ff14, accent: 0xd4ff00, obstacle: 0xb000ff, low: 0xffe600, fog: 0x020a02, shard: 0xd4ff7a },
  { id: 'synth', name: { ru: 'Закат синтвейва', en: 'Synthwave Sunset' },
    wall: 0x14031a, grid: 0xff7b00, accent: 0x00ffd5, obstacle: 0xff0066, low: 0x00ffd5, fog: 0x12021a, shard: 0xffb3f0 },
  { id: 'void', name: { ru: 'Сердце разлома', en: 'Rift Heart' },
    wall: 0x050505, grid: 0xffffff, accent: 0xff003c, obstacle: 0xff003c, low: 0x00e5ff, fog: 0x000000, shard: 0xffffff },
];

// Ship skins. `shape` selects the hull builder in player.js.
export const SKINS = [
  { id: 'spark', name: { ru: 'Искра', en: 'Spark' }, price: 0, hull: 0x1de9ff, trim: 0xffffff, glow: 0x00e5ff, shape: 'dart' },
  { id: 'phantom', name: { ru: 'Фантом', en: 'Phantom' }, price: 600, hull: 0xff2bd6, trim: 0x2b0030, glow: 0xff5be8, shape: 'wing' },
  { id: 'sol', name: { ru: 'Солнце', en: 'Sol' }, price: 1200, hull: 0xffc400, trim: 0xff5a00, glow: 0xffa600, shape: 'dart' },
  { id: 'venom', name: { ru: 'Яд', en: 'Venom' }, price: 2000, hull: 0x39ff14, trim: 0x0b2e00, glow: 0x7dff4f, shape: 'claw' },
  { id: 'prism', name: { ru: 'Призма', en: 'Prism' }, price: 3500, hull: 0xffffff, trim: 0x8a5cff, glow: 0xffffff, shape: 'wing', rainbow: true },
  { id: 'eclipse', name: { ru: 'Затмение', en: 'Eclipse' }, price: 6000, hull: 0x151515, trim: 0xff003c, glow: 0xff003c, shape: 'claw' },
];

export const POWERUPS = {
  shield: { color: 0x40c4ff, icon: '🛡' },
  magnet: { color: 0xff4081, icon: '🧲' },
  boost:  { color: 0xffea00, icon: '⚡' },
  x2:     { color: 0x69f0ae, icon: '×2' },
};

// Upgrade durations (seconds) per level 0..5.
export const UPGRADE_DUR = {
  shield: [8, 10, 12, 15, 18, 22],
  magnet: [7, 9, 11, 13, 16, 20],
  boost:  [3, 3.6, 4.2, 4.8, 5.5, 6.5],
  x2:     [8, 10, 12, 15, 18, 22],
};
export const UPGRADE_COST = [250, 600, 1200, 2200, 4000];

export const REVIVE_COST = 200;
export const DAILY_REWARDS = [50, 80, 120, 160, 220, 300, 500];

// Mission templates. `stat` is a per-run counter tracked in game.js.
export const MISSION_TEMPLATES = [
  { id: 'dist', stat: 'dist', base: 500, step: 400, reward: 60 },
  { id: 'shards', stat: 'shards', base: 40, step: 30, reward: 60 },
  { id: 'near', stat: 'near', base: 5, step: 5, reward: 80 },
  { id: 'jumps', stat: 'jumps', base: 10, step: 8, reward: 50 },
  { id: 'powerups', stat: 'powerups', base: 2, step: 1, reward: 70 },
  { id: 'score', stat: 'score', base: 3000, step: 3000, reward: 90 },
  { id: 'combo', stat: 'combo', base: 3, step: 1, reward: 90 },
  { id: 'nojump', stat: 'nojump', base: 250, step: 200, reward: 100 },
];
