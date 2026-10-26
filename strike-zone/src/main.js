// Entry point: renderer, camera, first-person viewmodel, input to commands, menus and the main loop.
import * as THREE from 'three';
import { QUALITY, TEAM, WEAPONS } from './config.js';
import { MAPS } from './maps.js';
import { Grid, CELL } from './grid.js';
import { buildWorld, buildLights } from './worldmesh.js';
import { buildViewModel } from './models.js';
import { FX } from './fx.js';
import { Game } from './game.js';
import { UI } from './ui.js';
import { input } from './input.js';
import { audio } from './audio.js';
import { store } from './storage.js';
import { spreadOf, rayActor } from './combat.js';
import { t } from './i18n.js';

const params = new URLSearchParams(location.search);
const AUTOTEST = params.has('autotest');
const canvas = document.getElementById('c');
const bridge = window.AndroidBridge;

let renderer;
try {
  renderer = new THREE.WebGLRenderer({ canvas, antialias: false, powerPreference: 'high-performance', stencil: false });
} catch (e) {
  document.body.innerHTML = '<div style="color:#fff;font:20px sans-serif;padding:40px">WebGL is not available on this device.</div>';
  throw e;
}
renderer.outputColorSpace = THREE.SRGBColorSpace;
renderer.autoClear = false;
renderer.info.autoReset = false;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
const maxAniso = Math.min(4, renderer.capabilities.getMaxAnisotropy());

const camera = new THREE.PerspectiveCamera(90, 1, 0.05, 500);
camera.rotation.order = 'YXZ';
const vmScene = new THREE.Scene();
const vmCamera = new THREE.PerspectiveCamera(62, 1, 0.01, 10);
vmScene.add(vmCamera);
vmScene.add(new THREE.HemisphereLight(0xe6ecf5, 0x6a5a48, 2.3));
const vmSun = new THREE.DirectionalLight(0xffffff, 1.5);
vmSun.position.set(0.5, 1, 0.3);
vmScene.add(vmSun);

let scene = null, world = null, fx = null, G = null, grid = null, mapDef = null;
let quality = 'medium';
let pixelRatio = 1;
let state = 'menu';
let paused = false;
let vm = null, vmKey = '', vmTeam = -1;
const vmState = { bobPhase: 0, swayX: 0, swayY: 0, flashT: 0, lastSlot: -1, switchMax: 0.5, landKick: 0 };
let camShake = 0;
let specIndex = 0;
let lastUse = false;
let viewSmoothY = 0;
const perf = { frames: 0, acc: 0, fps: 60, lowT: 0, highT: 0 };

function pickQuality() {
  const q = store.settings.quality;
  if (q !== 'auto') return q;
  const mobile = /Android|iPhone|iPad|Mobile/i.test(navigator.userAgent);
  return mobile ? 'medium' : 'high';
}

function resize() {
  const w = window.innerWidth, h = window.innerHeight;
  const Q = QUALITY[quality];
  const dpr = Math.min(window.devicePixelRatio || 1, 2);
  renderer.setPixelRatio(dpr * Q.pixelRatio * pixelRatio / Math.max(1, dpr * 0.75));
  renderer.setSize(w, h, false);
  camera.aspect = w / h;
  camera.updateProjectionMatrix();
  vmCamera.aspect = w / h;
  vmCamera.updateProjectionMatrix();
  if (fx) fx.setCamera(camera, h * renderer.getPixelRatio(), scene.fog);
}
window.addEventListener('resize', resize);

function loadMap(def) {
  if (scene) {
    scene.traverse((o) => { if (o.geometry && o.isMesh && !o.userData.shared) o.geometry.dispose(); });
  }
  quality = pickQuality();
  scene = new THREE.Scene();
  mapDef = def;
  grid = new Grid(def);
  const Q = QUALITY[quality];
  renderer.shadowMap.enabled = Q.shadows;
  world = buildWorld(grid, def, Q, maxAniso);
  scene.add(world.group);
  buildLights(scene, world.theme, grid, Q);
  scene.background = new THREE.Color(world.theme.skyBottom);
  fx = new FX(scene, Q);
  camera.far = Q.drawDist + 400;
  resize();
}

