// DOM user interface: menus, HUD, buy menu, scoreboard, radar.
import { WEAPONS, GEAR, BUY_MENU, TEAM, TEAM_KEY, GUNGAME, RULES } from './config.js';
import { MAPS, THEMES } from './maps.js';
import { Grid, CELL } from './grid.js';
import { t, setLang, getLang } from './i18n.js';
import { store, DEFAULT_STATS } from './storage.js';
import { audio } from './audio.js';

const $ = (id) => document.getElementById(id);
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const SHORT = { knife: '🔪', bomb: 'C4', he: 'HE', fall: '↓', flash: 'FB', smoke: 'SG' };
const CROSS = { green: '#4dff6a', white: '#ffffff', yellow: '#ffe14a', cyan: '#4af0ff', red: '#ff4a4a' };

function weaponLabel(k) { return SHORT[k] && k !== 'he' ? SHORT[k] : (WEAPONS[k] ? WEAPONS[k].name : k); }
function itemName(k) { return WEAPONS[k] ? (k === 'he' || k === 'flash' || k === 'smoke' ? t(k === 'he' ? 'grenade' : k) : WEAPONS[k].name) : t(k); }
const NADE_NAMES = { ru: { he: 'Осколочная', flash: 'Световая', smoke: 'Дымовая' }, en: { he: 'HE grenade', flash: 'Flashbang', smoke: 'Smoke' } };
const nadeName = (k) => (NADE_NAMES[getLang()] || NADE_NAMES.ru)[k];

export function drawMapPreview(canvas, def, grid) {
  const g = grid || new Grid(def);
  const ctx = canvas.getContext('2d');
  const s = Math.min(canvas.width / g.w, canvas.height / g.d);
  const ox = (canvas.width - g.w * s) / 2, oy = (canvas.height - g.d * s) / 2;
  ctx.fillStyle = '#000'; ctx.fillRect(0, 0, canvas.width, canvas.height);
  for (let z = 0; z < g.d; z++) for (let x = 0; x < g.w; x++) {
    const h = g.h(x, z);
    let c;
    if (h >= 3) c = '#15171b';
    else if (h <= 0.01) c = g.charAt(x, z) === 'o' ? '#5b5f52' : '#7a7466';
    else if ('xX'.includes(g.charAt(x, z))) c = '#8a6a3c';
    else c = '#9c9584';
    ctx.fillStyle = c;
    ctx.fillRect(ox + x * s, oy + z * s, Math.ceil(s), Math.ceil(s));
  }
  const rect = (r, col) => { ctx.fillStyle = col; ctx.fillRect(ox + r[0] * s, oy + r[1] * s, (r[2] - r[0] + 1) * s, (r[3] - r[1] + 1) * s); };
  rect(def.spawnT, 'rgba(224,160,64,0.35)');
  rect(def.spawnCT, 'rgba(106,168,255,0.35)');
  ctx.font = `bold ${Math.max(10, s * 3)}px Arial`; ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
  for (const [k, r] of Object.entries(def.sites)) {
    rect(r, 'rgba(255,60,40,0.22)');
    ctx.fillStyle = '#ff6a50';
    ctx.fillText(k, ox + (r[0] + r[2] + 1) / 2 * s, oy + (r[1] + r[3] + 1) / 2 * s);
  }
  return { s, ox, oy };
}

export class UI {
  constructor(h) {
    this.h = h;
    this.msgs = [];
    this.feed = [];
    this.chatLines = [];
    this.hurtT = 0;
    this.flashT = 0; this.flashMax = 0;
    this.hitT = 0;
    this.dirs = [];
    this.slotSig = '';
    this.radarT = 0;
    this.screen = 'menu';
    this.buyOpen = false;
    this.applySettings();
    this.bindMenu();
    this.refreshTexts();
  }

  // ---------- screens ----------
  show(name) {
    for (const id of ['menu', 'setup', 'settings', 'stats', 'help', 'pause', 'matchEnd', 'loading']) $(id).classList.toggle('hidden', id !== name);
    this.screen = name;
    if (name === 'setup') this.buildSetup();
    if (name === 'settings') this.buildSettings();
    if (name === 'stats') this.buildStats();
    if (name === 'help') this.buildHelp();
    if (name === 'pause') this.buildPause();
  }
  hideScreens() { for (const id of ['menu', 'setup', 'settings', 'stats', 'help', 'pause', 'matchEnd', 'loading']) $(id).classList.add('hidden'); this.screen = null; }

  bindMenu() {
    document.querySelectorAll('[data-go]').forEach((b) => b.addEventListener('click', () => { audio.init(); audio.play('click'); this.settingsBack = 'menu'; this.show(b.dataset.go); }));
  }

  refreshTexts() {
    document.querySelectorAll('[data-t]').forEach((el) => { el.textContent = t(el.dataset.t); });
    $('menuTag').textContent = getLang() === 'ru' ? 'тактический шутер · закладка бомбы · боты' : 'tactical shooter · bomb defusal · bots';
    document.documentElement.lang = getLang();
  }

