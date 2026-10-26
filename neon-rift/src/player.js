import * as THREE from 'three';
import { SHIP_R } from './config.js';
import { polar, GLOW_TEX } from './world.js';

function triPrism(points, thick) {
  const s = new THREE.Shape();
  s.moveTo(points[0][0], points[0][1]);
  for (let i = 1; i < points.length; i++) s.lineTo(points[i][0], points[i][1]);
  s.closePath();
  const g = new THREE.ExtrudeGeometry(s, { depth: thick, bevelEnabled: false });
  g.translate(0, 0, -thick / 2);
  g.rotateX(Math.PI / 2); // shape XY -> XZ plane (y up)
  return g;
}

// Build a ship mesh. Local frame: nose toward -Z, up toward +Y.
export function buildShip(skin) {
  const group = new THREE.Group();
  const hull = new THREE.MeshStandardMaterial({ color: skin.hull, metalness: 0.55, roughness: 0.3, emissive: skin.hull, emissiveIntensity: 0.18 });
  const trim = new THREE.MeshStandardMaterial({ color: skin.trim, metalness: 0.7, roughness: 0.25, emissive: skin.trim, emissiveIntensity: 0.1 });
  const glass = new THREE.MeshStandardMaterial({ color: 0x0a1030, metalness: 0.9, roughness: 0.05, emissive: skin.glow, emissiveIntensity: 0.25 });
  const edgeMat = new THREE.LineBasicMaterial({ color: skin.glow });
  const parts = [];

  const body = new THREE.ConeGeometry(0.34, 2.0, 6);
  body.rotateX(-Math.PI / 2); body.scale(1, 0.55, 1);
  parts.push(new THREE.Mesh(body, hull));

  const cockpit = new THREE.SphereGeometry(0.22, 16, 10);
  cockpit.scale(1, 0.7, 2.0); cockpit.translate(0, 0.14, -0.05);
  parts.push(new THREE.Mesh(cockpit, glass));

  let wings;
  if (skin.shape === 'wing') {
    wings = triPrism([[0, -0.6], [1.25, 0.75], [0.9, 0.95], [0, 0.6], [-0.9, 0.95], [-1.25, 0.75]], 0.07);
  } else if (skin.shape === 'claw') {
    wings = triPrism([[0.2, -0.2], [0.9, -1.0], [1.05, 0.3], [0.35, 0.85], [-0.35, 0.85], [-1.05, 0.3], [-0.9, -1.0], [-0.2, -0.2]], 0.07);
  } else {
    wings = triPrism([[0, -0.3], [1.0, 0.6], [1.05, 0.85], [0, 0.65], [-1.05, 0.85], [-1.0, 0.6]], 0.07);
  }
  wings.translate(0, -0.03, 0.15);
  parts.push(new THREE.Mesh(wings, trim));

  const fin = triPrism([[0, 0], [0.42, 0.75], [0, 0.75]], 0.05);
  fin.rotateZ(Math.PI / 2); fin.translate(0, 0.1, 0.25);
  parts.push(new THREE.Mesh(fin, trim));

  for (const p of parts) {
    group.add(p);
    const e = new THREE.LineSegments(new THREE.EdgesGeometry(p.geometry, 30), edgeMat);
    group.add(e);
  }
  // engine
  const eng = new THREE.Mesh(new THREE.CylinderGeometry(0.17, 0.22, 0.25, 12).rotateX(Math.PI / 2),
    new THREE.MeshBasicMaterial({ color: skin.glow }));
  eng.position.z = 1.0; group.add(eng);
  const flame = new THREE.Sprite(new THREE.SpriteMaterial({ map: GLOW_TEX, color: skin.glow, blending: THREE.AdditiveBlending, transparent: true, depthWrite: false }));
  flame.scale.set(1.3, 1.3, 1); flame.position.z = 1.2; group.add(flame);
  group.userData = { flame, hull, edgeMat, eng };
  return group;
}

// Ribbon trail that follows the engine.
class Trail {
  constructor(scene, color, n = 11) {
    this.n = n;
    this.pts = []; for (let i = 0; i < n; i++) this.pts.push({ p: new THREE.Vector3(), u: new THREE.Vector3(0, 1, 0) });
    this.pos = new Float32Array(n * 2 * 3);
    this.alpha = new Float32Array(n * 2);
    const idx = [];
    for (let i = 0; i < n - 1; i++) { const a = i * 2; idx.push(a, a + 1, a + 2, a + 1, a + 3, a + 2); }
    for (let i = 0; i < n; i++) { const a = 1 - i / (n - 1); this.alpha[i * 2] = a; this.alpha[i * 2 + 1] = a; }
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    g.setAttribute('alpha', new THREE.BufferAttribute(this.alpha, 1));
    g.setIndex(idx);
    this.mat = new THREE.ShaderMaterial({
      uniforms: { uColor: { value: new THREE.Color(color) }, uOpacity: { value: 0.75 } },
      vertexShader: 'attribute float alpha; varying float vA; void main(){ vA = alpha; gl_Position = projectionMatrix * modelViewMatrix * vec4(position,1.0); }',
      fragmentShader: 'uniform vec3 uColor; uniform float uOpacity; varying float vA; void main(){ gl_FragColor = vec4(uColor, vA * vA * vA * uOpacity); }',
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending, side: THREE.DoubleSide,
    });
    this.mesh = new THREE.Mesh(g, this.mat);
    this.mesh.frustumCulled = false;
    scene.add(this.mesh);
  }
  reset(p, u) { for (const q of this.pts) { q.p.copy(p); q.u.copy(u); } }
  push(p, side, width) {
    const last = this.pts.pop();
    last.p.copy(p); last.u.copy(side);
    this.pts.unshift(last);
    for (let i = 0; i < this.n; i++) {
      const q = this.pts[i]; const w = width * (1 - i / this.n);
      this.pos[i * 6] = q.p.x + q.u.x * w; this.pos[i * 6 + 1] = q.p.y + q.u.y * w; this.pos[i * 6 + 2] = q.p.z + q.u.z * w;
      this.pos[i * 6 + 3] = q.p.x - q.u.x * w; this.pos[i * 6 + 4] = q.p.y - q.u.y * w; this.pos[i * 6 + 5] = q.p.z - q.u.z * w;
    }
    this.mesh.geometry.attributes.position.needsUpdate = true;
  }
  dispose(scene) { scene.remove(this.mesh); this.mesh.geometry.dispose(); this.mat.dispose(); }
}

