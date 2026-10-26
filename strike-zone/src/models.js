// Low-poly characters, weapons and first-person viewmodels built from primitives.
// Parts of each rigid piece are merged into one vertex-coloured mesh to keep draw calls low.
import * as THREE from 'three';
import { mergeGeometries } from 'three/examples/jsm/utils/BufferGeometryUtils.js';
import { TEAM } from './config.js';
import { softSprite } from './textures.js';

const VC_MAT = new THREE.MeshLambertMaterial({ vertexColors: true });
const tmpColor = new THREE.Color();
const tmpEuler = new THREE.Euler();
const tmpMat = new THREE.Matrix4();

function addPart(parent, geo, color, x, y, z, rx, ry, rz) {
  const g = geo.clone();
  tmpMat.makeRotationFromEuler(tmpEuler.set(rx, ry, rz));
  tmpMat.setPosition(x, y, z);
  g.applyMatrix4(tmpMat);
  tmpColor.setHex(color).convertSRGBToLinear();
  const n = g.attributes.position.count;
  const c = new Float32Array(n * 3);
  for (let i = 0; i < n; i++) { c[i * 3] = tmpColor.r; c[i * 3 + 1] = tmpColor.g; c[i * 3 + 2] = tmpColor.b; }
  g.setAttribute('color', new THREE.BufferAttribute(c, 3));
  (parent.userData.parts || (parent.userData.parts = [])).push(g);
}
const boxCache = new Map();
function boxGeo(w, h, d) {
  const k = w + ',' + h + ',' + d;
  if (!boxCache.has(k)) boxCache.set(k, new THREE.BoxGeometry(w, h, d));
  return boxCache.get(k);
}
function box(parent, w, h, d, color, x, y, z, rx = 0, ry = 0, rz = 0) {
  addPart(parent, boxGeo(w, h, d), color, x, y, z, rx, ry, rz);
}
function cyl(parent, r, len, color, x, y, z, seg = 8) {
  addPart(parent, new THREE.CylinderGeometry(r, r, len, seg), color, x, y, z, Math.PI / 2, 0, 0);
}
function upright(parent, geo, color, x = 0, y = 0, z = 0) { addPart(parent, geo, color, x, y, z, 0, 0, 0); }

// Replaces the collected parts of every group in the tree with one merged mesh.
function bake(root, shadows = false) {
  root.traverse((o) => {
    const parts = o.userData.parts;
    if (!parts) return;
    const merged = mergeGeometries(parts.map((g) => (g.index ? g.toNonIndexed() : g)), false);
    const m = new THREE.Mesh(merged, VC_MAT);
    m.castShadow = shadows;
    o.add(m);
    delete o.userData.parts;
  });
  return root;
}

export function mat(color, opts) { return new THREE.MeshLambertMaterial({ color, ...opts }); }

const METAL = 0x3a3d42, METAL2 = 0x575b62, WOOD = 0x8a5428, WOOD2 = 0x6a4020, SILVER = 0xb4b8bd, POLY = 0x2c2e31;

