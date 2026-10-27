// Gameplay constants. Distances are meters, times are seconds, angles radians.

export const TEAM = { T: 0, CT: 1 };
export const TEAM_KEY = ['t', 'ct'];

export const PHYS = {
  gravity: 20,
  jumpSpeed: 6.6,
  stepHeight: 0.55,
  radius: 0.36,
  height: 1.8,
  crouchHeight: 1.25,
  eye: 1.64,
  crouchEye: 1.12,
  accel: 42,
  airAccel: 9,
  friction: 9,
  walkMul: 0.52,
  crouchMul: 0.36,
};

export const RULES = {
  startMoney: 800,
  maxMoney: 16000,
  freezeTime: 5,
  buyTime: 25,
  roundTime: 115,
  bombTime: 40,
  plantTime: 3.2,
  defuseTime: 10,
  defuseKitTime: 5,
  roundEndTime: 5,
  killReward: 300,
  plantReward: 800,
  winElim: 3250,
  winBomb: 3500,
  winTime: 3250,
  lossBase: 1400,
  lossStep: 500,
  lossMax: 3400,
  bombRadius: 17,
  bombDamage: 500,
  dmRespawn: 2.5,
  dmTime: 600,
  dmFragLimit: 40,
};

// slot: 0 primary, 1 pistol, 2 knife, 3 grenade, 4 bomb
// spread: base inaccuracy, moveSpread added at full speed, airSpread when airborne
// recoil: vertical view punch per shot; recoilX: random horizontal; spray: extra spread per consecutive shot
// pen: share of damage that goes through armor; range: damage multiplier per 10 m
export const WEAPONS = {
  knife: { name: 'Нож', slot: 2, kind: 'knife', price: 0, dmg: 34, dmg2: 65, rate: 0.42, rate2: 1.0, reach: 1.7, speed: 6.4, kill: 300, team: -1 },
  glock: { name: 'Glock-18', slot: 1, kind: 'pistol', price: 400, dmg: 25, rate: 0.15, clip: 20, reserve: 120, reload: 2.2, spread: 0.010, moveSpread: 0.05, airSpread: 0.15, recoil: 0.018, recoilX: 0.006, spray: 0.004, pen: 0.47, range: 0.80, speed: 6.2, team: -1, auto: false },
  usp: { name: 'USP', silencer: true, slot: 1, kind: 'pistol', price: 500, dmg: 34, rate: 0.15, clip: 12, reserve: 100, reload: 2.7, spread: 0.008, moveSpread: 0.045, airSpread: 0.15, recoil: 0.022, recoilX: 0.006, spray: 0.004, pen: 0.50, range: 0.82, speed: 6.2, team: -1, auto: false },
  deagle: { name: 'Desert Eagle', slot: 1, kind: 'pistol', price: 650, dmg: 54, rate: 0.24, clip: 7, reserve: 35, reload: 2.2, spread: 0.010, moveSpread: 0.07, airSpread: 0.2, recoil: 0.055, recoilX: 0.012, spray: 0.01, pen: 0.93, range: 0.88, speed: 6.2, team: -1, auto: false },
  m3: { name: 'M3 Super 90', slot: 0, kind: 'shotgun', price: 1700, dmg: 22, pellets: 9, rate: 0.88, clip: 8, reserve: 32, reload: 0.5, shellReload: true, spread: 0.065, moveSpread: 0.02, airSpread: 0.08, recoil: 0.06, recoilX: 0.01, spray: 0, pen: 0.50, range: 0.55, speed: 5.8, team: -1, auto: false, kill: 300 },
  mp5: { name: 'MP5 Navy', slot: 0, kind: 'smg', price: 1500, dmg: 26, rate: 0.08, clip: 30, reserve: 120, reload: 2.6, spread: 0.012, moveSpread: 0.025, airSpread: 0.12, recoil: 0.011, recoilX: 0.006, spray: 0.0018, pen: 0.50, range: 0.84, speed: 6.2, team: -1, auto: true },
  p90: { name: 'P90', slot: 0, kind: 'smg', price: 2350, dmg: 21, rate: 0.066, clip: 50, reserve: 100, reload: 3.3, spread: 0.014, moveSpread: 0.025, airSpread: 0.12, recoil: 0.009, recoilX: 0.006, spray: 0.0016, pen: 0.75, range: 0.86, speed: 6.0, team: -1, auto: true },
  galil: { name: 'Galil', slot: 0, kind: 'rifle', price: 2000, dmg: 30, rate: 0.09, clip: 35, reserve: 90, reload: 2.9, spread: 0.006, moveSpread: 0.09, airSpread: 0.25, recoil: 0.016, recoilX: 0.008, spray: 0.0028, pen: 0.77, range: 0.98, speed: 5.6, team: 0, auto: true },
  famas: { name: 'FAMAS', slot: 0, kind: 'rifle', price: 2250, dmg: 30, rate: 0.09, clip: 25, reserve: 90, reload: 3.3, spread: 0.005, moveSpread: 0.09, airSpread: 0.25, recoil: 0.015, recoilX: 0.007, spray: 0.0026, pen: 0.70, range: 0.96, speed: 5.6, team: 1, auto: true },
  ak47: { name: 'AK-47', slot: 0, kind: 'rifle', price: 2500, dmg: 36, rate: 0.1, clip: 30, reserve: 90, reload: 2.5, spread: 0.005, moveSpread: 0.11, airSpread: 0.3, recoil: 0.021, recoilX: 0.01, spray: 0.0032, pen: 0.78, range: 0.98, speed: 5.5, team: 0, auto: true },
  m4a1: { name: 'M4A1', silencer: true, slot: 0, kind: 'rifle', price: 3100, dmg: 33, rate: 0.09, clip: 30, reserve: 90, reload: 3.1, spread: 0.0045, moveSpread: 0.1, airSpread: 0.28, recoil: 0.017, recoilX: 0.008, spray: 0.0026, pen: 0.70, range: 0.97, speed: 5.6, team: 1, auto: true },
  scout: { name: 'Scout', slot: 0, kind: 'sniper', price: 2750, dmg: 75, rate: 1.25, clip: 10, reserve: 90, reload: 2.0, spread: 0.003, unscoped: 0.05, moveSpread: 0.06, airSpread: 0.04, recoil: 0.04, recoilX: 0.004, spray: 0, pen: 0.85, range: 0.99, speed: 6.2, zoom: 2.6, team: -1, auto: false },
  awp: { name: 'AWP', slot: 0, kind: 'sniper', price: 4750, dmg: 115, rate: 1.45, clip: 10, reserve: 30, reload: 3.0, spread: 0.002, unscoped: 0.09, moveSpread: 0.2, airSpread: 0.4, recoil: 0.09, recoilX: 0.006, spray: 0, pen: 0.97, range: 0.99, speed: 5.0, zoom: 4, team: -1, auto: false, kill: 100 },
  he: { name: 'HE граната', slot: 3, kind: 'grenade', nade: 'he', price: 300, speed: 6.2, team: -1 },
  flash: { name: 'Световая', slot: 3, kind: 'grenade', nade: 'flash', price: 200, speed: 6.2, team: -1, max: 2 },
  smoke: { name: 'Дымовая', slot: 3, kind: 'grenade', nade: 'smoke', price: 300, speed: 6.2, team: -1 },
  bomb: { name: 'C4', slot: 4, kind: 'bomb', price: 0, speed: 6.2, team: 0 },
};

