// Visual effects: particles, bullet-hole decals, tracers, muzzle light, smoke clouds.
import * as THREE from 'three';
import { softSprite } from './textures.js';

class ParticleSystem {
  constructor(scene, max, blending, tex) {
    this.max = max;
    this.n = 0;
    this.pos = new Float32Array(max * 3);
    this.col = new Float32Array(max * 4);
    this.size = new Float32Array(max);
    this.vel = new Float32Array(max * 3);
    this.life = new Float32Array(max);
    this.maxLife = new Float32Array(max);
    this.grav = new Float32Array(max);
    this.grow = new Float32Array(max);
    this.drag = new Float32Array(max);
    this.alpha0 = new Float32Array(max);
    const g = new THREE.BufferGeometry();
    this.aPos = new THREE.BufferAttribute(this.pos, 3).setUsage(THREE.DynamicDrawUsage);
    this.aCol = new THREE.BufferAttribute(this.col, 4).setUsage(THREE.DynamicDrawUsage);
    this.aSize = new THREE.BufferAttribute(this.size, 1).setUsage(THREE.DynamicDrawUsage);
    g.setAttribute('position', this.aPos);
    g.setAttribute('color', this.aCol);
    g.setAttribute('size', this.aSize);
    g.setDrawRange(0, 0);
    this.uniforms = { map: { value: tex }, scale: { value: 400 }, fogColor: { value: new THREE.Color() }, fogNear: { value: 30 }, fogFar: { value: 120 } };
    this.mat = new THREE.ShaderMaterial({
      uniforms: this.uniforms,
      transparent: true,
      depthWrite: false,
      blending,
      vertexShader: `attribute float size; attribute vec4 color; varying vec4 vColor; varying float vDepth; uniform float scale;
        void main(){ vColor = color; vec4 mv = modelViewMatrix * vec4(position,1.0); vDepth = -mv.z; gl_PointSize = min(size * scale / max(0.1, -mv.z), 2048.0); gl_Position = projectionMatrix * mv; }`,
      fragmentShader: `uniform sampler2D map; uniform vec3 fogColor; uniform float fogNear; uniform float fogFar; varying vec4 vColor; varying float vDepth;
        void main(){ vec4 t = texture2D(map, gl_PointCoord); vec4 c = t * vColor; float f = smoothstep(fogNear, fogFar, vDepth); c.rgb = mix(c.rgb, fogColor, f * 0.8); if (c.a < 0.01) discard; gl_FragColor = c; }`,
    });
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    this.points.renderOrder = 3;
    scene.add(this.points);
  }

  emit(x, y, z, vx, vy, vz, life, size, r, g, b, a, grav = 0, grow = 0, drag = 0) {
    let i;
    if (this.n < this.max) i = this.n++;
    else { i = (Math.random() * this.max) | 0; }
    this.pos[i * 3] = x; this.pos[i * 3 + 1] = y; this.pos[i * 3 + 2] = z;
    this.vel[i * 3] = vx; this.vel[i * 3 + 1] = vy; this.vel[i * 3 + 2] = vz;
    this.col[i * 4] = r; this.col[i * 4 + 1] = g; this.col[i * 4 + 2] = b; this.col[i * 4 + 3] = a;
    this.alpha0[i] = a;
    this.size[i] = size;
    this.life[i] = life; this.maxLife[i] = life;
    this.grav[i] = grav; this.grow[i] = grow; this.drag[i] = drag;
  }

  update(dt) {
    let n = this.n;
    for (let i = 0; i < n; i++) {
      this.life[i] -= dt;
      if (this.life[i] <= 0) {
        n--;
        if (i !== n) this.copy(n, i);
        i--;
        continue;
      }
      const d = Math.max(0, 1 - this.drag[i] * dt);
      this.vel[i * 3] *= d; this.vel[i * 3 + 2] *= d;
      this.vel[i * 3 + 1] = this.vel[i * 3 + 1] * d - this.grav[i] * dt;
      this.pos[i * 3] += this.vel[i * 3] * dt;
      this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt;
      this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
      this.size[i] += this.grow[i] * dt;
      const k = this.life[i] / this.maxLife[i];
      this.col[i * 4 + 3] = this.alpha0[i] * Math.min(1, k * 2.5) * Math.min(1, (1 - k) * 12 + 0.2);
    }
    this.n = n;
    this.points.geometry.setDrawRange(0, n);
    this.aPos.needsUpdate = true; this.aCol.needsUpdate = true; this.aSize.needsUpdate = true;
  }