const GUN_BUILDERS = {
  knife(g) {
    box(g, 0.026, 0.032, 0.11, POLY, 0, 0, 0.0);
    box(g, 0.05, 0.014, 0.016, METAL2, 0, 0.004, -0.058);
    box(g, 0.006, 0.034, 0.17, SILVER, 0, 0.006, -0.15);
    box(g, 0.006, 0.018, 0.05, SILVER, 0, 0.0, -0.245, 0.5, 0, 0);
    return { muzzle: [0, 0, -0.26], fore: null };
  },
  glock(g) {
    box(g, 0.03, 0.034, 0.185, POLY, 0, 0.055, -0.055);
    box(g, 0.028, 0.024, 0.15, 0x2a2b2e, 0, 0.028, -0.045);
    box(g, 0.029, 0.11, 0.046, POLY, 0, -0.03, 0.02, 0.28);
    box(g, 0.012, 0.02, 0.03, POLY, 0, 0.012, -0.02);
    return { muzzle: [0, 0.056, -0.15], fore: null };
  },
  usp(g) {
    box(g, 0.031, 0.036, 0.205, 0x34363a, 0, 0.056, -0.06);
    box(g, 0.029, 0.026, 0.16, POLY, 0, 0.028, -0.05);
    box(g, 0.03, 0.115, 0.048, POLY, 0, -0.032, 0.022, 0.25);
    cyl(g, 0.016, 0.12, POLY, 0, 0.056, -0.22);
    return { muzzle: [0, 0.056, -0.28], fore: null };
  },
  deagle(g) {
    box(g, 0.038, 0.046, 0.26, SILVER, 0, 0.06, -0.08);
    box(g, 0.034, 0.028, 0.2, 0x7b7f84, 0, 0.026, -0.06);
    box(g, 0.034, 0.12, 0.052, POLY, 0, -0.035, 0.025, 0.22);
    return { muzzle: [0, 0.062, -0.21], fore: null };
  },
  m3(g) {
    box(g, 0.05, 0.07, 0.3, METAL, 0, 0.04, -0.05);
    cyl(g, 0.013, 0.5, METAL2, 0, 0.062, -0.44);
    cyl(g, 0.015, 0.4, METAL, 0, 0.028, -0.38);
    box(g, 0.054, 0.048, 0.17, POLY, 0, 0.026, -0.38);
    box(g, 0.042, 0.085, 0.3, POLY, 0, 0.0, 0.24, 0.1);
    box(g, 0.035, 0.1, 0.045, POLY, 0, -0.04, 0.07, 0.3);
    return { muzzle: [0, 0.062, -0.7], fore: [0, 0.0, -0.38] };
  },
  mp5(g) {
    box(g, 0.05, 0.07, 0.3, METAL, 0, 0.045, -0.08);
    box(g, 0.056, 0.05, 0.14, POLY, 0, 0.03, -0.25);
    cyl(g, 0.012, 0.12, METAL2, 0, 0.055, -0.36);
    box(g, 0.03, 0.17, 0.04, METAL2, 0, -0.06, -0.16, -0.28);
    box(g, 0.03, 0.05, 0.22, METAL, 0, 0.035, 0.17);
    box(g, 0.034, 0.1, 0.044, POLY, 0, -0.035, 0.03, 0.3);
    box(g, 0.012, 0.03, 0.02, METAL, 0, 0.09, -0.02);
    return { muzzle: [0, 0.055, -0.43], fore: [0, 0.0, -0.25] };
  },
  p90(g) {
    box(g, 0.065, 0.11, 0.44, 0x2b3128, 0, 0.03, -0.06);
    box(g, 0.048, 0.03, 0.3, 0x6f6040, 0, 0.1, -0.1);
    cyl(g, 0.011, 0.08, METAL, 0, 0.05, -0.31);
    box(g, 0.04, 0.05, 0.05, 0x1b1d1a, 0, 0.13, -0.05);
    return { muzzle: [0, 0.05, -0.35], fore: [0, -0.01, -0.2] };
  },
  ak47(g) {
    box(g, 0.05, 0.07, 0.36, METAL, 0, 0.04, -0.06);
    box(g, 0.056, 0.06, 0.2, WOOD, 0, 0.035, -0.33);
    cyl(g, 0.011, 0.32, METAL2, 0, 0.06, -0.55);
    cyl(g, 0.009, 0.2, METAL, 0, 0.085, -0.36);
    box(g, 0.036, 0.12, 0.062, 0x3a2b1c, 0, -0.04, -0.13, -0.2);
    box(g, 0.034, 0.1, 0.06, 0x3a2b1c, 0, -0.135, -0.09, -0.55);
    box(g, 0.045, 0.09, 0.32, WOOD, 0, -0.005, 0.27, 0.12);
    box(g, 0.035, 0.1, 0.045, WOOD2, 0, -0.04, 0.06, 0.3);
    box(g, 0.01, 0.035, 0.012, METAL, 0, 0.09, -0.66);
    return { muzzle: [0, 0.06, -0.72], fore: [0, 0.005, -0.33] };
  },
  galil(g) {
    box(g, 0.05, 0.075, 0.36, 0x2f3029, 0, 0.04, -0.06);
    box(g, 0.056, 0.06, 0.2, 0x4c4a3a, 0, 0.035, -0.33);
    cyl(g, 0.011, 0.3, METAL2, 0, 0.06, -0.55);
    box(g, 0.036, 0.15, 0.06, METAL, 0, -0.06, -0.12, -0.25);
    box(g, 0.03, 0.06, 0.3, METAL2, 0, 0.0, 0.25);
    box(g, 0.035, 0.1, 0.045, POLY, 0, -0.04, 0.06, 0.3);
    return { muzzle: [0, 0.06, -0.7], fore: [0, 0.005, -0.33] };
  },
  famas(g) {
    box(g, 0.055, 0.1, 0.5, 0x2c2f33, 0, 0.03, 0.0);
    box(g, 0.02, 0.05, 0.36, POLY, 0, 0.11, -0.06);
    cyl(g, 0.011, 0.18, METAL2, 0, 0.04, -0.33);
    box(g, 0.03, 0.12, 0.05, METAL, 0, -0.06, 0.12, -0.1);
    box(g, 0.035, 0.1, 0.045, POLY, 0, -0.045, -0.08, 0.3);
    return { muzzle: [0, 0.04, -0.43], fore: [0, -0.01, -0.2] };
  },
  m4a1(g) {
    box(g, 0.05, 0.08, 0.34, 0x1c1d1f, 0, 0.04, -0.05);
    box(g, 0.02, 0.03, 0.14, 0x1c1d1f, 0, 0.1, -0.06);
    cyl(g, 0.026, 0.25, POLY, 0, 0.045, -0.33, 10);
    cyl(g, 0.018, 0.22, 0x2b2c2e, 0, 0.05, -0.56, 10);
    box(g, 0.03, 0.15, 0.06, METAL2, 0, -0.07, -0.1, -0.1);
    box(g, 0.042, 0.07, 0.28, POLY, 0, 0.02, 0.25);
    box(g, 0.035, 0.1, 0.045, POLY, 0, -0.04, 0.06, 0.3);
    return { muzzle: [0, 0.05, -0.68], fore: [0, 0.0, -0.33] };
  },
  scout(g) {
    box(g, 0.045, 0.065, 0.5, 0x33363a, 0, 0.035, -0.08);
    cyl(g, 0.01, 0.45, METAL, 0, 0.05, -0.55);
    cyl(g, 0.022, 0.28, POLY, 0, 0.115, -0.06, 10);
    box(g, 0.04, 0.09, 0.26, 0x33363a, 0, 0.0, 0.26, 0.1);
    box(g, 0.03, 0.08, 0.04, METAL, 0, -0.03, -0.08);
    box(g, 0.034, 0.1, 0.045, POLY, 0, -0.045, 0.08, 0.3);
    return { muzzle: [0, 0.05, -0.78], fore: [0, 0.0, -0.3], scope: true };
  },
  awp(g) {
    box(g, 0.065, 0.09, 0.6, 0x3d5a3a, 0, 0.03, -0.1);
    cyl(g, 0.014, 0.55, METAL, 0, 0.05, -0.68);
    cyl(g, 0.03, 0.34, POLY, 0, 0.13, -0.06, 12);
    box(g, 0.062, 0.13, 0.32, 0x3d5a3a, 0, -0.005, 0.32, 0.08);
    box(g, 0.04, 0.1, 0.06, POLY, 0, -0.05, -0.05);
    box(g, 0.036, 0.1, 0.045, 0x2e432c, 0, -0.06, 0.12, 0.3);
    return { muzzle: [0, 0.05, -0.96], fore: [0, -0.01, -0.36], scope: true };
  },
  he(g) {
    upright(g, new THREE.SphereGeometry(0.036, 10, 8), 0x4b5a2c);
    box(g, 0.02, 0.03, 0.02, METAL2, 0, 0.04, 0);
    box(g, 0.012, 0.06, 0.012, METAL2, 0.016, 0.02, 0, 0, 0, 0.2);
    return { muzzle: [0, 0, 0], fore: null };
  },
  flash(g) {
    upright(g, new THREE.CylinderGeometry(0.028, 0.028, 0.1, 10), 0x8c9196);
    box(g, 0.02, 0.025, 0.02, METAL2, 0, 0.06, 0);
    return { muzzle: [0, 0, 0], fore: null };
  },
  smoke(g) {
    upright(g, new THREE.CylinderGeometry(0.03, 0.03, 0.11, 10), 0x51605a);
    box(g, 0.062, 0.02, 0.062, 0xd0d0d0, 0, 0.0, 0);
    box(g, 0.02, 0.025, 0.02, METAL2, 0, 0.065, 0);
    return { muzzle: [0, 0, 0], fore: null };
  },
  bomb(g) {
    box(g, 0.2, 0.08, 0.12, 0x9b8458, 0, 0, 0);
    for (let i = 0; i < 4; i++) box(g, 0.042, 0.082, 0.124, 0xc2a26a, -0.075 + i * 0.05, 0, 0);
    box(g, 0.08, 0.02, 0.07, 0x222222, 0, 0.05, 0);
    box(g, 0.05, 0.004, 0.02, 0x30ff60, 0, 0.061, -0.015);
    box(g, 0.006, 0.006, 0.13, 0xc02020, 0.06, 0.045, 0);
    box(g, 0.006, 0.006, 0.13, 0x2040c0, 0.07, 0.045, 0);
    return { muzzle: [0, 0, 0], fore: null };
  },
};