  seg(label, options, value, onPick, extra = '') {
    const wrap = document.createElement('div');
    wrap.className = 'field ' + extra;
    wrap.innerHTML = `<label>${esc(label)}</label><div class="seg"></div>`;
    const seg = wrap.querySelector('.seg');
    for (const [v, text, disabled] of options) {
      const b = document.createElement('button');
      b.textContent = text;
      b.disabled = !!disabled;
      if (v === value) b.classList.add('on');
      b.addEventListener('click', () => { audio.play('click'); seg.querySelectorAll('button').forEach((x) => x.classList.remove('on')); b.classList.add('on'); onPick(v); });
      seg.appendChild(b);
    }
    return wrap;
  }

  range(label, min, max, step, value, onChange, fmt = (v) => v) {
    const wrap = document.createElement('div');
    wrap.className = 'field';
    wrap.innerHTML = `<label>${esc(label)}: <span>${fmt(value)}</span></label><input type="range" min="${min}" max="${max}" step="${step}" value="${value}">`;
    const inp = wrap.querySelector('input'), sp = wrap.querySelector('span');
    inp.addEventListener('input', () => { const v = parseFloat(inp.value); sp.textContent = fmt(v); onChange(v); });
    return wrap;
  }

  buildSetup() {
    const S = store.setup;
    const el = $('setup');
    el.innerHTML = `<h1>${t('play')}</h1><div class="form"></div><div class="actions"><button data-a="back">${t('back')}</button><button class="prim" data-a="start">${t('start')}</button></div>`;
    const form = el.querySelector('.form');
    const mapsField = document.createElement('div');
    mapsField.className = 'field full';
    mapsField.innerHTML = `<label>${t('map')}</label><div class="maps"></div>`;
    const maps = mapsField.querySelector('.maps');
    for (const m of MAPS) {
      const c = document.createElement('div');
      c.className = 'mapc' + (m.id === S.map ? ' on' : '');
      c.innerHTML = `<canvas width="240" height="150"></canvas><b>${esc(m.name[getLang()] || m.name.ru)}</b><small>${esc(m.desc[getLang()] || m.desc.ru)}</small>`;
      drawMapPreview(c.querySelector('canvas'), m);
      c.addEventListener('click', () => {
        audio.play('click');
        S.map = m.id;
        if (!m.modes.includes(S.mode)) S.mode = m.modes[0];
        this.buildSetup();
      });
      maps.appendChild(c);
    }
    form.appendChild(mapsField);
    const def = MAPS.find((m) => m.id === S.map) || MAPS[0];
    const modeField = this.seg(t('mode'), ['bomb', 'dm', 'gg'].map((m) => [m, t('mode_' + m), !def.modes.includes(m)]), S.mode, (v) => { S.mode = v; this.buildSetup(); }, 'full');
    const desc = document.createElement('div'); desc.className = 'modeDesc'; desc.textContent = t('mode_' + S.mode + '_d');
    modeField.appendChild(desc);
    form.appendChild(modeField);
    form.appendChild(this.seg(t('team'), [['auto', t('team_auto')], ['t', t('team_t'), S.mode === 'gg'], ['ct', t('team_ct'), S.mode === 'gg']], S.team, (v) => { S.team = v; }));
    form.appendChild(this.seg(t('difficulty'), ['easy', 'normal', 'hard', 'expert'].map((d) => [d, t(d)]), S.diff, (v) => { S.diff = v; }));
    form.appendChild(this.seg(t('bots'), [1, 2, 3, 4, 5, 6].map((n) => [n, n + '×' + n]), S.bots, (v) => { S.bots = v; }));
    if (S.mode === 'bomb') {
      form.appendChild(this.seg(t('rounds'), [3, 5, 8, 10, 16].map((n) => [n, String(n)]), S.rounds, (v) => { S.rounds = v; }));
      form.appendChild(this.seg(t('ff'), [[false, t('off')], [true, t('on')]], S.ff, (v) => { S.ff = v; }));
    }
    el.querySelector('[data-a=back]').addEventListener('click', () => { audio.play('click'); store.save(); this.show('menu'); });
    el.querySelector('[data-a=start]').addEventListener('click', () => { audio.init(); audio.play('click'); store.save(); this.h.onStart({ ...S }); });
  }