// ---------- UI handlers ----------
const ui = new UI({
  onStart(setup) { startMatch(setup); },
  onResume() { setPaused(false); },
  onLeave() { leaveMatch(); },
  onRematch() { const s = G ? G.setup : store.setup; startMatch({ ...s }); },
  onSettings() { applyInputSettings(); if (store.settings.quality !== 'auto' && store.settings.quality !== quality && state === 'menu') loadMap(mapDef); resize(); },
  onBuy(k) { if (G) G.buy(G.player, k); },
  onRebuy() { if (G) G.rebuy(); },
  onAutobuy() { if (G) G.autobuy(); },
  onBuyOpen(open) { if (open) input.unlock(); else if (state === 'game' && !paused) input.lock(); },
  onMatchScreen() { state = 'over'; input.enabled = false; input.unlock(); },
  vibrate(ms) {
    if (bridge && bridge.vibrate) bridge.vibrate(ms);
    else if (navigator.vibrate && (!navigator.userActivation || navigator.userActivation.hasBeenActive)) navigator.vibrate(ms);
  },
});

function applyInputSettings() {
  input.sens = store.settings.sens;
  input.mouseSens = store.settings.mouseSens;
  input.invertY = store.settings.invertY;
  input.btnScale = store.settings.btnScale;
}

function startMatch(setup) {
  ui.show('loading');
  setTimeout(() => {
    if (G) { G.dispose(); G = null; }
    const def = MAPS.find((m) => m.id === setup.map) || MAPS[0];
    if (!def.modes.includes(setup.mode)) setup.mode = def.modes[0];
    loadMap(def);
    G = new Game({ def, scene, fx, ui, setup, playerName: t('you'), autopilot: AUTOTEST });
    G.start();
    ui.enterGame(G);
    state = 'game';
    paused = false;
    input.reset();
    input.enabled = true;
    input.lock();
    audio.startAmbience(def.theme);
    specIndex = 0;
    viewSmoothY = G.player.y;
  }, 30);
}

function leaveMatch() {
  if (G) { G.dispose(); G = null; }
  audio.stopAmbience();
  ui.exitGame();
  state = 'menu';
  paused = false;
  input.enabled = false;
  input.unlock();
  setVM(null);
  store.save();
  loadMap(MAPS[0]);
  ui.show('menu');
}

function setPaused(p) {
  if (state !== 'game') return;
  paused = p;
  if (p) { ui.closeBuy(); ui.show('pause'); input.unlock(); input.reset(); audio.stopAmbience(); }
  else { ui.hideScreens(); input.lock(); audio.startAmbience(mapDef.theme); }
}

window.onAndroidBack = () => {
  if (state === 'game') {
    if (ui.buyOpen) { ui.closeBuy(); return 'handled'; }
    setPaused(!paused);
    return 'handled';
  }
  if (state === 'over') { leaveMatch(); return 'handled'; }
  if (ui.screen && ui.screen !== 'menu') { ui.show(ui.screen === 'settings' && ui.settingsBack === 'pause' ? 'pause' : 'menu'); return 'handled'; }
  return 'exit';
};
window.onAndroidPause = () => { if (state === 'game' && !paused && !AUTOTEST) setPaused(true); audio.suspend(); };
window.onAndroidResume = () => { audio.resume(); };
document.addEventListener('visibilitychange', () => { if (document.hidden) window.onAndroidPause(); else audio.resume(); });

// ---------- viewmodel ----------
function setVM(actor) {
  if (!actor || !actor.alive) {
    if (vm) { vmCamera.remove(vm); vm = null; vmKey = ''; }
    return;
  }
  const w = actor.w;
  const key = w.key;
  if (key === vmKey && actor.team === vmTeam && vm) return;
  if (vm) vmCamera.remove(vm);
  vm = buildViewModel(key, w.def.kind, actor.team);
  vmCamera.add(vm);
  vmKey = key;
  vmTeam = actor.team;
  vmState.switchMax = Math.max(0.3, actor.switchT);
}