  copy(from, to) {
    for (let k = 0; k < 3; k++) { this.pos[to * 3 + k] = this.pos[from * 3 + k]; this.vel[to * 3 + k] = this.vel[from * 3 + k]; }
    for (let k = 0; k < 4; k++) this.col[to * 4 + k] = this.col[from * 4 + k];
    this.size[to] = this.size[from]; this.life[to] = this.life[from]; this.maxLife[to] = this.maxLife[from];
    this.grav[to] = this.grav[from]; this.grow[to] = this.grow[from]; this.drag[to] = this.drag[from]; this.alpha0[to] = this.alpha0[from];
  }

  clear() { this.n = 0; this.points.geometry.setDrawRange(0, 0); }
}

const tmpM = new THREE.Matrix4(), tmpQ = new THREE.Quaternion(), tmpS = new THREE.Vector3(), tmpP = new THREE.Vector3(), UP = new THREE.Vector3(0, 0, 1), tmpN = new THREE.Vector3();

class DecalPool {
  constructor(scene, max, tex, size) {
    this.max = max;
    this.i = 0;
    const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -4, polygonOffsetUnits: -4 });
    this.mesh = new THREE.InstancedMesh(new THREE.PlaneGeometry(size, size), mat, max);
    this.mesh.count = 0;
    this.mesh.frustumCulled = false;
    this.mesh.renderOrder = 1;
    scene.add(this.mesh);
  }
  add(x, y, z, nx, ny, nz, scale = 1) {
    tmpN.set(nx, ny, nz);
    tmpQ.setFromUnitVectors(UP, tmpN);
    const spin = new THREE.Quaternion().setFromAxisAngle(tmpN, Math.random() * 6.28);
    tmpQ.premultiply(spin);
    tmpP.set(x + nx * 0.012, y + ny * 0.012, z + nz * 0.012);
    tmpS.set(scale, scale, scale);
    tmpM.compose(tmpP, tmpQ, tmpS);
    this.mesh.setMatrixAt(this.i, tmpM);
    this.i = (this.i + 1) % this.max;
    this.mesh.count = Math.min(this.max, this.mesh.count + 1);
    this.mesh.instanceMatrix.needsUpdate = true;
  }
  clear() { this.mesh.count = 0; this.i = 0; }
}

export class FX {
  constructor(scene, quality) {
    this.scene = scene;
    this.q = quality.particles;
    this.add = new ParticleSystem(scene, 600, THREE.AdditiveBlending, softSprite('spark'));
    this.norm = new ParticleSystem(scene, 900, THREE.NormalBlending, softSprite('smoke'));
    this.holes = new DecalPool(scene, 160, softSprite('hole'), 0.11);
    this.blood = new DecalPool(scene, 50, softSprite('blood'), 0.55);
    const maxTr = 48;
    this.trPos = new Float32Array(maxTr * 6);
    this.trCol = new Float32Array(maxTr * 6);
    this.trLife = new Float32Array(maxTr);
    this.trI = 0;
    const tg = new THREE.BufferGeometry();
    tg.setAttribute('position', new THREE.BufferAttribute(this.trPos, 3).setUsage(THREE.DynamicDrawUsage));
    tg.setAttribute('color', new THREE.BufferAttribute(this.trCol, 3).setUsage(THREE.DynamicDrawUsage));
    this.tracers = new THREE.LineSegments(tg, new THREE.LineBasicMaterial({ vertexColors: true, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false }));
    this.tracers.frustumCulled = false;
    scene.add(this.tracers);
    this.light = new THREE.PointLight(0xffc880, 0, 9, 2);
    scene.add(this.light);
    this.lightT = 0;
    this.smokes = [];
  }

  setCamera(cam, height, fog) {
    const s = height / (2 * Math.tan(THREE.MathUtils.degToRad(cam.fov) / 2));
    for (const p of [this.add, this.norm]) {
      p.uniforms.scale.value = s;
      if (fog) { p.uniforms.fogColor.value.copy(fog.color); p.uniforms.fogNear.value = fog.near; p.uniforms.fogFar.value = fog.far; }
    }
  }