export const GEAR = {
  vest: { price: 650 },
  vesthelm: { price: 1000 },
  kit: { price: 200, team: 1 },
};

export const BUY_MENU = [
  { cat: 'pistols', items: ['glock', 'usp', 'deagle'] },
  { cat: 'heavy', items: ['m3', 'mp5', 'p90'] },
  { cat: 'rifles', items: ['galil', 'famas', 'ak47', 'm4a1', 'scout', 'awp'] },
  { cat: 'gear', items: ['vest', 'vesthelm', 'kit'] },
  { cat: 'nades', items: ['he', 'flash', 'smoke'] },
];

// Gun Game ladder: one kill moves you to the next weapon, a knife kill wins.
export const GUNGAME = ['glock', 'usp', 'deagle', 'm3', 'mp5', 'p90', 'galil', 'famas', 'ak47', 'm4a1', 'scout', 'awp', 'knife'];

export const HIT = { head: 4, chest: 1, stomach: 1.25, legs: 0.75 };

export const DIFFICULTY = {
  easy: { react: 0.75, aimErr: 0.11, turn: 3.2, burst: 4, spot: 0.55, recoilComp: 0.2, strafe: 0 },
  normal: { react: 0.45, aimErr: 0.065, turn: 5.5, burst: 6, spot: 0.75, recoilComp: 0.45, strafe: 0.3 },
  hard: { react: 0.28, aimErr: 0.038, turn: 8.5, burst: 9, spot: 0.9, recoilComp: 0.7, strafe: 0.6 },
  expert: { react: 0.17, aimErr: 0.022, turn: 12, burst: 12, spot: 1, recoilComp: 0.85, strafe: 0.85 },
};

export const BOT_NAMES = [
  'Сокол', 'Гром', 'Вихрь', 'Бархан', 'Кобра', 'Шторм', 'Барс', 'Тайфун', 'Ястреб', 'Кедр',
  'Медведь', 'Филин', 'Скиф', 'Волк', 'Рысь', 'Буран', 'Самум', 'Утёс', 'Пума', 'Ворон',
];

export const QUALITY = {
  low: { pixelRatio: 0.65, shadows: false, particles: 0.4, drawDist: 80, aa: false },
  medium: { pixelRatio: 0.9, shadows: false, particles: 0.7, drawDist: 120, aa: false },
  high: { pixelRatio: 1.25, shadows: true, particles: 1, drawDist: 160, aa: true },
};
