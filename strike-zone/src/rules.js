// Pure combat/economy rules shared by the game and the tests.
import { RULES } from './config.js';

// Damage falls off by weapon.range for every 10 m travelled.
export function rangeFactor(w, dist) {
  return Math.pow(w.range || 1, dist / 10);
}

// Applies damage to {hp, armor, helmet}. Legs are never covered; the head only with a helmet.
export function applyDamage(v, dmg, zone, pen) {
  let hp = dmg;
  const covered = v.armor > 0 && (zone === 'chest' || zone === 'stomach' || (zone === 'head' && v.helmet) || zone === 'blast');
  if (covered) {
    hp = dmg * pen;
    const absorbed = (dmg - hp) * 0.5;
    if (absorbed > v.armor) { hp += absorbed - v.armor; v.armor = 0; }
    else v.armor = Math.max(0, Math.round(v.armor - absorbed));
    if (v.armor <= 0) v.helmet = false;
  }
  hp = Math.max(1, Math.round(hp));
  v.hp -= hp;
  return { hp, armorHit: covered };
}

// Money for the losing team after `streak` losses in a row.
export function lossBonus(streak) {
  return Math.min(RULES.lossMax, RULES.lossBase + RULES.lossStep * (Math.max(1, streak) - 1));
}
