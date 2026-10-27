// Game events: everything a player sees or hears that the simulation produces.
// The authority (single player or LAN host) runs handleEvent locally and, when
// hosting, also sends the same events to clients, who replay them through
// handleEvent with their own player as the viewer.
import { audio } from './audio.js';
import { t } from './i18n.js';
import { TEAM } from './config.js';

// Position of an event source for 3D audio; null means "this is me".
function srcPos(G, ev, dy = 1.4) {
  if (ev.p) return { x: ev.p[0], y: ev.p[1], z: ev.p[2] };
  if (ev.a !== undefined) {
    const a = G.byId.get(ev.a);
    if (!a || a === G.listenerActor) return null;
    return { x: a.x, y: a.y + dy, z: a.z };
  }
  return null;
}

const mine = (G, ev) => ev.o === undefined || ev.o === G.player.id;

export function handleEvent(G, ev) {
  const ui = G.ui, fx = G.fx;
  switch (ev.e) {
    case 'snd':
      if (!mine(G, ev)) return;
      audio.play(ev.n, srcPos(G, ev), ev.v);
      return;
    case 'shot': {
      const a = G.byId.get(ev.a);
      if (!a) return;
      const pos = a === G.listenerActor ? null : { x: a.x, y: a.y + a.eyeHeight(), z: a.z };
      audio.shot(ev.k, ev.kind, pos);
      a.fireAnim = 1;
      if (!ev.sil) {
        if (a.model && a.model.visible) { a.model.userData.flash.visible = true; a.flashOff = G.time + 0.05; a.model.userData.flash.material.rotation = Math.random() * 6; }
        if (a !== G.viewActor) fx.flashLight(ev.m[0], ev.m[1], ev.m[2], 2.5, 0xffc070, 0.05);
      }
      for (const e of ev.ends) fx.tracer(ev.m[0], ev.m[1], ev.m[2], e[0], e[1], e[2]);
      if (ev.sh) G.ejectShell(a);
      ui.shot(a, !!ev.sil);
      return;
    }
    case 'imp':
      fx.impact(ev.p[0], ev.p[1], ev.p[2], ev.n[0], ev.n[1], ev.n[2], ev.s, ev.dc !== 0);
      if (ev.r) audio.play(ev.r, { x: ev.p[0], y: ev.p[1], z: ev.p[2] }, 0.6);
      return;
    case 'blood':
      fx.bloodHit(ev.p[0], ev.p[1], ev.p[2], ev.d[0], ev.d[1], ev.d[2], !!ev.h, G.grid);
      return;
    case 'dmg': {
      const v = G.byId.get(ev.v);
      if (!v) return;
      if (ev.a === G.player.id && ev.v !== ev.a) { ui.hitmarker(ev.z === 'head', !!ev.kl); if (!G.autopilot) ui.stat('hits', 1); }
      if (v === G.player) {
        if (ev.a !== undefined && ev.a !== ev.v && ev.ax !== undefined) ui.damageDir(Math.atan2(ev.ax - v.x, ev.az - v.z), ev.hp);
        ui.hurt(ev.hp);
        audio.play('hurt', null, 0.5);
      }
      const pos = v === G.listenerActor ? null : { x: v.x, y: v.y + 1.3, z: v.z };
      if (ev.z === 'head') audio.play('headshot', pos, ev.hd ? 0.7 : 1);
      else if (ev.z !== 'blast') audio.play(ev.k ? 'kevlar' : 'hit', pos, 0.8);
      return;
    }
    case 'kill': {
      const v = G.byId.get(ev.v), a = ev.a !== undefined ? G.byId.get(ev.a) : null;
      if (!v) return;
      ui.killfeed(a, v, ev.w, !!ev.hs, !!ev.wb);
      if (!G.autopilot) {
        if (v === G.player) { ui.stat('deaths', 1); ui.died(a, ev.w); }
        if (a === G.player && a !== v && !ev.tk) { ui.stat('kills', 1); if (ev.hs) ui.stat('hs', 1); }
      }
      return;
    }
    case 'msg':
      if (!mine(G, ev)) return;
      if (ev.tm !== undefined && G.player.team !== ev.tm) return;
      ui.message(t(ev.k, ...(ev.x || [])), ev.d, ev.c);
      return;
    case 'say':
      if (ev.tm !== undefined && G.player.team !== ev.tm) return;
      audio.say(t(ev.k));
      return;
    case 'money':
      if (mine(G, ev)) ui.money(ev.n);
      return;
    case 'stat':
      if (mine(G, ev) && !G.autopilot) ui.stat(ev.k, ev.n);
      return;
    case 'rstart':
      ui.roundStart(ev.r);
      audio.play('roundStart');
      return;
    case 'rend': {
      const mvp = ev.mvp !== undefined ? G.byId.get(ev.mvp) : null;
      ui.roundEnd(ev.w, ev.r, mvp);
      const won = G.player.team === ev.w;
      audio.play(won ? 'win' : 'lose');
      audio.say(t(ev.w === TEAM.T ? 'r_twin' : 'r_ctwin'));
      if (!G.autopilot) ui.stat(won ? 'wins' : 'losses', 1);
      return;
    }
    case 'mend': {
      const wa = ev.wa !== undefined ? G.byId.get(ev.wa) : null;
      const won = G.ffa ? wa === G.player : ev.wt === G.player.team;
      const sorted = G.actors.slice().sort((a, b) => b.kills - a.kills || a.deaths - b.deaths);
      if (!G.autopilot) { ui.stat('matches', 1); if (sorted[0] === G.player) ui.stat('mvp', 1); }
      ui.matchEnd({ won, winnerTeam: ev.wt, winnerActor: wa, score: G.score.slice(), actors: sorted, mvp: sorted[0] });
      audio.play(won ? 'win' : 'lose');
      return;
    }
    case 'expl':
      fx.explosion(ev.p[0], ev.p[1], ev.p[2], !!ev.big);
      G.shake(ev.p[0], ev.p[2], ev.big ? 60 : 14, ev.big ? 1.6 : 0.6);
      return;
    case 'flashfx':
      fx.flashLight(ev.p[0], ev.p[1] + 0.5, ev.p[2], 60, 0xffffff, 0.25);
      for (let k = 0; k < 10; k++) fx.add.emit(ev.p[0], ev.p[1] + 0.2, ev.p[2], (Math.random() - 0.5) * 8, Math.random() * 6, (Math.random() - 0.5) * 8, 0.4, 0.25, 1, 1, 1, 1, 10);
      return;
    case 'flashed':
      if (!mine(G, ev)) return;
      ui.flash(ev.d);
      audio.play('ring', null, Math.min(1, ev.d / 4));
      return;
    case 'smoke':
      fx.smoke(ev.p[0], ev.p[1], ev.p[2], 18);
      return;
    case 'chat': {
      const a = G.byId.get(ev.a);
      if (!a || G.ffa || a.team !== G.player.team) return;
      ui.chat(a, ev.txt !== undefined ? ev.txt : t(ev.k));
      return;
    }
    default:
  }
}