  buildSettings() {
    const S = store.settings;
    const el = $('settings');
    el.innerHTML = `<h1>${t('settings')}</h1><div class="form"></div><div class="actions"><button class="prim" data-a="back">${t('back')}</button></div>`;
    const f = el.querySelector('.form');
    const ch = () => { store.save(); this.applySettings(); this.h.onSettings(); };
    const onoff = [[true, t('on')], [false, t('off')]];
    f.appendChild(this.seg(t('lang'), [['ru', 'Русский'], ['en', 'English']], S.lang, (v) => { S.lang = v; ch(); this.refreshTexts(); this.buildSettings(); }));
    f.appendChild(this.seg(t('quality'), ['auto', 'low', 'medium', 'high'].map((q) => [q, t('q_' + q)]), S.quality, (v) => { S.quality = v; ch(); }));
    f.appendChild(this.range(t('volume'), 0, 1, 0.05, S.volume, (v) => { S.volume = v; ch(); }, (v) => Math.round(v * 100) + '%'));
    f.appendChild(this.range(t('fov'), 70, 110, 1, S.fov, (v) => { S.fov = v; ch(); }, (v) => v + '°'));
    f.appendChild(this.range(t('sens'), 0.3, 2.5, 0.05, S.sens, (v) => { S.sens = v; ch(); }, (v) => v.toFixed(2)));
    f.appendChild(this.range(t('mouseSens'), 0.2, 3, 0.05, S.mouseSens, (v) => { S.mouseSens = v; ch(); }, (v) => v.toFixed(2)));
    f.appendChild(this.range(t('btnScale'), 0.7, 1.4, 0.05, S.btnScale, (v) => { S.btnScale = v; ch(); }, (v) => Math.round(v * 100) + '%'));
    f.appendChild(this.range(t('btnAlpha'), 0.2, 1, 0.05, S.btnAlpha, (v) => { S.btnAlpha = v; ch(); }, (v) => Math.round(v * 100) + '%'));
    f.appendChild(this.seg(t('crosshair'), Object.keys(CROSS).map((c) => [c, '■']), S.crosshair, (v) => { S.crosshair = v; ch(); }));
    el.querySelectorAll('.seg').forEach((sg) => { if (sg.children.length === 5 && sg.children[0].textContent === '■') [...sg.children].forEach((b, i) => { b.style.color = Object.values(CROSS)[i]; }); });
    f.appendChild(this.seg(t('aimAssist'), onoff, S.aimAssist, (v) => { S.aimAssist = v; ch(); }));
    f.appendChild(this.seg(t('autoFire'), onoff, S.autoFire, (v) => { S.autoFire = v; ch(); }));
    f.appendChild(this.seg(t('leftFire'), onoff, S.leftFire, (v) => { S.leftFire = v; ch(); }));
    f.appendChild(this.seg(t('invertY'), onoff, S.invertY, (v) => { S.invertY = v; ch(); }));
    f.appendChild(this.seg(t('voice'), onoff, S.voice, (v) => { S.voice = v; ch(); }));
    f.appendChild(this.seg(t('vibrate'), onoff, S.vibrate, (v) => { S.vibrate = v; ch(); }));
    f.appendChild(this.seg(t('showFps'), onoff, S.showFps, (v) => { S.showFps = v; ch(); }));
    el.querySelector('[data-a=back]').addEventListener('click', () => { audio.play('click'); this.show(this.settingsBack || 'menu'); });
  }

  buildStats() {
    const s = store.stats;
    const el = $('stats');
    const kd = s.deaths ? (s.kills / s.deaths).toFixed(2) : s.kills.toFixed(2);
    const acc = s.shots ? Math.round(s.hits / s.shots * 100) + '%' : '—';
    const hs = s.kills ? Math.round(s.hs / s.kills * 100) + '%' : '—';
    const tm = Math.round(s.time / 60) + (getLang() === 'ru' ? ' мин' : ' min');
    const cells = [[t('kills'), s.kills], [t('deaths'), s.deaths], [t('kd'), kd], [t('headshots'), hs], [t('accuracy'), acc], [t('wins'), s.wins], [t('losses'), s.losses], [t('matches'), s.matches], [t('mvp'), s.mvp], [t('plants'), s.plants], [t('defuses'), s.defuses], [t('playtime'), tm]];
    el.innerHTML = `<h1>${t('stats')}</h1><div class="statsGrid">${cells.map(([k, v]) => `<div><b>${esc(v)}</b><span>${esc(k)}</span></div>`).join('')}</div><div class="actions"><button data-a="reset">${t('reset_stats')}</button><button class="prim" data-a="back">${t('back')}</button></div>`;
    el.querySelector('[data-a=back]').addEventListener('click', () => { audio.play('click'); this.show('menu'); });
    el.querySelector('[data-a=reset]').addEventListener('click', () => { if (!confirm(t('reset_stats') + '?')) return; store.stats = { ...DEFAULT_STATS }; store.save(); this.buildStats(); });
  }

  buildHelp() {
    const el = $('help');
    el.innerHTML = `<h1>${t('help')}</h1><div class="helpText">${t('help_text')}</div><div class="actions"><button class="prim" data-a="back">${t('back')}</button></div>`;
    el.querySelector('[data-a=back]').addEventListener('click', () => { audio.play('click'); this.show(this.helpBack || 'menu'); this.helpBack = null; });
  }

  buildPause() {
    const el = $('pause');
    el.innerHTML = `<h1>${t('paused')}</h1><div class="menuBtns"><button class="big" data-a="resume">${t('resume')}</button><button data-a="settings">${t('settings')}</button><button data-a="help">${t('help')}</button><button data-a="leave">${t('leave')}</button></div>`;
    el.querySelector('[data-a=resume]').addEventListener('click', () => { audio.play('click'); this.h.onResume(); });
    el.querySelector('[data-a=settings]').addEventListener('click', () => { audio.play('click'); this.settingsBack = 'pause'; this.show('settings'); });
    el.querySelector('[data-a=help]').addEventListener('click', () => { audio.play('click'); this.helpBack = 'pause'; this.show('help'); });
    el.querySelector('[data-a=leave]').addEventListener('click', () => { audio.play('click'); this.h.onLeave(); });
  }