const gunTemplates = new Map();
export function buildGun(key) {
  if (!gunTemplates.has(key)) {
    const g = new THREE.Group();
    const info = (GUN_BUILDERS[key] || GUN_BUILDERS.glock)(g);
    bake(g);
    g.userData = { key, muzzle: new THREE.Vector3(...info.muzzle), fore: info.fore ? new THREE.Vector3(...info.fore) : null, scope: !!info.scope };
    gunTemplates.set(key, g);
  }
  const t = gunTemplates.get(key);
  const c = t.clone();
  c.userData = { ...t.userData, muzzle: t.userData.muzzle.clone(), fore: t.userData.fore && t.userData.fore.clone() };
  return c;
}

// ---------- characters ----------
const PALETTE = [
  { cloth: 0x8b7b58, cloth2: 0x655a42, vest: 0x4b4032, skin: 0xc79a73, head: 0x2b2824, head2: 0x3b352d, boots: 0x2a2420, glove: 0x3a3128 },
  { cloth: 0x34435d, cloth2: 0x252f42, vest: 0x1d2433, skin: 0xd2a27c, head: 0x283244, head2: 0x111418, boots: 0x15171a, glove: 0x1a1c20 },
];

export function teamColors(team) { return PALETTE[team]; }

export function buildCharacter(team) {
  const P = PALETTE[team];
  const root = new THREE.Group();
  const body = new THREE.Group();
  root.add(body);
  const hips = new THREE.Group(); hips.position.y = 0.92; body.add(hips);
  const legs = [];
  for (const side of [-1, 1]) {
    const thigh = new THREE.Group(); thigh.position.set(side * 0.11, 0, 0); hips.add(thigh);
    box(thigh, 0.17, 0.48, 0.2, P.cloth2, 0, -0.24, 0);
    const shin = new THREE.Group(); shin.position.y = -0.47; thigh.add(shin);
    box(shin, 0.155, 0.4, 0.18, P.cloth2, 0, -0.2, 0);
    box(shin, 0.17, 0.11, 0.28, P.boots, 0, -0.4, -0.045);
    legs.push({ thigh, shin });
  }
  const torso = new THREE.Group(); torso.position.y = 0.92; body.add(torso);
  box(torso, 0.4, 0.26, 0.24, P.cloth, 0, 0.13, 0);
  box(torso, 0.47, 0.36, 0.29, P.vest, 0, 0.43, 0);
  box(torso, 0.36, 0.16, 0.06, P.cloth, 0, 0.38, -0.16);
  box(torso, 0.18, 0.08, 0.05, P.cloth2, -0.08, 0.2, -0.13);
  const headG = new THREE.Group(); headG.position.y = 0.66; torso.add(headG);
  box(headG, 0.12, 0.08, 0.12, P.skin, 0, 0.02, 0);
  box(headG, 0.22, 0.26, 0.24, P.head, 0, 0.15, 0);
  box(headG, 0.16, 0.05, 0.02, P.skin, 0, 0.17, -0.121);
  box(headG, 0.03, 0.02, 0.01, 0x101010, -0.04, 0.17, -0.132);
  box(headG, 0.03, 0.02, 0.01, 0x101010, 0.04, 0.17, -0.132);
  if (team === TEAM.CT) {
    box(headG, 0.27, 0.12, 0.29, P.head2, 0, 0.29, 0.0);
    box(headG, 0.25, 0.04, 0.06, P.head2, 0, 0.24, -0.14);
  } else {
    box(headG, 0.24, 0.07, 0.25, P.head2, 0, 0.29, 0);
  }
  // Arms reach forward to hold the gun.
  const arms = [];
  for (const side of [-1, 1]) {
    const sh = new THREE.Group(); sh.position.set(side * 0.27, 0.54, 0); torso.add(sh);
    box(sh, 0.12, 0.3, 0.13, P.cloth, 0, -0.14, 0);
    const fore = new THREE.Group(); fore.position.y = -0.28; sh.add(fore);
    box(fore, 0.1, 0.28, 0.11, P.cloth, 0, -0.13, 0);
    box(fore, 0.09, 0.09, 0.1, P.glove, 0, -0.3, 0);
    arms.push({ sh, fore, side });
  }
  const gunMount = new THREE.Group(); gunMount.position.set(0.07, 0.42, -0.36); torso.add(gunMount);
  const flash = new THREE.Sprite(new THREE.SpriteMaterial({ map: softSprite('flash'), color: 0xffd9a0, blending: THREE.AdditiveBlending, depthWrite: false, transparent: true }));
  flash.scale.set(0.45, 0.45, 1);
  flash.visible = false;
  root.add(flash);
  bake(root, true);
  root.userData = { body, hips, legs, torso, headG, arms, gunMount, flash, gun: null, gunKey: null, phase: 0 };
  return root;
}

