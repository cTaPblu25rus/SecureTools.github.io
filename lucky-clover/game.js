/* Lucky Clover: Penny Rush — интерфейс, анимации и звук. Математика — в engine.js. */
(function () {
'use strict';
const E = window.SlotEngine;
const ART = window.SlotArt;
ART.inject();

const rng = E.cryptoRng();
const $ = id => document.getElementById(id);
const BETS = [10, 20, 50, 100, 200, 500, 1000];
const SYM_ART = { cherry: 'ruby', lemon: 'sapphire', orange: 'amethyst', grapes: 'emerald', bell: 'horseshoe', diamond: 'ale', seven: 'hat', wild: 'wild', scatter: 'pot' };
const SYM_NAME = { cherry: 'Рубин', lemon: 'Сапфир', orange: 'Аметист', grapes: 'Изумруд', bell: 'Подкова', diamond: 'Кружка эля', seven: 'Шляпа', wild: 'WILD' };
const FILLER = ['cherry', 'lemon', 'orange', 'grapes', 'bell', 'diamond', 'seven', 'cherry', 'lemon', 'grapes', 'coin', 'wild'];
const STORE = 'luckyClover.v1';
const TIPS = ['6+ МОНЕТ ЗАПУСКАЮТ HOLD & WIN', '3 ГОРШКА ЗОЛОТА — ФРИСПИНЫ', 'КЛЮЧ ОТКРЫВАЕТ НОВЫЙ РЯД', 'ЗАПОЛНИ 15 ЯЧЕЕК — GRAND x1000',
  'СБОРЩИК ЗАБИРАЕТ ВСЕ МОНЕТЫ', 'ГОРШОЧЕК НА 300 МОНЕТ = ГАРАНТИРОВАННЫЙ БОНУС', 'ЛЕПРЕКОН МОЖЕТ ПОДБРОСИТЬ ПЕННИ В ЛЮБОМ СПИНЕ'];

// --- Состояние ----------------------------------------------------------------
const S = { balance: 10000, betIdx: 2, ante: false, turbo: false, sound: true, jar: 0, spins: 0, wagered: 0, won: 0, best: 0 };
try { Object.assign(S, JSON.parse(localStorage.getItem(STORE) || '{}')); } catch (e) {}
const save = () => { try { localStorage.setItem(STORE, JSON.stringify(S)); } catch (e) {} };
let busy = false, auto = 0, skip = false, lastWin = 0, shownBalance = S.balance, currentGrid = null;

const bet = () => BETS[S.betIdx];
const cost = () => bet() * (S.ante ? E.ANTE_COST : 1);
const fmt = n => (Math.round(n * 100) / 100).toLocaleString('ru-RU', { maximumFractionDigits: 2 });
const short = n => n >= 1e6 ? +(n / 1e6).toFixed(n >= 1e7 ? 0 : 1) + 'M' : n >= 1e4 ? +(n / 1e3).toFixed(n >= 1e5 ? 0 : 1) + 'K' : fmt(n);
const speed = () => (skip ? 0.15 : S.turbo ? 0.5 : 1);
const sleep = ms => new Promise(r => setTimeout(r, ms * speed()));
const raf = () => new Promise(r => requestAnimationFrame(r));
// Покадровая анимация: fn(t) с t от 0 до 1. getSpeed позволяет ускорять на лету.
function tween(ms, fn, getSpeed) {
  return new Promise(res => {
    let t = 0, last = performance.now();
    const step = now => {
      t += (now - last) / ms * (getSpeed ? getSpeed() : 1);
      last = now;
      fn(Math.min(1, t));
      if (t < 1) requestAnimationFrame(step); else res();
    };
    requestAnimationFrame(step);
  });
}
const centerOfEl = el => { const r = el.getBoundingClientRect(); return [r.left + r.width / 2, r.top + r.height / 2]; };

// --- Звук: синтез WebAudio, без файлов -------------------------------------------
let ac = null, noiseBuf = null;
function audio() {
  if (!S.sound) return null;
  try {
    ac = ac || new (window.AudioContext || window.webkitAudioContext)();
    if (ac.state === 'suspended') ac.resume();
    if (!noiseBuf) {
      noiseBuf = ac.createBuffer(1, ac.sampleRate, ac.sampleRate);
      const d = noiseBuf.getChannelData(0);
      for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    }
    return ac;
  } catch (e) { return null; }
}
function tone(freq, dur, type, vol, delay, slideTo) {
  const a = audio(); if (!a) return;
  const t = a.currentTime + (delay || 0);
  const o = a.createOscillator(), g = a.createGain();
  o.type = type || 'sine';
  o.frequency.setValueAtTime(freq, t);
  if (slideTo) o.frequency.exponentialRampToValueAtTime(slideTo, t + dur);
  g.gain.setValueAtTime(0.0001, t);
  g.gain.exponentialRampToValueAtTime(vol || 0.08, t + 0.01);
  g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  o.connect(g).connect(a.destination); o.start(t); o.stop(t + dur + 0.02);
}
function noise(dur, vol, freq, delay) {
  const a = audio(); if (!a) return;
  const t = a.currentTime + (delay || 0);
  const s = a.createBufferSource(), f = a.createBiquadFilter(), g = a.createGain();
  s.buffer = noiseBuf; f.type = 'lowpass'; f.frequency.value = freq || 800;
  g.gain.setValueAtTime(vol || 0.3, t); g.gain.exponentialRampToValueAtTime(0.0001, t + dur);
  s.connect(f).connect(g).connect(a.destination); s.start(t); s.stop(t + dur);
}
const JIG = [587, 740, 880, 1175, 880, 740, 880, 1175, 1480];
const sfx = {
  click: () => tone(600, 0.05, 'square', 0.03),
  stop: () => { tone(120, 0.1, 'triangle', 0.14); noise(0.05, 0.08, 1500); },
  coin: () => { const f = 1500 + Math.random() * 400; tone(f, 0.12, 'square', 0.035); tone(f * 1.33, 0.25, 'square', 0.03, 0.05); },
  win: () => [784, 988, 1175].forEach((f, i) => tone(f, 0.2, 'triangle', 0.09, i * 0.07)),
  big: () => JIG.forEach((f, i) => tone(f, 0.2, 'triangle', 0.08, i * 0.09)),
  tick: () => tone(1100 + Math.random() * 200, 0.03, 'square', 0.015),
  antic: () => tone(180, 1.2, 'sawtooth', 0.03, 0, 520),
  boom: () => { noise(0.8, 0.5, 400); tone(70, 0.6, 'sine', 0.2, 0, 35); },
  scatter: () => [988, 1319, 1568, 1976].forEach((f, i) => tone(f, 0.3, 'sine', 0.08, i * 0.06)),
  whoosh: () => noise(0.4, 0.15, 2500),
  slide: dur => tone(1400, dur, 'sine', 0.07, 0, 260),
  magic: () => [1047, 1319, 1568, 2093, 2637].forEach((f, i) => tone(f, 0.4, 'sine', 0.05, i * 0.05)),
  lose: () => tone(300, 0.5, 'sawtooth', 0.05, 0, 120),
};

// --- Частицы (монеты и искры) на canvas поверх всего --------------------------------
const FX = (() => {
  const cv = $('fx'), cx = cv.getContext('2d');
  let parts = [], running = false, dpr = 1;
  const sprite = document.createElement('canvas');
  sprite.width = sprite.height = 64;
  (() => {
    const s = sprite.getContext('2d');
    let g = s.createRadialGradient(24, 22, 2, 32, 32, 30);
    g.addColorStop(0, '#fff7c9'); g.addColorStop(0.45, '#ffd54a'); g.addColorStop(0.85, '#e39a12'); g.addColorStop(1, '#6e3e00');
    s.fillStyle = g; s.beginPath(); s.arc(32, 32, 30, 0, 7); s.fill();
    s.strokeStyle = '#8a5300'; s.lineWidth = 3; s.beginPath(); s.arc(32, 32, 22, 0, 7); s.stroke();
    s.fillStyle = 'rgba(255,255,255,.75)'; s.beginPath(); s.ellipse(22, 20, 8, 4, -0.6, 0, 7); s.fill();
  })();
  function resize() {
    dpr = Math.min(2, window.devicePixelRatio || 1);
    cv.width = innerWidth * dpr; cv.height = innerHeight * dpr;
  }
  function add(p) {
    if (parts.length > 700) parts.shift();
    parts.push(p);
    if (!running) { running = true; requestAnimationFrame(loop); }
  }
  const rnd = (a, b) => a + Math.random() * (b - a);
  function coin(x, y, vx, vy, r, g) { add({ t: 'c', x, y, vx, vy, r: r || rnd(9, 17), rot: rnd(0, 6), vr: rnd(0.08, 0.3), life: 1, g: g == null ? 0.42 : g, decay: 0.004 }); }
  function spark(x, y, vx, vy, r, color, decay) { add({ t: 's', x, y, vx, vy, r: r || rnd(3, 7), rot: rnd(0, 3), life: 1, g: 0.02, decay: decay || rnd(0.02, 0.04), color: color || '#fff7c9' }); }
  function fountain(x, y, n, power) {
    power = power || 1;
    for (let i = 0; i < n; i++) coin(x + rnd(-10, 10), y, rnd(-7, 7) * power, -rnd(9, 19) * power);
  }
  function burst(x, y, n, color, speedMul) {
    for (let i = 0; i < n; i++) {
      const a = rnd(0, Math.PI * 2), s = rnd(2, 9) * (speedMul || 1);
      spark(x, y, Math.cos(a) * s, Math.sin(a) * s, rnd(3, 8), color);
    }
  }
  function rain(n) { for (let i = 0; i < n; i++) coin(rnd(0, innerWidth), rnd(-200, -20), rnd(-1.5, 1.5), rnd(2, 7), null, 0.25); }
  function trail(x, y, color) { for (let i = 0; i < 3; i++) spark(x + rnd(-8, 8), y + rnd(-8, 8), rnd(-1.5, 1.5), rnd(-1, 2), rnd(3, 7), color || ART.RAINBOW[(Math.random() * 6) | 0], 0.03); }
  function loop() {
    cx.setTransform(dpr, 0, 0, dpr, 0, 0);
    cx.clearRect(0, 0, innerWidth, innerHeight);
    for (let i = parts.length - 1; i >= 0; i--) {
      const p = parts[i];
      p.vy += p.g; p.x += p.vx; p.y += p.vy; p.life -= p.decay; p.rot += p.vr || 0.05;
      if (p.life <= 0 || p.y > innerHeight + 40) { parts.splice(i, 1); continue; }
      cx.globalAlpha = Math.min(1, p.life * 3);
      cx.save(); cx.translate(p.x, p.y);
      if (p.t === 'c') {
        cx.rotate(p.rot * 0.3);
        cx.scale(Math.abs(Math.cos(p.rot)) * 0.85 + 0.15, 1);
        cx.drawImage(sprite, -p.r, -p.r, p.r * 2, p.r * 2);
      } else {
        cx.rotate(p.rot);
        const r = p.r * (0.6 + p.life * 0.6);
        cx.fillStyle = p.color;
        cx.beginPath();
        cx.moveTo(0, -r); cx.quadraticCurveTo(0, 0, r, 0); cx.quadraticCurveTo(0, 0, 0, r);
        cx.quadraticCurveTo(0, 0, -r, 0); cx.quadraticCurveTo(0, 0, 0, -r); cx.fill();
      }
      cx.restore();
    }
    cx.globalAlpha = 1;
    if (parts.length) requestAnimationFrame(loop);
    else { running = false; cx.clearRect(0, 0, innerWidth, innerHeight); }
  }
  resize();
  addEventListener('resize', resize);
  return { fountain, burst, rain, trail, spark, coin };
})();

// --- Рисование символов --------------------------------------------------------------
const useSvg = (id, cls) => `<svg${cls ? ` class="${cls}"` : ''} viewBox="0 0 100 100"><use href="#${id}"/></svg>`;
const COIN_COLOR = { cash: 'gold', collect: 'purple', multi: 'orange', boost: 'blue', key: 'green' };
const JP_COLOR = { MINI: 'cyan', MINOR: 'pink', MAJOR: 'crimson' };
function coinHTML(c, b) {
  b = b || bet();
  const col = c.kind === 'jp' ? JP_COLOR[c.jp] : COIN_COLOR[c.kind];
  let inner;
  if (c.kind === 'jp') inner = `<small>${c.jp}</small><b>${short(c.v * b)}</b>`;
  else if (c.kind === 'collect') inner = `<small>СБОР</small>${c.v ? `<b>${short(c.v * b)}</b>` : '<i>🧲</i>'}`;
  else if (c.kind === 'multi') inner = `<b style="font-size:calc(var(--cell)*.3)">x2</b>`;
  else if (c.kind === 'boost') inner = `<small>БУСТ</small><b>+${short(c.v * b)}</b>`;
  else if (c.kind === 'key') inner = `<i>🔑</i><b>${short(c.v * b)}</b>`;
  else inner = `<b>${short(c.v * b)}</b>`;
  return `<div class="coinwrap">${useSvg('c-' + col)}<div class="cv">${inner}</div></div>`;
}
function symHTML(cell) {
  if (cell.s === 'coin') return coinHTML(cell.coin);
  return `<div class="sym">${useSvg('s-' + SYM_ART[cell.s])}</div>`;
}
function randomCell() {
  const s = FILLER[(Math.random() * FILLER.length) | 0];
  return s === 'coin' ? { s, coin: E.randomCoin(Math.random) } : { s };
}

// --- Лепрекон в шапке ----------------------------------------------------------------
$('lepTop').outerHTML = ART.leprechaun('').replace('class="lep ', 'id="lep" class="lep ');
const lepEl = $('lep');
let moodTimer = 0;
function mood(cls, ms) {
  lepEl.classList.remove('cheer', 'excited', 'sad', 'dance');
  clearTimeout(moodTimer);
  if (!cls) return;
  lepEl.classList.add(cls);
  if (ms) moodTimer = setTimeout(() => lepEl.classList.remove(cls), ms);
}

// Радуга на фоне
$('bgbow').innerHTML = ART.RAINBOW.map((c, i) =>
  `<path d="M${60 + i * 26} 520A${440 - i * 26} ${430 - i * 26} 0 0 1 ${940 - i * 26} 520" fill="none" stroke="${c}" stroke-width="27" opacity=".85"/>`).join('');

// --- Барабаны ----------------------------------------------------------------------
const reelsEl = $('reels');
const reels = [];
function layout() {
  const inner = document.querySelector('.game').clientWidth - 32; // минус padding .game
  const cell = Math.min(96, Math.floor((inner - 18) / 5));          // минус рамка
  document.documentElement.style.setProperty('--cell', cell + 'px');
  $('lines').innerHTML = '';
}
function buildReels() {
  for (let x = 0; x < 5; x++) {
    const r = document.createElement('div'); r.className = 'reel';
    const strip = document.createElement('div'); strip.className = 'strip';
    r.appendChild(strip); reelsEl.appendChild(r); reels.push({ el: r, strip });
  }
  currentGrid = E.genGrid(Math.random, E.BASE_WEIGHTS);
  renderGrid(currentGrid);
}
const isSticky = (sticky, x, y) => sticky && sticky.some(([a, b]) => a === x && b === y);
let stickyShown = [];
function renderSticky(list) {
  const h = cellH(), layer = $('stickyLayer');
  layer.innerHTML = (list || []).map(([x, y]) => {
    const r = reels[x].el;
    const isNew = !stickyShown.some(([a, b]) => a === x && b === y);
    return `<div class="stk${isNew ? ' new' : ''}" style="left:${r.offsetLeft}px;top:${y * h}px;width:${r.offsetWidth}px;height:${h}px">${symHTML({ s: 'wild' })}</div>`;
  }).join('');
  stickyShown = (list || []).map(p => p.slice());
}
function renderGrid(grid, sticky) {
  grid.forEach((col, x) => {
    const s = reels[x].strip;
    s.style.transition = 'none'; s.style.transform = 'translateY(0)';
    s.innerHTML = col.map((c, y) => `<div class="cell${isSticky(sticky, x, y) ? ' sticky' : ''}">${symHTML(c)}</div>`).join('');
  });
}
const cellEl = (x, y) => reels[x].strip.children[y];
const cellH = () => reels[0].el.clientHeight / 3;

async function spinReels(grid, opts) {
  opts = opts || {};
  clearHighlights();
  const h = cellH(), prev = currentGrid, fast = S.turbo || skip;
  const baseLen = fast ? 7 : 14;
  let scat = 0, coins = 0, anticFrom = 99;
  const plan = [];
  for (let x = 0; x < 5; x++) {
    // Нагнетание: 2 горшка или 4+ монеты — оставшиеся барабаны крутятся дольше и светятся.
    const extra = x >= anticFrom ? (fast ? 8 : 18) : 0;
    const n = baseLen + x * (fast ? 2 : 4) + extra;
    const cells = grid[x].map(c => `<div class="cell">${symHTML(c)}</div>`);
    for (let i = 0; i < n; i++) cells.push(`<div class="cell">${symHTML(randomCell())}</div>`);
    for (const c of prev[x]) cells.push(`<div class="cell">${symHTML(c)}</div>`);
    const strip = reels[x].strip;
    strip.style.transition = 'none';
    strip.innerHTML = cells.join('');
    strip.style.transform = `translateY(${-(n + 3) * h}px)`;
    const dur = (fast ? 300 : 560) + x * (fast ? 100 : 180) + extra * (fast ? 40 : 70);
    plan.push({ x, dur, antic: extra > 0 });
    for (const c of grid[x]) { if (c.s === 'scatter') scat++; if (c.s === 'coin') coins++; }
    if (anticFrom === 99 && x < 4 && (scat >= 2 || coins >= 4)) anticFrom = x + 1;
  }
  void reelsEl.offsetHeight;
  const ticker = setInterval(sfx.tick, 75);
  await Promise.all(plan.map(({ x, dur, antic }) => new Promise(res => {
    const { strip, el } = reels[x];
    strip.classList.add('blur');
    if (antic) setTimeout(() => { el.classList.add('antic'); sfx.antic(); mood('excited'); }, Math.max(0, dur - 1300));
    strip.style.transition = `transform ${dur}ms cubic-bezier(.3,.05,.3,1.08)`;
    strip.style.transform = 'translateY(0)';
    setTimeout(() => strip.classList.remove('blur'), Math.max(0, dur - 160));
    setTimeout(() => {
      el.classList.remove('antic');
      while (strip.children.length > 3) strip.removeChild(strip.lastChild);
      [...strip.children].forEach(c => c.firstElementChild && c.firstElementChild.classList.add('land'));
      sfx.stop();
      if (grid[x].some(c => c.s === 'coin')) sfx.coin();
      if (grid[x].some(c => c.s === 'scatter')) {
        sfx.scatter();
        grid[x].forEach((c, y) => { if (c.s === 'scatter') { const [px, py] = centerOfEl(cellEl(x, y)); FX.burst(px, py, 14, '#ff9af0'); } });
      }
      res();
    }, dur);
  })));
  clearInterval(ticker);
  if (lepEl.classList.contains('excited')) mood('');
  currentGrid = grid;
}

// --- Линии и подсветка выигрыша ---------------------------------------------------
const svgLines = $('lines');
function clearHighlights() {
  svgLines.innerHTML = '';
  reelsEl.classList.remove('dim');
  reelsEl.querySelectorAll('.win').forEach(e => e.classList.remove('win'));
  $('screen').querySelectorAll('.winpop').forEach(e => e.remove());
}
function localCenter(el) {
  const sr = $('screen').getBoundingClientRect(), r = el.getBoundingClientRect();
  return [r.left - sr.left + r.width / 2, r.top - sr.top + r.height / 2];
}
function showWins(lines, extraCells, amountText) {
  const sr = $('screen').getBoundingClientRect();
  svgLines.setAttribute('viewBox', `0 0 ${sr.width} ${sr.height}`);
  svgLines.innerHTML = lines.map(w => {
    const pts = E.LINES[w.line].map((y, x) => localCenter(cellEl(x, y)).join(',')).join(' ');
    return `<polyline class="glow" points="${pts}"/><polyline class="core" points="${pts}"/>`;
  }).join('');
  const cells = new Set();
  lines.forEach(w => w.cells.forEach(([x, y]) => cells.add(x + ',' + y)));
  (extraCells || []).forEach(([x, y]) => cells.add(x + ',' + y));
  for (let x = 0; x < 5; x++) for (let y = 0; y < 3; y++) {
    if (!cells.has(x + ',' + y)) continue;
    const el = cellEl(x, y);
    el.classList.add('win');
    const [px, py] = centerOfEl(el);
    FX.burst(px, py, 6);
  }
  if (cells.size) reelsEl.classList.add('dim');
  if (amountText) {
    const p = document.createElement('div');
    p.className = 'winpop'; p.textContent = amountText;
    $('screen').appendChild(p);
  }
}

// --- HUD -----------------------------------------------------------------------------
function updateHUD() {
  $('bet').textContent = fmt(cost());
  $('balance').textContent = fmt(shownBalance);
  for (const jp of ['MINI', 'MINOR', 'MAJOR', 'GRAND']) $('jp-' + jp).querySelector('span').textContent = short(E.JACKPOTS[jp] * bet());
  $('jarFill').style.width = Math.min(100, 100 * S.jar / E.JAR_SIZE) + '%';
  $('jar').classList.toggle('hot', S.jar >= E.JAR_SIZE * 0.85);
  $('jarText').textContent = `${S.jar}/${E.JAR_SIZE}`;
  $('anteBtn').classList.toggle('on', S.ante);
  $('turboBtn').classList.toggle('on', S.turbo);
  $('soundBtn').textContent = S.sound ? '🔊' : '🔇';
  $('autoBtn').textContent = auto ? 'СТОП' : 'АВТО';
  $('autoBtn').classList.toggle('on', !!auto);
  $('autoN').textContent = auto ? (auto === Infinity ? '∞' : auto) : '';
  $('spinBtn').querySelector('svg').style.opacity = auto ? 0.25 : 1;
  $('spinBtn').classList.toggle('busy', busy);
  $('spinBtn').classList.toggle('auto', !!auto);
  $('betUp').disabled = busy || S.betIdx >= BETS.length - 1;
  $('betDown').disabled = busy || S.betIdx <= 0;
  document.querySelectorAll('[data-buy]').forEach(b => { b.disabled = busy || !!auto; });
  $('anteBtn').disabled = busy;
  $('gambleBtn').disabled = busy || !lastWin;
  for (const k of ['hw', 'super', 'fs']) $('price-' + k).textContent = short(E.BUY[k].cost * bet());
  const rtp = S.wagered ? (100 * S.won / S.wagered).toFixed(1) + '%' : '—';
  $('stats').textContent = `Спинов ${S.spins} · Ваш RTP ${rtp} · Рекорд x${fmt(S.best)}`;
}
function msg(text, gold) {
  const m = $('msg'); m.innerHTML = text; m.classList.toggle('gold', !!gold);
}
function countTo(el, from, to, ms) {
  return tween(skip ? 120 : S.turbo ? ms / 2 : ms, k => { el.textContent = fmt(k < 1 ? Math.round(from + (to - from) * (1 - Math.pow(1 - k, 3))) : to); });
}
function credit(amount) { S.balance += amount; S.won += amount; save(); }
async function settleBalance() {
  const from = shownBalance; shownBalance = S.balance;
  if (from !== shownBalance) await countTo($('balance'), from, shownBalance, 600);
  updateHUD();
}
let tipIdx = 0;
setInterval(() => {
  if (busy) return;
  const t = $('tip');
  t.style.opacity = 0;
  setTimeout(() => { t.textContent = TIPS[tipIdx++ % TIPS.length]; t.style.opacity = 1; }, 300);
}, 4500);
$('tip').textContent = TIPS[tipIdx++];

// --- Кинематографичная заставка: лепрекон съезжает по радуге в горшок золота -----------
const BOW = { cx: 290, cy: 660, rx: 250, ry: 470, w: 16 };
function bowPoint(theta, off) {
  return [BOW.cx + (BOW.rx + off) * Math.cos(theta), BOW.cy - (BOW.ry + off) * Math.sin(theta)];
}
function stageToClient(stage, x, y) {
  const m = stage.getScreenCTM();
  return [m.a * x + m.c * y + m.e, m.b * x + m.d * y + m.f];
}
async function cinematic(title, sub) {
  const cine = $('cine'), stage = $('stage');
  let fast = false;
  const sp = () => (fast ? 5 : 1);
  const wait = ms => tween(ms, () => {}, sp);
  cine.onclick = () => { fast = true; };
  const bands = ART.RAINBOW.map((c, k) => {
    const rx = BOW.rx - k * BOW.w, ry = BOW.ry - k * BOW.w;
    return `<path class="band" pathLength="1" style="transition-delay:${k * 70}ms" stroke="${c}" stroke-width="${BOW.w + 1}"
      d="M${BOW.cx - rx} ${BOW.cy}A${rx} ${ry} 0 0 1 ${BOW.cx + rx} ${BOW.cy}"/>`;
  }).join('');
  const cloud = (x, y, s) => `<g transform="translate(${x} ${y}) scale(${s})" fill="#fff">
    <circle cx="0" cy="0" r="34"/><circle cx="38" cy="-14" r="40"/><circle cx="80" cy="0" r="32"/><circle cx="40" cy="16" r="30"/><circle cx="-30" cy="12" r="24"/></g>`;
  const lep = ART.leprechaun('slide').replace('<svg ', '<svg x="-80" y="-192" width="160" height="208" ');
  stage.innerHTML = `
    <g id="cBands">${bands}</g>
    ${cloud(40, 660, 1.1)}
    <g class="potg"><svg x="405" y="560" width="190" height="190" viewBox="0 0 100 100"><use href="#s-potbig"/></svg></g>
    <g id="cLep" transform="translate(-200 -200)">${lep}</g>
    <clipPath id="potFront"><rect x="380" y="668" width="240" height="140"/></clipPath>
    <g class="potg"><g clip-path="url(#potFront)"><svg x="405" y="560" width="190" height="190" viewBox="0 0 100 100"><use href="#s-potbig"/></svg></g></g>`;
  const lepG = stage.querySelector('#cLep');
  const lepSvg = lepG.querySelector('.lep');
  $('cineTitle').className = 'title';
  $('cineMain').textContent = title;
  $('cineSub').textContent = sub || '';
  cine.className = 'cine open';
  mood('cheer');
  await raf(); await raf();
  cine.classList.add('draw');
  sfx.magic();
  await wait(1000);
  cine.classList.add('potin');
  sfx.coin();
  // Лепрекон падает на вершину радуги
  const top = Math.PI / 2;
  const [ax, ay] = bowPoint(top, BOW.w / 2);
  sfx.whoosh();
  await tween(450, t => {
    const y = -150 + (ay + 150) * (t * t);
    lepG.setAttribute('transform', `translate(${ax} ${y})`);
  }, sp);
  const [lx, ly] = stageToClient(stage, ax, ay);
  FX.burst(lx, ly, 18);
  sfx.stop();
  await wait(200);
  // Скольжение вниз по радуге с радужным шлейфом
  const end = 0.07;
  sfx.slide(1.5 / sp());
  await tween(1500, t => {
    const e = t * t;
    const th = top + (end - top) * e;
    const [x, y] = bowPoint(th, BOW.w / 2);
    const ang = Math.atan2(BOW.ry * Math.cos(th), BOW.rx * Math.sin(th)) * 180 / Math.PI * 0.7;
    lepG.setAttribute('transform', `translate(${x} ${y}) rotate(${ang})`);
    if (Math.random() < 0.8) { const [cx, cy] = stageToClient(stage, x, y); FX.trail(cx, cy); }
  }, sp);
  // Нырок в горшок
  const [ex, ey] = bowPoint(end, BOW.w / 2);
  await tween(350, t => {
    const x = ex + (500 - ex) * t, y = ey + (680 - ey) * t - Math.sin(t * Math.PI) * 60;
    lepG.setAttribute('transform', `translate(${x} ${y}) rotate(${50 + t * 120}) scale(${1 - t * 0.5})`);
  }, sp);
  lepG.style.opacity = 0;
  cine.classList.add('shake');
  sfx.antic();
  await wait(700);
  cine.classList.remove('shake');
  // Взрыв золота
  const [px, py] = stageToClient(stage, 500, 650);
  $('whiteout').classList.remove('go'); void $('whiteout').offsetWidth; $('whiteout').classList.add('go');
  sfx.boom(); sfx.big();
  FX.fountain(px, py, 90, 1.25);
  FX.burst(px, py, 40);
  $('cineTitle').className = 'title show';
  lepG.style.opacity = 1;
  lepSvg.classList.remove('slide'); lepSvg.classList.add('cheer');
  // Выпрыгивает из горшка и встаёт на кучу золота
  await tween(500, t => {
    const y = 700 - Math.sin(t * Math.PI) * 160 - t * 64;
    lepG.setAttribute('transform', `translate(500 ${y}) scale(${0.5 + t * 0.6})`);
  }, sp);
  for (let i = 0; i < 6; i++) { FX.fountain(px, py, 12, 1.1); await wait(160); }
  await wait(auto ? 900 : 1500);
  cine.classList.add('out');
  await sleep(400);
  cine.className = 'cine';
  stage.innerHTML = '';
  mood('');
}

// --- Большой выигрыш ------------------------------------------------------------------
const TIERS = [[10, 'BIG WIN'], [25, 'MEGA WIN'], [50, 'EPIC WIN'], [100, 'ЛЕГЕНДА!'], [1000, 'МАКС x1000!']];
async function bigWin(x, amount) {
  if (x < 10) return;
  const bw = $('bigwin');
  $('bwLep').innerHTML = ART.leprechaun('dance');
  let closed = false, tierIdx = -1;
  bw.onclick = () => { if (counting) fastCount = true; else closed = true; };
  bw.classList.add('open');
  sfx.big();
  const fountainTimer = setInterval(() => {
    FX.fountain(innerWidth * 0.12, innerHeight + 10, 4, 1.3);
    FX.fountain(innerWidth * 0.88, innerHeight + 10, 4, 1.3);
  }, 140);
  let counting = true, fastCount = false;
  const ms = Math.min(5500, 1500 + x * 25);
  await tween(ms, k => {
    const e = 1 - Math.pow(1 - k, 2);
    const v = amount * e;
    $('bwVal').textContent = fmt(Math.round(v));
    let idx = 0;
    TIERS.forEach(([th], i) => { if (x * e >= th) idx = i; });
    if (idx !== tierIdx) {
      tierIdx = idx;
      const t = $('bwTitle');
      t.textContent = TIERS[idx][1];
      t.classList.remove('tier'); void t.offsetWidth; t.classList.add('tier');
      FX.burst(innerWidth / 2, innerHeight * 0.4, 40);
      sfx.win();
    }
  }, () => (fastCount ? 8 : skip ? 4 : 1));
  counting = false;
  $('bwVal').textContent = fmt(amount);
  FX.rain(60);
  const t0 = Date.now();
  while (!closed && Date.now() - t0 < (auto ? 1600 : 5000)) await new Promise(r => setTimeout(r, 100));
  clearInterval(fountainTimer);
  bw.classList.remove('open');
}

// --- Подброс пенни ----------------------------------------------------------------------
async function showFlip(res) {
  const f = $('flip'), coin = $('bigcoin');
  const heads = res.flip.side === 'heads';
  $('flipText').textContent = '';
  f.classList.add('open');
  mood('cheer', 2000);
  sfx.whoosh();
  const a = coin.animate([
    { transform: 'translateY(220px) rotateY(0deg) scale(.3)' },
    { transform: 'translateY(-70px) rotateY(1260deg) scale(1.25)', offset: 0.6 },
    { transform: `translateY(0) rotateY(${1440 + (heads ? 0 : 180)}deg) scale(1)` },
  ], { duration: 1600 * speed(), easing: 'cubic-bezier(.2,.6,.3,1)', fill: 'forwards' });
  await a.finished;
  const [cx, cy] = centerOfEl(coin);
  FX.burst(cx, cy, 30);
  sfx.big();
  $('flipText').textContent = heads ? '🍀 КЛЕВЕР! WILD-БАРАБАН!' : '⭐ ЗВЕЗДА! МОНЕТНЫЙ ДОЖДЬ!';
  await sleep(1000);
  f.classList.remove('open');
  a.cancel();
  if (heads) {
    for (const x of res.flip.reels) {
      const sw = document.createElement('div');
      sw.className = 'sweep';
      const r = reels[x].el;
      sw.style.left = r.offsetLeft + 'px'; sw.style.width = r.offsetWidth + 'px';
      $('screen').appendChild(sw);
      sfx.magic();
      await sleep(350);
      for (let y = 0; y < 3; y++) {
        const b = res.grid[x][y];
        if (b.s !== 'wild') continue;
        const el = cellEl(x, y);
        el.innerHTML = symHTML(b);
        el.firstChild.classList.add('pop');
        const [px, py] = centerOfEl(el); FX.burst(px, py, 12, '#7dff9c');
      }
      await sleep(350);
      sw.remove();
    }
  } else {
    for (const [x, y] of res.flip.cells) {
      const el = cellEl(x, y);
      el.innerHTML = symHTML(res.grid[x][y]);
      const h = cellH();
      el.firstChild.animate([{ transform: `translateY(${-h * (y + 3)}px) rotate(-200deg)` }, { transform: 'translateY(8px)', offset: 0.8 }, { transform: 'none' }],
        { duration: 550 * speed(), easing: 'ease-in' });
      sfx.coin();
      setTimeout(() => { const [px, py] = centerOfEl(el); FX.burst(px, py, 10); }, 450 * speed());
      await sleep(170);
    }
    await sleep(400);
  }
  currentGrid = res.grid;
  await sleep(250);
}

// --- Hold & Win -------------------------------------------------------------------------
const hwEl = $('hwboard');
const hcell = i => hwEl.querySelector(`[data-i="${i}"]`);
function hwRender(board, rows, b) {
  hwEl.innerHTML = '';
  for (let y = E.MAX_ROWS - 1; y >= 0; y--) for (let x = 0; x < 5; x++) {
    const i = y * 5 + x;
    const d = document.createElement('div');
    d.className = 'hcell' + (y >= rows ? ' locked' : '');
    d.dataset.i = i;
    if (board[i]) d.innerHTML = coinHTML(board[i], b);
    else if (y >= rows) d.innerHTML = useSvg('s-lock', 'lockic');
    hwEl.appendChild(d);
  }
}
function pips(n, reset) {
  [...$('pips').children].forEach((d, i) => {
    d.classList.toggle('on', i < n);
    if (reset) { d.classList.remove('reset'); void d.offsetWidth; d.classList.add('reset'); }
  });
}
function screenFx(cls, color) {
  const d = document.createElement('div');
  d.className = cls;
  if (color) d.style.background = color;
  $('screen').appendChild(d);
  setTimeout(() => d.remove(), 1400);
  return d;
}
function bigText(text, color) {
  const d = screenFx('bigtext');
  d.textContent = text; d.style.color = color || '#fff';
}
// Монетки, летящие от каждой монеты к сборщику
async function flyTo(fromEls, toEl) {
  const [tx, ty] = centerOfEl(toEl);
  const flyers = fromEls.map(el => {
    const r = el.getBoundingClientRect();
    const f = document.createElement('div');
    f.className = 'flyer';
    f.style.left = r.left + 'px'; f.style.top = r.top + 'px'; f.style.width = r.width + 'px'; f.style.height = r.height + 'px';
    f.innerHTML = useSvg('c-gold');
    f.firstChild.style.cssText = 'width:100%;height:100%';
    document.body.appendChild(f);
    return { f, dx: tx - (r.left + r.width / 2), dy: ty - (r.top + r.height / 2) };
  });
  await raf();
  flyers.forEach(({ f, dx, dy }, i) => {
    f.style.transitionDelay = (i * 40 * speed()) + 'ms';
    f.style.transitionDuration = (550 * speed()) + 'ms';
    f.style.transform = `translate(${dx}px,${dy}px) scale(.4)`;
    f.style.opacity = '.3';
  });
  await sleep(550 + flyers.length * 40);
  flyers.forEach(({ f }) => f.remove());
}

async function playHW(hw, b, title, sub) {
  await cinematic(title || 'HOLD & WIN', sub || 'Монеты держатся · 3 респина');
  clearHighlights();
  document.body.classList.add('hw');
  $('screen').classList.add('hwmode');
  let rows = hw.startRows;
  const board = new Array(E.MAX_ROWS * 5).fill(null);
  for (const s of hw.start) board[s.y * 5 + s.x] = s.coin;
  hwRender(board, rows, b);
  hwEl.querySelectorAll('.coinwrap').forEach(c => c.classList.add('flipin'));
  pips(3);
  let total = hw.start.reduce((a, s) => a + s.coin.v, 0);
  $('hwTotal').textContent = fmt(total * b);
  msg('ЛОВИ МОНЕТЫ!', true);
  await sleep(900);
  for (const st of hw.steps) {
    const empty = [...hwEl.querySelectorAll('.hcell:not(.locked)')].filter(c => !c.innerHTML);
    empty.forEach(c => c.classList.add('flicker'));
    pips(st.landed.length ? 0 : st.respins);
    const tick = setInterval(sfx.tick, 90);
    await sleep(700);
    clearInterval(tick);
    empty.forEach(c => c.classList.remove('flicker'));
    // Новые монеты приземляются в «сыром» виде, эффекты применяются следом.
    for (const i of st.landed) {
      const c = hcell(i);
      const raw = Object.assign({}, st.board[i]);
      const eff = st.effects.find(e => e.at === i);
      if (eff && eff.type === 'collect') raw.v -= eff.sum;
      if (eff && eff.type === 'unlock') raw.kind = 'key';
      c.innerHTML = coinHTML(raw, b);
      c.firstChild.classList.add('flipin');
      sfx.coin();
      const [px, py] = centerOfEl(c); FX.burst(px, py, 14);
      if (raw.kind === 'jp') { FX.burst(px, py, 30, '#ff9af0'); sfx.magic(); }
      await sleep(300);
    }
    if (st.landed.length) { pips(3, true); mood('cheer', 900); }
    for (const e of st.effects) {
      const c = hcell(e.at);
      if (e.type === 'unlock') {
        rows = e.rows;
        sfx.magic();
        bigText('НОВЫЙ РЯД!', '#7dff9c');
        for (let x = 0; x < 5; x++) {
          const u = hcell((rows - 1) * 5 + x);
          const lk = u.querySelector('.lockic');
          if (lk) lk.classList.add('break');
          setTimeout(() => { u.classList.remove('locked'); u.classList.add('unlock'); if (lk) lk.remove(); }, 650 * speed());
        }
        await sleep(900);
      } else if (e.type === 'boost') {
        c.classList.add('fx-boost');
        const ring = document.createElement('div'); ring.className = 'ring'; c.appendChild(ring);
        setTimeout(() => ring.remove(), 900);
        tone(440, 0.5, 'sawtooth', 0.05, 0, 1200);
        bigText('+' + short(e.add * b), '#4fd5ff');
        await sleep(500);
        hwEl.querySelectorAll('.hcell').forEach(h => { if (h !== c && h.querySelector('.coinwrap')) h.classList.add('bump'); });
        await sleep(400);
      } else if (e.type === 'multi') {
        c.classList.add('fx-multi');
        screenFx('flash', 'radial-gradient(circle,rgba(255,170,60,.9),rgba(255,60,0,.4))');
        sfx.boom();
        bigText('ВСЁ x2!', '#ffab45');
        hwEl.querySelectorAll('.hcell').forEach(h => { if (h !== c && h.querySelector('.coinwrap')) h.classList.add('bump'); });
        await sleep(900);
      } else if (e.type === 'collect') {
        c.classList.add('fx-collect');
        bigText('СБОРЩИК!', '#c27bff');
        sfx.big();
        const others = [...hwEl.querySelectorAll('.hcell')].filter(h => h !== c && h.querySelector('.coinwrap')).map(h => h.querySelector('.coinwrap'));
        await flyTo(others, c);
        const [px, py] = centerOfEl(c); FX.burst(px, py, 40, '#e0b8ff');
        await sleep(300);
      }
      hwEl.querySelectorAll('.bump,.fx-boost,.fx-multi,.fx-collect').forEach(h => h.classList.remove('bump', 'fx-boost', 'fx-multi', 'fx-collect'));
    }
    st.board.forEach((coin, i) => { if (coin) { const h = hcell(i); if (h) h.innerHTML = coinHTML(coin, b); } });
    const from = total; total = st.total;
    if (total !== from) countTo($('hwTotal'), from * b, total * b, 500);
    pips(st.respins);
    msg(st.landed.length ? `+${st.landed.length} ${st.landed.length === 1 ? 'МОНЕТА' : 'МОНЕТЫ'}!` : `ОСТАЛОСЬ РЕСПИНОВ: ${st.respins}`, !!st.landed.length);
    if (!st.landed.length && st.respins === 0) mood('sad', 1500);
    await sleep(st.landed.length ? 450 : 250);
  }
  pips(0);
  const last = hw.steps.length ? hw.steps[hw.steps.length - 1].board : board;
  last.forEach(c => { if (c && c.kind === 'jp') $('jp-' + c.jp).classList.add('hit'); });
  if (hw.grand) {
    $('jp-GRAND').classList.add('hit');
    bigText('GRAND!', '#ffd54a');
    msg('ПОЛЕ ЗАПОЛНЕНО — GRAND JACKPOT!', true);
    sfx.boom(); sfx.big(); FX.rain(150);
    await sleep(2200);
  }
  // Финальный подсчёт: монеты «впитываются» в счётчик по очереди
  const coinsEls = [...hwEl.querySelectorAll('.coinwrap')];
  for (const c of coinsEls) { c.parentNode.classList.add('bump'); sfx.tick(); await sleep(60); }
  $('hwTotal').textContent = fmt(hw.total * b);
  msg(`HOLD & WIN: ${fmt(hw.total * b)}${hw.capped ? ' (МАКС x1000)' : ''}`, true);
  await sleep(1500);
  setTimeout(() => document.querySelectorAll('.jp.hit').forEach(j => j.classList.remove('hit')), 3000);
  document.body.classList.remove('hw');
  $('screen').classList.remove('hwmode');
  renderGrid(currentGrid);
  return hw.total;
}

// --- Фриспины ------------------------------------------------------------------------
function chooseMode(count) {
  $('fsCount').textContent = count;
  const m = $('fsModal');
  m.classList.add('open');
  return new Promise(res => {
    m.querySelectorAll('[data-mode]').forEach(btn => btn.onclick = () => { sfx.click(); m.classList.remove('open'); res(btn.dataset.mode); });
  });
}
async function playFS(count, b, ante) {
  await cinematic('ФРИСПИНЫ', `${count} бесплатных вращений`);
  const mode = await chooseMode(count);
  const fs = E.playFreeSpins(rng, count, mode, ante);
  document.body.classList.add('fs');
  let total = 0, lastMult = 0;
  $('fsWin').textContent = '0';
  for (let i = 0; i < fs.spins.length; i++) {
    const sp = fs.spins[i];
    $('fsLeft').textContent = `ФРИСПИН ${i + 1}/${i + 1 + sp.left}`;
    const orb = $('fsOrb');
    orb.textContent = mode === 'multi' ? 'x' + sp.mult : '🍀' + sp.sticky.length;
    if ((mode === 'multi' ? sp.mult : sp.sticky.length) !== lastMult) { orb.classList.remove('up'); void orb.offsetWidth; orb.classList.add('up'); }
    lastMult = mode === 'multi' ? sp.mult : sp.sticky.length;
    msg(mode === 'multi' ? `МНОЖИТЕЛЬ x${sp.mult}` : 'ЛИПКИЕ WILD ДЕРЖАТСЯ!');
    await spinReels(sp.grid);
    if (mode === 'sticky') renderSticky(sp.sticky);
    if (sp.lines.length) {
      showWins(sp.lines, null, '+' + fmt(sp.lineWin * b));
      sfx.win(); mood('cheer', 1000);
      await sleep(1200);
    }
    if (sp.retrigger) {
      showWins([], sp.scatters);
      bigText(`+${sp.retrigger} ФРИСПИНОВ!`, '#ff9af0'); sfx.big();
      await sleep(1400);
    }
    if (sp.hw) {
      document.body.classList.remove('fs');
      $('stickyLayer').style.display = 'none';
      await playHW(sp.hw, b);
      $('stickyLayer').style.display = '';
      document.body.classList.add('fs');
    }
    const from = total; total = sp.runningTotal;
    if (total !== from) await countTo($('fsWin'), from * b, total * b, 400);
    await sleep(300);
  }
  msg(`ФРИСПИНЫ: ${fmt(fs.total * b)}${fs.capped ? ' (МАКС x1000)' : ''}`, true);
  await sleep(1300);
  document.body.classList.remove('fs');
  renderSticky([]);
  clearHighlights();
  return fs.total;
}

// --- Основной цикл ---------------------------------------------------------------------
async function doSpin() {
  if (busy) { skip = true; return; }
  const c = cost(), b = bet();
  if (S.balance < c) { msg('НЕ ХВАТАЕТ КРЕДИТОВ — СБРОС В «i»'); auto = 0; updateHUD(); return; }
  busy = true; skip = false; lastWin = 0;
  S.balance -= c; S.wagered += c; S.spins++;
  shownBalance = S.balance;
  const res = E.spinBase(rng, S, { ante: S.ante });
  save(); updateHUD();
  msg('УДАЧИ!');

  await spinReels(res.preGrid || res.grid);
  if (res.flip) await showFlip(res);

  let win = 0;
  if (res.lines.length) {
    win += res.lineWin;
    showWins(res.lines, null, fmt(res.lineWin * b));
    sfx.win(); mood('cheer', 1200);
    msg(`ВЫИГРЫШ ${fmt(res.lineWin * b)}`, true);
    await sleep(1100);
  }
  updateHUD();
  if (res.hw) {
    showWins([], res.coins);
    sfx.scatter();
    await sleep(900);
    win += res.jarFull
      ? await playHW(res.hw, b, 'КОПИЛКА!', 'Горшочек полон — Hold & Win')
      : await playHW(res.hw, b);
  }
  if (res.fs) {
    showWins([], res.scatters);
    await sleep(1000);
    win += await playFS(res.fs, b, S.ante);
  }
  win = Math.min(win, E.MAX_WIN);
  await finishRound(win, c, b, !!(res.hw || res.fs));
}

// unit — во сколько обошёлся спин в ставках (для покупки бонуса считаем от ставки, а не от цены).
async function finishRound(win, unit, b, feature) {
  const amount = win * b;
  if (amount > 0) {
    credit(amount);
    const x = amount / unit;
    S.best = Math.max(S.best, Math.round(x * 100) / 100);
    save();
    await bigWin(x, amount);
    msg(`ВЫИГРЫШ ${fmt(amount)}`, true);
    lastWin = feature ? 0 : amount;
    if (auto && (feature || x >= 50)) auto = 0;
  } else {
    msg('ДЕЛАЙТЕ ВАШИ СТАВКИ!');
  }
  await settleBalance();
  busy = false; skip = false;
  updateHUD();
  if (auto) {
    if (auto !== Infinity) auto--;
    updateHUD();
    if (auto) setTimeout(doSpin, S.turbo ? 150 : 450);
  }
}

async function buyBonus(kind) {
  const b = bet(), price = E.BUY[kind].cost * b;
  if (busy || auto) return;
  if (S.balance < price) { msg('НЕ ХВАТАЕТ КРЕДИТОВ'); return; }
  sfx.click();
  busy = true; skip = false; lastWin = 0;
  S.balance -= price; S.wagered += price; S.spins++;
  shownBalance = S.balance; save(); updateHUD();
  let win;
  if (kind === 'fs') win = await playFS(10, b, false);
  else win = await playHW(E.buyHoldAndWin(rng, kind), b, kind === 'super' ? 'SUPER HOLD & WIN' : 'HOLD & WIN', kind === 'super' ? 'Сборщик на поле · 4 ряда' : null);
  await finishRound(Math.min(win, E.MAX_WIN), b, b, true);
}

// --- Риск (удвоение) ----------------------------------------------------------------------
let gRounds = 0, gBusy = false;
function openGamble() {
  if (!lastWin || busy) return;
  gRounds = 0;
  $('gMsg').textContent = 'До 5 раз подряд, шанс 50/50';
  gambleUI();
  $('gambleModal').classList.add('open');
}
function gambleUI() {
  $('gStake').textContent = fmt(lastWin);
  $('gTo').textContent = fmt(lastWin * 2);
  const blocked = gBusy || !lastWin || lastWin * 2 > E.MAX_WIN * bet() || gRounds >= 5;
  $('gambleModal').querySelectorAll('[data-g="heads"],[data-g="tails"]').forEach(btn => { btn.disabled = blocked; });
  $('gambleModal').querySelector('[data-g="take"]').disabled = gBusy;
}
async function gamble(pick) {
  if (gBusy) return;
  if (pick === 'take' || !lastWin) { $('gambleModal').classList.remove('open'); updateHUD(); return; }
  gBusy = true; gambleUI();
  const side = rng() < 0.5 ? 'heads' : 'tails';
  const coin = $('gCoin');
  sfx.whoosh();
  const a = coin.animate([{ transform: 'rotateY(0) translateY(0)' }, { transform: 'rotateY(900deg) translateY(-50px)', offset: 0.5 },
    { transform: `rotateY(${1800 + (side === 'tails' ? 180 : 0)}deg) translateY(0)` }], { duration: 1100, easing: 'ease-out', fill: 'forwards' });
  await a.finished;
  // Выигрыш уже на балансе: риск ставит его на кон целиком.
  if (side === pick) {
    gRounds++;
    credit(lastWin);
    lastWin *= 2;
    $('gMsg').textContent = `Угадал! Теперь ${fmt(lastWin)}`;
    sfx.big();
    const [cx, cy] = centerOfEl(coin); FX.fountain(cx, cy, 30);
  } else {
    credit(-lastWin);
    $('gMsg').textContent = 'Не повезло…';
    lastWin = 0;
    sfx.lose(); mood('sad', 1500);
  }
  shownBalance = S.balance;
  gBusy = false;
  gambleUI(); updateHUD();
  if (!lastWin) setTimeout(() => $('gambleModal').classList.remove('open'), 1000);
}

// --- Таблица выплат --------------------------------------------------------------------
function buildPaytable() {
  const order = ['wild', 'seven', 'diamond', 'bell', 'grapes', 'orange', 'lemon', 'cherry'];
  $('paytable').innerHTML = order.map(s => {
    const p = E.SYMBOLS[s].pays.map(v => 'x' + fmt(v / 10)).join(' / ');
    return `<div class="pt">${useSvg('s-' + SYM_ART[s])}<div><b>${SYM_NAME[s]}</b>${s === 'wild' ? ' — заменяет всё, кроме монет и горшка' : ''}<br>${p}</div></div>`;
  }).join('') + `<div class="pt">${useSvg('s-pot')}<div><b>Горшок золота</b><br>3+ = фриспины</div></div>`
    + `<div class="pt">${useSvg('c-gold')}<div><b>Монета</b><br>x1–x50 или джекпот. 6+ = Hold &amp; Win</div></div>`;
}

// --- События ---------------------------------------------------------------------------
$('spinBtn').onclick = () => {
  if (auto && busy) { auto = 0; skip = true; updateHUD(); return; }
  if (auto && !busy) { auto = 0; updateHUD(); return; }
  doSpin();
};
addEventListener('keydown', e => {
  if (e.code === 'Space' && !document.querySelector('.modal.open') && !$('cine').classList.contains('open')) { e.preventDefault(); doSpin(); }
});
$('betUp').onclick = () => { if (!busy && S.betIdx < BETS.length - 1) { S.betIdx++; sfx.click(); save(); renderGrid(currentGrid); updateHUD(); } };
$('betDown').onclick = () => { if (!busy && S.betIdx > 0) { S.betIdx--; sfx.click(); save(); renderGrid(currentGrid); updateHUD(); } };
$('anteBtn').onclick = () => { if (!busy) { S.ante = !S.ante; sfx.click(); save(); updateHUD(); } };
$('turboBtn').onclick = () => { S.turbo = !S.turbo; sfx.click(); save(); updateHUD(); };
$('soundBtn').onclick = () => { S.sound = !S.sound; save(); updateHUD(); sfx.click(); };
$('infoBtn').onclick = () => $('infoModal').classList.add('open');
$('gambleBtn').onclick = openGamble;
$('autoBtn').onclick = () => {
  if (auto) { auto = 0; updateHUD(); return; }
  $('autoModal').classList.add('open');
};
$('autoOpts').innerHTML = [10, 25, 50, 100, Infinity].map(n => `<button class="btn" data-n="${n}">${n === Infinity ? '∞' : n}</button>`).join('');
$('autoOpts').onclick = e => {
  const n = e.target.dataset && e.target.dataset.n;
  if (!n) return;
  auto = n === 'Infinity' ? Infinity : Number(n);
  $('autoModal').classList.remove('open');
  updateHUD();
  if (!busy) doSpin();
};
document.querySelectorAll('[data-buy]').forEach(b => b.onclick = () => buyBonus(b.dataset.buy));
document.querySelectorAll('[data-g]').forEach(b => b.onclick = () => gamble(b.dataset.g));
document.querySelectorAll('[data-close]').forEach(b => b.onclick = () => b.closest('.modal').classList.remove('open'));
document.querySelectorAll('.modal').forEach(m => m.addEventListener('click', e => {
  if (e.target === m && m.id !== 'fsModal' && m.id !== 'gambleModal') m.classList.remove('open');
}));
$('resetBtn').onclick = () => {
  Object.assign(S, { balance: 10000, jar: 0, spins: 0, wagered: 0, won: 0, best: 0 });
  shownBalance = S.balance; lastWin = 0; save(); updateHUD();
  $('infoModal').classList.remove('open');
};
addEventListener('resize', () => { layout(); clearHighlights(); if (stickyShown.length) renderSticky(stickyShown); });

layout(); buildReels(); buildPaytable(); updateHUD();
})();