  applySettings() {
    const S = store.settings;
    setLang(S.lang);
    audio.setVolume(S.volume);
    audio.voice = S.voice;
    audio.lang = S.lang;
    const r = document.documentElement.style;
    r.setProperty('--btn-scale', S.btnScale);
    r.setProperty('--btn-alpha', S.btnAlpha);
    r.setProperty('--cross', CROSS[S.crosshair] || CROSS.green);
    $('fps').classList.toggle('on', S.showFps);
    $('bFire2').classList.toggle('off', !S.leftFire);
  }

  // ---------- in-game ----------
  enterGame(G) {
    this.G = G;
    this.hideScreens();
    $('hud').classList.remove('hidden');
    document.body.classList.add('ingame');
    this.feed = []; this.msgs = []; this.chatLines = [];
    $('killfeed').innerHTML = ''; $('msg').innerHTML = ''; $('chat').innerHTML = '';
    this.slotSig = '';
    this.radarBase = document.createElement('canvas');
    this.radarBase.width = G.grid.w * 8; this.radarBase.height = G.grid.d * 8;
    drawMapPreview(this.radarBase, G.def, G.grid);
    const showTeams = G.mode !== 'gg';
    document.querySelectorAll('#top .team').forEach((e) => { e.style.visibility = showTeams ? 'visible' : 'hidden'; });
    $('bBuy').style.display = G.mode === 'gg' ? 'none' : '';
  }

  exitGame() {
    $('hud').classList.add('hidden');
    document.body.classList.remove('ingame');
    this.closeBuy();
    $('board').classList.add('hidden');
    this.G = null;
  }

  message(text, dur = 2, cls = '') {
    this.msgs.push({ text, until: performance.now() + dur * 1000, cls });
    if (this.msgs.length > 3) this.msgs.shift();
    this.renderMsgs();
  }

  renderMsgs() {
    $('msg').innerHTML = this.msgs.map((m) => `<div class="${m.cls}">${esc(m.text)}</div>`).join('');
  }

  chat(a, text) {
    const cls = TEAM_KEY[a.team];
    this.chatLines.push({ html: `<span class="${cls}" style="color:var(--${cls})">${esc(a.name)}</span> <i>(${getLang() === 'ru' ? 'радио' : 'radio'})</i>: ${esc(text)}`, until: performance.now() + 6000 });
    if (this.chatLines.length > 4) this.chatLines.shift();
    $('chat').innerHTML = this.chatLines.map((l) => `<div>${l.html}</div>`).join('');
  }

  killfeed(att, vic, wk, hs, wb) {
    const G = this.G;
    const me = G && (att === G.player || vic === G.player);
    const nm = (a) => a ? `<span class="${TEAM_KEY[a.team]}">${esc(a.name)}</span>` : '';
    const wname = wk === 'bomb' ? 'C4' : wk === 'fall' ? t('fall') : weaponLabel(wk);
    const html = `${att && att !== vic ? nm(att) : ''}<span class="w">${hs ? '<span class="hs">◎</span>' : ''}${wb ? '⟿ ' : ''}${esc(wname)}</span>${nm(vic)}`;
    this.feed.push({ html, me, until: performance.now() + 6000 });
    if (this.feed.length > 5) this.feed.shift();
    $('killfeed').innerHTML = this.feed.map((f) => `<div class="${f.me ? 'me' : ''}">${f.html}</div>`).join('');
  }

  hitmarker(hs, kill) {
    const el = $('hitmark');
    el.className = 'on' + (kill ? ' kill' : hs ? ' hs' : '');
    this.hitT = 0.12;
  }

  damageDir(worldAng, hp) {
    this.dirs.push({ ang: worldAng, until: performance.now() + 900, s: Math.min(1, 0.4 + hp / 50) });
    if (this.dirs.length > 4) this.dirs.shift();
  }

  hurt(hp) {
    this.hurtT = Math.min(1, this.hurtT + 0.25 + hp / 80);
    if (store.settings.vibrate) this.h.vibrate(Math.min(80, 20 + hp));
  }

  flash(dur) { this.flashT = dur; this.flashMax = dur; }

  money(n) {
    const el = $('moneyDelta');
    el.textContent = (n > 0 ? '+$' : '-$') + Math.abs(n);
    el.className = 'on' + (n < 0 ? ' neg' : '');
    clearTimeout(this.moneyTO);
    this.moneyTO = setTimeout(() => { el.className = n < 0 ? 'neg' : ''; }, 60);
  }

  died(att, wk) {
    this.deathInfo = att && att !== this.G.player ? { name: att.name, w: wk, hp: att.hp, team: att.team } : null;
    this.closeBuy();
  }

  stat(key, n) { store.stats[key] = (store.stats[key] || 0) + n; }
  shot() { }

  roundStart(n) {
    const G = this.G;
    this.message(t('round') + ' ' + n + ' · ' + t('freeze'), 2.5, 'info');
    this.deathInfo = null;
    if (G && G.player.alive && !G.autopilot && n === 1 && !store.tutorialSeen) {
      store.tutorialSeen = true; store.save();
      this.message(input_hint(), 6, 'info');
    }
  }