function animateVM(a, dt, lookDX, lookDY) {
  if (!vm) return;
  const u = vm.userData;
  const def = a.w.def;
  const h = u.holder;
  const sp = Math.min(1, a.speed2d / 6);
  if (a.onGround) vmState.bobPhase += dt * (4 + sp * 7) * (sp > 0.05 ? 1 : 0.3);
  const bob = sp * (a.onGround ? 1 : 0.2);
  vmState.swayX += (-lookDX * 0.6 - vmState.swayX) * Math.min(1, dt * 10);
  vmState.swayY += (lookDY * 0.6 - vmState.swayY) * Math.min(1, dt * 10);
  let px = u.base.x + Math.sin(vmState.bobPhase) * 0.012 * bob + vmState.swayX * 0.04;
  let py = u.base.y - Math.abs(Math.cos(vmState.bobPhase)) * 0.012 * bob + vmState.swayY * 0.04 - a.crouch * 0.01;
  let pz = u.base.z;
  let rx = u.baseRot.x, ry = u.baseRot.y + vmState.swayX * 0.3, rz = 0;
  if (!a.onGround) { py -= 0.015; rx += 0.05; }
  vmState.landKick = Math.max(0, vmState.landKick - dt * 4);
  py -= vmState.landKick * 0.03;
  // Draw.
  if (a.switchT > 0) { const k = a.switchT / vmState.switchMax; py -= 0.22 * k * k; rx -= 0.6 * k; }
  // Reload.
  if (a.reloadT > 0 && def.reload) {
    const r = 1 - a.reloadT / def.reload;
    const s = def.shellReload ? Math.sin(Math.min(1, r) * Math.PI) * 0.4 : Math.sin(Math.min(1, r) * Math.PI);
    py -= 0.08 * s; rx -= 0.5 * s; rz += 0.35 * s; px -= 0.02 * s;
  }
  // Fire kick / melee / throw.
  if (def.kind === 'knife') {
    const f = a.fireAnim;
    if (f > 0) { const s = Math.sin((1 - f) * Math.PI); ry += 0.9 * s; rx -= 0.5 * s; px -= 0.08 * s; pz -= 0.06 * s; }
  } else if (def.kind === 'grenade') {
    if (a.throwT > 0) { py += 0.03; pz += 0.08; rx += 0.5; }
    if (a.fireAnim > 0) { const s = Math.sin(a.fireAnim * Math.PI); pz -= 0.15 * s; rx -= 0.8 * s; }
  } else if (def.kind === 'bomb') {
    if (a.plantT > 0) { py -= 0.05; rx += 0.25; px += Math.sin(a.plantT * 22) * 0.003; }
  } else {
    const f = a.fireAnim;
    const kick = def.kind === 'sniper' || a.w.key === 'deagle' || def.kind === 'shotgun' ? 1.8 : 1;
    pz += f * 0.035 * kick; rx += f * 0.06 * kick; py += f * 0.006;
  }
  h.position.set(px, py, pz);
  h.rotation.set(rx, ry, rz);
  vmState.flashT -= dt;
  u.flash.visible = vmState.flashT > 0;
  if (u.flash.visible) u.flash.material.rotation = Math.random() * 6;
  vm.visible = !(a.scope > 0 && def.kind === 'sniper');
}

ui.shot = (a) => {
  if (G && a === G.viewActor) { vmState.flashT = 0.045; }
};

// ---------- input to commands ----------
const SLOT_ACTS = ['slot1', 'slot2', 'slot3', 'slot4', 'slot5'];

function aimTarget(p, maxAng) {
  const ex = p.x, ey = p.y + p.eyeHeight(), ez = p.z;
  let best = null, bestA = maxAng;
  for (const e of G.actors) {
    if (!e.alive || !G.isEnemy(p, e)) continue;
    for (const hy of [e.eyeHeight(), e.bodyHeight() * 0.65]) {
      const dx = e.x - ex, dy = e.y + hy - ey, dz = e.z - ez;
      const d = Math.hypot(dx, dy, dz);
      if (d > 70) continue;
      const yaw = Math.atan2(-dx, -dz), pitch = Math.atan2(dy, Math.hypot(dx, dz));
      let dyaw = yaw - p.yaw; dyaw = Math.atan2(Math.sin(dyaw), Math.cos(dyaw));
      const dp = pitch - p.pitch;
      const ang = Math.hypot(dyaw, dp) * d / Math.max(4, d);
      if (ang < bestA && G.grid.los(ex, ey, ez, e.x, e.y + hy, e.z) && !fx.smokeBlocks(ex, ey, ez, e.x, e.y + hy, e.z)) { bestA = ang; best = { e, dyaw, dp, d }; }
    }
  }
  return best;
}

