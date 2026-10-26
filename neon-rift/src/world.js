import * as THREE from 'three';
import { R, SHIP_R, PLAYER_HALF_W, PLAYER_HALF_LEN, BIOMES, POWERUPS } from './config.js';

export const TAU = Math.PI * 2;
export function angDiff(a, b) {
  let d = (a - b) % TAU;
  if (d > Math.PI) d -= TAU;
  if (d < -Math.PI) d += TAU;
  return d;
}
export function polar(theta, r, z, v = new THREE.Vector3()) {
  return v.set(r * Math.sin(theta), -r * Math.cos(theta), z);
}
export function mulberry32(seed) {
  return function () {
    seed |= 0; seed = (seed + 0x6d2b79f5) | 0;
    let t = Math.imul(seed ^ (seed >>> 15), 1 | seed);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}
const lerp = (a, b, t) => a + (b - a) * t;
const LOW_H = 1.0;
const HIGH_H = 2.9;

// ---------------- palette (smoothly blends between biomes) ----------------
export class Palette {
  constructor() {
    const b = BIOMES[0];
    this.keys = ['wall', 'grid', 'accent', 'obstacle', 'low', 'fog', 'shard'];
    for (const k of this.keys) { this[k] = new THREE.Color(b[k]); }
    this.target = b;
  }
  setTarget(b) { this.target = b; }
  snap(b) { this.target = b; for (const k of this.keys) this[k].set(b[k]); }
  update(dt) {
    const tmp = new THREE.Color();
    const f = 1 - Math.exp(-dt * 1.6);
    for (const k of this.keys) this[k].lerp(tmp.set(this.target[k]), f);
  }
}

// ---------------- tunnel shell ----------------
const TUNNEL_LEN = 260;
function makeTunnel(pal) {
  const geo = new THREE.CylinderGeometry(R, R, TUNNEL_LEN, 72, 1, true);
  geo.rotateX(Math.PI / 2);
  const mat = new THREE.ShaderMaterial({
    side: THREE.BackSide,
    uniforms: {
      uWall: { value: pal.wall }, uGrid: { value: pal.grid }, uAccent: { value: pal.accent },
      uFog: { value: pal.fog }, uTime: { value: 0 }, uPZ: { value: 0 }, uBoost: { value: 0 },
    },
    vertexShader: /* glsl */`
      varying vec3 vPos;
      void main() {
        vec4 wp = modelMatrix * vec4(position, 1.0);
        vPos = wp.xyz;
        gl_Position = projectionMatrix * viewMatrix * wp;
      }`,
    fragmentShader: /* glsl */`
      uniform vec3 uWall, uGrid, uAccent, uFog;
      uniform float uTime, uPZ, uBoost;
      varying vec3 vPos;
      float gridLine(float x, float w) {
        float f = abs(fract(x) - 0.5);
        float fw = fwidth(x);
        return 1.0 - smoothstep(0.5 - w - fw, 0.5 - w + fw, f);
      }
      void main() {
        float ang = atan(vPos.x, -vPos.y);
        float a = ang / 6.2831853 * 32.0;
        float z = vPos.z;
        float la = 1.0 - smoothstep(0.0, fwidth(a) * 1.5 + 0.02, min(fract(a), 1.0 - fract(a)));
        float lz = 1.0 - smoothstep(0.0, fwidth(z / 4.0) * 1.5 + 0.02, min(fract(z / 4.0), 1.0 - fract(z / 4.0)));
        float major = 1.0 - smoothstep(0.0, fwidth(z / 32.0) * 2.0 + 0.004, min(fract(z / 32.0), 1.0 - fract(z / 32.0)));
        float dist = abs(z - uPZ);
        // pulses that rush toward the player
        float p = fract((z - uPZ + uTime * 70.0) / 90.0);
        float pulse = smoothstep(0.0, 0.03, p) * (1.0 - smoothstep(0.03, 0.12, p));
        float floorGlow = pow(max(0.0, -cos(ang)), 6.0) * 0.08;
        vec3 col = uWall * (0.8 + floorGlow * 4.0);
        float grid = max(la * 0.32, lz * 0.22) + major * 0.55;
        col += uGrid * grid * (0.35 + 0.4 * smoothstep(70.0, 0.0, dist));
        col += uAccent * pulse * 0.35 * (0.3 + grid);
        col += uAccent * uBoost * 0.18 * la;
        float fog = smoothstep(25.0, 175.0, dist);
        col = mix(col, uFog, fog);
        gl_FragColor = vec4(col, 1.0);
      }`,
  });
  mat.extensions = { derivatives: true };
  const mesh = new THREE.Mesh(geo, mat);
  mesh.frustumCulled = false;
  return mesh;
}

// ---------------- geometry caches ----------------
const geoCache = new Map();
function arcGeos(aw, h, depth) {
  const key = aw.toFixed(2) + '|' + h + '|' + depth;
  let g = geoCache.get(key);
  if (g) return g;
  const a = Math.min(aw, Math.PI - 0.002);
  const r0 = R - h; const r1 = R + 0.05;
  const shape = new THREE.Shape();
  shape.moveTo(r1 * Math.cos(-a), r1 * Math.sin(-a));
  shape.absarc(0, 0, r1, -a, a, false);
  shape.lineTo(r0 * Math.cos(a), r0 * Math.sin(a));
  shape.absarc(0, 0, r0, a, -a, true);
  shape.closePath();
  const fill = new THREE.ExtrudeGeometry(shape, { depth, bevelEnabled: false, curveSegments: Math.max(6, Math.ceil(a * 24)) });
  fill.translate(0, 0, -depth / 2);
  const edges = new THREE.EdgesGeometry(fill, 25);
  g = { fill, edges };
  geoCache.set(key, g);
  return g;
}

function iconTexture(type) {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const x = c.getContext('2d');
  x.strokeStyle = '#fff'; x.fillStyle = '#fff'; x.lineWidth = 10; x.lineJoin = 'round'; x.lineCap = 'round';
  x.translate(64, 64);
  if (type === 'shield') {
    x.beginPath(); x.moveTo(0, -40); x.lineTo(34, -26); x.quadraticCurveTo(32, 22, 0, 42);
    x.quadraticCurveTo(-32, 22, -34, -26); x.closePath(); x.stroke();
  } else if (type === 'magnet') {
    x.lineWidth = 16; x.beginPath(); x.arc(0, 0, 26, 0, Math.PI); x.stroke();
    x.beginPath(); x.moveTo(-26, 0); x.lineTo(-26, -34); x.moveTo(26, 0); x.lineTo(26, -34); x.stroke();
  } else if (type === 'boost') {
    x.beginPath(); x.moveTo(8, -44); x.lineTo(-24, 6); x.lineTo(2, 6); x.lineTo(-8, 44);
    x.lineTo(26, -8); x.lineTo(0, -8); x.closePath(); x.fill();
  } else {
    x.font = 'bold 64px sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle'; x.fillText('x2', 0, 4);
  }
  const tex = new THREE.CanvasTexture(c);
  tex.colorSpace = THREE.SRGBColorSpace;
  return tex;
}

function glowTexture() {
  const c = document.createElement('canvas'); c.width = c.height = 128;
  const x = c.getContext('2d');
  const g = x.createRadialGradient(64, 64, 0, 64, 64, 64);
  g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.25, 'rgba(255,255,255,0.45)');
  g.addColorStop(1, 'rgba(255,255,255,0)');
  x.fillStyle = g; x.fillRect(0, 0, 128, 128);
  return new THREE.CanvasTexture(c);
}
export const GLOW_TEX = typeof document !== 'undefined' ? glowTexture() : null;

