// Browser tests: drives the built game in headless Chromium.
//   node tests/e2e.mjs [ui|bomb|dm|gg|all] [--shots]
// "ui" walks the menus and HUD with touch emulation; the others run full bot matches
// with the player on autopilot at accelerated speed and check the match report.
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { serve } from './serve.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const root = join(here, '..', 'www');
const out = join(here, 'out');
mkdirSync(out, { recursive: true });
const which = process.argv[2] || 'all';
const shots = process.argv.includes('--shots');

const srv = await serve(root);
const base = `http://127.0.0.1:${srv.address().port}/`;
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist', '--autoplay-policy=no-user-gesture-required'] });
let failed = 0;
const fail = (m) => { failed++; console.error('FAIL ' + m); };
const ok = (m) => console.log('  ok  ' + m);

async function newPage(touch) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 720 }, hasTouch: touch, isMobile: touch, deviceScaleFactor: 1 });
  const page = await ctx.newPage();
  const errors = [];
  page.on('pageerror', (e) => errors.push('pageerror: ' + e.message));
  page.on('console', (m) => { if (m.type() === 'error') errors.push('console: ' + m.text()); });
  return { page, errors, ctx };
}

async function tap(page, sel) {
  await page.locator(sel).first().scrollIntoViewIfNeeded().catch(() => {});
  const b = await page.locator(sel).first().boundingBox();
  if (!b) throw new Error('no element ' + sel);
  await page.touchscreen.tap(b.x + b.width / 2, b.y + b.height / 2);
}

async function uiTest() {
  console.log('UI flow (touch)');
  const { page, errors, ctx } = await newPage(true);
  await page.goto(base + 'index.html?speed=3');
  await page.waitForTimeout(1500);
  if (shots) await page.screenshot({ path: join(out, 'menu.png') });
  await tap(page, '#menu button.big');
  await page.waitForTimeout(300);
  if (!(await page.locator('#setup').isVisible())) fail('setup screen opens'); else ok('setup screen opens');
  if (shots) await page.screenshot({ path: join(out, 'setup.png') });
  await tap(page, '#setup [data-a=start]');
  await page.waitForTimeout(2500);
  if (!(await page.locator('#hud').isVisible())) fail('HUD visible in match'); else ok('HUD visible in match');
  if (shots) await page.screenshot({ path: join(out, 'ingame.png') });
  // Buy menu during freeze time.
  await tap(page, '#bBuy');
  try { await page.locator('#buy').waitFor({ state: 'visible', timeout: 3000 }); ok('buy menu opens'); } catch { fail('buy menu opens'); }
  const money0 = await page.evaluate(() => window.__game().player.money);
  await tap(page, '#buy [data-k=vest]');
  await page.waitForTimeout(200);
  const st = await page.evaluate(() => ({ money: window.__game().player.money, armor: window.__game().player.armor }));
  if (st.armor !== 100 || st.money !== money0 - 650) fail(`buying kevlar: ${JSON.stringify(st)}`); else ok('buying kevlar costs $650 and gives armor');
  if (shots) await page.screenshot({ path: join(out, 'buy.png') });
  await tap(page, '#buy [data-a=close]');
  await page.waitForTimeout(5000);
  // Look around with a swipe on the right half and walk with the joystick.
  const yaw0 = await page.evaluate(() => window.__game().player.yaw);
  const cdp = await ctx.newCDPSession(page);
  const touchMove = async (pts) => {
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [pts[0]] });
    for (const p of pts.slice(1)) { await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [p] }); await page.waitForTimeout(16); }
    await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  };
  const swipe = []; for (let i = 0; i <= 10; i++) swipe.push({ x: 800 + i * 15, y: 300, id: 1 });
  await touchMove(swipe);
  const yaw1 = await page.evaluate(() => window.__game().player.yaw);
  if (Math.abs(yaw1 - yaw0) < 0.05) fail('swipe turns the view'); else ok('swipe turns the view');
  const pos0 = await page.evaluate(() => { const p = window.__game().player; return [p.x, p.z]; });
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [{ x: 200, y: 500, id: 2 }] });
  for (let i = 0; i < 40; i++) { await cdp.send('Input.dispatchTouchEvent', { type: 'touchMove', touchPoints: [{ x: 200, y: 440, id: 2 }] }); await page.waitForTimeout(25); }
  if (shots) await page.screenshot({ path: join(out, 'joystick.png') });
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  const pos1 = await page.evaluate(() => { const p = window.__game().player; return [p.x, p.z]; });
  const moved = Math.hypot(pos1[0] - pos0[0], pos1[1] - pos0[1]);
  if (moved < 1) fail('joystick moves the player (moved ' + moved.toFixed(2) + ')'); else ok('joystick moves the player ' + moved.toFixed(1) + ' m');
  // Fire button shoots.
  const clip0 = await page.evaluate(() => window.__game().player.w.clip);
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchStart', touchPoints: [await center(page, '#bFire', 3)] });
  await page.waitForTimeout(80);
  await cdp.send('Input.dispatchTouchEvent', { type: 'touchEnd', touchPoints: [] });
  await page.waitForTimeout(100);
  const clip1 = await page.evaluate(() => window.__game().player.w.clip);
  if (clip1 >= clip0) fail(`fire button shoots (${clip0} -> ${clip1})`); else ok('fire button shoots');
  await tap(page, '#bReload');
  await page.waitForTimeout(3000);
  const clip2 = await page.evaluate(() => window.__game().player.w.clip);
  if (clip2 <= clip1) fail('reload refills the clip'); else ok('reload refills the clip');
  // Scoreboard and pause.
  await tap(page, '#bScore');
  await page.waitForTimeout(700);
  if (!(await page.locator('#board').isVisible())) fail('scoreboard toggles'); else ok('scoreboard toggles');
  if (shots) await page.screenshot({ path: join(out, 'score.png') });
  await tap(page, '#bScore');
  await tap(page, '#bMenu');
  await page.waitForTimeout(300);
  if (!(await page.locator('#pause').isVisible())) fail('pause menu opens'); else ok('pause menu opens');
  await tap(page, '#pause [data-a=settings]');
  await page.waitForTimeout(300);
  if (shots) await page.screenshot({ path: join(out, 'settings.png') });
  await tap(page, '#settings [data-a=back]');
  await tap(page, '#pause [data-a=resume]');
  await page.waitForTimeout(300);
  if (await page.locator('#pause').isVisible()) fail('resume closes pause'); else ok('resume closes pause');
  const back = await page.evaluate(() => window.onAndroidBack());
  if (back !== 'handled' || !(await page.locator('#pause').isVisible())) fail('android back pauses'); else ok('android back pauses');
  await tap(page, '#pause [data-a=leave]');
  await page.waitForTimeout(800);
  if (!(await page.locator('#menu').isVisible())) fail('leave returns to menu'); else ok('leave returns to menu');
  const exitVal = await page.evaluate(() => window.onAndroidBack());
  if (exitVal !== 'exit') fail('android back exits from main menu'); else ok('android back exits from main menu');
  if (errors.length) fail('no page errors: ' + errors.slice(0, 5).join(' | ')); else ok('no page errors');
  await ctx.close();
}