function playerCommand(dt) {
  const p = G.player;
  const [ldx, ldy] = input.takeLook();
  let dx = ldx, dy = ldy;
  const zoom = camera.fov / store.settings.fov;
  dx *= zoom; dy *= zoom;
  const S = store.settings;
  const touch = input.touchMode;
  let assist = null;
  if (p.alive && S.aimAssist && touch && p.w.def.kind !== 'knife' && p.w.def.kind !== 'grenade') {
    assist = aimTarget(p, 0.12);
    if (assist) {
      // Friction near targets and gentle magnetism while firing or moving the view.
      dx *= 0.6; dy *= 0.6;
      const pull = (input.held.fire ? 3.2 : (Math.abs(ldx) + Math.abs(ldy) > 0 ? 1.2 : 0)) * dt;
      p.yaw += assist.dyaw * Math.min(1, pull);
      p.pitch += assist.dp * Math.min(1, pull);
    }
  }
  if (p.alive) {
    p.yaw -= dx;
    p.pitch = Math.max(-1.5, Math.min(1.5, p.pitch - dy));
  }
  const cmd = { wx: 0, wz: 0, walk: input.held.walk, crouch: input.held.crouch, jump: input.held.jump || input.consume('jump'), fire: input.held.fire, alt: input.consume('scope'), use: input.held.use, usePressed: false, reload: input.consume('reload'), slot: null, drop: input.consume('drop') };
  cmd.usePressed = cmd.use && !lastUse;
  lastUse = cmd.use;
  const m = input.move;
  const fx = -Math.sin(p.yaw), fz = -Math.cos(p.yaw), rx = Math.cos(p.yaw), rz = -Math.sin(p.yaw);
  cmd.wx = fx * m.y + rx * m.x;
  cmd.wz = fz * m.y + rz * m.x;
  SLOT_ACTS.forEach((a, i) => { if (input.consume(a)) cmd.slot = i; });
  if (input.consume('last')) cmd.slot = p.has(p.lastSlot) ? p.lastSlot : p.bestSlot();
  const cyc = input.consume('next') ? 1 : input.consume('prev') ? -1 : 0;
  if (cyc) { for (let k = 1; k <= 5; k++) { const s = (p.slot + cyc * k + 10) % 5; if (p.has(s)) { cmd.slot = s; break; } } }
  if (S.autoFire && p.alive && p.w.def.clip && !cmd.fire) {
    const ex = p.x, ey = p.y + p.eyeHeight(), ez = p.z;
    const f = p.forward({ x: 0, y: 0, z: 0 });
    for (const e of G.actors) {
      if (!e.alive || !G.isEnemy(p, e)) continue;
      const h = rayActor(e, ex, ey, ez, f.x, f.y, f.z, 80);
      if (h && G.grid.los(ex, ey, ez, ex + f.x * h.t * 0.98, ey + f.y * h.t * 0.98, ez + f.z * h.t * 0.98)) { cmd.fire = true; break; }
    }
  }
  if (ui.buyOpen) { cmd.fire = false; cmd.alt = false; }
  return { cmd, lookDX: dx, lookDY: dy };
}

function handleMenuKeys() {
  if (input.consume('menu') || input.consume('unlocked')) {
    if (ui.buyOpen) ui.closeBuy();
    else if (!AUTOTEST) setPaused(!paused);
  }
  if (input.consume('buy')) ui.toggleBuy();
}

// ---------- camera ----------
function chooseView() {
  const p = G.player;
  if (p.alive) return p;
  if (G.mode !== 'bomb') return null;
  const mates = G.actors.filter((a) => a.alive && a.team === p.team);
  const pool = mates.length ? mates : G.actors.filter((a) => a.alive);
  if (!pool.length) return null;
  if (input.consume('fire_tap')) specIndex++;
  return pool[specIndex % pool.length];
}

