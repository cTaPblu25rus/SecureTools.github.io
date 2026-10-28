// Монте-Карло проверка RTP: node lucky-clover/tools/sim.js [спинов] [seed]
const E = require('../engine.js');

const N = Number(process.argv[2] || 2e6);
const rng = E.mulberry32(Number(process.argv[3] || 12345));

function base(ante, fsMode) {
  const state = { jar: 0 };
  const cost = ante ? E.ANTE_COST : 1;
  let won = 0, line = 0, hw = 0, fs = 0, hwCount = 0, fsCount = 0, jar = 0, flip = 0, hits = 0, max = 0;
  for (let i = 0; i < N; i++) {
    const r = E.spinBase(rng, state, { ante });
    let w = r.total;
    line += r.lineWin;
    if (r.hw) { hw += r.hw.total; hwCount++; }
    if (r.jarFull) jar++;
    if (r.flip) flip++;
    if (r.fs) {
      const f = E.playFreeSpins(rng, r.fs, fsMode, ante);
      fs += f.total; fsCount++; w += f.total;
    }
    w = Math.min(w, E.MAX_WIN);
    if (w > 0) hits++;
    if (w > max) max = w;
    won += w;
  }
  const pct = v => (100 * v / (N * cost)).toFixed(2) + '%';
  console.log(`--- base ante=${ante} fs=${fsMode}`);
  console.log(`RTP ${pct(won)}  lines ${pct(line)}  H&W ${pct(hw)}  FS ${pct(fs)}  hit ${(100 * hits / N).toFixed(1)}%  max x${max}`);
  console.log(`H&W 1/${(N / hwCount).toFixed(0)} (jar ${jar})  FS 1/${(N / fsCount).toFixed(0)}  flip 1/${(N / flip).toFixed(0)}`);
  console.log(`avg H&W x${(hw / hwCount).toFixed(1)}  avg FS x${(fs / fsCount).toFixed(1)}`);
}

function buys() {
  const M = Math.max(20000, Math.floor(N / 20));
  for (const kind of ['hw', 'super']) {
    let t = 0, grand = 0, capped = 0;
    for (let i = 0; i < M; i++) {
      const r = E.buyHoldAndWin(rng, kind);
      t += r.total; if (r.grand) grand++; if (r.capped) capped++;
    }
    console.log(`buy ${kind}: avg x${(t / M).toFixed(1)} cost x${E.BUY[kind].cost} RTP ${(100 * t / M / E.BUY[kind].cost).toFixed(2)}%  grand 1/${(M / Math.max(1, grand)).toFixed(0)} capped 1/${(M / Math.max(1, capped)).toFixed(0)}`);
  }
  for (const mode of ['sticky', 'multi']) {
    let t = 0;
    for (let i = 0; i < M; i++) t += E.playFreeSpins(rng, 10, mode).total;
    console.log(`buy fs ${mode}: avg x${(t / M).toFixed(1)} cost x${E.BUY.fs.cost} RTP ${(100 * t / M / E.BUY.fs.cost).toFixed(2)}%`);
  }
}

base(false, 'sticky');
base(false, 'multi');
base(true, 'sticky');
buys();