  flashLight(x, y, z, intensity = 3, color = 0xffc880, dur = 0.05) {
    this.light.position.set(x, y, z);
    this.light.color.setHex(color);
    this.light.intensity = intensity;
    this.light.distance = intensity > 10 ? 30 : 9;
    this.lightT = dur;
    this.lightI = intensity;
    this.lightDur = dur;
  }

  tracer(ax, ay, az, bx, by, bz) {
    const i = this.trI; this.trI = (i + 1) % this.trLife.length;
    // Start a little ahead of the muzzle so the line reads as a streak.
    const dx = bx - ax, dy = by - ay, dz = bz - az, len = Math.hypot(dx, dy, dz) || 1;
    const s = Math.min(0.6, len * 0.3) / len;
    this.trPos.set([ax + dx * s, ay + dy * s, az + dz * s, bx, by, bz], i * 6);
    this.trLife[i] = 0.06;
  }

  impact(x, y, z, nx, ny, nz, surface, decal = true) {
    if (decal) this.holes.add(x, y, z, nx, ny, nz, 0.8 + Math.random() * 0.5);
    const n = Math.ceil(5 * this.q);
    const dust = surface === 'crate' ? [0.5, 0.36, 0.2] : surface === 'metal' ? [0.5, 0.5, 0.5] : [0.75, 0.66, 0.5];
    for (let k = 0; k < n; k++) {
      this.norm.emit(x + nx * 0.05, y + ny * 0.05, z + nz * 0.05,
        nx * (1 + Math.random() * 2) + (Math.random() - 0.5) * 1.5, ny * (1 + Math.random() * 2) + Math.random() * 1.2, nz * (1 + Math.random() * 2) + (Math.random() - 0.5) * 1.5,
        0.5 + Math.random() * 0.4, 0.14 + Math.random() * 0.12, dust[0], dust[1], dust[2], 0.55, 2.5, 0.5, 2.5);
    }
    if (Math.random() < 0.6) for (let k = 0; k < Math.ceil(3 * this.q); k++) {
      this.add.emit(x, y, z, nx * 3 + (Math.random() - 0.5) * 5, ny * 3 + Math.random() * 3, nz * 3 + (Math.random() - 0.5) * 5, 0.18 + Math.random() * 0.15, 0.05, 1, 0.8, 0.45, 1, 14, 0, 0.5);
    }
  }

  bloodHit(x, y, z, dx, dy, dz, headshot, grid) {
    const n = Math.ceil((headshot ? 14 : 7) * this.q);
    for (let k = 0; k < n; k++) {
      this.norm.emit(x, y, z, dx * 1.5 + (Math.random() - 0.5) * 2, dy * 1.5 + Math.random() * 1.5, dz * 1.5 + (Math.random() - 0.5) * 2, 0.4 + Math.random() * 0.4, 0.12 + Math.random() * 0.14, 0.55, 0.04, 0.03, 0.85, 6, 0.3, 1.5);
    }
    if (grid) {
      const h = grid.raycast(x, y, z, dx, dy - 0.3, dz, 2.5);
      if (h) this.blood.add(x + dx * h.t, y + (dy - 0.3) * h.t, z + dz * h.t, h.nx, h.ny, h.nz, 0.6 + Math.random() * 0.6);
      else this.blood.add(x, grid.topAt(x, z) + 0.01, z, 0, 1, 0, 0.5 + Math.random() * 0.5);
    }
  }

  explosion(x, y, z, big = false) {
    const s = big ? 2.4 : 1;
    this.flashLight(x, y + 1, z, big ? 40 : 18, 0xffa040, big ? 0.6 : 0.3);
    for (let k = 0; k < 26 * this.q * s; k++) {
      const a = Math.random() * 6.28, e = Math.random() * 1.4, v = (3 + Math.random() * 7) * s;
      this.add.emit(x, y + 0.3, z, Math.cos(a) * Math.cos(e) * v, Math.sin(e) * v, Math.sin(a) * Math.cos(e) * v, 0.3 + Math.random() * 0.35, 0.9 * s, 1, 0.55 + Math.random() * 0.3, 0.2, 1, 3, 1.5 * s, 3);
    }
    for (let k = 0; k < 18 * this.q * s; k++) {
      const a = Math.random() * 6.28, v = (1 + Math.random() * 3) * s;
      this.norm.emit(x, y + 0.5, z, Math.cos(a) * v, 1 + Math.random() * 2.5, Math.sin(a) * v, 1.6 + Math.random() * 1.6 * s, 1.4 * s, 0.22, 0.2, 0.18, 0.75, -0.3, 1.2 * s, 1.2);
    }
  }

