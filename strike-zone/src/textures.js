// Procedural textures painted on canvases, so the game ships without image files.
import * as THREE from 'three';
import { mulberry32 } from './grid.js';

const SIZE = 256;

function canvas(size = SIZE) {
  const c = document.createElement('canvas');
  c.width = c.height = size;
  return c;
}

function noise(ctx, size, rng, amount, alpha = 1) {
  const img = ctx.getImageData(0, 0, size, size);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const n = (rng() - 0.5) * amount;
    d[i] = Math.max(0, Math.min(255, d[i] + n));
    d[i + 1] = Math.max(0, Math.min(255, d[i + 1] + n));
    d[i + 2] = Math.max(0, Math.min(255, d[i + 2] + n * 0.9));
    d[i + 3] = d[i + 3] * alpha;
  }
  ctx.putImageData(img, 0, 0);
}

function blotches(ctx, size, rng, color, count, rMin, rMax, alpha) {
  for (let i = 0; i < count; i++) {
    const x = rng() * size, y = rng() * size, r = rMin + rng() * (rMax - rMin);
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, color.replace('A', String(alpha)));
    g.addColorStop(1, color.replace('A', '0'));
    ctx.fillStyle = g;
    for (const ox of [-size, 0, size]) for (const oy of [-size, 0, size]) {
      ctx.save(); ctx.translate(ox, oy); ctx.fillRect(x - r, y - r, r * 2, r * 2); ctx.restore();
    }
  }
}

function bricks(ctx, size, rng, rows, cols, base, mortar, jitter, mortarW = 3) {
  ctx.fillStyle = mortar; ctx.fillRect(0, 0, size, size);
  const bh = size / rows, bw = size / cols;
  for (let r = 0; r < rows; r++) {
    const off = (r % 2) * bw / 2;
    for (let c = -1; c <= cols; c++) {
      const v = (rng() - 0.5) * jitter;
      const [br, bg, bb] = base;
      ctx.fillStyle = `rgb(${br + v},${bg + v * 0.9},${bb + v * 0.8})`;
      ctx.fillRect(c * bw + off + mortarW / 2, r * bh + mortarW / 2, bw - mortarW, bh - mortarW);
    }
  }
}

