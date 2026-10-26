// Turns the heightfield grid into merged, textured, vertex-shaded meshes.
import * as THREE from 'three';
import { CELL } from './grid.js';
import { THEMES } from './maps.js';
import { texture, siteDecal } from './textures.js';

const MAT_DEFAULT = { 'x': 'crate', 'X': 'crate', 'o': '.', '1': 'stone', '2': 'stone', '3': 'stone', '4': 'stone', 'w': '#' };
const SCALE = { crate: 1, stone: 2, sand: 4, paving: 4, sandstone: 4, plaster: 4, concrete: 4, concreteFloor: 4, asphalt: 4, container: 4, brick: 3, metal: 4 };

function matName(theme, ch) {
  let m = theme.mats[ch] || MAT_DEFAULT[ch];
  if (m && theme.mats[m]) m = theme.mats[m];
  return m || theme.mats['#'];
}

export function buildWorld(grid, def, quality, maxAniso) {
  const theme = THEMES[def.theme];
  const group = new THREE.Group();
  const buckets = new Map();
  const bucket = (name) => {
    if (!buckets.has(name)) buckets.set(name, { p: [], n: [], uv: [], c: [], i: [] });
    return buckets.get(name);
  };
  const quad = (b, v, nrm, uvs, cols) => {
    const base = b.p.length / 3;
    for (let k = 0; k < 4; k++) {
      b.p.push(v[k][0], v[k][1], v[k][2]);
      b.n.push(nrm[0], nrm[1], nrm[2]);
      b.uv.push(uvs[k][0], uvs[k][1]);
      const c = cols[k];
      b.c.push(c, c, c * 0.98);
    }
    b.i.push(base, base + 1, base + 2, base, base + 2, base + 3);
  };

  const H = (x, z) => grid.h(x, z);
  const barrels = [];
  for (let cz = 0; cz < grid.d; cz++) for (let cx = 0; cx < grid.w; cx++) {
    const ch = grid.charAt(cx, cz);
    let h = H(cx, cz);
    let mname = matName(theme, ch);
    if (ch === 'o') { barrels.push([cx, cz]); h = 0; }
    const s = SCALE[mname] || 4;
    const b = bucket(mname);
    const x0 = cx * CELL, x1 = x0 + CELL, z0 = cz * CELL, z1 = z0 + CELL;
    // Top face with corner occlusion from taller neighbours.
    const ao = (ix, iz) => {
      let n = 0;
      for (const [ox, oz] of [[-1, -1], [0, -1], [-1, 0], [0, 0]]) {
        const nx = ix + ox, nz = iz + oz;
        if (nx === cx && nz === cz) continue;
        const nh = grid.charAt(nx, nz) === 'o' ? 1.1 : H(nx, nz);
        if (nh > h + 0.2) n++;
      }
      return 1 - 0.17 * n;
    };
    const tu = (x) => x / s;
    quad(b,
      [[x0, h, z0], [x0, h, z1], [x1, h, z1], [x1, h, z0]], [0, 1, 0],
      [[tu(x0), tu(z0)], [tu(x0), tu(z1)], [tu(x1), tu(z1)], [tu(x1), tu(z0)]],
      [ao(cx, cz), ao(cx, cz + 1), ao(cx + 1, cz + 1), ao(cx + 1, cz)]);
    if (h <= 0) continue;
    // Side faces above each lower neighbour.
    const sides = [
      [1, 0, [x1, z1], [x1, z0], [1, 0, 0]],
      [-1, 0, [x0, z0], [x0, z1], [-1, 0, 0]],
      [0, 1, [x0, z1], [x1, z1], [0, 0, 1]],
      [0, -1, [x1, z0], [x0, z0], [0, 0, -1]],
    ];
    for (const [ox, oz, a, c, nrm] of sides) {
      const nx = cx + ox, nz = cz + oz;
      if (!grid.inside(nx, nz)) continue;
      const hn = grid.charAt(nx, nz) === 'o' ? 0 : H(nx, nz);
      if (hn >= h) continue;
      const ua = ox !== 0 ? a[1] : a[0], uc = ox !== 0 ? c[1] : c[0];
      const sign = (ox > 0 || oz < 0) ? -1 : 1;
      const U = (v) => sign * v / s;
      const strip = Math.min(h, hn + 1.4);
      const lo = hn <= 0.01 ? 0.58 : 0.8;
      quad(b, [[a[0], strip, a[1]], [a[0], hn, a[1]], [c[0], hn, c[1]], [c[0], strip, c[1]]], nrm,
        [[U(ua), strip / s], [U(ua), hn / s], [U(uc), hn / s], [U(uc), strip / s]], [0.92, lo, lo, 0.92]);
      if (h > strip) {
        quad(b, [[a[0], h, a[1]], [a[0], strip, a[1]], [c[0], strip, c[1]], [c[0], h, c[1]]], nrm,
          [[U(ua), h / s], [U(ua), strip / s], [U(uc), strip / s], [U(uc), h / s]], [1, 0.92, 0.92, 1]);
      }
    }
  }

  const meshes = [];
  for (const [name, b] of buckets) {
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.Float32BufferAttribute(b.p, 3));
    g.setAttribute('normal', new THREE.Float32BufferAttribute(b.n, 3));
    g.setAttribute('uv', new THREE.Float32BufferAttribute(b.uv, 2));
    g.setAttribute('color', new THREE.Float32BufferAttribute(b.c, 3));
    g.setIndex(b.i);
    g.computeBoundingSphere();
    const m = new THREE.MeshLambertMaterial({ map: texture(name, maxAniso), vertexColors: true });
    const mesh = new THREE.Mesh(g, m);
    mesh.receiveShadow = quality.shadows;
    mesh.castShadow = quality.shadows;
    mesh.matrixAutoUpdate = false;
    group.add(mesh);
    meshes.push(mesh);
  }

  if (barrels.length) {
    const geo = new THREE.CylinderGeometry(0.62, 0.62, 1.1, 14);
    geo.translate(0, 0.55, 0);
    const mat = new THREE.MeshLambertMaterial({ map: texture('barrel', maxAniso) });
    const inst = new THREE.InstancedMesh(geo, mat, barrels.length * 2);
    const m4 = new THREE.Matrix4();
    let k = 0;
    for (const [cx, cz] of barrels) {
      for (const [ox, oz] of [[-0.42, -0.35], [0.45, 0.4]]) {
        m4.makeRotationY(cx * 1.7 + oz);
        m4.setPosition((cx + 0.5) * CELL + ox, 0, (cz + 0.5) * CELL + oz);
        inst.setMatrixAt(k++, m4);
      }
    }
    inst.castShadow = quality.shadows;
    inst.receiveShadow = quality.shadows;
    group.add(inst);
  }

  // Bomb-site markings.
  for (const [letter, r] of Object.entries(def.sites)) {
    const cx = (r[0] + r[2] + 1) / 2 * CELL, cz = (r[1] + r[3] + 1) / 2 * CELL;
    let best = null;
    for (let z = r[1]; z <= r[3]; z++) for (let x = r[0]; x <= r[2]; x++) {
      if (grid.h(x, z) !== 0 || grid.charAt(x, z) === 'o') continue;
      const c = grid.center(x, z);
      const d = Math.hypot(c.x - cx, c.z - cz);
      if (!best || d < best.d) best = { d, c };
    }
    if (!best) continue;
    const mat = new THREE.MeshBasicMaterial({ map: siteDecal(letter), transparent: true, depthWrite: false, polygonOffset: true, polygonOffsetFactor: -2 });
    const decal = new THREE.Mesh(new THREE.PlaneGeometry(3.4, 3.4), mat);
    decal.rotation.x = -Math.PI / 2;
    decal.position.set(best.c.x, 0.02, best.c.z);
    group.add(decal);
  }

  // Sky dome.
  const sky = new THREE.Mesh(
    new THREE.SphereGeometry(450, 24, 12),
    new THREE.ShaderMaterial({
      side: THREE.BackSide, depthWrite: false, fog: false,
      uniforms: { top: { value: new THREE.Color(theme.skyTop) }, bottom: { value: new THREE.Color(theme.skyBottom) }, sunDir: { value: new THREE.Vector3(...theme.sunDir).normalize() }, sunCol: { value: new THREE.Color(theme.sun) } },
      vertexShader: 'varying vec3 vDir; void main(){ vDir = normalize(position); gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'uniform vec3 top; uniform vec3 bottom; uniform vec3 sunDir; uniform vec3 sunCol; varying vec3 vDir; void main(){ float h = clamp(vDir.y*1.6+0.15,0.0,1.0); vec3 c = mix(bottom, top, h); float s = max(dot(normalize(vDir), sunDir), 0.0); c += sunCol * (pow(s, 600.0)*1.5 + pow(s, 12.0)*0.18); gl_FragColor = vec4(c,1.0); }',
    }));
  sky.renderOrder = -10;
  sky.frustumCulled = false;
  group.add(sky);

  // Distant ridges so the horizon is not empty above the walls.
  const ridge = new THREE.Group();
  const ridgeMat = new THREE.MeshBasicMaterial({ color: new THREE.Color(theme.fog).multiplyScalar(0.82), fog: false });
  const mx = grid.w * CELL / 2, mz = grid.d * CELL / 2;
  for (let i = 0; i < 26; i++) {
    const a = i / 26 * Math.PI * 2;
    const r = 230 + (i * 37 % 50);
    const cone = new THREE.Mesh(new THREE.ConeGeometry(40 + (i * 13 % 30), 30 + (i * 29 % 40), 5), ridgeMat);
    cone.position.set(mx + Math.cos(a) * r, 8, mz + Math.sin(a) * r);
    cone.rotation.y = i;
    ridge.add(cone);
  }
  group.add(ridge);

  return { group, meshes, theme, sky };
}

export function buildLights(scene, theme, grid, quality) {
  const hemi = new THREE.HemisphereLight(theme.amb, theme.ambGround, theme.ambI);
  scene.add(hemi);
  const sun = new THREE.DirectionalLight(theme.sun, theme.sunI);
  const dir = new THREE.Vector3(...theme.sunDir).normalize();
  const cx = grid.w * CELL / 2, cz = grid.d * CELL / 2;
  sun.position.set(cx + dir.x * 80, dir.y * 80, cz + dir.z * 80);
  sun.target.position.set(cx, 0, cz);
  scene.add(sun, sun.target);
  if (quality.shadows) {
    sun.castShadow = true;
    const ext = Math.max(grid.w, grid.d) * CELL * 0.62;
    const cam = sun.shadow.camera;
    cam.left = -ext; cam.right = ext; cam.top = ext; cam.bottom = -ext; cam.near = 1; cam.far = 220;
    sun.shadow.mapSize.set(2048, 2048);
    sun.shadow.bias = -0.0008;
    sun.shadow.normalBias = 0.04;
  }
  scene.fog = new THREE.Fog(theme.fog, 30, quality.drawDist);
  return { hemi, sun };
}