let prevFireHeld = false;
function updateCamera(dt, view) {
  const p = G.player;
  const S = store.settings;
  let fov = S.fov;
  if (view) {
    // Smooth step-ups so stairs do not jerk the camera.
    viewSmoothY += (view.y - viewSmoothY) * Math.min(1, dt * 14);
    if (Math.abs(view.y - viewSmoothY) > 1.2) viewSmoothY = view.y;
    const eye = viewSmoothY + view.eyeHeight();
    camera.position.set(view.x, eye, view.z);
    const sh = G.shakeAmt + camShake;
    camera.rotation.set(view.pitch + view.punchP * 0.55 + (Math.random() - 0.5) * sh * 0.03, view.yaw + view.punchY * 0.55 + (Math.random() - 0.5) * sh * 0.03, (Math.random() - 0.5) * sh * 0.01);
    if (view.scope && view.w.def.kind === 'sniper') fov = view.scope === 1 ? 40 : view.w.def.zoom >= 4 ? 15 : 25;
  } else {
    // Death cam: hover above the corpse looking at the killer.
    const killer = p.lastAttacker && p.lastAttacker.alive ? p.lastAttacker : null;
    const k = Math.min(1, p.deathT / 1.2);
    const tx = p.x, ty = p.y + 1.6 + k * 2.4, tz = p.z;
    camera.position.set(tx + Math.sin(p.yaw) * k * 2.5, ty, tz + Math.cos(p.yaw) * k * 2.5);
    if (killer) camera.lookAt(killer.x, killer.y + 1.2, killer.z);
    else camera.lookAt(p.x, p.y + 0.3, p.z);
  }
  if (Math.abs(camera.fov - fov) > 0.01) {
    camera.fov = fov > camera.fov ? Math.min(fov, camera.fov + dt * 220) : fov < 50 ? fov : Math.max(fov, camera.fov - dt * 220);
    camera.updateProjectionMatrix();
    fx.setCamera(camera, window.innerHeight * renderer.getPixelRatio(), scene.fog);
  }
  camShake = Math.max(0, camShake - dt * 3);
}

// ---------- main loop ----------
let last = performance.now();
let menuAngle = 0;

function frame(now) {
  requestAnimationFrame(frame);
  let dt = Math.min(0.05, (now - last) / 1000);
  last = now;
  perf.frames++; perf.acc += dt;
  if (perf.acc >= 1) {
    perf.fps = Math.round(perf.frames / perf.acc);
    perf.frames = 0; perf.acc = 0;
    if (store.settings.quality === 'auto' && state === 'game' && !paused) {
      if (perf.fps < 38) { perf.lowT++; perf.highT = 0; } else if (perf.fps > 57) { perf.highT++; perf.lowT = 0; } else { perf.lowT = perf.highT = 0; }
      if (perf.lowT >= 2 && pixelRatio > 0.55) { pixelRatio = Math.max(0.55, pixelRatio - 0.15); perf.lowT = 0; resize(); }
      if (perf.highT >= 4 && pixelRatio < 1) { pixelRatio = Math.min(1, pixelRatio + 0.1); perf.highT = 0; resize(); }
    }
  }
  input.pollGamepad(dt);
  if (state === 'menu' || !G) {
    menuAngle += dt * 0.05;
    if (grid) {
      const cx = grid.w * CELL / 2, cz = grid.d * CELL / 2, r = Math.max(cx, cz) * 0.9;
      camera.position.set(cx + Math.cos(menuAngle) * r, 26, cz + Math.sin(menuAngle) * r);
      camera.lookAt(cx, 0, cz);
      if (camera.fov !== 60) { camera.fov = 60; camera.updateProjectionMatrix(); }
    }
    render();
    return;
  }
  if (state === 'game' || state === 'over') {
    handleMenuKeys();
    if (!paused) {
      const scale = autotest.speed;
      let pc = { cmd: null, lookDX: 0, lookDY: 0 };
      if (state === 'game') pc = playerCommand(dt);
      // Spectator: tap fire to switch players.
      if (!G.player.alive && input.held.fire && !prevFireHeld) input.pressed.add('fire_tap');
      prevFireHeld = input.held.fire;
      const steps = Math.ceil(scale);
      for (let s = 0; s < steps; s++) {
        G.update(dt * scale / steps, pc.cmd);
        if (s === 0 && pc.cmd) { pc.cmd.reload = false; pc.cmd.alt = false; pc.cmd.slot = null; pc.cmd.drop = false; pc.cmd.usePressed = false; }
      }
      fx.update(dt * scale);
      const view = chooseView();
      G.viewActor = view || G.player;
      G.listenerActor = G.viewActor;
      setVM(view);
      if (view) { if (view.slot !== vmState.lastSlot) { vmState.lastSlot = view.slot; } animateVM(view, dt, pc.lookDX, pc.lookDY); }
      updateCamera(dt, view);
      const ap = G.viewActor;
      audio.setListener(camera.position.x, camera.position.y, camera.position.z, ap.alive ? ap.yaw : G.player.yaw);
      const spreadView = view ? spreadOf(view, view.w.def) + Math.min(0.06, view.punchP * 0.3) : 0;
      const gapPx = 4 + Math.tan(spreadView) / Math.tan(THREE.MathUtils.degToRad(camera.fov) / 2) * window.innerHeight * 0.5;
      const smoke = fx.smokeAt(camera.position.x, camera.position.y, camera.position.z);
      ui.update(G, { target: view, x: camera.position.x, z: camera.position.z, yaw: view ? view.yaw : G.player.yaw, scoped: !!(view && view.scope && view.w.def.kind === 'sniper'), gap: Math.min(60, gapPx), smoke, score: input.held.score || (G.phase === 'post' && false), fps: perf.fps, crouchHeld: input.held.crouch }, dt);
      if (state === 'game' && !AUTOTEST) store.stats.time += dt;
      if (AUTOTEST) autotest.tick(dt * scale);
    }
  }
  render();
}