  roundEnd(winner, reason, mvp) {
    const k = winner === TEAM.T ? 't_win' : 'ct_win';
    this.message(t(k), 4, winner === TEAM.T ? 'win-t' : 'win-ct');
    if (mvp) this.message(t('mvp') + ': ' + mvp.name + ' (' + mvp.roundKills + ')', 4, 'info');
    this.closeBuy();
  }

  bombPlanted() { }

  matchEnd(r) {
    const G = this.G;
    const el = $('matchEnd');
    const isGG = G.mode === 'gg';
    let title = r.won ? t('victory') : t('defeat');
    if (!isGG && r.winnerTeam === -1) title = t('draw');
    const rows = r.actors.map((a) => `<tr class="${a === G.player ? 'me' : ''}"><td style="color:var(--${TEAM_KEY[a.team]})">${esc(a.name)}</td><td>${a.kills}</td><td>${a.deaths}</td><td>${a.hsKills}</td><td>${Math.round(a.dmgDealt)}</td>${G.mode === 'bomb' ? `<td>${a.mvps}</td>` : ''}</tr>`).join('');
    const sc = isGG ? `${t('leader')}: ${esc(r.winnerActor ? r.winnerActor.name : '')}` : `<span class="t">${r.score[0]}</span> : <span class="ct">${r.score[1]}</span>`;
    el.innerHTML = `<div class="res ${r.won ? 'win' : 'lose'}">${title}</div><div class="sc">${sc}</div>
      <table><tr><th>${t('name')}</th><th>${t('kills')}</th><th>${t('deaths')}</th><th>${t('headshots')}</th><th>DMG</th>${G.mode === 'bomb' ? '<th>MVP</th>' : ''}</tr>${rows}</table>
      <div class="actions"><button data-a="menu">${t('menu')}</button><button class="prim" data-a="again">${t('rematch')}</button></div>`;
    el.querySelector('[data-a=menu]').addEventListener('click', () => { audio.play('click'); this.h.onLeave(); });
    el.querySelector('[data-a=again]').addEventListener('click', () => { audio.play('click'); this.h.onRematch(); });
    setTimeout(() => { if (this.G === G) { this.closeBuy(); $('board').classList.add('hidden'); this.show('matchEnd'); this.h.onMatchScreen(); } }, 2500);
    store.save();
  }

  // ---------- buy menu ----------
  toggleBuy() { if (this.buyOpen) this.closeBuy(); else this.openBuy(); }

  openBuy() {
    const G = this.G;
    if (!G || G.mode === 'gg' || !G.player.alive) return;
    if (!G.canBuy(G.player)) { this.message(t(G.buyError(G.player, 'vest') === 'buy_zone' ? 'buy_zone' : 'buy_closed'), 1.5, 'warn'); audio.play('deny'); return; }
    this.buyOpen = true;
    this.renderBuy();
    $('buy').classList.remove('hidden');
    this.h.onBuyOpen(true);
  }

  closeBuy() {
    if (!this.buyOpen) return;
    this.buyOpen = false;
    $('buy').classList.add('hidden');
    this.h.onBuyOpen(false);
  }

  renderBuy() {
    const G = this.G, p = G.player;
    const el = $('buy');
    const dm = G.mode === 'dm';
    const cats = BUY_MENU.map((c) => {
      const items = c.items.map((k) => {
        const it = WEAPONS[k] || GEAR[k];
        if (dm && (k === 'kit' || (it.team !== undefined && it.team >= 0 && false))) return '';
        if (!dm && it.team !== undefined && it.team >= 0 && it.team !== p.team) return '';
        const err = G.buyError(p, k);
        const owned = err === 'have_it';
        const price = dm ? 0 : (k === 'vesthelm' && p.armor >= 100 && !p.helmet ? 350 : it.price);
        const name = WEAPONS[k] ? (WEAPONS[k].kind === 'grenade' ? nadeName(WEAPONS[k].nade) : WEAPONS[k].name) : t(k);
        return `<button class="item ${err && !owned ? 'no' : ''} ${owned ? 'owned' : ''}" data-k="${k}">${esc(name)}<small>$${price}</small></button>`;
      }).join('');
      return `<div class="cat"><h3>${t('buy_' + c.cat)}</h3>${items}</div>`;
    }).join('');
    const left = G.mode === 'bomb' ? Math.max(0, Math.ceil(RULES.buyTime - (G.time - G.liveStart))) : 0;
    el.innerHTML = `<h2><span>${t('buy')}${G.mode === 'bomb' && G.phase === 'live' ? ' · ' + left + 's' : ''}</span><span class="m">$${p.money}</span></h2><div class="cats">${cats}</div>
      <div class="row">${dm ? '' : `<button data-a="rebuy">${t('rebuy')}</button><button data-a="auto">${t('autobuy')}</button>`}<button class="prim" data-a="close">${t('close')}</button></div>`;
    el.querySelectorAll('[data-k]').forEach((b) => b.addEventListener('pointerup', (e) => { e.stopPropagation(); this.h.onBuy(b.dataset.k); this.renderBuy(); }));
    const ra = el.querySelector('[data-a=rebuy]'); if (ra) ra.addEventListener('pointerup', () => { this.h.onRebuy(); this.renderBuy(); });
    const au = el.querySelector('[data-a=auto]'); if (au) au.addEventListener('pointerup', () => { this.h.onAutobuy(); this.renderBuy(); });
    el.querySelector('[data-a=close]').addEventListener('pointerup', () => this.closeBuy());
  }

