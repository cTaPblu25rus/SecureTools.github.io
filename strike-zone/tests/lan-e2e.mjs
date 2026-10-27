// Two browsers play a LAN match through the real Java server (dist/strikezone-lan.jar).
//   node tests/lan-e2e.mjs [--shots]
import { chromium } from 'playwright';
import { mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';
import { startLanServer } from './lan.mjs';

const here = dirname(fileURLToPath(import.meta.url));
const out = join(here, 'out');
mkdirSync(out, { recursive: true });
const shots = process.argv.includes('--shots');
const PORT = 48000 + Math.floor(Math.random() * 100);
const server = await startLanServer(PORT);
const base = `http://127.0.0.1:${PORT}/index.html`;
const browser = await chromium.launch({ args: ['--use-angle=swiftshader', '--enable-unsafe-swiftshader', '--ignore-gpu-blocklist'] });
let failed = 0;
const fail = (m) => { failed++; console.error('FAIL ' + m); };
const ok = (m) => console.log('  ok  ' + m);
const check = (cond, m) => (cond ? ok(m) : fail(m));

async function page(name) {
  const ctx = await browser.newContext({ viewport: { width: 800, height: 450 } });
  const p = await ctx.newPage();
  p.errors = [];
  p.on('pageerror', (e) => p.errors.push(name + ': ' + e.message));
  p.on('console', (m) => { if (m.type() === 'error') p.errors.push(name + ' console: ' + m.text()); });
  await p.goto(base);
  await p.waitForTimeout(800);
  return p;
}
const click = (p, sel) => p.evaluate((s) => document.querySelector(s).click(), sel);
const until = (p, fn, arg, ms = 20000) => p.waitForFunction(fn, arg, { timeout: ms }).then(() => true, () => false);

try {
  const host = await page('host');
  const client = await page('client');
  console.log('LAN match');

  // Host: LAN menu -> create game -> setup -> lobby.
  await click(host, '[data-go=lan]');
  await host.fill('#lanName', 'Хост');
  await click(host, '#lan [data-a=host]');
  await click(host, '#setup [data-a=start]');
  check(await until(host, () => window.__session() && window.__session().role === 'host' && !document.getElementById('lobby').classList.contains('hidden') && document.querySelectorAll('.lobbyTable tr').length === 2), 'host opens a lobby');

  // Client: join by address.
  await click(client, '[data-go=lan]');
  await client.fill('#lanName', 'Гость');
  await client.fill('#lanIp', `127.0.0.1:${PORT}`);
  await click(client, '#lan [data-a=join]');
  check(await until(host, () => document.querySelectorAll('.lobbyTable tr').length === 3), 'host lobby lists the client');
  check(await until(client, () => document.querySelectorAll('.lobbyTable tr').length === 3 && document.querySelector('.lobbyTable').textContent.includes('Хост')), 'client sees the lobby');

  // Teams: client picks CT, host picks T.
  await client.evaluate(() => [...document.querySelectorAll('#lobbyTeam button')][2].click());
  await host.evaluate(() => [...document.querySelectorAll('#lobbyTeam button')][1].click());
  check(await until(host, () => window.__session().players.values().next().value.team === 'ct'), 'client team choice reaches the host');
  if (shots) await host.screenshot({ path: join(out, 'lan_lobby.png') });

  // Start.
  await click(host, '#lobby [data-a=start]');
  check(await until(client, () => window.__game() && window.__game().role === 'client' && window.__game().player.alive), 'client enters the match');
  const info = await host.evaluate(() => {
    const G = window.__game();
    for (const a of G.actors) if (a.brain && a !== G.player) a.brain.think = () => ({ wx: 0, wz: 0 });
    const r = G.actors.find((a) => a.remote);
    return { n: G.actors.length, remoteTeam: r && r.team, remoteName: r && r.name, hostTeam: G.player.team };
  });
  const cinfo = await client.evaluate(() => { const G = window.__game(); return { n: G.actors.length, team: G.player.team, name: G.player.name }; });
  check(info.n === cinfo.n, `same roster on both sides (${info.n})`);
  check(info.remoteTeam === 1 && cinfo.team === 1 && info.hostTeam === 0, 'teams applied (host T, client CT)');
  check(cinfo.name === 'Гость', 'client plays under its name');

  // Buying during freeze time goes through the host.
  await client.evaluate(() => window.__ui.h.onBuy('vest'));
  check(await until(client, () => window.__game().player.armor === 100 && window.__game().player.money === 150), 'client buys kevlar through the host');

  // Client movement is replicated to the host.
  check(await until(client, () => window.__game().phase === 'live', null, 90000), 'freeze time ends on the client');
  const p0 = await host.evaluate(() => { const a = window.__game().actors.find((x) => x.remote); return [a.x, a.z]; });
  await client.evaluate(() => { window.__input.move.y = 1; });
  await client.waitForTimeout(1500);
  await client.evaluate(() => { window.__input.move.y = 0; });
  await client.waitForTimeout(400);
  const moved = await host.evaluate((p0) => { const a = window.__game().actors.find((x) => x.remote); return Math.hypot(a.x - p0[0], a.z - p0[1]); }, p0);
  check(moved > 1, `client movement reaches the host (${moved.toFixed(1)} m)`);
  const synced = await Promise.all([
    host.evaluate(() => { const a = window.__game().actors.find((x) => x.remote); return [a.x, a.z]; }),
    client.evaluate(() => [window.__game().player.x, window.__game().player.z]),
  ]);
  check(Math.hypot(synced[0][0] - synced[1][0], synced[0][1] - synced[1][1]) < 0.3, 'host and client agree on the client position');

  // Put an enemy bot in front of the client and let the client shoot it.
  const target = await host.evaluate(() => {
    const G = window.__game();
    const me = G.actors.find((x) => x.remote);
    const e = G.actors.find((x) => x.team !== me.team && x.isBot && x.alive);
    const fx = -Math.sin(me.yaw), fz = -Math.cos(me.yaw);
    let d = 4;
    for (; d > 1.5; d -= 0.5) if (G.grid.los(me.x, me.y + 1.6, me.z, me.x + fx * d, me.y + 1.6, me.z + fz * d) && G.grid.groundUnder(me.x + fx * d, me.z + fz * d, 0.36) <= me.y + 0.1) break;
    e.x = me.x + fx * d; e.z = me.z + fz * d; e.y = me.y; e.yaw = me.yaw + Math.PI; e.tp++;
    return { id: e.id, hp: e.hp };
  });
  await client.waitForTimeout(600);
  await client.evaluate((id) => {
    const G = window.__game(), p = G.player, e = G.byId.get(id);
    p.yaw = Math.atan2(-(e.x - p.x), -(e.z - p.z));
    p.pitch = Math.atan2(e.y + 1.3 - (p.y + p.eyeHeight()), Math.hypot(e.x - p.x, e.z - p.z));
  }, target.id);
  const clip0 = await client.evaluate(() => window.__game().player.w.clip);
  for (let i = 0; i < 4; i++) {
    await client.evaluate(() => { window.__input.held.fire = true; });
    await client.waitForTimeout(120);
    await client.evaluate(() => { window.__input.held.fire = false; });
    await client.waitForTimeout(250);
  }
  await client.waitForTimeout(500);
  const hpAfter = await host.evaluate((id) => { const e = window.__game().byId.get(id); return e.alive ? e.hp : 0; }, target.id);
  const clip1 = await client.evaluate(() => window.__game().player.w.clip);
  check(clip1 < clip0, `client shots are predicted locally (clip ${clip0} -> ${clip1})`);
  check(hpAfter < target.hp, `client shots damage the bot on the host (hp ${target.hp} -> ${hpAfter})`);
  const cliHp = await client.evaluate((id) => { const e = window.__game().byId.get(id); return e.alive ? e.hp : 0; }, target.id);
  check(cliHp === hpAfter || Math.abs(cliHp - hpAfter) < 1, 'client sees the bot health from the host');
  if (shots) { await client.screenshot({ path: join(out, 'lan_client.png') }); await host.screenshot({ path: join(out, 'lan_host.png') }); }

  // Client throws an HE grenade: the host simulates it and the client sees the projectile.
  await host.evaluate(() => { const G = window.__game(); const r = G.actors.find((x) => x.remote); r.nades.he = 1; window.__nades = 0; const mk = G.makeNadeModel.bind(G); G.makeNadeModel = (k) => { window.__nades++; return mk(k); }; });
  check(await until(client, () => window.__game().player.nades.he === 1), 'grenade given by the host shows up on the client');
  await client.evaluate(() => { window.__input.pressed.add('slot4'); });
  await client.waitForTimeout(900);
  await client.evaluate(() => { window.__input.held.fire = true; });
  await client.waitForTimeout(900);
  await client.evaluate(() => { window.__input.held.fire = false; });
  check(await until(host, () => window.__nades > 0), 'client grenade is thrown on the host');
  check(await until(client, () => window.__game().player.nades.he === 0 && window.__game().player.slot !== 3), 'client switches back after the throw');

  // Host kills the client: the client sees its own death and the kill feed entry.
  await host.evaluate(() => { const G = window.__game(); const r = G.actors.find((x) => x.remote); G.kill(r, G.player, 'ak47', { hs: true }); });
  check(await until(client, () => !window.__game().player.alive), 'client sees its own death');
  check(await until(client, () => document.getElementById('killfeed').textContent.includes('Хост')), 'client kill feed shows the host kill');
  check(await until(client, () => window.__game().viewActor !== window.__game().player), 'dead client spectates a teammate');

  // Round flow: CT (client team) is eliminated -> new round, client alive again at spawn.
  await host.evaluate(() => { const G = window.__game(); for (const a of G.actors) if (a.team === 1 && a.alive) G.kill(a, G.player, 'ak47'); });
  check(await until(client, () => window.__game().score[0] === 1, null, 10000), 'client sees the round score');
  check(await until(client, () => window.__game().round === 2 && window.__game().player.alive, null, 20000), 'client respawns next round');
  const spawnOk = await Promise.all([
    host.evaluate(() => { const a = window.__game().actors.find((x) => x.remote); return [a.x, a.z]; }),
    client.evaluate(() => [window.__game().player.x, window.__game().player.z]),
  ]);
  check(Math.hypot(spawnOk[0][0] - spawnOk[1][0], spawnOk[0][1] - spawnOk[1][1]) < 0.5, 'client teleported to the host spawn point');

  // A terrorist bot plants next to the client; the client defuses it.
  await until(client, () => window.__game().phase === 'live', null, 90000);
  await host.evaluate(() => {
    const G = window.__game();
    const r = G.actors.find((x) => x.remote);
    const t = G.actors.find((x) => x.team === 0 && x.isBot && x.alive);
    t.x = r.x + 0.5; t.z = r.z; t.y = r.y;
    t.hasBomb = true;
    G.plant(t, 'A');
  });
  check(await until(client, () => window.__game().bomb.planted && !!window.__game().bomb.model), 'client sees the planted bomb');
  await client.evaluate(() => { window.__input.held.use = true; });
  check(await until(client, () => window.__game().player.defuseT > 0, null, 10000), 'client defuse progress comes from the host');
  if (shots) await client.screenshot({ path: join(out, 'lan_defuse.png') });
  check(await until(host, () => window.__game().bomb.defused, null, 90000), 'client defuses the bomb on the host');
  await client.evaluate(() => { window.__input.held.use = false; });
  check(await until(client, () => window.__game().score[1] === 1), 'defuse round goes to CT on the client');

  // A second client joins mid-match and takes over a bot.
  const late = await page('late');
  await click(late, '[data-go=lan]');
  await late.fill('#lanName', 'Поздний');
  await late.fill('#lanIp', `127.0.0.1:${PORT}`);
  await click(late, '#lan [data-a=join]');
  check(await until(late, () => window.__game() && window.__game().role === 'client'), 'late joiner enters the running match');
  const lateNames = await client.evaluate(() => window.__game().actors.map((a) => a.name));
  check(lateNames.includes('Поздний'), 'other clients see the late joiner');
  await late.context().close();
  check(await until(host, () => window.__game().actors.every((a) => !a.remote || a.name !== 'Поздний')), 'leaver is replaced by a bot');

  // Host leaves: the client is told and returns to the LAN screen.
  await host.evaluate(() => window.__ui.h.onLeave());
  check(await until(client, () => !document.getElementById('lan').classList.contains('hidden') && document.getElementById('lanErr').textContent.length > 0), 'client returns to the LAN screen when the host leaves');
  const errs = [...host.errors, ...client.errors];
  check(!errs.length, 'no page errors' + (errs.length ? ': ' + errs.slice(0, 5).join(' | ') : ''));
} catch (e) {
  fail(e.stack);
}
await browser.close();
server.kill();
console.log(failed ? `\n${failed} LAN failures` : '\nall LAN checks passed');
process.exit(failed ? 1 : 0);
