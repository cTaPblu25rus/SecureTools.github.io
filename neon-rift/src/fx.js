import * as THREE from 'three';

// Pooled additive particle system.
export class Particles {
  constructor(scene, max = 700) {
    this.max = max;
    this.pos = new Float32Array(max * 3);
    this.col = new Float32Array(max * 3);
    this.size = new Float32Array(max);
    this.life = new Float32Array(max);
    this.maxLife = new Float32Array(max);
    this.vel = new Float32Array(max * 3);
    this.next = 0;
    const g = new THREE.BufferGeometry();
    g.setAttribute('position', new THREE.BufferAttribute(this.pos, 3));
    g.setAttribute('color', new THREE.BufferAttribute(this.col, 3));
    g.setAttribute('size', new THREE.BufferAttribute(this.size, 1));
    g.setAttribute('life', new THREE.BufferAttribute(this.life, 1));
    this.mat = new THREE.ShaderMaterial({
      uniforms: { uScale: { value: 300 } },
      vertexShader: `
        attribute float size; attribute float life; attribute vec3 color;
        varying vec3 vC; varying float vL;
        uniform float uScale;
        void main(){
          vC = color; vL = life;
          vec4 mv = modelViewMatrix * vec4(position, 1.0);
          gl_PointSize = life > 0.0 ? size * uScale / -mv.z : 0.0;
          gl_Position = projectionMatrix * mv;
        }`,
      fragmentShader: `
        varying vec3 vC; varying float vL;
        void main(){
          vec2 d = gl_PointCoord - 0.5;
          float a = smoothstep(0.5, 0.0, length(d));
          gl_FragColor = vec4(vC, a * clamp(vL, 0.0, 1.0));
        }`,
      transparent: true, depthWrite: false, blending: THREE.AdditiveBlending,
    });
    this.points = new THREE.Points(g, this.mat);
    this.points.frustumCulled = false;
    scene.add(this.points);
    this.c = new THREE.Color();
  }
  burst(p, color, count, speed, life = 0.8, size = 0.35, bias = null) {
    this.c.set(color);
    for (let n = 0; n < count; n++) {
      const i = this.next; this.next = (this.next + 1) % this.max;
      this.pos[i * 3] = p.x; this.pos[i * 3 + 1] = p.y; this.pos[i * 3 + 2] = p.z;
      // random direction on a sphere
      const u = Math.random() * 2 - 1; const th = Math.random() * Math.PI * 2; const s = Math.sqrt(1 - u * u);
      const sp = speed * (0.35 + Math.random() * 0.65);
      this.vel[i * 3] = s * Math.cos(th) * sp + (bias ? bias.x : 0);
      this.vel[i * 3 + 1] = s * Math.sin(th) * sp + (bias ? bias.y : 0);
      this.vel[i * 3 + 2] = u * sp + (bias ? bias.z : 0);
      const k = 0.7 + Math.random() * 0.3;
      this.col[i * 3] = this.c.r * k; this.col[i * 3 + 1] = this.c.g * k; this.col[i * 3 + 2] = this.c.b * k;
      this.size[i] = size * (0.5 + Math.random());
      this.maxLife[i] = life * (0.6 + Math.random() * 0.4);
      this.life[i] = 1;
    }
  }
  update(dt) {
    const drag = Math.exp(-dt * 2.2);
    for (let i = 0; i < this.max; i++) {
      if (this.life[i] <= 0) continue;
      this.life[i] -= dt / this.maxLife[i];
      this.vel[i * 3] *= drag; this.vel[i * 3 + 1] *= drag; this.vel[i * 3 + 2] *= drag;
      this.pos[i * 3] += this.vel[i * 3] * dt;
      this.pos[i * 3 + 1] += this.vel[i * 3 + 1] * dt;
      this.pos[i * 3 + 2] += this.vel[i * 3 + 2] * dt;
    }
    const a = this.points.geometry.attributes;
    a.position.needsUpdate = true; a.life.needsUpdate = true; a.color.needsUpdate = true; a.size.needsUpdate = true;
  }
  clear() { this.life.fill(0); }
}