  // ---------- scoreboard ----------
  renderBoard() {
    const G = this.G;
    const p = G.player;
    const teamTable = (team) => {
      const list = G.actors.filter((a) => G.ffa || a.team === team).sort((a, b) => b.kills - a.kills || a.deaths - b.deaths);
      const rows = list.map((a) => {
        const own = a.team === p.team && !G.ffa;
        const icons = (a.hasBomb && own ? ' 💣' : '') + (a.kit && own ? ' ✂' : '');
        const extra = G.mode === 'gg' ? `<td class="n">${a.ggLevel + 1}/${GUNGAME.length}</td>` : `<td class="n">${own && G.mode === 'bomb' ? '$' + a.money : ''}</td>`;
        return `<tr class="${a === p ? 'me' : ''} ${a.alive ? '' : 'dead'}"><td style="color:var(--${TEAM_KEY[a.team]})">${esc(a.name)}${icons}</td><td class="n">${a.kills}</td><td class="n">${a.deaths}</td>${extra}<td class="n">${a.alive ? '' : t('dead')}</td></tr>`;
      }).join('');
      const head = G.ffa ? (getLang() === 'ru' ? 'Все игроки' : 'All players') : t(TEAM_KEY[team]) + ' — ' + G.score[team];
      return `<div class="hdr ${G.ffa ? '' : TEAM_KEY[team]}">${head}</div><table><tr><th>${t('name')}</th><th>${t('kills')}</th><th>${t('deaths')}</th><th>${G.mode === 'gg' ? t('level') : t('money')}</th><th></th></tr>${rows}</table>`;
    };
    const mapName = G.def.name[getLang()] || G.def.name.ru;
    const info = G.mode === 'bomb' ? `${t('round')} ${G.round} · ${t('first_to', G.setup.rounds)}` : G.mode === 'dm' ? `${t('frag_limit')}: ${RULES.dmFragLimit}` : t('mode_gg');
    $('board').innerHTML = `<div style="opacity:.7;margin-bottom:6px">${esc(mapName)} · ${esc(info)}</div>` + (G.ffa ? teamTable(0) : teamTable(TEAM.CT) + teamTable(TEAM.T));
  }