export class Player {
  constructor(scene) {
    this.scene = scene;
    this.root = new THREE.Group();
    this.root.rotation.order = 'ZYX';
    scene.add(this.root);
    this.ship = null;
    this.trail = null;
    // shadow on the tunnel wall
    this.shadow = new THREE.Mesh(new THREE.CircleGeometry(0.7, 24),
      new THREE.MeshBasicMaterial({ color: 0x000000, transparent: true, opacity: 0.45, depthWrite: false }));
    this.shadow.rotation.order = 'ZYX';
    scene.add(this.shadow);
    // shield bubble
    this.shield = new THREE.Mesh(new THREE.IcosahedronGeometry(1.25, 1),
      new THREE.MeshBasicMaterial({ color: 0x40c4ff, wireframe: true, transparent: true, opacity: 0.55, blending: THREE.AdditiveBlending, depthWrite: false }));
    this.shield.visible = false;
    this.root.add(this.shield);
    this.magnetRing = new THREE.Mesh(new THREE.TorusGeometry(1.5, 0.03, 6, 48),
      new THREE.MeshBasicMaterial({ color: 0xff4081, transparent: true, opacity: 0.7, blending: THREE.AdditiveBlending }));
    this.magnetRing.rotation.x = Math.PI / 2;
    this.magnetRing.visible = false;
    this.root.add(this.magnetRing);
    this.light = new THREE.PointLight(0xffffff, 6, 9, 1.5);
    this.light.position.set(0, 1.4, -0.6);
    this.root.add(this.light);
    this.tmp = new THREE.Vector3(); this.tmp2 = new THREE.Vector3(); this.side = new THREE.Vector3();
  }
  setSkin(skin) {
    if (this.ship) this.root.remove(this.ship);
    if (this.trail) this.trail.dispose(this.scene);
    this.skin = skin;
    this.ship = buildShip(skin);
    this.root.add(this.ship);
    this.trail = new Trail(this.scene, skin.glow);
    this.light.color.set(skin.glow);
  }
  place(theta, h, z, bank, pitch, time, speedK, boost) {
    polar(theta, SHIP_R - h, z, this.root.position);
    this.root.rotation.set(pitch, 0, theta - bank);
    polar(theta, 5.97, z, this.shadow.position);
    this.shadow.rotation.set(-Math.PI / 2, 0, theta);
    const sc = Math.max(0.35, 1 - h * 0.25);
    this.shadow.scale.setScalar(sc);
    this.shadow.material.opacity = 0.45 * sc;
    const ud = this.ship.userData;
    const fl = 0.8 + speedK * 0.4 + (boost ? 1.0 : 0) + Math.sin(time * 40) * 0.1;
    ud.flame.scale.set(fl, fl, 1);
    ud.flame.position.z = 1.1 + (boost ? 0.4 : 0);
    if (this.skin.rainbow) {
      const c = new THREE.Color().setHSL((time * 0.25) % 1, 1, 0.6);
      ud.edgeMat.color.copy(c); ud.flame.material.color.copy(c); ud.eng.material.color.copy(c);
      this.trail.mat.uniforms.uColor.value.copy(c);
    }
    // trail from the engine
    this.tmp.set(0, 0, 1.15).applyEuler(this.root.rotation).add(this.root.position);
    this.side.set(1, 0, 0).applyEuler(this.root.rotation);
    this.trail.push(this.tmp, this.side, boost ? 0.3 : 0.12);
    this.trail.mat.uniforms.uOpacity.value = boost ? 0.75 : 0.4;
    this.shield.rotation.y = time * 1.5; this.shield.rotation.x = time * 0.7;
    this.magnetRing.rotation.z = time * 3;
    this.magnetRing.scale.setScalar(1 + 0.15 * Math.sin(time * 8));
  }
  resetTrail() {
    this.tmp.set(0, 0, 1.15).applyEuler(this.root.rotation).add(this.root.position);
    this.trail.reset(this.tmp, this.side.set(1, 0, 0));
  }
  setVisible(v) { this.root.visible = v; this.shadow.visible = v; this.trail.mesh.visible = v; }
}
