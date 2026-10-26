import { TAU, angDiff } from './world.js';
import { SHIP_R } from './config.js';

// Autopilot used for the menu attract mode and the trailer capture.
// Scores candidate angles by predicted collisions, shards and items ahead.
export function botThink(run, world, time, turnRate) {
  const z = run.z; const speed = run.speed;
  const look = speed * 1.6 + 12;
  const N = 72;
  let best = 0; let bestCost = Infinity;
  for (let i = 0; i < N; i++) {
    const delta = (i / N - 0.5) * TAU;
    const th = run.theta + delta;
    const turnT = Math.abs(delta) / turnRate;
    let cost = Math.abs(delta) * 0.5;
    for (const o of world.obstacles) {
      const ahead = z - (o.z + o.depth / 2);
      if (ahead < -o.depth - 1 || ahead > look) continue;
      const tArr = Math.max(0, ahead) / speed;
      const a = world.angleOf(o, time + tArr);
      const urgency = 1 + 30 / (ahead + 3);
      if (world.angularClear(o, a, th) < 0.45) {
        if (o.low) cost += 2 * urgency; else cost += 40 * urgency;
      }
      // the sweep from the current angle must also be clear when we pass it
      if (tArr < turnT + 0.15) {
        for (let k = 1; k <= 4; k++) {
          const phi = run.theta + delta * (k / 4);
          const tk = turnT * (k / 4);
          if (Math.abs(tk - tArr) < 0.2 + o.depth / speed && world.angularClear(o, a, phi) < 0.2 && !(o.low && run.h > o.h)) {
            cost += o.low ? 6 : 60;
          }
        }
      }
    }
    for (const s of world.shards) {
      const ahead = z - s.z;
      if (ahead < 0 || ahead > look) continue;
      if (Math.abs(angDiff(s.theta, th)) * SHIP_R < 0.9) cost -= 1.6 * (1 - ahead / look);
    }
    for (const it of world.items) {
      const ahead = z - it.z;
      if (ahead < 0 || ahead > look) continue;
      if (Math.abs(angDiff(it.theta, th)) * SHIP_R < 1.0) cost -= 6;
    }
    if (cost < bestCost) { bestCost = cost; best = delta; }
  }
  // jump if a low barrier is about to hit us at the current angle
  let jump = false;
  if (!run.airborne) {
    for (const o of world.obstacles) {
      const ahead = z - (o.z + o.depth / 2);
      if (ahead < 0 || ahead > speed * 0.32) continue;
      const a = world.angleOf(o, time + ahead / speed);
      if (o.low && world.angularClear(o, a, run.theta + best * 0.3) < 0.25 && ahead > speed * 0.12) jump = true;
    }
  }
  return { target: run.theta + best, jump };
}
