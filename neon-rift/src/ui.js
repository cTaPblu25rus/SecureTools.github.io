import { t, setLang } from './i18n.js';
import { SKINS, POWERUPS, UPGRADE_DUR, UPGRADE_COST, DAILY_REWARDS } from './config.js';

const $ = (s) => document.querySelector(s);
const $$ = (s) => Array.from(document.querySelectorAll(s));
const hex = (n) => '#' + n.toString(16).padStart(6, '0');
const fmt = (n) => Math.floor(n).toLocaleString('ru-RU').replace(/,/g, ' ');

export class UI {
  constructor(game) {
    this.g = game;
    this.stack = [];
    this.shopTab = 'ships';
    this.hudCache = {};
    this.hintKey = '';
    this.bind();
    this.applyLang();
  }

  bind() {
    const g = this.g;
    const click = (sel, fn) => $(sel).addEventListener('click', (e) => { e.stopPropagation(); g.audio.unlock(); g.audio.play('click'); fn(e); });
    $$('[data-go]').forEach((b) => b.addEventListener('click', (e) => {
      e.stopPropagation(); g.audio.unlock(); g.audio.play('click'); this.open(b.dataset.go);
    }));
    $$('[data-back]').forEach((b) => b.addEventListener('click', (e) => { e.stopPropagation(); g.audio.play('click'); this.back(); }));
    click('#btnPlay', () => g.startRun());
    click('#btnChallenge', () => g.startRun('challenge'));
    click('#btnPause', () => g.pause());
    click('#btnResume', () => g.resume());
    click('#btnRestartP', () => g.startRun());
    click('#btnMenuP', () => g.toMenu());
    click('#btnRestart', () => g.startRun());
    click('#btnMenuO', () => g.toMenu());
    click('#btnRevive', () => g.revive());
    click('#btnShare', () => g.share());
    click('#btnDaily', () => g.claimDaily());
    click('#btnReset', () => { if (confirm(t('resetConfirm'))) g.resetProgress(); });
    $$('.tab').forEach((b) => b.addEventListener('click', (e) => {
      e.stopPropagation(); g.audio.play('click');
      this.shopTab = b.dataset.tab; this.renderShop();
    }));
    // settings
    const s = g.save.settings;
    const range = (id, key, after) => {
      const el = $(id); el.value = s[key];
      el.addEventListener('input', () => { s[key] = parseFloat(el.value); after && after(); g.persist(); });
    };
    range('#setMusic', 'music', () => g.applyAudio());
    range('#setSfx', 'sfx', () => { g.applyAudio(); g.audio.play('shard'); });
    range('#setSens', 'sensitivity');
    const seg = (id, key, conv, after) => {
      const el = $(id);
      const sync = () => el.querySelectorAll('button').forEach((b) => b.classList.toggle('on', String(conv.to(s[key])) === b.dataset.v));
      el.querySelectorAll('button').forEach((b) => b.addEventListener('click', (e) => {
        e.stopPropagation(); g.audio.play('click');
        s[key] = conv.from(b.dataset.v); sync(); g.persist(); after && after();
      }));
      sync();
    };
    const id = { to: (v) => v, from: (v) => v };
    seg('#setControls', 'controls', id, () => g.input.requestTilt());
    seg('#setQuality', 'quality', id, () => g.applyQuality());
    seg('#setVib', 'vibration', { to: (v) => (v ? '1' : '0'), from: (v) => v === '1' }, () => g.vibrate(40));
    seg('#setLang', 'lang', id, () => { setLang(s.lang); this.applyLang(); });
  }

  applyLang() {
    document.documentElement.lang = this.g.save.settings.lang;
    $$('[data-t]').forEach((el) => { el.textContent = t(el.dataset.t); });
    this.refreshMenu();
  }