// Human-player flows driven through the real input object, with bots frozen.
async function flowTest() {
  console.log('Player flows');
  const { page, errors, ctx } = await newPage(false);
  const start = async (q) => {
    await page.goto(`${base}index.html?speed=4&${q}`);
    await page.waitForTimeout(600);
    await page.evaluate((q) => {
      const p = new URLSearchParams(q);
      window.__ui.h.onStart({ map: p.get('map') || 'sands', mode: p.get('mode') || 'bomb', team: p.get('team') || 't', bots: 3, diff: 'normal', rounds: 2, ff: false });
    }, q);
    await page.waitForFunction(() => window.__game && window.__game() && window.__game().player.alive, null, { timeout: 15000 });
    await page.evaluate(() => {
      const G = window.__game();
      for (const a of G.actors) if (a.brain && a !== G.player) a.brain.think = () => ({ wx: 0, wz: 0 });
    });
  };
  const until = (fn, arg, ms = 45000) => page.waitForFunction(fn, arg, { timeout: ms }).then(() => true, () => false);

  // Plant as T.
  await start('team=t&map=sands');
  await until(() => window.__game().phase === 'live');
  await page.evaluate(() => {
    const G = window.__game(), p = G.player;
    for (const a of G.actors) a.hasBomb = false;
    p.hasBomb = true;
    const c = G.grid.center(32, 8); p.x = c.x; p.z = c.z; p.y = 0;
    window.__input.held.use = true;
  });
  if (await until(() => window.__game().bomb.planted)) ok('T player plants the bomb'); else fail('T player plants the bomb');
  await page.evaluate(() => { window.__input.held.use = false; });
  if (shots) await page.screenshot({ path: join(out, 'flow_planted.png') });
  // Bomb explodes and T wins the round.
  if (await until(() => window.__game().score[0] === 1, null, 40000)) ok('bomb explosion wins the round for T'); else fail('bomb explosion wins the round for T');

  // Defuse as CT with a kit.
  await start('team=ct&map=depot');
  await until(() => window.__game().phase === 'live');
  await page.evaluate(() => {
    const G = window.__game(), p = G.player;
    const t = G.actors.find((a) => a.team === 0);
    const c = G.grid.center(22, 5); t.x = c.x; t.z = c.z; t.y = 0; t.hasBomb = true;
    G.plant(t, 'A');
    t.alive = false; t.hp = 0;
    p.kit = true; p.x = c.x + 0.6; p.z = c.z; p.y = 0;
    window.__input.held.use = true;
  });
  if (await until(() => window.__game().bomb.defused)) ok('CT player defuses the bomb'); else fail('CT player defuses the bomb');
  await page.evaluate(() => { window.__input.held.use = false; });
  const sc = await page.evaluate(() => window.__game().score);
  if (sc[1] >= 1) ok('defuse wins the round for CT'); else fail('defuse wins the round for CT ' + JSON.stringify(sc));

  // Grenade, drop and pickup, spectating.
  await start('team=ct&map=sands');
  await until(() => window.__game().phase === 'live');
  const nade = await page.evaluate(async () => {
    const G = window.__game(), p = G.player;
    const e = G.actors.find((a) => a.team !== p.team && a.alive);
    const c = G.grid.center(20, 26);
    p.x = c.x; p.z = c.z; p.y = 0; e.x = c.x; e.z = c.z - 6; e.y = 0;
    p.yaw = 0; p.pitch = 0.1;
    p.nades.he = 1; p.nadeKey = 'he';
    const waitGame = async (sec) => { const t0 = G.time; while (G.time - t0 < sec) await new Promise((r) => setTimeout(r, 50)); };
    window.__input.pressed.add('slot4');
    await waitGame(0.2);
    window.__input.held.fire = true;
    await waitGame(1.2);
    window.__input.held.fire = false;
    const hp0 = 100;
    await waitGame(2.5);
    return { thrown: p.nades.he === 0, hp0, hp1: e.hp, slot: p.slot };
  });
  if (nade.thrown && nade.hp1 < nade.hp0) ok('HE grenade thrown and damages enemy (' + nade.hp0 + ' -> ' + nade.hp1 + ')'); else fail('HE grenade ' + JSON.stringify(nade));
  const silence = await page.evaluate(async () => {
    const G = window.__game(), p = G.player;
    const waitGame = async (sec) => { const t0 = G.time; while (G.time - t0 < sec) await new Promise((r) => setTimeout(r, 50)); };
    p.slots[1].silenced = false;
    window.__input.pressed.add('slot2');
    await waitGame(0.8);
    window.__input.pressed.add('scope');
    await waitGame(2);
    return { silenced: p.slots[1].silenced, key: p.slots[1].key };
  });
  if (silence.key !== 'usp' || silence.silenced) ok('silencer toggles on USP'); else fail('silencer ' + JSON.stringify(silence));
  const drop = await page.evaluate(async () => {
    const G = window.__game(), p = G.player;
    const waitGame = async (sec) => { const t0 = G.time; while (G.time - t0 < sec) await new Promise((r) => setTimeout(r, 50)); };
    window.__input.pressed.add('slot2');
    await waitGame(0.5);
    window.__input.pressed.add('drop');
    await waitGame(0.5);
    const dropped = !p.slots[1] && G.drops.length > 0;
    const d = G.drops[0];
    await waitGame(1.0);
    p.x = d.x; p.z = d.z;
    await waitGame(1.0);
    return { dropped, picked: !!p.slots[1] };
  });
  if (drop.dropped && drop.picked) ok('drop and pick up a weapon'); else fail('drop/pickup ' + JSON.stringify(drop));
  const spec = await page.evaluate(async () => {
    const G = window.__game(), p = G.player;
    G.kill(p, null, 'fall');
    await new Promise((r) => setTimeout(r, 500));
    return { view: G.viewActor !== p && G.viewActor.alive && G.viewActor.team === p.team, specVisible: document.getElementById('spec').classList.contains('on') };
  });
  if (spec.view && spec.specVisible) ok('dead player spectates a teammate'); else fail('spectate ' + JSON.stringify(spec));
  if (shots) await page.screenshot({ path: join(out, 'flow_spectate.png') });

  // Match end and rematch.
  await page.evaluate(() => { const G = window.__game(); G.score = [0, 1]; G.endRound(1, 'elim'); });
  if (await until(() => !document.getElementById('matchEnd').classList.contains('hidden'), null, 30000)) ok('match end screen'); else fail('match end screen');
  if (shots) await page.screenshot({ path: join(out, 'flow_matchend.png') });
  await page.evaluate(() => document.querySelector('#matchEnd [data-a=again]').click());
  if (await until(() => window.__game() && window.__game().round === 1 && !window.__game().over)) ok('rematch starts a new match'); else fail('rematch');

  // Deathmatch respawn and free buy anywhere.
  await start('mode=dm&map=arena');
  const dm = await page.evaluate(async () => {
    const G = window.__game(), p = G.player;
    const bought = G.buy(p, 'awp');
    G.kill(p, null, 'fall');
    const t0 = G.time; while (G.time - t0 < 3) await new Promise((r) => setTimeout(r, 50));
    return { bought, alive: p.alive, primary: p.slots[0] && p.slots[0].key, money: p.money };
  });
  if (dm.bought && dm.alive && dm.primary === 'awp') ok('deathmatch: free buy, respawn keeps chosen weapon'); else fail('deathmatch ' + JSON.stringify(dm));

  // Arms race progression.
  await start('mode=gg&map=arena');
  const gg = await page.evaluate(async () => {
    const G = window.__game(), p = G.player;
    const e = G.actors.find((a) => a !== p && a.alive);
    G.kill(e, p, 'glock');
    await new Promise((r) => setTimeout(r, 200));
    return { level: p.ggLevel, weapon: p.w.key };
  });
  if (gg.level === 1 && gg.weapon === 'usp') ok('arms race: kill advances to next weapon'); else fail('arms race ' + JSON.stringify(gg));

  if (errors.length) fail('no page errors: ' + errors.slice(0, 5).join(' | ')); else ok('no page errors');
  await ctx.close();
}

