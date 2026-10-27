// LAN transports. The host side talks to the Java WebSocket server either through
// the Android bridge or, when the page is served by the desktop LAN server, through
// its /host relay socket. Clients use a plain WebSocket.

export const LAN_PORT = 47778;
export const NET_VER = 1;

const bridge = () => window.AndroidBridge;

export function canHost() {
  const b = bridge();
  return !!(b && b.netHost) || location.protocol === 'http:';
}

export function wsAddress(addr) {
  addr = String(addr || '').trim().replace(/^wss?:\/\//, '').replace(/\/.*$/, '');
  if (!addr) return null;
  return 'ws://' + (/:\d+$/.test(addr) ? addr : addr + ':' + LAN_PORT) + '/';
}

export class HostLink {
  constructor(h) {
    this.h = h;
    this.ws = null;
    this.android = false;
  }

  // Resolves to this device's addresses for players to join.
  start() {
    const b = bridge();
    if (b && b.netHost) {
      const ips = b.netHost(LAN_PORT);
      if (ips === 'ERR') return Promise.reject(new Error('host'));
      this.android = true;
      window.__lanEvent = (s) => this.dispatch(s);
      return Promise.resolve(String(ips || '').split(',').filter(Boolean));
    }
    return new Promise((resolve, reject) => {
      const ws = new WebSocket(`ws://${location.host}/host`);
      this.ws = ws;
      ws.onopen = () => resolve([location.hostname === 'localhost' || location.hostname === '127.0.0.1' ? '' : location.host].filter(Boolean));
      ws.onmessage = (e) => this.dispatch(e.data);
      ws.onerror = () => reject(new Error('host'));
      ws.onclose = () => { if (this.h.onLost) this.h.onLost(); };
    });
  }

  dispatch(s) {
    const op = s[0];
    if (op === 'C') { this.h.onClose(Number(s.slice(1))); return; }
    const bar = s.indexOf('|');
    const id = Number(s.slice(1, bar));
    const rest = s.slice(bar + 1);
    if (op === 'O') this.h.onOpen(id, rest);
    else if (op === 'M') {
      let msg;
      try { msg = JSON.parse(rest); } catch (e) { return; }
      if (msg && typeof msg === 'object') this.h.onMessage(id, msg);
    }
  }

  sendRaw(id, text) {
    if (this.android) bridge().netSend(id, text);
    else if (this.ws && this.ws.readyState === 1) this.ws.send('S' + id + '|' + text);
  }
  send(id, obj) { this.sendRaw(id, JSON.stringify(obj)); }
  broadcast(obj) {
    const text = JSON.stringify(obj);
    if (this.android) bridge().netBroadcast(text);
    else if (this.ws && this.ws.readyState === 1) this.ws.send('B' + text);
  }
  kick(id) {
    if (this.android) bridge().netKick(id);
    else if (this.ws && this.ws.readyState === 1) this.ws.send('K' + id);
  }
  info(obj) {
    const text = JSON.stringify(obj);
    if (this.android) bridge().netInfo(text);
    else if (this.ws && this.ws.readyState === 1) this.ws.send('I' + text);
  }
  stop() {
    if (this.android) { bridge().netStop(); window.__lanEvent = null; }
    if (this.ws) { this.ws.onclose = null; this.ws.close(); this.ws = null; }
  }
}

export class ClientLink {
  constructor(h) { this.h = h; this.ws = null; }

  connect(addr) {
    const url = wsAddress(addr);
    return new Promise((resolve, reject) => {
      if (!url) { reject(new Error('address')); return; }
      let opened = false;
      const ws = new WebSocket(url);
      this.ws = ws;
      const timer = setTimeout(() => { if (!opened) { ws.close(); reject(new Error('timeout')); } }, 6000);
      ws.onopen = () => { opened = true; clearTimeout(timer); resolve(); };
      ws.onmessage = (e) => {
        let msg;
        try { msg = JSON.parse(e.data); } catch (err) { return; }
        this.h.onMessage(msg);
      };
      ws.onerror = () => { if (!opened) { clearTimeout(timer); reject(new Error('connect')); } };
      ws.onclose = (e) => { clearTimeout(timer); if (opened) this.h.onClose(e.code); else reject(new Error('closed ' + e.code)); };
    });
  }

  send(obj) { if (this.ws && this.ws.readyState === 1) this.ws.send(JSON.stringify(obj)); }
  close() { if (this.ws) { this.ws.onclose = null; this.ws.close(); this.ws = null; } }
}

// Finds hosts on the local network (Android only). cb(ip, info) per beacon.
export function discover(on, cb) {
  const b = bridge();
  if (!b || !b.netDiscover) return false;
  window.__lanFound = on ? (s) => {
    const bar = s.indexOf('|');
    let info = {};
    try { info = JSON.parse(s.slice(bar + 1) || '{}'); } catch (e) { /* bad beacon */ }
    cb(s.slice(0, bar), info);
  } : null;
  b.netDiscover(!!on);
  return true;
}
