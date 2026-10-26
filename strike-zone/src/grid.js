// Pure world logic (no rendering): the map is a heightfield of columns on a
// square grid. Movement, collisions, ray casts and bot navigation all work on it.
import { PHYS } from './config.js';

export const CELL = 2;
const OUT_H = 60;

const BASE_H = { '.': 0, ',': 0, 'x': 1, 'X': 2, 'o': 1.1, '1': 0.5, '2': 1, '3': 1.5, '4': 2, 'W': 3.4, 'w': 1.2 };
export const PENETRABLE = { 'x': 0.55, 'X': 0.45, 'o': 0.6, 'w': 0.4 };

export function mulberry32(seed) {
  let a = seed >>> 0;
  return function () {
    a = (a + 0x6d2b79f5) >>> 0;
    let t = a;
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function hash2(x, z) {
  let h = Math.imul(x * 374761393 + z * 668265263, 1274126177);
  h = (h ^ (h >>> 13)) >>> 0;
  return (h % 1000) / 1000;
}

export class Grid {
  constructor(def) {
    this.def = def;
    this.w = def.w;
    this.d = def.h;
    this.cell = CELL;
    const n = this.w * this.d;
    this.chars = new Array(n).fill('#');
    for (const [c, x0, z0, x1, z1] of def.ops) {
      for (let z = Math.max(0, z0); z <= Math.min(this.d - 1, z1); z++)
        for (let x = Math.max(0, x0); x <= Math.min(this.w - 1, x1); x++) this.chars[z * this.w + x] = c;
    }
    // Outer ring is always solid.
    for (let x = 0; x < this.w; x++) { this.chars[x] = '#'; this.chars[(this.d - 1) * this.w + x] = '#'; }
    for (let z = 0; z < this.d; z++) { this.chars[z * this.w] = '#'; this.chars[z * this.w + this.w - 1] = '#'; }
    this.heights = new Float32Array(n);
    this.maxH = 0;
    for (let i = 0; i < n; i++) {
      const c = this.chars[i];
      let h = BASE_H[c];
      if (h === undefined) h = 6 + Math.round(hash2(i % this.w, (i / this.w) | 0) * 6) * 0.5;
      this.heights[i] = h;
      if (h > this.maxH) this.maxH = h;
    }
    this.buildNav();
  }

  inside(cx, cz) { return cx >= 0 && cz >= 0 && cx < this.w && cz < this.d; }
  idx(cx, cz) { return cz * this.w + cx; }
  h(cx, cz) { return this.inside(cx, cz) ? this.heights[cz * this.w + cx] : OUT_H; }
  charAt(cx, cz) { return this.inside(cx, cz) ? this.chars[cz * this.w + cx] : '#'; }
  cellX(x) { return Math.floor(x / CELL); }
  topAt(x, z) { return this.h(Math.floor(x / CELL), Math.floor(z / CELL)); }
  center(cx, cz) { return { x: (cx + 0.5) * CELL, y: this.h(cx, cz), z: (cz + 0.5) * CELL }; }
  isWall(cx, cz) { return this.h(cx, cz) >= 3; }

  // Highest column under a square footprint.
  groundUnder(x, z, r) {
    const x0 = Math.floor((x - r) / CELL), x1 = Math.floor((x + r) / CELL);
    const z0 = Math.floor((z - r) / CELL), z1 = Math.floor((z + r) / CELL);
    let g = -Infinity;
    for (let cz = z0; cz <= z1; cz++) for (let cx = x0; cx <= x1; cx++) { const h = this.h(cx, cz); if (h > g) g = h; }
    return g;
  }

  // Does a body standing with feet at footY collide at (x, z)? Columns up to a step are walkable.
  blockedAt(x, z, r, footY, headY) {
    const x0 = Math.floor((x - r) / CELL), x1 = Math.floor((x + r) / CELL);
    const z0 = Math.floor((z - r) / CELL), z1 = Math.floor((z + r) / CELL);
    for (let cz = z0; cz <= z1; cz++) for (let cx = x0; cx <= x1; cx++) {
      const h = this.h(cx, cz);
      if (h > footY + PHYS.stepHeight && footY < headY) return true;
    }
    return false;
  }

  // Integrates a body: {x,y,z} feet position, vx,vy,vz, onGround. Returns true if it landed this step.
  move(b, dt, r = PHYS.radius) {
    let landed = false;
    const steps = Math.max(1, Math.ceil(Math.max(Math.abs(b.vx), Math.abs(b.vz)) * dt / 0.3));
    const sdt = dt / steps;
    for (let s = 0; s < steps; s++) {
      // Horizontal axes are resolved separately so bodies slide along walls.
      const nx = b.x + b.vx * sdt;
      if (this.blockedAt(nx, b.z, r, b.y, b.y + 1)) {
        if (b.vx > 0) b.x = Math.floor((nx + r) / CELL) * CELL - r - 0.001;
        else if (b.vx < 0) b.x = Math.ceil((nx - r) / CELL) * CELL + r + 0.001;
        b.vx = 0;
        b.hitWall = true;
      } else b.x = nx;
      const nz = b.z + b.vz * sdt;
      if (this.blockedAt(b.x, nz, r, b.y, b.y + 1)) {
        if (b.vz > 0) b.z = Math.floor((nz + r) / CELL) * CELL - r - 0.001;
        else if (b.vz < 0) b.z = Math.ceil((nz - r) / CELL) * CELL + r + 0.001;
        b.vz = 0;
        b.hitWall = true;
      } else b.z = nz;

      const ground = this.groundUnder(b.x, b.z, r - 0.02);
      if (b.onGround) {
        if (ground > b.y) { b.stepUp = (b.stepUp || 0) + (ground - b.y); b.y = ground; }
        else if (b.y - ground <= PHYS.stepHeight + 0.01 && b.vy <= 0) b.y = ground;
        else b.onGround = false;
      }
      if (!b.onGround) {
        b.vy -= PHYS.gravity * sdt;
        b.y += b.vy * sdt;
        if (b.y <= ground) {
          if (ground - b.y > 0.0001 && b.vy > 0) { /* rising into ledge: allow */ }
          b.fallSpeed = -b.vy;
          b.y = ground; b.vy = 0; b.onGround = true; landed = true;
        }
      }
    }
    return landed;
  }

  // Ray against the heightfield. Returns {t, nx, ny, nz, cx, cz} or null.
  raycast(ox, oy, oz, dx, dy, dz, maxT) {
    let cx = Math.floor(ox / CELL), cz = Math.floor(oz / CELL);
    const stepX = dx > 0 ? 1 : -1, stepZ = dz > 0 ? 1 : -1;
    const tdx = dx !== 0 ? CELL / Math.abs(dx) : Infinity;
    const tdz = dz !== 0 ? CELL / Math.abs(dz) : Infinity;
    let tmx = dx > 0 ? ((cx + 1) * CELL - ox) / dx : dx < 0 ? (cx * CELL - ox) / dx : Infinity;
    let tmz = dz > 0 ? ((cz + 1) * CELL - oz) / dz : dz < 0 ? (cz * CELL - oz) / dz : Infinity;
    let t = 0, nx = 0, nz = 0;
    for (let guard = 0; guard < 512; guard++) {
      const h = this.h(cx, cz);
      const tExit = Math.min(tmx, tmz, maxT);
      const yIn = oy + dy * t, yOut = oy + dy * tExit;
      if (yIn < h) return { t, nx, ny: 0, nz, cx, cz };
      if (yOut < h) return { t: (h - oy) / dy, nx: 0, ny: 1, nz: 0, cx, cz };
      if (tExit >= maxT) return null;
      if (dy >= 0 && yOut > this.maxH) return null;
      if (tmx < tmz) { cx += stepX; t = tmx; tmx += tdx; nx = -stepX; nz = 0; }
      else { cz += stepZ; t = tmz; tmz += tdz; nx = 0; nz = -stepZ; }
    }
    return null;
  }

  // Distance a ray travels inside the column (cx, cz) starting at t0, used for wall penetration.
  exitDistance(ox, oy, oz, dx, dy, dz, t0, cx, cz) {
    const h = this.h(cx, cz);
    let tEnd = Infinity;
    const x0 = cx * CELL, x1 = x0 + CELL, z0 = cz * CELL, z1 = z0 + CELL;
    if (dx > 0) tEnd = Math.min(tEnd, (x1 - ox) / dx); else if (dx < 0) tEnd = Math.min(tEnd, (x0 - ox) / dx);
    if (dz > 0) tEnd = Math.min(tEnd, (z1 - oz) / dz); else if (dz < 0) tEnd = Math.min(tEnd, (z0 - oz) / dz);
    if (dy > 0) tEnd = Math.min(tEnd, (h - oy) / dy);
    return Math.max(0, tEnd - t0);
  }

  los(ax, ay, az, bx, by, bz) {
    const dx = bx - ax, dy = by - ay, dz = bz - az;
    const len = Math.hypot(dx, dy, dz);
    if (len < 1e-4) return true;
    return !this.raycast(ax, ay, az, dx / len, dy / len, dz / len, len);
  }

  // ---------- navigation ----------
  buildNav() {
    const n = this.w * this.d;
    this.walk = new Uint8Array(n);
    for (let i = 0; i < n; i++) this.walk[i] = this.heights[i] < 3 ? 1 : 0;
    this.adj = [];
    const dirs = [[1, 0], [-1, 0], [0, 1], [0, -1], [1, 1], [1, -1], [-1, 1], [-1, -1]];
    for (let cz = 0; cz < this.d; cz++) for (let cx = 0; cx < this.w; cx++) {
      const i = this.idx(cx, cz);
      const list = [];
      this.adj.push(list);
      if (!this.walk[i]) continue;
      const h = this.heights[i];
      for (const [ox, oz] of dirs) {
        const nx = cx + ox, nz = cz + oz;
        if (!this.inside(nx, nz)) continue;
        const j = this.idx(nx, nz);
        if (!this.walk[j]) continue;
        const hn = this.heights[j];
        const dh = hn - h;
        if (dh > 1.05) continue;
        if (ox && oz) {
          // Diagonal: both side cells must be no higher than the higher end.
          const top = Math.max(h, hn) + 0.01;
          if (this.h(cx + ox, cz) > top || this.h(cx, cz + oz) > top) continue;
          if (Math.abs(dh) > 0.01) continue;
        }
        let cost = ox && oz ? 1.4142 : 1;
        if (dh > PHYS.stepHeight) cost += 1.5;
        list.push(j, cost, dh > PHYS.stepHeight ? 1 : 0);
      }
    }
    // Drop cells that cannot be reached from the T spawn (e.g. tops of tall crate stacks).
    const sp = this.def.spawnT;
    const start = this.nearestWalkable((sp[0] + sp[2]) >> 1, (sp[1] + sp[3]) >> 1);
    const seen = new Uint8Array(n);
    const stack = [start];
    seen[start] = 1;
    while (stack.length) {
      const i = stack.pop();
      const list = this.adj[i];
      for (let k = 0; k < list.length; k += 3) if (!seen[list[k]]) { seen[list[k]] = 1; stack.push(list[k]); }
    }
    for (let i = 0; i < n; i++) if (!seen[i]) { this.walk[i] = 0; this.adj[i] = []; }
    for (let i = 0; i < n; i++) {
      const list = this.adj[i];
      if (!list.length) continue;
      const kept = [];
      for (let k = 0; k < list.length; k += 3) if (this.walk[list[k]]) kept.push(list[k], list[k + 1], list[k + 2]);
      this.adj[i] = kept;
    }
  }

  nearestWalkable(cx, cz) {
    if (this.inside(cx, cz) && this.walk[this.idx(cx, cz)]) return this.idx(cx, cz);
    for (let r = 1; r < 6; r++) for (let oz = -r; oz <= r; oz++) for (let ox = -r; ox <= r; ox++) {
      const x = cx + ox, z = cz + oz;
      if (this.inside(x, z) && this.walk[this.idx(x, z)]) return this.idx(x, z);
    }
    return -1;
  }

  // A* over cells. Returns array of {x,y,z,jump} world waypoints (excluding start) or null.
  findPath(sx, sz, tx, tz) {
    const s = this.nearestWalkable(Math.floor(sx / CELL), Math.floor(sz / CELL));
    const g = this.nearestWalkable(Math.floor(tx / CELL), Math.floor(tz / CELL));
    if (s < 0 || g < 0) return null;
    if (s === g) return [{ x: tx, y: this.heights[g], z: tz, jump: 0 }];
    const n = this.w * this.d;
    if (!this._gs || this._gs.length !== n) {
      this._gs = new Float32Array(n); this._from = new Int32Array(n); this._stamp = new Uint32Array(n); this._closed = new Uint32Array(n); this._jump = new Uint8Array(n);
      this._run = 0;
    }
    const gs = this._gs, from = this._from, stamp = this._stamp, closed = this._closed, jmp = this._jump;
    const run = ++this._run;
    const gx = g % this.w, gz = (g / this.w) | 0;
    const hfun = (i) => { const x = i % this.w, z = (i / this.w) | 0; const ax = Math.abs(x - gx), az = Math.abs(z - gz); return Math.max(ax, az) + 0.4142 * Math.min(ax, az); };
    const heap = [];
    const push = (i, f) => {
      heap.push([f, i]);
      let k = heap.length - 1;
      while (k > 0) { const p = (k - 1) >> 1; if (heap[p][0] <= heap[k][0]) break; [heap[p], heap[k]] = [heap[k], heap[p]]; k = p; }
    };
    const pop = () => {
      const top = heap[0]; const last = heap.pop();
      if (heap.length) {
        heap[0] = last; let k = 0;
        for (;;) {
          const l = 2 * k + 1, r = l + 1; let m = k;
          if (l < heap.length && heap[l][0] < heap[m][0]) m = l;
          if (r < heap.length && heap[r][0] < heap[m][0]) m = r;
          if (m === k) break;
          [heap[m], heap[k]] = [heap[k], heap[m]]; k = m;
        }
      }
      return top[1];
    };
    stamp[s] = run; gs[s] = 0; from[s] = -1; jmp[s] = 0;
    push(s, hfun(s));
    let found = false;
    while (heap.length) {
      const i = pop();
      if (closed[i] === run) continue;
      closed[i] = run;
      if (i === g) { found = true; break; }
      const list = this.adj[i];
      for (let k = 0; k < list.length; k += 3) {
        const j = list[k];
        if (closed[j] === run) continue;
        const ng = gs[i] + list[k + 1];
        if (stamp[j] !== run || ng < gs[j]) {
          stamp[j] = run; gs[j] = ng; from[j] = i; jmp[j] = list[k + 2];
          push(j, ng + hfun(j));
        }
      }
    }
    if (!found) return null;
    const cells = [];
    for (let i = g; i !== -1; i = from[i]) cells.push(i);
    cells.reverse();
    return this.smooth(cells, tx, tz);
  }

  // Straight-line walkability on one flat level.
  flatLine(ax, az, bx, bz, level) {
    const dx = bx - ax, dz = bz - az;
    const len = Math.hypot(dx, dz);
    const steps = Math.ceil(len / 0.5);
    const r = PHYS.radius + 0.15;
    for (let k = 1; k <= steps; k++) {
      const x = ax + dx * k / steps, z = az + dz * k / steps;
      for (const [ox, oz] of [[r, r], [-r, r], [r, -r], [-r, -r]]) {
        if (Math.abs(this.topAt(x + ox, z + oz) - level) > 0.01) return false;
      }
    }
    return true;
  }

  smooth(cells, tx, tz) {
    const pts = cells.map((i) => ({ x: (i % this.w + 0.5) * CELL, y: this.heights[i], z: (((i / this.w) | 0) + 0.5) * CELL, jump: this._jump[i] }));
    const last = pts[pts.length - 1];
    if (Math.abs(this.topAt(tx, tz) - last.y) < 0.01 && this.groundUnder(tx, tz, PHYS.radius) - last.y < 0.01) { last.x = tx; last.z = tz; }
    const out = [];
    let i = 0;
    while (i < pts.length - 1) {
      let j = pts.length - 1;
      for (; j > i + 1; j--) {
        let ok = true;
        for (let k = i + 1; k <= j; k++) if (pts[k].jump || Math.abs(pts[k].y - pts[i].y) > 0.01) { ok = false; break; }
        if (ok && this.flatLine(pts[i].x, pts[i].z, pts[j].x, pts[j].z, pts[i].y)) break;
      }
      out.push(pts[j]);
      i = j;
    }
    if (!out.length) out.push(last);
    return out;
  }

  randomCellIn(rect, rng, avoid) {
    const [x0, z0, x1, z1] = rect;
    for (let tries = 0; tries < 60; tries++) {
      const cx = x0 + Math.floor(rng() * (x1 - x0 + 1)), cz = z0 + Math.floor(rng() * (z1 - z0 + 1));
      const i = this.idx(cx, cz);
      if (!this.walk[i] || this.heights[i] > 2) continue;
      if (avoid && avoid(cx, cz)) continue;
      return this.center(cx, cz);
    }
    const i = this.nearestWalkable((x0 + x1) >> 1, (z0 + z1) >> 1);
    return this.center(i % this.w, (i / this.w) | 0);
  }

  inRect(x, z, rect) {
    const cx = Math.floor(x / CELL), cz = Math.floor(z / CELL);
    return cx >= rect[0] && cx <= rect[2] && cz >= rect[1] && cz <= rect[3];
  }

  // All walkable floor cells (for deathmatch spawns).
  floorCells() {
    if (this._floor) return this._floor;
    this._floor = [];
    for (let i = 0; i < this.walk.length; i++) {
      if (!this.walk[i] || this.heights[i] > 1.6) continue;
      const cx = i % this.w, cz = (i / this.w) | 0;
      let open = 0;
      for (const [ox, oz] of [[1, 0], [-1, 0], [0, 1], [0, -1]]) if (this.walk[this.idx(cx + ox, cz + oz)]) open++;
      if (open >= 2) this._floor.push(i);
    }
    return this._floor;
  }
}