async function center(page, sel, id) {
  const b = await page.locator(sel).boundingBox();
  return { x: b.x + b.width / 2, y: b.y + b.height / 2, id };
}

async function matchTest(mode, map, seconds, check) {
  console.log(`Bot match: ${mode} on ${map}`);
  const { page, errors, ctx } = await newPage(false);
  const speed = 4;
  await page.goto(`${base}index.html?autotest=1&mode=${mode}&map=${map}&speed=${speed}&rounds=3&bots=5&diff=hard`);
  const t0 = Date.now();
  let rep = null;
  let shot = 0;
  while (Date.now() - t0 < seconds * 1000) {
    await page.waitForTimeout(3000);
    rep = await page.evaluate(() => window.__report);
    if (shots && rep && shot < 3 && rep.time > 20 + shot * 40) { await page.screenshot({ path: join(out, `${mode}_${map}_${shot}.png`) }); shot++; }
    if (rep && rep.over) break;
  }
  console.log('        report: ' + JSON.stringify({ t: Math.round(rep.time), round: rep.round, score: rep.score, kills: rep.kills, over: rep.over, fps: rep.fps, calls: rep.calls, tris: rep.tris, bomb: rep.bomb, gg: rep.ggTop, stuck: rep.stuck }));
  check(rep);
  if (errors.length || rep.errors.length) fail('no page errors: ' + [...errors, ...rep.errors].slice(0, 5).join(' | ')); else ok('no page errors');
  await ctx.close();
  return rep;
}