// ---------------- world ----------------
export class World {
  constructor(scene, pal) {
    this.scene = scene; this.pal = pal;
    this.tunnel = makeTunnel(pal);
    scene.add(this.tunnel);

    this.matHigh = new THREE.MeshBasicMaterial({ color: 0x000000 });
    this.matHighEdge = new THREE.LineBasicMaterial({ color: pal.obstacle });
    this.matLow = new THREE.MeshBasicMaterial({ color: 0x000000 });
    this.matLowEdge = new THREE.LineBasicMaterial({ color: pal.low });
    this.matShard = new THREE.MeshBasicMaterial({ color: pal.shard });
    this.shardGeo = new THREE.OctahedronGeometry(0.3, 0);

    // decor: glowing rings
    this.ringMat = new THREE.MeshBasicMaterial({ color: pal.accent, transparent: true, opacity: 0.6 });
    const ringGeo = new THREE.TorusGeometry(R - 0.04, 0.06, 6, 96);
    this.rings = [];
    for (let i = 0; i < 8; i++) {
      const m = new THREE.Mesh(ringGeo, this.ringMat);
      m.position.z = -i * 32; this.rings.push(m); scene.add(m);
    }
    // light at the end of the tunnel
    this.endGlow = new THREE.Sprite(new THREE.SpriteMaterial({
      map: GLOW_TEX, color: pal.accent, transparent: true, blending: THREE.AdditiveBlending, depthWrite: false, opacity: 0.55, fog: false,
    }));
    this.endGlow.scale.set(26, 26, 1);
    scene.add(this.endGlow);

    // dust + speed streaks
    const N = 220;
    this.dustPos = new Float32Array(N * 3);
    for (let i = 0; i < N; i++) this.resetDust(i, -Math.random() * 170);
    const dg = new THREE.BufferGeometry();
    dg.setAttribute('position', new THREE.BufferAttribute(this.dustPos, 3));
    this.dust = new THREE.Points(dg, new THREE.PointsMaterial({
      size: 0.09, color: 0xffffff, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending, depthWrite: false,
    }));
    this.dust.frustumCulled = false;
    scene.add(this.dust);

    const S = 90;
    this.streakPos = new Float32Array(S * 6);
    this.streakSeed = [];
    for (let i = 0; i < S; i++) this.streakSeed.push({ th: Math.random() * TAU, r: R - 0.3 - Math.random() * 2.2, z: -Math.random() * 120 });
    const sg = new THREE.BufferGeometry();
    sg.setAttribute('position', new THREE.BufferAttribute(this.streakPos, 3));
    this.streakMat = new THREE.LineBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0, blending: THREE.AdditiveBlending, depthWrite: false });
    this.streaks = new THREE.LineSegments(sg, this.streakMat);
    this.streaks.frustumCulled = false;
    scene.add(this.streaks);

    // golden ring that marks the player's best distance
    this.bestRing = new THREE.Group();
    this.bestRing.add(new THREE.Mesh(new THREE.TorusGeometry(R - 0.08, 0.12, 8, 96),
      new THREE.MeshBasicMaterial({ color: 0xffd54a, transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, fog: false })));
    this.bestLabel = new THREE.Sprite(new THREE.SpriteMaterial({ transparent: true, depthWrite: false, fog: false }));
    this.bestLabel.scale.set(6, 1.5, 1);
    this.bestLabel.position.set(0, 0, 0);
    this.bestRing.add(this.bestLabel);
    this.bestRing.visible = false;
    scene.add(this.bestRing);

    this.iconTex = {};
    for (const k in POWERUPS) this.iconTex[k] = iconTexture(k);

    this.obstacles = []; this.shards = []; this.items = [];
    this.shardPool = [];
    this.reset(1);
  }

  resetDust(i, z) {
    const th = Math.random() * TAU; const r = 0.6 + Math.random() * (R - 1.0);
    this.dustPos[i * 3] = r * Math.sin(th); this.dustPos[i * 3 + 1] = -r * Math.cos(th); this.dustPos[i * 3 + 2] = z;
  }

  reset(seed) {
    for (const o of this.obstacles) this.scene.remove(o.group);
    for (const s of this.shards) this.releaseShard(s);
    for (const it of this.items) this.scene.remove(it.mesh);
    this.obstacles = []; this.shards = []; this.items = [];
    this.rng = mulberry32(seed);
    this.cursor = -70;
    this.nextItemAt = 350 + this.rng() * 150;
    this.script = null;
    this.patternCount = 0;
  }

  showBest(dist, label) {
    this.bestRing.visible = dist > 0;
    if (!this.bestRing.visible) return;
    this.bestRing.position.z = -dist;
    const c = document.createElement('canvas'); c.width = 512; c.height = 128;
    const x = c.getContext('2d');
    x.font = 'italic 900 64px sans-serif'; x.textAlign = 'center'; x.textBaseline = 'middle';
    x.shadowColor = '#ff9800'; x.shadowBlur = 18; x.fillStyle = '#ffd54a';
    x.fillText(label, 256, 64);
    if (this.bestLabel.material.map) this.bestLabel.material.map.dispose();
    this.bestLabel.material.map = new THREE.CanvasTexture(c);
    this.bestLabel.material.needsUpdate = true;
  }

  // -------- obstacles --------
  addObstacle(o) {
    o = Object.assign({ kind: this.kind, arms: [0], spin: 0, ampl: 0, freq: 0, phase: 0, passed: false, minClear: 99, low: o.h <= LOW_H + 0.01 }, o);
    // quantize so the geometry cache stays small
    if (o.aw < Math.PI) o.aw = Math.round(o.aw * 20) / 20;
    o.depth = Math.max(0.5, Math.round(o.depth * 2) / 2);
    const g = arcGeos(o.aw, o.h, o.depth);
    const group = new THREE.Group();
    for (const off of o.arms) {
      const fill = new THREE.Mesh(g.fill, o.low ? this.matLow : this.matHigh);
      const edge = new THREE.LineSegments(g.edges, o.low ? this.matLowEdge : this.matHighEdge);
      const arm = new THREE.Group(); arm.add(fill, edge); arm.rotation.z = off;
      group.add(arm);
    }
    group.position.z = o.z;
    o.group = group;
    o.dynamic = o.spin !== 0 || o.ampl !== 0;
    this.scene.add(group);
    this.obstacles.push(o);
    this.updateObstacleAngle(o, 0);
    return o;
  }
  angleOf(o, time) { return o.a0 + o.spin * time + o.ampl * Math.sin(o.freq * time + o.phase); }
  updateObstacleAngle(o, time) {
    o.a = this.angleOf(o, time);
    o.group.rotation.z = o.a - Math.PI / 2;
  }
  // signed clearance (m) between ship and obstacle at a given angle; <0 means overlap
  angularClear(o, a, theta) {
    let best = 99;
    for (const off of o.arms) {
      const d = Math.abs(angDiff(theta, a + off)) - o.aw - PLAYER_HALF_W / SHIP_R;
      best = Math.min(best, d * SHIP_R);
    }
    return best;
  }
  removeObstacle(o) {
    this.scene.remove(o.group);
    const i = this.obstacles.indexOf(o); if (i >= 0) this.obstacles.splice(i, 1);
  }

  // -------- shards --------
  addShard(theta, z, lift = 0) {
    if (this.blockedAt(theta, z, lift)) return null;
    let m = this.shardPool.pop();
    if (!m) m = new THREE.Mesh(this.shardGeo, this.matShard);
    const s = { theta, z, lift, mesh: m, alive: true, magnet: false };
    polar(theta, SHIP_R - lift, z, m.position);
    m.visible = true;
    this.scene.add(m);
    this.shards.push(s);
    return s;
  }
  releaseShard(s) { this.scene.remove(s.mesh); this.shardPool.push(s.mesh); }
  blockedAt(theta, z, lift) {
    for (const o of this.obstacles) {
      if (Math.abs(o.z - z) > o.depth / 2 + 1.2) continue;
      if (o.dynamic) return true;
      if (lift > o.h + 0.2) continue;
      if (this.angularClear(o, o.a, theta) < 0.6) return true;
    }
    return false;
  }
  shardLine(theta, z0, n, gap = 3.2, dtheta = 0) {
    for (let i = 0; i < n; i++) this.addShard(theta + dtheta * i, z0 - i * gap);
  }
  shardJumpArc(theta, zCenter, span = 9) {
    for (let i = 0; i < 7; i++) {
      const u = i / 6;
      this.addShard(theta, zCenter + span / 2 - u * span, 1.9 * 4 * u * (1 - u) + 0.05);
    }
  }

  // -------- power-up items --------
  addItem(type, theta, z) {
    const col = POWERUPS[type].color;
    const mesh = new THREE.Group();
    const cage = new THREE.Mesh(new THREE.IcosahedronGeometry(0.62, 0),
      new THREE.MeshBasicMaterial({ color: col, wireframe: true }));
    const icon = new THREE.Sprite(new THREE.SpriteMaterial({ map: this.iconTex[type], color: 0xffffff, depthTest: false, transparent: true }));
    icon.scale.set(0.7, 0.7, 1);
    const glow = new THREE.Sprite(new THREE.SpriteMaterial({ map: GLOW_TEX, color: col, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false }));
    glow.scale.set(2.6, 2.6, 1);
    mesh.add(glow, cage, icon);
    mesh.userData.cage = cage;
    polar(theta, SHIP_R - 0.3, z, mesh.position);
    this.scene.add(mesh);
    this.items.push({ type, theta, z, mesh, alive: true });
  }

  // -------- level generation --------
  difficulty(dist) { return Math.min(1, dist / 4500); }

  spawn(playerZ, dist, speed, time) {
    while (this.cursor > playerZ - 200) {
      const d = this.difficulty(dist + (playerZ - this.cursor));
      const reaction = lerp(1.15, 0.6, d);
      const len = this.script && this.script.length ? this.runScript() : this.pattern(d, -this.cursor, speed);
      this.cursor -= len + speed * reaction;
      this.patternCount++;
      const distAtCursor = -this.cursor;
      if (!this.script && distAtCursor > this.nextItemAt) {
        this.nextItemAt = distAtCursor + 380 + this.rng() * 260;
        const types = ['shield', 'magnet', 'boost', 'x2'];
        const type = types[Math.floor(this.rng() * types.length)];
        const z = this.cursor + speed * reaction * 0.5;
        let th = this.rng() * TAU;
        for (let k = 0; k < 12 && this.blockedAt(th, z, 0); k++) th += 0.5;
        this.addItem(type, th, z);
      }
    }
  }

  // Scripted opening for the very first run (tutorial).
  useTutorial() {
    this.kind = 'tutorial';
    this.script = [
      () => { this.addObstacle({ z: this.cursor, a0: 0, aw: 0.55, h: HIGH_H, depth: 1.6 }); this.shardLine(Math.PI * 0.6, this.cursor + 12, 6); return 45; },
      () => { this.addObstacle({ z: this.cursor, a0: 0, aw: Math.PI + 1, h: LOW_H, depth: 0.6 }); this.shardJumpArc(0, this.cursor); return 45; },
      () => { this.addObstacle({ z: this.cursor, a0: 0, aw: Math.PI - 0.85, h: HIGH_H, depth: 1.4 }); this.shardLine(Math.PI, this.cursor + 18, 6); return 45; },
    ];
    this.cursor = -80;
  }
  runScript() { return this.script.shift()(); }

  pattern(d, distAt, speed) {
    const r = this.rng;
    const z = this.cursor;
    const pool = [['block', 3], ['multi', 3], ['hurdle', 2]];
    if (distAt > 250) pool.push(['gap', 3], ['spinner', 2]);
    if (distAt > 600) pool.push(['slider', 2], ['slalom', 2]);
    if (distAt > 1100) pool.push(['field', 2], ['corridor', 2], ['spinner', 1]);
    if (distAt > 2000) pool.push(['twin', 2], ['gap', 1], ['slalom', 1]);
    let total = 0; for (const p of pool) total += p[1];
    let pick = r() * total; let kind = pool[0][0];
    for (const p of pool) { pick -= p[1]; if (pick <= 0) { kind = p[0]; break; } }
    this.kind = kind;
    const b = r() * TAU;
    const lowOrHigh = () => (r() < 0.45 ? LOW_H : HIGH_H);

    switch (kind) {
      case 'block': {
        const h = lowOrHigh();
        this.addObstacle({ z, a0: b, aw: 0.38 + r() * 0.3 + d * 0.25, h, depth: h === LOW_H ? 0.8 : 1.6 });
        if (h === LOW_H && r() < 0.6) this.shardJumpArc(b, z); else this.shardLine(b + Math.PI, z + 10, 6);
        return 2;
      }
      case 'multi': {
        const n = 2 + Math.floor(r() * (d > 0.4 ? 4 : 2));
        const arms = []; for (let i = 0; i < n; i++) arms.push(i * TAU / n);
        const aw = Math.min(0.62, (Math.PI / n) * (0.45 + d * 0.2));
        const h = lowOrHigh();
        this.addObstacle({ z, a0: b, aw, h, depth: h === LOW_H ? 0.8 : 1.4, arms });
        this.shardLine(b + Math.PI / n, z + 14, 5);
        return 2;
      }
      case 'hurdle': {
        const gap = d < 0.25 && r() < 0.5;
        this.addObstacle({ z, a0: b, aw: gap ? Math.PI - 0.7 : Math.PI + 1, h: LOW_H, depth: 0.6 });
        this.shardJumpArc(b + (r() - 0.5) * 2, z);
        return 1;
      }
      case 'gap': {
        const gw = lerp(1.8, 1.05, d);
        this.addObstacle({ z, a0: b, aw: Math.PI - gw / 2, h: HIGH_H, depth: 1.4 });
        this.shardLine(b + Math.PI, z + 16, 6);
        return 2;
      }
      case 'spinner': {
        const n = r() < 0.5 ? 2 : 3;
        const arms = []; for (let i = 0; i < n; i++) arms.push(i * TAU / n);
        const h = r() < 0.35 ? LOW_H : HIGH_H;
        this.addObstacle({ z, a0: b, aw: 0.4 + d * 0.15, h, depth: 1.2, arms, spin: (0.7 + r() * (0.6 + d)) * (r() < 0.5 ? -1 : 1) });
        return 2;
      }
      case 'slider': {
        const twin = r() < 0.5;
        this.addObstacle({ z, a0: b, aw: 0.5, h: HIGH_H, depth: 1.6, arms: twin ? [0, Math.PI] : [0], ampl: 0.9 + r() * 0.6, freq: 1.4 + r() * 1.2 + d, phase: r() * TAU });
        return 2;
      }
      case 'slalom': {
        const k = 3 + Math.floor(r() * (2 + d * 2));
        const step = Math.max(13 + d * 3, speed * 0.42);
        let g = b;
        const gw = lerp(1.7, 1.15, d);
        for (let i = 0; i < k; i++) {
          this.addObstacle({ z: z - i * step, a0: g + Math.PI, aw: Math.PI - gw / 2, h: HIGH_H, depth: 1.2 });
          this.addShard(g, z - i * step + 4);
          const ng = g + (r() < 0.5 ? -1 : 1) * (0.55 + r() * 0.45);
          this.addShard((g + ng) / 2, z - i * step - step / 2);
          g = ng;
        }
        return (k - 1) * step + 2;
      }
      case 'field': {
        const m = 4 + Math.floor(r() * 4);
        const span = Math.max(26 + m * 4, (m - 1) * speed * 0.32);
        for (let i = 0; i < m; i++) {
          const h = lowOrHigh();
          this.addObstacle({ z: z - (i / (m - 1)) * span, a0: r() * TAU, aw: 0.3 + r() * 0.2, h, depth: h === LOW_H ? 0.8 : 1.2 });
        }
        for (let i = 0; i < 4; i++) this.addShard(r() * TAU, z - r() * span);
        return span;
      }
      case 'corridor': {
        const cw = lerp(1.9, 1.3, d);
        const len = 18 + r() * 10;
        this.addObstacle({ z: z - len / 2, a0: b + Math.PI, aw: Math.PI - cw / 2, h: HIGH_H, depth: len });
        // low hurdles inside the channel
        const hz = z - len * (0.3 + r() * 0.4);
        this.addObstacle({ z: hz, a0: b, aw: cw / 2 + 0.05, h: LOW_H, depth: 0.6 });
        this.shardLine(b, z - 1, Math.floor(len / 3.2));
        return len;
      }
      case 'twin': {
        const h1 = lowOrHigh();
        this.addObstacle({ z, a0: b, aw: 0.55, h: h1, depth: 1.2, arms: [0, Math.PI], spin: 1.1 * (r() < 0.5 ? 1 : -1) });
        const gapZ = Math.max(12, speed * 0.45);
        this.addObstacle({ z: z - gapZ, a0: b + 1, aw: Math.PI - 0.7, h: LOW_H, depth: 0.6 });
        return gapZ + 2;
      }
    }
    return 2;
  }

  // -------- per-frame --------
  update(dt, time, playerZ, speed, boost) {
    this.tunnel.position.z = playerZ - TUNNEL_LEN / 2 + 40;
    const u = this.tunnel.material.uniforms;
    u.uTime.value = time; u.uPZ.value = playerZ;
    u.uBoost.value += ((boost ? 1 : 0) - u.uBoost.value) * Math.min(1, dt * 4);

    this.matHighEdge.color.copy(this.pal.obstacle);
    this.matHigh.color.copy(this.pal.obstacle).multiplyScalar(0.3);
    this.matLowEdge.color.copy(this.pal.low);
    this.matLow.color.copy(this.pal.low).multiplyScalar(0.3);
    this.matShard.color.copy(this.pal.shard);
    this.ringMat.color.copy(this.pal.grid);
    this.endGlow.material.color.copy(this.pal.accent);
    this.endGlow.position.set(0, 0, playerZ - 185);

    for (const ring of this.rings) {
      if (ring.position.z > playerZ + 10) ring.position.z -= 32 * this.rings.length;
    }
    // dust
    const dp = this.dustPos;
    for (let i = 0; i < dp.length / 3; i++) {
      if (dp[i * 3 + 2] > playerZ + 8) this.resetDust(i, playerZ - 160 - Math.random() * 20);
    }
    this.dust.geometry.attributes.position.needsUpdate = true;
    // streaks
    const sl = Math.max(0, (speed - 30) * 0.12) + (boost ? 4 : 0);
    this.streakMat.opacity += ((sl > 0.1 ? Math.min(0.55, sl * 0.12) : 0) - this.streakMat.opacity) * Math.min(1, dt * 3);
    const sp = this.streakPos;
    this.streakSeed.forEach((s, i) => {
      if (s.z > playerZ + 6) s.z = playerZ - 40 - Math.random() * 90;
      const x = s.r * Math.sin(s.th); const y = -s.r * Math.cos(s.th);
      sp[i * 6] = x; sp[i * 6 + 1] = y; sp[i * 6 + 2] = s.z;
      sp[i * 6 + 3] = x; sp[i * 6 + 4] = y; sp[i * 6 + 5] = s.z - sl;
    });
    this.streaks.geometry.attributes.position.needsUpdate = true;

    for (const o of this.obstacles) if (o.dynamic) this.updateObstacleAngle(o, time);
    for (const s of this.shards) {
      s.mesh.rotation.y += dt * 3; s.mesh.rotation.x += dt * 1.3;
    }
    for (const it of this.items) {
      it.mesh.userData.cage.rotation.y += dt * 2; it.mesh.userData.cage.rotation.x += dt;
      it.mesh.scale.setScalar(1 + Math.sin(time * 6) * 0.08);
    }
    // cull behind the player
    for (let i = this.obstacles.length - 1; i >= 0; i--) {
      const o = this.obstacles[i];
      if (o.z - o.depth / 2 > playerZ + 14) { this.scene.remove(o.group); this.obstacles.splice(i, 1); }
    }
    for (let i = this.shards.length - 1; i >= 0; i--) {
      const s = this.shards[i];
      if (!s.alive || s.z > playerZ + 8) { this.releaseShard(s); this.shards.splice(i, 1); }
    }
    for (let i = this.items.length - 1; i >= 0; i--) {
      const it = this.items[i];
      if (!it.alive || it.z > playerZ + 8) { this.scene.remove(it.mesh); this.items.splice(i, 1); }
    }
  }

  // clear everything near the player (used for revive)
  clearAhead(playerZ, len) {
    for (let i = this.obstacles.length - 1; i >= 0; i--) {
      const o = this.obstacles[i];
      if (o.z < playerZ + 10 && o.z > playerZ - len) { this.scene.remove(o.group); this.obstacles.splice(i, 1); }
    }
  }
}

export { LOW_H, HIGH_H, PLAYER_HALF_LEN };
