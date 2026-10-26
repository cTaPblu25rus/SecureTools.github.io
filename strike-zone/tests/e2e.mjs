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