  // ---------- per-frame HUD ----------
  update(G, view, dt) {
    const now = performance.now();
    if (this.msgs.length && this.msgs[0].until < now) { this.msgs = this.msgs.filter((m) => m.until >= now); this.renderMsgs(); }
    if (this.feed.length && this.feed[0].until < now) { this.feed = this.feed.filter((f) => f.until >= now); $('killfeed').innerHTML = this.feed.map((f) => `<div class="${f.me ? 'me' : ''}">${f.html}</div>`).join(''); }
    if (this.chatLines.length && this.chatLines[0].until < now) { this.chatLines = this.chatLines.filter((f) => f.until >= now); $('chat').innerHTML = this.chatLines.map((l) => `<div>${l.html}</div>`).join(''); }
    const p = G.player;
    const sp = view.target;
    // Scores and timer.
    $('scoreT').textContent = G.score[0];
    $('scoreCT').textContent = G.score[1];
    const alive = (tm) => G.actors.filter((a) => a.team === tm && a.alive).length;
    $('aliveT').textContent = G.mode === 'bomb' ? alive(0) + ' ' + t('t_short') : t('t_short');
    $('aliveCT').textContent = G.mode === 'bomb' ? alive(1) + ' ' + t('ct_short') : t('ct_short');
    let tm;
    const timer = $('timer');
    if (G.mode === 'bomb' && G.bomb.planted) { tm = G.bomb.timer; timer.classList.add('bomb'); }
    else { tm = G.phase === 'live' && G.mode === 'gg' ? G.matchTime : G.phaseT; timer.classList.remove('bomb'); }
    if (G.mode === 'bomb' && G.bomb.planted) timer.textContent = '💣 ' + Math.ceil(Math.max(0, tm));
    else { const s = Math.max(0, Math.ceil(tm)); timer.textContent = isFinite(s) ? Math.floor(s / 60) + ':' + String(s % 60).padStart(2, '0') : '∞'; }
    $('roundInfo').textContent = G.mode === 'bomb' ? (G.phase === 'freeze' ? t('freeze') : t('round') + ' ' + G.round) : G.mode === 'dm' ? t('frag_limit') + ' ' + RULES.dmFragLimit : t('level') + ' ' + (p.ggLevel + 1) + '/' + GUNGAME.length;
    // Health, armor, ammo.
    const who = sp || p;
    const hpEl = $('hp');
    hpEl.textContent = Math.max(0, Math.ceil(who.hp));
    hpEl.classList.toggle('low', who.hp <= 25);
    $('armor').textContent = Math.ceil(who.armor);
    $('gearIcons').textContent = (who.helmet ? '⛑' : '') + (who.kit ? '✂' : '') + (who.hasBomb ? '💣' : '');
    const w = who.w;
    $('wname').textContent = w.def.kind === 'grenade' ? nadeName(w.def.nade) + ' ×' + who.nades[w.def.nade] : w.def.name + (w.silenced ? (getLang() === 'ru' ? ' · глушитель' : ' · silenced') : '');
    const clipEl = $('clip');
    if (w.def.clip) {
      clipEl.textContent = w.clip; $('reserve').textContent = w.reserve > 900 ? '∞' : w.reserve;
      clipEl.classList.toggle('empty', w.clip <= Math.ceil(w.def.clip * 0.2));
      $('ammobox').style.visibility = 'visible';
    } else $('ammobox').style.visibility = w.def.kind === 'knife' && false ? 'visible' : 'hidden';
    $('money').textContent = p.money;
    $('moneybox').style.display = G.mode === 'bomb' ? '' : 'none';
    // Spectator / death info.
    const spec = $('spec');
    if (!p.alive) {
      spec.classList.add('on');
      let html = '';
      if (this.deathInfo) html += `${t('killed_by')}: <b style="color:var(--${TEAM_KEY[this.deathInfo.team]})">${esc(this.deathInfo.name)}</b> (${esc(weaponLabel(this.deathInfo.w))}, ${Math.max(0, Math.ceil(this.deathInfo.hp))} HP)`;
      if (G.mode !== 'bomb') html += `<small>${t('respawn_in')} ${Math.max(0, p.respawnT).toFixed(1)}</small>`;
      else if (sp && sp !== p) html += `<small>${t('spectating')}: ${esc(sp.name)}</small>`;
      spec.innerHTML = html;
    } else spec.classList.remove('on');
    // Progress bar for plant/defuse.
    const prog = $('progress');
    const pa = sp || p;
    if (pa.alive && (pa.plantT > 0 || pa.defuseT > 0)) {
      prog.classList.add('on');
      const tot = pa.plantT > 0 ? RULES.plantTime : (pa.kit ? RULES.defuseKitTime : RULES.defuseTime);
      const v = pa.plantT > 0 ? pa.plantT : pa.defuseT;
      $('progText').textContent = t(pa.plantT > 0 ? 'planting' : 'defusing');
      $('progFill').style.width = Math.min(100, v / tot * 100) + '%';
    } else prog.classList.remove('on');
    // Context hint and use button.
    let hint = '';
    let useOn = false;
    if (p.alive && G.mode === 'bomb' && G.phase === 'live') {
      if (p.hasBomb && G.siteAt(p.x, p.z)) { hint = t('plant_hint'); useOn = true; }
      else if (G.bomb.planted && p.team === TEAM.CT && Math.hypot(p.x - G.bomb.x, p.z - G.bomb.z) < 1.6) { hint = t('defuse_hint'); useOn = true; }
    }
    if (p.alive && !useOn && G.nearestDrop(p)) useOn = true;
    $('hint').textContent = p.plantT > 0 || p.defuseT > 0 ? '' : hint;
    $('bUse').classList.toggle('on', useOn || p.plantT > 0 || p.defuseT > 0);
    $('bCrouch').classList.toggle('active', !!view.crouchHeld);
    $('bBuy').classList.toggle('off', !G.canBuy(p));
    // Crosshair, scope, overlays.
    const cross = $('cross');
    const scoped = view.scoped;
    cross.classList.toggle('hide', scoped || !p.alive || (w.def.kind === 'sniper'));
    document.documentElement.style.setProperty('--gap', view.gap.toFixed(1) + 'px');
    $('scope').classList.toggle('on', scoped);
    if (this.hitT > 0) { this.hitT -= dt; if (this.hitT <= 0) $('hitmark').className = ''; }
    this.hurtT = Math.max(0, this.hurtT - dt * 0.9);
    const lowHp = p.alive && p.hp < 30 ? 0.35 + Math.sin(now / 250) * 0.1 : 0;
    $('hurtOv').style.opacity = Math.max(this.hurtT, lowHp);
    if (this.flashT > 0) this.flashT -= dt;
    const fl = this.flashT > 0 ? Math.min(1, this.flashT / Math.max(0.5, this.flashMax * 0.55)) : 0;
    $('flashOv').style.opacity = fl;
    $('smokeOv').style.opacity = view.smoke * 0.92;
    // Damage direction arcs relative to the view yaw.
    const dd = $('dmgdirs');
    this.dirs = this.dirs.filter((d) => d.until > now);
    let dh = '';
    for (const d of this.dirs) {
      const rot = Math.PI + view.yaw - d.ang;
      dh += `<div style="transform:rotate(${(rot * 180 / Math.PI).toFixed(1)}deg);opacity:${((d.until - now) / 900 * d.s).toFixed(2)}"></div>`;
    }
    dd.innerHTML = dh;
    // Weapon slots.
    this.updateSlots(who);
    if (view.fps !== undefined) $('fps').textContent = view.fps + ' FPS';
    // Radar at 15 Hz.
    this.radarT -= dt;
    if (this.radarT <= 0) { this.radarT = 1 / 15; this.drawRadar(G, view); }
    if (this.buyOpen) {
      if (!G.canBuy(p)) this.closeBuy();
      else if ((this.buyRefresh = (this.buyRefresh || 0) - dt) <= 0) { this.buyRefresh = 1; const m = $('buy').querySelector('h2 span'); if (m && G.mode === 'bomb' && G.phase === 'live') m.textContent = t('buy') + ' · ' + Math.max(0, Math.ceil(RULES.buyTime - (G.time - G.liveStart))) + 's'; }
    }
    const board = $('board');
    const showBoard = view.score || G.phase === 'post' && G.pendingEnd;
    board.classList.toggle('hidden', !showBoard);
    if (showBoard && (this.boardT = (this.boardT || 0) - dt) <= 0) { this.boardT = 0.5; this.renderBoard(); }
  }

