/*
 * Lucky Clover: Penny Rush — математика слота.
 * Чистые функции без DOM: интерфейс (index.html) и симулятор (tools/sim.js)
 * используют один и тот же код. Все выигрыши считаются в множителях ставки.
 */
(function (root) {
  'use strict';

  const REELS = 5;
  const ROWS = 3;
  const MAX_ROWS = 5;          // в Hold & Win можно открыть ещё 2 ряда
  const MAX_WIN = 1000;        // потолок выигрыша за спин/бонус, x ставки
  const LINE_COUNT = 10;

  // Платят как множитель ставки на линию (ставка / 10) за 3/4/5 подряд слева.
  const SYMBOLS = {
    cherry:  { pays: [8, 20, 40] },
    lemon:   { pays: [8, 20, 40] },
    orange:  { pays: [12, 30, 60] },
    grapes:  { pays: [12, 30, 60] },
    bell:    { pays: [20, 60, 120] },
    diamond: { pays: [30, 100, 200] },
    seven:   { pays: [50, 160, 400] },
    wild:    { pays: [60, 200, 600] },
    coin:    { pays: null },
    scatter: { pays: null },
  };

  const LINES = [
    [1, 1, 1, 1, 1], [0, 0, 0, 0, 0], [2, 2, 2, 2, 2], [0, 1, 2, 1, 0], [2, 1, 0, 1, 2],
    [0, 0, 1, 2, 2], [2, 2, 1, 0, 0], [1, 0, 0, 0, 1], [1, 2, 2, 2, 1], [1, 0, 1, 2, 1],
  ];

  // Веса символов по барабанам. Wild только на 2–4, scatter не больше одного на барабан.
  const BASE_WEIGHTS = [
    { cherry: 30, lemon: 30, orange: 24, grapes: 24, bell: 16, diamond: 11, seven: 7, wild: 0, coin: 12.5, scatter: 4.6 },
    { cherry: 30, lemon: 30, orange: 24, grapes: 24, bell: 16, diamond: 11, seven: 7, wild: 5, coin: 12.5, scatter: 4.6 },
    { cherry: 30, lemon: 30, orange: 24, grapes: 24, bell: 16, diamond: 11, seven: 7, wild: 5, coin: 12.5, scatter: 4.6 },
    { cherry: 30, lemon: 30, orange: 24, grapes: 24, bell: 16, diamond: 11, seven: 7, wild: 5, coin: 12.5, scatter: 4.6 },
    { cherry: 30, lemon: 30, orange: 24, grapes: 24, bell: 16, diamond: 11, seven: 7, wild: 0, coin: 12.5, scatter: 4.6 },
  ];
  const FS_WEIGHTS = BASE_WEIGHTS.map((w, i) => Object.assign({}, w, {
    cherry: 22, lemon: 22, wild: i === 0 || i === 4 ? 0 : 8, scatter: 3.6,
  }));

  // Шанс x2: ставка x1.5, монет и scatter заметно больше.
  const ANTE_COST = 1.5;
  const ANTE_COIN_MULT = 1.65;
  const ANTE_SCATTER_MULT = 1.5;

  const COIN_VALUES = [1, 2, 3, 4, 5, 8, 10, 15, 20, 25, 50];
  const COIN_VALUE_WEIGHTS = [300, 250, 150, 100, 80, 40, 30, 15, 10, 6, 2];
  const JACKPOTS = { MINI: 20, MINOR: 50, MAJOR: 200, GRAND: 1000 };
  const JP_CHANCE = { MINI: 0.012, MINOR: 0.004, MAJOR: 0.0008 };

  const HW_TRIGGER = 6;        // столько монет запускает Hold & Win
  const HW_RESPINS = 3;
  const HW_LAND_CHANCE = 0.045; // шанс монеты в пустой ячейке за респин
  // Шансы, что новая монета в Hold & Win окажется особой.
  const HW_SPECIAL = { collect: 0.035, multi: 0.02, boost: 0.035, key: 0.05 };

  const FS_AWARD = { 3: 8, 4: 12, 5: 20 };
  const FS_RETRIGGER = 5;

  const JAR_SIZE = 300;         // копилка: столько монет в базе = гарантированный Hold & Win
  const FLIP_CHANCE = 1 / 30;   // «Подброс пенни» — случайная фича в базовой игре

  const BUY = {
    hw: { cost: 41, label: 'Hold & Win' },
    super: { cost: 62, label: 'Super Hold & Win' },
    fs: { cost: 34, label: 'Фриспины' },
  };

  function mulberry32(seed) {
    let a = seed >>> 0;
    return function () {
      a = (a + 0x6d2b79f5) >>> 0;
      let t = a;
      t = Math.imul(t ^ (t >>> 15), t | 1);
      t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
      return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
    };
  }

  function cryptoRng() {
    if (root.crypto && root.crypto.getRandomValues) {
      const buf = new Uint32Array(1);
      return function () {
        root.crypto.getRandomValues(buf);
        return buf[0] / 4294967296;
      };
    }
    return Math.random;
  }

  function pickWeighted(rng, entries) {
    let total = 0;
    for (const [, w] of entries) total += w;
    let r = rng() * total;
    for (const [k, w] of entries) {
      r -= w;
      if (r < 0) return k;
    }
    return entries[entries.length - 1][0];
  }

  function randInt(rng, lo, hi) {
    return lo + Math.floor(rng() * (hi - lo + 1));
  }

  // --- Монеты ---------------------------------------------------------------

  function randomCoin(rng, opts) {
    const r = rng();
    let acc = 0;
    for (const jp of ['MAJOR', 'MINOR', 'MINI']) {
      acc += JP_CHANCE[jp];
      if (r < acc) return { kind: 'jp', jp, v: JACKPOTS[jp] };
    }
    let total = 0;
    for (const w of COIN_VALUE_WEIGHTS) total += w;
    let x = rng() * total;
    let v = COIN_VALUES[0];
    for (let i = 0; i < COIN_VALUES.length; i++) {
      x -= COIN_VALUE_WEIGHTS[i];
      if (x < 0) { v = COIN_VALUES[i]; break; }
    }
    if (opts && opts.hw) {
      const s = rng();
      let a = 0;
      for (const kind of ['collect', 'multi', 'boost', 'key']) {
        a += HW_SPECIAL[kind];
        if (s < a) {
          if (kind === 'key' && !opts.canKey) break;
          if (kind === 'multi') return { kind, v: 0 };
          if (kind === 'collect') return { kind, v: 0 };
          return { kind, v };
        }
      }
    }
    return { kind: 'cash', v };
  }

  // --- Базовая сетка -------------------------------------------------------

  function makeCell(rng, sym) {
    return sym === 'coin' ? { s: 'coin', coin: randomCoin(rng) } : { s: sym };
  }

  function genGrid(rng, weights, ante) {
    const grid = [];
    for (let r = 0; r < REELS; r++) {
      const w = Object.assign({}, weights[r]);
      if (ante) {
        w.coin *= ANTE_COIN_MULT;
        w.scatter *= ANTE_SCATTER_MULT;
      }
      const col = [];
      let hasScatter = false;
      for (let y = 0; y < ROWS; y++) {
        const entries = Object.entries(w).filter(([k, v]) => v > 0 && !(k === 'scatter' && hasScatter));
        const sym = pickWeighted(rng, entries);
        if (sym === 'scatter') hasScatter = true;
        col.push(makeCell(rng, sym));
      }
      grid.push(col);
    }
    return grid;
  }

  function evalLines(grid) {
    const wins = [];
    let total = 0;
    LINES.forEach((line, li) => {
      const cells = line.map((y, x) => grid[x][y].s);
      // Линия из одних wild платит как wild, иначе wild заменяет первый обычный символ.
      let base = null;
      for (const s of cells) {
        if (s !== 'wild') { base = s; break; }
      }
      const countFor = (target) => {
        let n = 0;
        for (const s of cells) {
          if (s === target || (s === 'wild' && SYMBOLS[target].pays)) n++;
          else break;
        }
        return n;
      };
      let best = null;
      let wildRun = 0;
      for (const s of cells) { if (s === 'wild') wildRun++; else break; }
      if (wildRun >= 3) best = { sym: 'wild', count: wildRun, pay: SYMBOLS.wild.pays[wildRun - 3] };
      if (base && SYMBOLS[base].pays) {
        const n = countFor(base);
        if (n >= 3) {
          const pay = SYMBOLS[base].pays[n - 3];
          if (!best || pay > best.pay) best = { sym: base, count: n, pay };
        }
      }
      if (best) {
        const win = best.pay / LINE_COUNT;
        total += win;
        wins.push({ line: li, sym: best.sym, count: best.count, win, cells: line.slice(0, best.count).map((y, x) => [x, y]) });
      }
    });
    return { wins, total };
  }

  function coinPositions(grid) {
    const out = [];
    for (let x = 0; x < REELS; x++) for (let y = 0; y < ROWS; y++) if (grid[x][y].s === 'coin') out.push([x, y]);
    return out;
  }

  function scatterPositions(grid) {
    const out = [];
    for (let x = 0; x < REELS; x++) for (let y = 0; y < ROWS; y++) if (grid[x][y].s === 'scatter') out.push([x, y]);
    return out;
  }

  // «Подброс пенни»: орёл — 1–2 барабана целиком становятся wild,
  // решка — на поле падает дождь из 2–5 монет.
  function applyFlip(rng, grid) {
    if (rng() < 0.5) {
      const pool = [1, 2, 3];
      const n = rng() < 0.3 ? 2 : 1;
      const reels = [];
      for (let i = 0; i < n; i++) reels.push(pool.splice(Math.floor(rng() * pool.length), 1)[0]);
      for (const x of reels) for (let y = 0; y < ROWS; y++) {
        if (grid[x][y].s !== 'coin' && grid[x][y].s !== 'scatter') grid[x][y] = { s: 'wild' };
      }
      return { side: 'heads', reels };
    }
    const free = [];
    for (let x = 0; x < REELS; x++) for (let y = 0; y < ROWS; y++) {
      if (grid[x][y].s !== 'coin' && grid[x][y].s !== 'scatter') free.push([x, y]);
    }
    const n = Math.min(free.length, randInt(rng, 2, 5));
    const cells = [];
    for (let i = 0; i < n; i++) {
      const [x, y] = free.splice(Math.floor(rng() * free.length), 1)[0];
      grid[x][y] = makeCell(rng, 'coin');
      cells.push([x, y]);
    }
    return { side: 'tails', cells };
  }

  // --- Hold & Win -----------------------------------------------------------

  function coinTotal(board) {
    let t = 0;
    for (const c of board) if (c) t += c.v;
    return t;
  }

  // Начальная доска: rows*REELS ячеек, индекс = y*REELS + x, y=0 — нижний ряд из видимых трёх.
  // Возвращает полный сценарий бонуса для проигрывания в интерфейсе.
  function playHoldAndWin(rng, startCoins, opts) {
    opts = opts || {};
    let rows = opts.rows || ROWS;
    const board = new Array(MAX_ROWS * REELS).fill(null);
    for (const { x, y, coin } of startCoins) board[y * REELS + x] = Object.assign({}, coin);
    const steps = [];
    let respins = HW_RESPINS;
    const landChance = opts.landChance || HW_LAND_CHANCE;
    let grand = false;
    let guard = 0;

    const snapshot = () => board.map(c => (c ? Object.assign({}, c) : null));

    while (respins > 0 && guard++ < 500) {
      respins--;
      const landed = [];
      const cellCount = rows * REELS;
      for (let i = 0; i < cellCount; i++) {
        if (board[i]) continue;
        if (rng() < landChance) {
          const coin = randomCoin(rng, { hw: true, canKey: rows < MAX_ROWS });
          board[i] = coin;
          landed.push(i);
        }
      }
      const effects = [];
      if (landed.length) {
        respins = HW_RESPINS;
        // Порядок: ключи → бусты → множители → сборщики.
        for (const i of landed) {
          if (board[i].kind === 'key' && rows < MAX_ROWS) {
            rows++;
            board[i].kind = 'cash';
            effects.push({ type: 'unlock', at: i, rows });
          }
        }
        for (const i of landed) {
          if (board[i].kind !== 'boost') continue;
          const add = board[i].v;
          for (let j = 0; j < board.length; j++) if (board[j] && j !== i) board[j].v += add;
          effects.push({ type: 'boost', at: i, add });
        }
        for (const i of landed) {
          if (board[i].kind !== 'multi') continue;
          board[i].v = 0;
          for (let j = 0; j < board.length; j++) if (board[j] && j !== i) board[j].v *= 2;
          effects.push({ type: 'multi', at: i });
        }
        for (const i of landed) {
          if (board[i].kind !== 'collect') continue;
          let sum = 0;
          for (let j = 0; j < board.length; j++) if (board[j] && j !== i) sum += board[j].v;
          board[i].v += sum;
          effects.push({ type: 'collect', at: i, sum });
        }
      }
      let filled = true;
      for (let i = 0; i < ROWS * REELS; i++) if (!board[i]) { filled = false; break; }
      const total = coinTotal(board);
      steps.push({ landed, effects, respins, rows, board: snapshot(), total });
      if (filled) { grand = true; break; }
      if (total >= MAX_WIN) break;
    }

    let total = coinTotal(board) + (grand ? JACKPOTS.GRAND : 0);
    const capped = total >= MAX_WIN;
    total = Math.min(total, MAX_WIN);
    return { start: startCoins, startRows: opts.rows || ROWS, steps, grand, total, capped };
  }

  function coinsFromGrid(grid) {
    return coinPositions(grid).map(([x, y]) => ({ x, y: ROWS - 1 - y, coin: grid[x][y].coin }));
  }

  // Монеты для покупки бонуса / копилки: добираем до минимума случайными.
  function fillCoins(rng, coins, need) {
    const taken = new Set(coins.map(c => c.y * REELS + c.x));
    const out = coins.slice();
    while (out.length < need) {
      const i = Math.floor(rng() * ROWS * REELS);
      if (taken.has(i)) continue;
      taken.add(i);
      out.push({ x: i % REELS, y: Math.floor(i / REELS), coin: randomCoin(rng) });
    }
    return out;
  }

  // --- Спины ----------------------------------------------------------------

  // Один спин базовой игры. state: { jar } — копилка между спинами.
  function spinBase(rng, state, opts) {
    opts = opts || {};
    const grid = genGrid(rng, BASE_WEIGHTS, opts.ante);
    let flip = null;
    let preGrid = null;
    if (rng() < FLIP_CHANCE) {
      preGrid = grid.map(col => col.map(c => Object.assign({}, c)));
      flip = applyFlip(rng, grid);
    }
    const res = resolveSpin(rng, grid, state, { flip, base: true });
    res.preGrid = preGrid;
    return res;
  }

  function resolveSpin(rng, grid, state, extra) {
    const lines = evalLines(grid);
    const coins = coinPositions(grid);
    const scatters = scatterPositions(grid);
    const res = {
      grid, flip: extra.flip || null, lines: lines.wins, lineWin: lines.total,
      coins, scatters, hw: null, fs: null, jarFull: false,
    };
    if (extra.base && state) {
      state.jar = (state.jar || 0) + coins.length;
      if (state.jar >= JAR_SIZE && coins.length < HW_TRIGGER) {
        res.jarFull = true;
        state.jar = 0;
      }
    }
    if (coins.length >= HW_TRIGGER || res.jarFull) {
      const start = fillCoins(rng, coinsFromGrid(grid), HW_TRIGGER);
      res.hw = playHoldAndWin(rng, start);
      if (extra.base && state && !res.jarFull) state.jar = Math.max(0, state.jar - coins.length);
    }
    if (scatters.length >= 3) res.fs = FS_AWARD[Math.min(5, scatters.length)];
    res.total = res.lineWin + (res.hw ? res.hw.total : 0);
    return res;
  }

  // Фриспины. mode: 'sticky' — wild прилипают до конца; 'multi' — множитель растёт на +1 каждый спин.
  function playFreeSpins(rng, count, mode, ante) {
    const spins = [];
    const sticky = [];
    let left = count;
    let mult = 1;
    let total = 0;
    let guard = 0;
    while (left > 0 && guard++ < 200) {
      left--;
      const grid = genGrid(rng, FS_WEIGHTS, ante);
      if (mode === 'sticky') {
        for (const [x, y] of sticky) grid[x][y] = { s: 'wild' };
        for (let x = 0; x < REELS; x++) for (let y = 0; y < ROWS; y++) {
          if (grid[x][y].s === 'wild' && !sticky.some(([a, b]) => a === x && b === y)) sticky.push([x, y]);
        }
      }
      const res = resolveSpin(rng, grid, null, {});
      const usedMult = mode === 'multi' ? mult : 1;
      res.mult = usedMult;
      res.lineWin *= usedMult;
      res.total = res.lineWin + (res.hw ? res.hw.total : 0);
      if (mode === 'multi') mult++;
      if (res.fs) { left += FS_RETRIGGER; res.retrigger = FS_RETRIGGER; }
      res.left = left;
      res.sticky = sticky.map(p => p.slice());
      total += res.total;
      res.runningTotal = Math.min(total, MAX_WIN);
      spins.push(res);
      if (total >= MAX_WIN) break;
    }
    const capped = total >= MAX_WIN;
    return { mode, spins, total: Math.min(total, MAX_WIN), capped };
  }

  function buyHoldAndWin(rng, kind) {
    if (kind === 'super') {
      const coins = fillCoins(rng, [], HW_TRIGGER - 1);
      const taken = new Set(coins.map(c => c.y * REELS + c.x));
      let i;
      do { i = Math.floor(rng() * ROWS * REELS); } while (taken.has(i));
      coins.push({ x: i % REELS, y: Math.floor(i / REELS), coin: { kind: 'collect', v: 0 } });
      coins.push(...fillCoins(rng, coins, HW_TRIGGER + 2).slice(coins.length));
      return playHoldAndWin(rng, coins, { rows: 4 });
    }
    return playHoldAndWin(rng, fillCoins(rng, [], HW_TRIGGER));
  }

  const api = {
    REELS, ROWS, MAX_ROWS, MAX_WIN, LINES, SYMBOLS, JACKPOTS, HW_TRIGGER, HW_RESPINS,
    FS_AWARD, FS_RETRIGGER, JAR_SIZE, ANTE_COST, BUY, COIN_VALUES,
    mulberry32, cryptoRng, randomCoin, genGrid, evalLines, spinBase, playHoldAndWin,
    playFreeSpins, buyHoldAndWin, BASE_WEIGHTS,
  };
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.SlotEngine = api;
})(typeof globalThis !== 'undefined' ? globalThis : this);