  // ---------- navigation ----------
  current() { return this.stack[this.stack.length - 1]; }
  show(id) {
    $$('.screen').forEach((s) => s.classList.remove('active'));
    if (id) $('#' + id).classList.add('active');
    this.stack = id ? [id] : [];
    this.onShow(id);
  }
  open(id) {
    $$('.screen').forEach((s) => s.classList.remove('active'));
    $('#' + id).classList.add('active');
    this.stack.push(id);
    this.onShow(id);
  }
  back() {
    if (this.stack.length <= 1) return false;
    this.stack.pop();
    const id = this.current();
    $$('.screen').forEach((s) => s.classList.remove('active'));
    $('#' + id).classList.add('active');
    this.onShow(id);
    return true;
  }
  onShow(id) {
    this.g.setShowroom(id === 'sShop');
    if (id === 'sMenu') this.refreshMenu();
    if (id === 'sShop') this.renderShop();
    if (id === 'sMissions') this.renderMissions();
    if (id === 'sRecords') this.renderRecords();
  }
  setHud(on) { $('#hud').classList.toggle('hidden', !on); }

  refreshMenu() {
    const sv = this.g.save;
    $$('.js-shards').forEach((e) => { e.textContent = fmt(sv.shards); });
    $$('.js-best').forEach((e) => { e.textContent = fmt(sv.best); });
    const ch = this.g.challengeToday();
    $$('.js-chal').forEach((e) => { e.textContent = ch.best ? t('challengeBest', { d: fmt(ch.best) }) : t('challengeSub'); });
    const ready = (sv.missions || []).filter((m) => m.done && !m.claimed).length;
    $$('.js-mbadge').forEach((e) => { e.textContent = ready ? String(ready) : ''; });
  }

  // ---------- shop ----------
  renderShop() {
    const g = this.g; const sv = g.save;
    $$('.tab').forEach((b) => b.classList.toggle('active', b.dataset.tab === this.shopTab));
    const list = $('#shopList'); list.innerHTML = '';
    if (this.shopTab === 'ships') {
      for (const sk of SKINS) {
        const owned = sv.skins.includes(sk.id); const sel = sv.skin === sk.id;
        const el = document.createElement('div');
        el.className = 'item' + (sel ? ' sel' : '');
        el.innerHTML = `<div class="sw" style="background:linear-gradient(135deg,${hex(sk.hull)},${hex(sk.trim)});box-shadow:0 0 14px ${hex(sk.glow)}"></div>
          <div class="info"><b>${sk.name[sv.settings.lang] || sk.name.en}</b><small>${owned ? '' : '<span class="reward"><i class="gem"></i>' + fmt(sk.price) + '</span>'}</small></div>
          <div class="act"></div>`;
        const btn = document.createElement('button');
        btn.className = 'btn' + (sel ? ' ghost' : owned ? '' : ' primary');
        btn.innerHTML = sel ? t('selected') : owned ? t('select') : `${t('buy')}`;
        btn.disabled = sel;
        btn.addEventListener('click', (e) => { e.stopPropagation(); g.buySkin(sk.id); });
        el.querySelector('.act').appendChild(btn);
        el.addEventListener('click', () => g.previewSkin(sk.id));
        list.appendChild(el);
      }
    } else {
      for (const k of Object.keys(POWERUPS)) {
        const lvl = sv.upgrades[k]; const max = lvl >= UPGRADE_COST.length;
        const el = document.createElement('div'); el.className = 'item';
        const col = hex(POWERUPS[k].color);
        el.innerHTML = `<div class="sw" style="background:${col}22;border:2px solid ${col};color:${col}">${POWERUPS[k].icon}</div>
          <div class="info"><b>${t('up_' + k)} · ${UPGRADE_DUR[k][lvl]}${t('sec')}</b><small>${t('up_desc_' + k)}</small>
          <div class="lv">${UPGRADE_COST.map((_, i) => `<i class="${i < lvl ? 'on' : ''}"></i>`).join('')}</div></div><div class="act"></div>`;
        const btn = document.createElement('button');
        btn.className = 'btn' + (max ? ' ghost' : ' primary');
        btn.innerHTML = max ? t('max') : `<i class="gem"></i>${fmt(UPGRADE_COST[lvl])}`;
        btn.disabled = max;
        btn.addEventListener('click', (e) => { e.stopPropagation(); g.buyUpgrade(k); });
        el.querySelector('.act').appendChild(btn);
        list.appendChild(el);
      }
    }
    this.refreshMenu();
  }