const painters = {
  sandstone(ctx, s, rng) {
    bricks(ctx, s, rng, 4, 2, [196, 160, 112], '#a98a5e', 26, 4);
    blotches(ctx, s, rng, 'rgba(120,90,50,A)', 18, 10, 50, 0.18);
    noise(ctx, s, rng, 26);
  },
  plaster(ctx, s, rng) {
    ctx.fillStyle = '#d8c39b'; ctx.fillRect(0, 0, s, s);
    blotches(ctx, s, rng, 'rgba(160,125,80,A)', 30, 10, 60, 0.25);
    blotches(ctx, s, rng, 'rgba(255,245,220,A)', 14, 10, 40, 0.25);
    ctx.fillStyle = 'rgba(110,80,50,0.35)'; ctx.fillRect(0, s - 18, s, 18);
    noise(ctx, s, rng, 18);
  },
  sand(ctx, s, rng) {
    ctx.fillStyle = '#cdb184'; ctx.fillRect(0, 0, s, s);
    blotches(ctx, s, rng, 'rgba(150,115,70,A)', 40, 8, 40, 0.22);
    blotches(ctx, s, rng, 'rgba(235,215,170,A)', 25, 8, 30, 0.25);
    noise(ctx, s, rng, 34);
  },
  paving(ctx, s, rng) {
    bricks(ctx, s, rng, 4, 4, [170, 150, 120], '#7d6c55', 30, 4);
    blotches(ctx, s, rng, 'rgba(90,70,40,A)', 20, 10, 40, 0.18);
    noise(ctx, s, rng, 22);
  },
  stone(ctx, s, rng) {
    bricks(ctx, s, rng, 2, 2, [160, 150, 135], '#6f665a', 24, 5);
    noise(ctx, s, rng, 28);
  },
  crate(ctx, s, rng) {
    ctx.fillStyle = '#9b6b35'; ctx.fillRect(0, 0, s, s);
    for (let i = 0; i < 8; i++) {
      const v = (rng() - 0.5) * 30;
      ctx.fillStyle = `rgb(${150 + v},${104 + v},${56 + v * 0.6})`;
      ctx.fillRect(0, i * s / 8 + 1, s, s / 8 - 2);
    }
    ctx.strokeStyle = '#5a3a18'; ctx.lineWidth = 18;
    ctx.strokeRect(9, 9, s - 18, s - 18);
    ctx.lineWidth = 16;
    ctx.beginPath(); ctx.moveTo(18, 18); ctx.lineTo(s - 18, s - 18); ctx.stroke();
    ctx.fillStyle = '#3a2610';
    for (const [x, y] of [[18, 18], [s - 18, 18], [18, s - 18], [s - 18, s - 18]]) { ctx.beginPath(); ctx.arc(x, y, 4, 0, 7); ctx.fill(); }
    noise(ctx, s, rng, 26);
  },
  concrete(ctx, s, rng) {
    ctx.fillStyle = '#9a9a96'; ctx.fillRect(0, 0, s, s);
    blotches(ctx, s, rng, 'rgba(70,70,70,A)', 30, 10, 60, 0.18);
    ctx.fillStyle = 'rgba(40,40,40,0.35)';
    ctx.fillRect(0, s / 2 - 1, s, 2); ctx.fillRect(s / 2 - 1, 0, 2, s);
    for (const [x, y] of [[s / 4, s / 4], [3 * s / 4, s / 4], [s / 4, 3 * s / 4], [3 * s / 4, 3 * s / 4]]) { ctx.beginPath(); ctx.arc(x, y, 3, 0, 7); ctx.fill(); }
    noise(ctx, s, rng, 24);
  },
  concreteFloor(ctx, s, rng) {
    ctx.fillStyle = '#86888a'; ctx.fillRect(0, 0, s, s);
    blotches(ctx, s, rng, 'rgba(50,50,55,A)', 40, 10, 50, 0.2);
    ctx.fillStyle = 'rgba(30,30,30,0.4)'; ctx.fillRect(0, 0, s, 2); ctx.fillRect(0, 0, 2, s);
    ctx.fillStyle = 'rgba(220,180,40,0.55)'; ctx.fillRect(0, s * 0.82, s, 10);
    noise(ctx, s, rng, 22);
  },
  asphalt(ctx, s, rng) {
    ctx.fillStyle = '#4a4a4c'; ctx.fillRect(0, 0, s, s);
    blotches(ctx, s, rng, 'rgba(20,20,20,A)', 40, 8, 40, 0.25);
    blotches(ctx, s, rng, 'rgba(120,120,120,A)', 20, 4, 18, 0.2);
    noise(ctx, s, rng, 40);
  },
  container(ctx, s, rng) {
    const hue = rng() < 0.5 ? [150, 50, 40] : [40, 90, 140];
    ctx.fillStyle = `rgb(${hue})`; ctx.fillRect(0, 0, s, s);
    for (let x = 0; x < s; x += 16) {
      ctx.fillStyle = 'rgba(0,0,0,0.25)'; ctx.fillRect(x, 0, 4, s);
      ctx.fillStyle = 'rgba(255,255,255,0.12)'; ctx.fillRect(x + 8, 0, 3, s);
    }
    blotches(ctx, s, rng, 'rgba(90,50,20,A)', 18, 6, 26, 0.35);
    noise(ctx, s, rng, 20);
  },
  brick(ctx, s, rng) {
    bricks(ctx, s, rng, 8, 4, [128, 58, 44], '#4e4842', 34, 4);
    blotches(ctx, s, rng, 'rgba(30,20,20,A)', 18, 10, 50, 0.25);
    noise(ctx, s, rng, 24);
  },
  metal(ctx, s, rng) {
    ctx.fillStyle = '#5c646e'; ctx.fillRect(0, 0, s, s);
    ctx.strokeStyle = 'rgba(20,24,30,0.6)'; ctx.lineWidth = 3;
    for (let i = 0; i <= 4; i++) { ctx.strokeRect(i * s / 4, 0, s / 4, s); }
    for (let i = 0; i < 4; i++) for (let j = 0; j < 8; j++) { ctx.fillStyle = 'rgba(200,210,220,0.4)'; ctx.beginPath(); ctx.arc(i * s / 4 + 8, j * s / 8 + 8, 2, 0, 7); ctx.fill(); }
    blotches(ctx, s, rng, 'rgba(110,70,40,A)', 10, 8, 30, 0.3);
    noise(ctx, s, rng, 18);
  },
  barrel(ctx, s, rng) {
    ctx.fillStyle = '#3f6a3a'; ctx.fillRect(0, 0, s, s);
    ctx.fillStyle = 'rgba(0,0,0,0.3)';
    for (const y of [0.18, 0.5, 0.82]) ctx.fillRect(0, y * s - 5, s, 10);
    ctx.fillStyle = '#e8c420'; ctx.fillRect(s * 0.35, s * 0.28, s * 0.3, s * 0.12);
    blotches(ctx, s, rng, 'rgba(120,60,20,A)', 14, 6, 26, 0.4);
    noise(ctx, s, rng, 22);
  },
};