  // A smoke grenade cloud; also used for LOS blocking.
  smoke(x, y, z, dur = 16) {
    const s = { x, y: y + 1.2, z, r: 0, maxR: 4.6, t: 0, dur };
    this.smokes.push(s);
    return s;
  }

  smokeBlocks(ax, ay, az, bx, by, bz) {
    for (const s of this.smokes) {
      if (s.r < 1) continue;
      const dx = bx - ax, dy = by - ay, dz = bz - az;
      const len2 = dx * dx + dy * dy + dz * dz;
      let t = ((s.x - ax) * dx + (s.y - ay) * dy + (s.z - az) * dz) / (len2 || 1);
      t = Math.max(0, Math.min(1, t));
      const px = ax + dx * t - s.x, py = ay + dy * t - s.y, pz = az + dz * t - s.z;
      if (px * px + py * py * 0.6 + pz * pz < s.r * s.r * 0.8) return true;
    }
    return false;
  }

  // 0..1 how deep the point is inside a smoke cloud.
  smokeAt(x, y, z) {
    let m = 0;
    for (const s of this.smokes) {
      if (s.r < 0.5) continue;
      const d = Math.hypot(x - s.x, (y - s.y) * 0.8, z - s.z);
      m = Math.max(m, 1 - d / (s.r * 0.95));
    }
    return Math.max(0, Math.min(1, m * 1.6));
  }

  update(dt) {
    this.add.update(dt);
    this.norm.update(dt);
    for (let i = 0; i < this.trLife.length; i++) {
      if (this.trLife[i] > 0) {
        this.trLife[i] -= dt;
        const k = Math.max(0, this.trLife[i] / 0.06);
        this.trCol.set([0.9 * k, 0.75 * k, 0.4 * k, 0.4 * k, 0.3 * k, 0.15 * k], i * 6);
      } else if (this.trLife[i] > -1) { this.trLife[i] = -2; this.trCol.fill(0, i * 6, i * 6 + 6); }
    }
    this.tracers.geometry.attributes.position.needsUpdate = true;
    this.tracers.geometry.attributes.color.needsUpdate = true;
    if (this.lightT > 0) {
      this.lightT -= dt;
      this.light.intensity = Math.max(0, this.lightI * (this.lightT / this.lightDur));
    } else this.light.intensity = 0;
    for (let i = this.smokes.length - 1; i >= 0; i--) {
      const s = this.smokes[i];
      s.t += dt;
      const fade = s.t > s.dur - 3 ? (s.dur - s.t) / 3 : 1;
      s.r = Math.min(s.maxR, s.t * 3.2) * Math.max(0.3, fade);
      if (s.t > s.dur) { this.smokes.splice(i, 1); continue; }
      s.acc = (s.acc || 0) + dt;
      const rate = 0.05 / this.q;
      while (s.acc > rate) {
        s.acc -= rate;
        const a = Math.random() * 6.28, rr = Math.random() * s.r * 0.75;
        this.norm.emit(s.x + Math.cos(a) * rr, s.y - 0.6 + Math.random() * 1.8, s.z + Math.sin(a) * rr,
          (Math.random() - 0.5) * 0.4, 0.05, (Math.random() - 0.5) * 0.4, 2.6, 3.4 + Math.random() * 1.2, 0.72, 0.74, 0.76, 0.62 * Math.max(0, fade), -0.02, 0.4, 0.5);
      }
    }
  }

  clear() {
    this.add.clear(); this.norm.clear(); this.holes.clear(); this.blood.clear(); this.smokes.length = 0;
    this.trLife.fill(0); this.trCol.fill(0);
  }
}