  updateSlots(a) {
    const parts = [];
    const add = (slot, label, sub) => parts.push({ slot, label, sub });
    if (a.slots[0]) add(0, a.slots[0].def.name, '1');
    if (a.slots[1]) add(1, a.slots[1].def.name, '2');
    add(2, WEAPONS.knife.name === 'Нож' ? (getLang() === 'ru' ? 'Нож' : 'Knife') : 'Knife', '3');
    const n = a.nades;
    if (n.he + n.flash + n.smoke > 0) add(3, [n.he ? 'HE' : '', n.flash ? 'FB' + (n.flash > 1 ? '×2' : '') : '', n.smoke ? 'SG' : ''].filter(Boolean).join(' '), '4');
    if (a.hasBomb) add(4, 'C4', '5');
    const sig = parts.map((p) => p.slot + p.label).join('|') + '#' + a.slot;
    if (sig === this.slotSig) return;
    this.slotSig = sig;
    $('slots').innerHTML = parts.map((p) => `<div data-act="slot${p.slot + 1}" class="${a.slot === p.slot ? 'cur' : ''}"><small>${p.sub}</small>${esc(p.label)}</div>`).join('');
  }

  drawRadar(G, view) {
    const cv = $('radar');
    const ctx = cv.getContext('2d');
    const W = cv.width, H = cv.height;
    ctx.clearRect(0, 0, W, H);
    ctx.save();
    ctx.beginPath(); ctx.arc(W / 2, H / 2, W / 2 - 1, 0, Math.PI * 2); ctx.clip();
    ctx.fillStyle = 'rgba(0,0,0,0.55)'; ctx.fillRect(0, 0, W, H);
    const px = view.x, pz = view.z;
    const scale = 2.6; // px per meter
    const k = scale / (8 / CELL);
    ctx.translate(W / 2, H / 2);
    ctx.rotate(view.yaw);
    ctx.globalAlpha = 0.85;
    ctx.drawImage(this.radarBase, -px * scale, -pz * scale, this.radarBase.width * k, this.radarBase.height * k);
    ctx.globalAlpha = 1;
    const dot = (x, z, col, r = 4) => { ctx.fillStyle = col; ctx.beginPath(); ctx.arc((x - px) * scale, (z - pz) * scale, r, 0, Math.PI * 2); ctx.fill(); };
    const me = G.player;
    for (const a of G.actors) {
      if (!a.alive || a === view.target) continue;
      const friend = !G.ffa && a.team === me.team;
      if (friend) dot(a.x, a.z, a.team === TEAM.T ? '#ffcf7a' : '#a8cbff', 4);
      else if (G.time - a.spotted < 1.2 && G.mode === 'bomb') dot(a.x, a.z, '#ff3b30', 4.5);
    }
    if (G.mode === 'bomb' && (me.team === TEAM.T || G.bomb.planted)) {
      const B = G.bomb;
      const carrier = G.actors.find((a) => a.alive && a.hasBomb);
      if (B.planted || B.dropped) { if (Math.floor(G.time * 4) % 2 || B.dropped) dot(B.x, B.z, '#ff2a1a', 5); }
      else if (carrier && carrier !== view.target) { ctx.strokeStyle = '#ff6a40'; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc((carrier.x - px) * scale, (carrier.z - pz) * scale, 6.5, 0, Math.PI * 2); ctx.stroke(); }
    }
    ctx.restore();
    // Player arrow.
    ctx.fillStyle = '#fff';
    ctx.beginPath(); ctx.moveTo(W / 2, H / 2 - 8); ctx.lineTo(W / 2 - 5, H / 2 + 5); ctx.lineTo(W / 2 + 5, H / 2 + 5); ctx.closePath(); ctx.fill();
    ctx.strokeStyle = 'rgba(255,255,255,0.25)'; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.moveTo(W / 2, H / 2); ctx.lineTo(W / 2 - W * 0.32, 4); ctx.moveTo(W / 2, H / 2); ctx.lineTo(W / 2 + W * 0.32, 4); ctx.stroke();
  }
}

function input_hint() {
  const touch = !document.body.classList.contains('desktop');
  if (getLang() === 'ru') return touch ? 'Слева — движение, справа — обзор. $ — закупка' : 'WASD — движение, мышь — обзор, B — закупка';
  return touch ? 'Left side moves, right side looks. $ opens the buy menu' : 'WASD move, mouse look, B buy menu';
}

export { THEMES, itemName };