const cache = new Map();

export function texture(name, maxAniso = 4) {
  if (cache.has(name)) return cache.get(name);
  const c = canvas();
  const ctx = c.getContext('2d', { willReadFrequently: true });
  const rng = mulberry32(name.length * 7919 + name.charCodeAt(0) * 31);
  (painters[name] || painters.concrete)(ctx, SIZE, rng);
  const t = new THREE.CanvasTexture(c);
  t.wrapS = t.wrapT = THREE.RepeatWrapping;
  t.colorSpace = THREE.SRGBColorSpace;
  t.anisotropy = maxAniso;
  t.generateMipmaps = true;
  t.minFilter = THREE.LinearMipmapLinearFilter;
  cache.set(name, t);
  return t;
}

// Painted bomb-site letter for the floor.
export function siteDecal(letter) {
  const c = canvas(256);
  const ctx = c.getContext('2d');
  ctx.strokeStyle = 'rgba(200,30,20,0.75)';
  ctx.lineWidth = 14;
  ctx.beginPath(); ctx.arc(128, 128, 104, 0, Math.PI * 2); ctx.stroke();
  ctx.fillStyle = 'rgba(200,30,20,0.8)';
  ctx.font = 'bold 170px Arial, sans-serif';
  ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  ctx.fillText(letter, 128, 136);
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  return t;
}

// Soft round sprite used by smoke, dust, sparks and muzzle flashes.
export function softSprite(kind = 'smoke') {
  const key = 'sprite_' + kind;
  if (cache.has(key)) return cache.get(key);
  const c = canvas(64);
  const ctx = c.getContext('2d');
  if (kind === 'flash') {
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,230,1)'); g.addColorStop(0.25, 'rgba(255,220,120,0.95)'); g.addColorStop(0.6, 'rgba(255,140,30,0.35)'); g.addColorStop(1, 'rgba(255,100,0,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
    ctx.fillStyle = 'rgba(255,240,200,0.9)';
    for (let i = 0; i < 6; i++) { ctx.save(); ctx.translate(32, 32); ctx.rotate(i * Math.PI / 3); ctx.beginPath(); ctx.moveTo(0, -3); ctx.lineTo(30, 0); ctx.lineTo(0, 3); ctx.fill(); ctx.restore(); }
  } else if (kind === 'spark') {
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(255,255,255,1)'); g.addColorStop(0.3, 'rgba(255,230,160,0.8)'); g.addColorStop(1, 'rgba(255,160,40,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
  } else if (kind === 'hole') {
    const g = ctx.createRadialGradient(32, 32, 0, 32, 32, 32);
    g.addColorStop(0, 'rgba(10,8,6,1)'); g.addColorStop(0.35, 'rgba(25,20,15,0.95)'); g.addColorStop(0.55, 'rgba(60,50,40,0.4)'); g.addColorStop(1, 'rgba(60,50,40,0)');
    ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
  } else if (kind === 'blood') {
    const rng = mulberry32(99);
    for (let i = 0; i < 9; i++) {
      const x = 32 + (rng() - 0.5) * 30, y = 32 + (rng() - 0.5) * 30, r = 4 + rng() * 12;
      ctx.fillStyle = 'rgba(120,8,8,0.85)'; ctx.beginPath(); ctx.arc(x, y, r, 0, 7); ctx.fill();
    }
  } else {
    const rng = mulberry32(5);
    for (let i = 0; i < 14; i++) {
      const x = 32 + (rng() - 0.5) * 24, y = 32 + (rng() - 0.5) * 24, r = 10 + rng() * 14;
      const g = ctx.createRadialGradient(x, y, 0, x, y, r);
      g.addColorStop(0, 'rgba(255,255,255,0.35)'); g.addColorStop(1, 'rgba(255,255,255,0)');
      ctx.fillStyle = g; ctx.fillRect(0, 0, 64, 64);
    }
  }
  const t = new THREE.CanvasTexture(c);
  t.colorSpace = THREE.SRGBColorSpace;
  cache.set(key, t);
  return t;
}