export function setCharacterGun(model, key) {
  const u = model.userData;
  if (u.gunKey === key) return;
  if (u.gun) u.gunMount.remove(u.gun);
  u.gun = key ? buildGun(key) : null;
  u.gunKey = key;
  if (u.gun) {
    u.gun.traverse((o) => { if (o.isMesh) o.castShadow = true; });
    u.gunMount.add(u.gun);
  }
}

const tmpV = new THREE.Vector3();
// Poses the rig: s = {speed, crouch (0..1), air, pitch, dead, deathT, deathDir, dt, fireT}
export function animateCharacter(model, s) {
  const u = model.userData;
  u.phase += s.speed * s.dt * 2.6;
  const amp = Math.min(1, s.speed / 4.5) * (s.air ? 0.3 : 1);
  const c = s.crouch;
  for (let i = 0; i < 2; i++) {
    const L = u.legs[i];
    const ph = u.phase + i * Math.PI;
    const swing = Math.sin(ph) * 0.6 * amp;
    L.thigh.rotation.x = swing * (1 - c * 0.5) - c * 1.2 - (s.air ? 0.35 : 0);
    L.shin.rotation.x = Math.max(0, Math.sin(ph + 1.3)) * 0.8 * amp + c * 1.65 + (s.air ? 0.6 : 0);
  }
  const hipY = 0.92 - c * 0.31 + Math.abs(Math.sin(u.phase)) * 0.025 * amp;
  u.hips.position.y = hipY;
  u.torso.position.y = hipY;
  u.torso.position.z = c * 0.06;
  const pitch = s.pitch;
  u.torso.rotation.x = pitch * 0.55 + c * 0.12;
  u.headG.rotation.x = pitch * 0.45 - c * 0.12;
  const kick = s.fireT > 0 ? s.fireT * 1.5 : 0;
  for (const a of u.arms) {
    if (a.side > 0) { a.sh.rotation.set(-1.25 + kick * 0.2, 0, 0.06); a.fore.rotation.set(-0.35, 0, 0); }
    else { a.sh.rotation.set(-1.15, 0, -0.55); a.fore.rotation.set(-0.5, 0, 0.75); }
  }
  u.gunMount.rotation.x = kick * 0.12;
  if (s.dead) {
    const t = Math.min(1, s.deathT / 0.55);
    const e = t * t * (3 - 2 * t);
    u.body.rotation.x = e * (Math.PI / 2 - 0.05) * s.deathDir;
    u.body.rotation.z = e * 0.25 * s.deathDir;
    u.body.position.y = e * 0.12;
    for (const L of u.legs) { L.thigh.rotation.x *= 1 - e; L.shin.rotation.x = 0.2 * e; }
  } else {
    u.body.rotation.set(0, 0, 0);
    u.body.position.y = 0;
  }
  if (u.flash.visible && u.gun) {
    tmpV.copy(u.gun.userData.muzzle);
    u.gun.localToWorld(tmpV);
    model.worldToLocal(tmpV);
    u.flash.position.copy(tmpV);
  }
}