  // ---------- missions ----------
  missionText(m) { return t('m_' + m.tpl, { n: fmt(m.target) }); }
  renderMissions() {
    const g = this.g; const list = $('#missionList'); list.innerHTML = '';
    for (const m of g.save.missions) {
      const el = document.createElement('div');
      el.className = 'item' + (m.done ? ' done' : '');
      const pct = Math.min(100, (m.best / m.target) * 100);
      el.innerHTML = `<div class="sw" style="background:rgba(255,43,214,.15);border:1px solid var(--pink)">${m.done ? '✔' : '🎯'}</div>
        <div class="info"><b>${this.missionText(m)}</b><small><span class="reward"><i class="gem"></i>${m.reward}</span></small>
        <div class="progress"><b style="width:${pct}%"></b></div></div><div class="act"></div>`;
      if (m.done && !m.claimed) {
        const btn = document.createElement('button'); btn.className = 'btn primary'; btn.textContent = t('claim');
        btn.addEventListener('click', (e) => { e.stopPropagation(); g.claimMission(m); });
        el.querySelector('.act').appendChild(btn);
      }
      list.appendChild(el);
    }
    this.refreshMenu();
  }

  // ---------- records ----------
  renderRecords() {
    const sv = this.g.save;
    $('#statsBox').innerHTML = `<div><small>${t('best')}</small><b>${fmt(sv.best)}</b></div>
      <div><small>${t('distance')}</small><b>${fmt(sv.bestDist)} m</b></div>
      <div><small>${t('runs')}</small><b>${fmt(sv.stats.runs)}</b></div>
      <div><small>${t('totalDist')}</small><b>${fmt(sv.stats.dist / 1000)} km</b></div>`;
    const list = $('#recordList');
    if (!sv.records.length) { list.innerHTML = `<div class="empty">${t('noRecords')}</div>`; return; }
    list.innerHTML = sv.records.map((r, i) => `<div class="rec"><span class="n">#${i + 1}</span><span class="s">${fmt(r.score)}</span><small>${fmt(r.dist)} m<br>${r.date}</small></div>`).join('');
  }

  // ---------- daily ----------
  showDaily(streak) {
    const box = $('#dailyDays');
    box.innerHTML = DAILY_REWARDS.map((r, i) => `<div class="${i + 1 < streak ? 'past' : i + 1 === streak ? 'today' : ''}">${t('day')} ${i + 1}<b>${r}</b></div>`).join('');
    this.open('sDaily');
  }

  // ---------- game over ----------
  showOver(r, isBest, canRevive, reviveCost, missionsLines) {
    $('#overScore').textContent = fmt(r.score);
    $('#overDist').textContent = fmt(r.dist) + ' m';
    $('#overShards').textContent = fmt(r.shards);
    $('#overBestVal').textContent = fmt(this.g.save.best);
    $('#overBest').classList.toggle('hidden', !isBest);
    $('#overMode').classList.toggle('hidden', !this.g.challenge);
    $('#overMissions').innerHTML = missionsLines.map((m) => `<div class="om ${m.done ? 'done' : ''}"><span>${m.done ? '✔ ' : ''}${this.missionText(m)}</span><span>${fmt(Math.min(m.best, m.target))}/${fmt(m.target)}</span></div>`).join('');
    const rb = $('#btnRevive');
    rb.classList.toggle('hidden', !canRevive);
    $('#reviveCost').textContent = reviveCost;
    rb.disabled = this.g.save.shards < reviveCost;
    const bar = rb.querySelector('.revive-timer i');
    bar.style.transition = 'none'; bar.style.width = '100%';
    requestAnimationFrame(() => { bar.style.transition = 'width 5s linear'; bar.style.width = '0%'; });
    clearTimeout(this.reviveTO);
    if (canRevive) this.reviveTO = setTimeout(() => rb.classList.add('hidden'), 5000);
    this.show('sOver');
  }