function render() {
  if (!scene) return;
  renderer.info.reset();
  renderer.clear();
  renderer.render(scene, camera);
  if (vm && state === 'game' && !paused) {
    renderer.clearDepth();
    renderer.render(vmScene, vmCamera);
  }
}

// ---------- autotest (used by the e2e test runner) ----------
const autotest = {
  speed: parseFloat(params.get('speed') || '1'),
  time: 0,
  errors: [],
  tick(dt) {
    this.time += dt;
    const p = G.player;
    window.__report = {
      time: this.time, round: G.round, score: G.score.slice(), phase: G.phase, over: G.over,
      kills: G.actors.reduce((s, a) => s + a.kills, 0), deaths: G.actors.reduce((s, a) => s + a.deaths, 0),
      player: { alive: p.alive, hp: p.hp, x: p.x, z: p.z, money: p.money, kills: p.kills, weapon: p.w.key },
      bomb: { planted: G.bomb.planted, exploded: !!G.bomb.exploded, defused: !!G.bomb.defused },
      fps: perf.fps, errors: this.errors, ggTop: Math.max(...G.actors.map((a) => a.ggLevel)),
      stuck: G.actors.filter((a) => a.alive && a.brain && a.brain.stuckN > 3).length,
      calls: renderer.info.render.calls, tris: renderer.info.render.triangles,
    };
  },
};
window.addEventListener('error', (e) => autotest.errors.push(String(e.message)));
window.__game = () => G;
window.__ui = ui;
window.__input = input;

// ---------- boot ----------
document.body.classList.toggle('desktop', !input.touchMode);
input.attach(canvas, document.getElementById('touch'));
input.onAnyPress = () => audio.init();
window.addEventListener('pointerdown', () => { audio.init(); if (input.touchMode) document.body.classList.remove('desktop'); }, { capture: true });
window.addEventListener('pointerdown', (e) => { if (e.pointerType === 'mouse' && !('ontouchstart' in window)) document.body.classList.add('desktop'); }, { capture: true });
applyInputSettings();
loadMap(MAPS[0]);
requestAnimationFrame(frame);
if (AUTOTEST) {
  const setup = { map: params.get('map') || 'sands', mode: params.get('mode') || 'bomb', team: params.get('team') || 'auto', bots: parseInt(params.get('bots') || '4', 10), diff: params.get('diff') || 'normal', rounds: parseInt(params.get('rounds') || '3', 10), ff: false };
  startMatch(setup);
} else {
  ui.show('menu');
}
export { WEAPONS, TEAM };