// ---------- first-person viewmodel ----------
// Viewmodel placement per weapon kind: [x, y, z, scale].
const HOLD = {
  knife: [0.17, -0.19, -0.36, 1],
  pistol: [0.15, -0.165, -0.36, 1],
  grenade: [0.16, -0.18, -0.36, 1],
  bomb: [0.0, -0.24, -0.42, 1.2],
  sniper: [0.19, -0.2, -0.42, 1],
  default: [0.19, -0.19, -0.4, 1],
};

export function buildViewModel(key, kind, team) {
  const P = PALETTE[team];
  const root = new THREE.Group();
  const holder = new THREE.Group();
  root.add(holder);
  const gun = buildGun(key);
  holder.add(gun);
  const sleeve = P.cloth, glove = P.glove;
  // Right hand on the grip with forearm going back toward the camera edge.
  const rh = new THREE.Group(); gun.add(rh);
  if (kind === 'bomb') {
    rh.position.set(0.14, -0.02, 0.05);
  } else {
    rh.position.set(0, -0.045, 0.035);
  }
  box(rh, 0.05, 0.075, 0.085, glove, 0, 0, 0);
  box(rh, 0.075, 0.075, 0.34, sleeve, 0.035, -0.035, 0.2, 0.18, 0.12, 0);
  const fore = gun.userData.fore;
  if (fore || kind === 'pistol' || kind === 'bomb') {
    const lh = new THREE.Group(); gun.add(lh);
    if (kind === 'bomb') lh.position.set(-0.14, -0.02, 0.05);
    else if (fore) lh.position.copy(fore).add(new THREE.Vector3(-0.012, -0.03, 0));
    else lh.position.set(-0.02, -0.05, 0.04);
    box(lh, 0.06, 0.07, 0.09, glove, 0, 0, 0);
    box(lh, 0.075, 0.075, 0.36, sleeve, -0.07, -0.06, 0.2, 0.3, -0.45, 0);
  }
  bake(gun);
  const hold = HOLD[kind] || HOLD.default;
  holder.position.set(hold[0], hold[1], hold[2]);
  holder.scale.setScalar(hold[3]);
  const baseRot = new THREE.Euler(kind === 'bomb' ? 0.5 : 0.02, kind === 'bomb' ? 0 : 0.05, 0);
  holder.rotation.copy(baseRot);
  const flash = new THREE.Sprite(new THREE.SpriteMaterial({ map: softSprite('flash'), color: 0xffe0b0, blending: THREE.AdditiveBlending, depthWrite: false, depthTest: false, transparent: true }));
  flash.scale.set(0.16, 0.16, 1);
  flash.position.copy(gun.userData.muzzle);
  flash.visible = false;
  flash.renderOrder = 5;
  gun.add(flash);
  root.userData = { holder, gun, flash, base: holder.position.clone(), baseRot, kind, key };
  return root;
}
