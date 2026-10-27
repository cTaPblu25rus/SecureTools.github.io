// Tests the Java LAN server (dist/strikezone-lan.jar) with Node's WebSocket client.
import { spawn } from 'node:child_process';
import dgram from 'node:dgram';
import assert from 'node:assert/strict';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const PORT = 47900 + Math.floor(Math.random() * 50);

export function startLanServer(port = PORT) {
  const proc = spawn('java', ['-jar', join(root, 'dist/strikezone-lan.jar'), join(root, 'www'), String(port)], { stdio: ['ignore', 'pipe', 'pipe'] });
  return new Promise((resolve, reject) => {
    let out = '';
    proc.stdout.on('data', (d) => { out += d; if (out.includes('LAN server on port')) resolve(proc); });
    proc.on('exit', (c) => reject(new Error('server exited ' + c + ' ' + out)));
    setTimeout(() => reject(new Error('server did not start: ' + out)), 15000);
  });
}

const open = (url) => new Promise((resolve, reject) => {
  const ws = new WebSocket(url);
  ws.inbox = [];
  ws.waiters = [];
  ws.onmessage = (e) => { ws.inbox.push(e.data); const w = ws.waiters.shift(); if (w) w(); };
  ws.onopen = () => resolve(ws);
  ws.onerror = () => {};
  ws.onclose = (e) => { ws.closeCode = e.code; const w = ws.waiters.shift(); if (w) w(); reject(new Error('closed ' + e.code)); };
});
const next = async (ws, ms = 3000) => {
  const t0 = Date.now();
  while (!ws.inbox.length) {
    if (Date.now() - t0 > ms) throw new Error('timeout waiting for message');
    await new Promise((r) => setTimeout(r, 10));
  }
  return ws.inbox.shift();
};
const closed = async (ws, ms = 3000) => {
  const t0 = Date.now();
  while (ws.closeCode === undefined) { if (Date.now() - t0 > ms) throw new Error('not closed'); await new Promise((r) => setTimeout(r, 10)); }
  return ws.closeCode;
};

let passed = 0, failed = 0;
async function test(name, fn) {
  try { await fn(); passed++; console.log('  ok  ' + name); } catch (e) { failed++; console.error('FAIL ' + name + ': ' + e.message); }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  const proc = await startLanServer();
  const base = `127.0.0.1:${PORT}`;
  try {
    await test('serves the web build over HTTP', async () => {
      const r = await fetch(`http://${base}/index.html`);
      assert.equal(r.status, 200);
      assert.match(await r.text(), /STRIKE ZONE/);
      assert.match(r.headers.get('content-type'), /text\/html/);
    });
    await test('blocks path traversal', async () => {
      const r = await fetch(`http://${base}/..%2fpackage.json`);
      assert.equal(r.status, 404);
    });
    await test('client without a host is refused', async () => {
      const ws = await open(`ws://${base}/`).catch((e) => e);
      assert.ok(ws instanceof Error || (await closed(ws)) === 4000);
    });
    const host = await open(`ws://${base}/host`);
    let client, id = -1;
    await test('client connects and host is told', async () => {
      client = await open(`ws://${base}/`);
      const m = await next(host);
      assert.match(m, /^O\d+\|127\.0\.0\.1$/);
      id = Number(m.slice(1, m.indexOf('|')));
    });
    await test('client message reaches host', async () => {
      client.send('{"t":"hello"}');
      assert.equal(await next(host), `M${id}|{"t":"hello"}`);
    });
    await test('host sends to one client', async () => {
      host.send(`S${id}|direct`);
      assert.equal(await next(client), 'direct');
    });
    await test('unicode survives both ways', async () => {
      client.send('привет 💣');
      assert.equal(await next(host), `M${id}|привет 💣`);
      host.send(`S${id}|ответ ✓`);
      assert.equal(await next(client), 'ответ ✓');
    });
    await test('large broadcast frames (16-bit and 64-bit lengths)', async () => {
      const mid = 'x'.repeat(5000), big = 'y'.repeat(100000);
      host.send('B' + mid);
      host.send('B' + big);
      assert.equal((await next(client)).length, 5000);
      assert.equal((await next(client)).length, 100000);
      client.send(big);
      assert.equal((await next(host)).length, 100000 + `M${id}|`.length);
    });
    await test('second host is refused', async () => {
      const h2 = await open(`ws://${base}/host`).catch((e) => e);
      assert.ok(h2 instanceof Error || (await closed(h2)) === 4001);
    });
    await test('discovery beacon carries host info', async () => {
      host.send('I{"name":"Test","map":"sands"}');
      const sock = dgram.createSocket({ type: 'udp4', reuseAddr: true });
      const got = await new Promise((resolve) => {
        const timer = setTimeout(() => resolve(null), 4000);
        sock.on('message', (m) => { if (String(m).startsWith('SZLAN1|{"name":"Test"')) { clearTimeout(timer); resolve(String(m)); } });
        sock.bind(47777);
      });
      sock.close();
      if (got === null) { console.log('        (no broadcast loopback in this network; beacon not observable)'); return; }
      assert.equal(got, 'SZLAN1|{"name":"Test","map":"sands"}');
    });
    await test('client leaving is reported', async () => {
      client.close();
      assert.equal(await next(host), `C${id}`);
    });
    await test('host leaving closes clients', async () => {
      const c2 = await open(`ws://${base}/`);
      await next(host);
      host.close();
      assert.equal(await closed(c2), 4002);
    });
  } finally {
    proc.kill();
  }
  console.log(failed ? `\n${failed} LAN server failures` : `\n${passed} LAN server tests passed`);
  process.exit(failed ? 1 : 0);
}