  // ---------- HUD ----------
  hud(r, comboFrac) {
    const c = this.hudCache;
    const set = (key, sel, val) => { if (c[key] !== val) { c[key] = val; $(sel).textContent = val; } };
    set('score', '#hScore', fmt(r.score));
    set('dist', '#hDist', fmt(r.dist) + ' m');
    set('shards', '#hShards', fmt(r.shards));
    const multStr = 'x' + r.mult;
    if (c.mult !== multStr) {
      c.mult = multStr; $('#hMult').textContent = multStr;
      const cb = $('#hCombo'); cb.classList.toggle('on', r.mult > 1);
      cb.classList.remove('bump'); void cb.offsetWidth; cb.classList.add('bump');
    }
    $('#hComboBar').style.width = (comboFrac * 100).toFixed(0) + '%';
    // power-ups
    const keys = Object.keys(r.powers).filter((k) => r.powers[k] > 0);
    const sig = keys.join(',');
    const box = $('#hPowers');
    if (c.powers !== sig) {
      c.powers = sig;
      box.innerHTML = keys.map((k) => `<div class="power" data-k="${k}"><i style="color:${hex(POWERUPS[k].color)}">${POWERUPS[k].icon}</i><div class="bar"><b style="background:${hex(POWERUPS[k].color)}"></b></div></div>`).join('');
    }
    for (const k of keys) {
      const b = box.querySelector(`[data-k="${k}"] b`);
      if (b) b.style.width = Math.max(0, (r.powers[k] / r.powerMax[k]) * 100).toFixed(1) + '%';
    }
  }
  resetHud() { this.hudCache = {}; $('#hPowers').innerHTML = ''; $('#hCombo').classList.remove('on'); this.hint(''); }
  hint(key) {
    if (this.hintKey === key) return;
    this.hintKey = key;
    const h = $('#hHint');
    if (key) h.textContent = t(key);
    h.classList.toggle('on', !!key);
  }
  pop(text, color = '#fff') {
    const p = document.createElement('div');
    p.className = 'pop'; p.textContent = text; p.style.color = color;
    p.style.left = (42 + Math.random() * 16) + '%';
    $('#pops').appendChild(p);
    p.addEventListener('animationend', () => p.remove());
  }
  toast(text) {
    const el = document.createElement('div'); el.className = 'toast'; el.textContent = text;
    $('#toasts').appendChild(el);
    el.addEventListener('animationend', () => el.remove());
  }
  biome(name, color) { this.banner(name, color, 'SECTOR'); }
  banner(name, color, sub) {
    const b = $('#hBiome');
    b.innerHTML = `${name}<small>${sub || ''}</small>`;
    b.style.color = color;
    b.classList.remove('show'); void b.offsetWidth; b.classList.add('show');
  }
  bossBar(frac, name) {
    const el = $('#hBoss');
    el.classList.toggle('hidden', frac == null);
    if (frac == null) return;
    if (name) $('#hBossName').textContent = name;
    $('#hBossHp').style.width = Math.max(0, frac * 100).toFixed(0) + '%';
  }
  flash() { const f = $('#flash'); f.classList.remove('go'); void f.offsetWidth; f.classList.add('go'); }
  caption(html, center = false) {
    const c = $('#caption');
    if (!html) { c.classList.add('hidden'); c.innerHTML = ''; return; }
    c.classList.remove('hidden'); c.classList.toggle('center', center);
    c.innerHTML = html;
  }
}
export { fmt };