try {
  if (which === 'ui' || which === 'all') await uiTest();
  if (which === 'flow' || which === 'all') await flowTest();
  if (which === 'bomb' || which === 'all') {
    for (const map of ['sands', 'depot']) {
      await matchTest('bomb', map, 150, (r) => {
        if (r.kills < 3) fail('bots fight (kills ' + r.kills + ')'); else ok('bots fight: ' + r.kills + ' kills');
        if (r.round < 3) fail('rounds advance (round ' + r.round + ')'); else ok('rounds advance to ' + r.round);
        if (r.stuck > 1) fail('bots not stuck (' + r.stuck + ')'); else ok('bots are not stuck');
      });
    }
  }
  if (which === 'dm' || which === 'all') {
    await matchTest('dm', 'arena', 50, (r) => { if (r.kills < 5) fail('deathmatch kills ' + r.kills); else ok('deathmatch kills: ' + r.kills); });
  }
  if (which === 'gg' || which === 'all') {
    await matchTest('gg', 'arena', 60, (r) => { if (r.ggTop < 2) fail('arms race levels ' + r.ggTop); else ok('arms race top level ' + r.ggTop); });
  }
} catch (e) {
  fail(e.stack);
}
await browser.close();
srv.close();
console.log(failed ? `\n${failed} failures` : '\nall e2e checks passed');
process.exit(failed ? 1 : 0);
