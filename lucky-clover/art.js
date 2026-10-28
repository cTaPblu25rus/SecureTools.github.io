/*
 * Векторная графика Lucky Clover: градиенты, символы барабанов, монеты и лепрекон.
 * Всё рисуется SVG-кодом, без внешних картинок. Символы кладутся в скрытый <svg><defs>
 * и используются через <use href="#...">, лепрекон вставляется целиком (у него анимируются части).
 */
(function (root) {
  'use strict';

  const stopList = stops => stops.map(([o, c, a]) =>
    `<stop offset="${o}" stop-color="${c}"${a != null ? ` stop-opacity="${a}"` : ''}/>`).join('');
  const lin = (id, stops, x1 = 0, y1 = 0, x2 = 0, y2 = 1) =>
    `<linearGradient id="${id}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}">${stopList(stops)}</linearGradient>`;
  const rad = (id, stops, cx = 0.5, cy = 0.5, r = 0.5, fx = cx, fy = cy) =>
    `<radialGradient id="${id}" cx="${cx}" cy="${cy}" r="${r}" fx="${fx}" fy="${fy}">${stopList(stops)}</radialGradient>`;
  const star = (x, y, r, op = 1) =>
    `<path d="M${x} ${y - r}Q${x} ${y} ${x + r} ${y}Q${x} ${y} ${x} ${y + r}Q${x} ${y} ${x - r} ${y}Q${x} ${y} ${x} ${y - r}Z" fill="#fff" opacity="${op}"/>`;

  const LEAF = 'M50 46C30 30 28 10 41 8C47 7 50 12 50 16C50 12 53 7 59 8C72 10 70 30 50 46Z';
  const clover = (fill, stroke, sw) => [0, 90, 180, 270].map(a =>
    `<path d="${LEAF}" transform="rotate(${a} 50 46)" fill="${fill}" stroke="${stroke}" stroke-width="${sw}" stroke-linejoin="round"/>`).join('');

  // --- Градиенты ----------------------------------------------------------
  const GEMS = {
    ruby: ['#ffb3c0', '#f0193f', '#5c0014'],
    sapphire: ['#b9ecff', '#1f8cff', '#062a73'],
    amethyst: ['#f0c6ff', '#a234ff', '#360a6e'],
    emerald: ['#b8ffcf', '#18c45a', '#033d19'],
  };
  const COINS = {
    gold: ['#fff7c9', '#ffd54a', '#e39a12', '#6e3e00'],
    purple: ['#f6e6ff', '#c27bff', '#7124d6', '#2a0563'],
    orange: ['#fff1d6', '#ffab45', '#d9580a', '#4a1800'],
    blue: ['#e3f9ff', '#4fd5ff', '#0a80c4', '#00314f'],
    green: ['#e4ffeb', '#55e693', '#139c48', '#043d1b'],
    cyan: ['#e9feff', '#73f5ff', '#12a5b8', '#00393f'],
    pink: ['#ffe9fd', '#ff7ff0', '#b51fa8', '#470040'],
    crimson: ['#ffe3e3', '#ff4a4a', '#b3001b', '#3f0008'],
  };

  let grads = '';
  grads += lin('gGoldV', [[0, '#fff8cf'], [0.35, '#ffd54a'], [0.7, '#e39a12'], [1, '#8a5300']]);
  grads += lin('gGoldH', [[0, '#8a5300'], [0.3, '#ffd54a'], [0.5, '#fff8cf'], [0.7, '#ffd54a'], [1, '#8a5300']], 0, 0, 1, 0);
  grads += lin('gGreenH', [[0, '#0a4a1d'], [0.3, '#39c867'], [0.55, '#1e9443'], [1, '#08391a']], 0, 0, 1, 0);
  grads += lin('gGreenD', [[0, '#2aa752'], [1, '#0a4a1d']]);
  grads += lin('gCoat', [[0, '#0d5a25'], [0.35, '#2bb359'], [0.6, '#1d8f40'], [1, '#0a421a']], 0, 0, 1, 0);
  grads += lin('gAle', [[0, '#ffeaa3'], [0.4, '#ffb52e'], [1, '#b85c00']], 0, 0, 1, 0.3);
  grads += lin('gWood', [[0, '#c98a4b'], [1, '#6b3a12']]);
  grads += lin('gRibbon', [[0, '#ff5b6e'], [0.5, '#d10f2b'], [1, '#6e0012']]);
  grads += lin('gPotRim', [[0, '#6f6f6f'], [0.5, '#2a2a2a'], [1, '#111']]);
  grads += rad('gPot', [[0, '#5d5d5d'], [0.6, '#1e1e1e'], [1, '#000']], 0.35, 0.3, 0.75);
  grads += rad('gSkin', [[0, '#ffe3cc'], [0.7, '#ffc9a3'], [1, '#e9a27a']], 0.45, 0.4, 0.6);
  grads += rad('gBeard', [[0, '#ff9a3c'], [0.7, '#e8641a'], [1, '#a83c07']], 0.5, 0.3, 0.7);
  grads += rad('gLeaf', [[0, '#9dffb5'], [0.45, '#22c255'], [1, '#064d1f']], 0.5, 0.3, 0.7);
  grads += rad('gGlow', [[0, '#fff7c9', 0.95], [0.4, '#ffd54a', 0.5], [1, '#ffd54a', 0]]);
  for (const [k, [l, m, d]] of Object.entries(GEMS)) {
    grads += lin('gm-' + k, [[0, l], [0.45, m], [1, d]], 0, 0, 1, 1);
    grads += rad('gt-' + k, [[0, '#fff', 0.95], [0.35, l], [1, m]], 0.35, 0.3, 0.75);
  }
  for (const [k, [hi, l, m, d]] of Object.entries(COINS)) {
    grads += lin('cr-' + k, [[0, hi], [0.35, l], [0.75, m], [1, d]], 0, 0, 0.6, 1);
    grads += rad('cf-' + k, [[0, hi], [0.45, l], [1, m]], 0.38, 0.32, 0.75);
  }

  // --- Гранёные камни (низкие символы) -----------------------------------
  function gem(id, pts) {
    const cx = 50, cy = 48;
    const inner = pts.map(([x, y]) => [cx + (x - cx) * 0.52, cy + (y - cy) * 0.52 - 2]);
    const P = a => a.map(p => p.map(v => v.toFixed(1)).join(',')).join(' ');
    let facets = '';
    for (let i = 0; i < pts.length; i++) {
      const j = (i + 1) % pts.length;
      const mx = (pts[i][0] + pts[j][0]) / 2 - cx, my = (pts[i][1] + pts[j][1]) / 2 - cy;
      const len = Math.hypot(mx, my) || 1;
      const d = -(mx / len * 0.6 + my / len * 0.8); // свет сверху-слева
      const shade = d > 0.5 ? 'rgba(255,255,255,.5)' : d > 0 ? 'rgba(255,255,255,.18)' : d > -0.5 ? 'rgba(0,0,0,.18)' : 'rgba(0,0,0,.4)';
      facets += `<polygon points="${P([pts[i], pts[j], inner[j], inner[i]])}" fill="${shade}"/>`;
    }
    const top = pts.reduce((a, b) => (b[1] < a[1] ? b : a));
    const [tx, ty] = inner[0];
    return `<symbol id="s-${id}" viewBox="0 0 100 100">
      <polygon points="${P(pts)}" fill="rgba(0,0,0,.35)" transform="translate(2.5 4)"/>
      <polygon points="${P(pts)}" fill="url(#gm-${id})" stroke="${GEMS[id][2]}" stroke-width="3.5" stroke-linejoin="round"/>
      ${facets}
      <polygon points="${P(inner)}" fill="url(#gt-${id})" stroke="rgba(255,255,255,.55)" stroke-width="1.2"/>
      <polygon points="${P(pts)}" fill="none" stroke="#fff2b0" stroke-opacity=".55" stroke-width="1.4" stroke-linejoin="round"/>
      <ellipse cx="${(tx + cx) / 2 - 4}" cy="${(ty + cy) / 2 - 3}" rx="7" ry="4" fill="#fff" opacity=".7" transform="rotate(-30 ${(tx + cx) / 2 - 4} ${(ty + cy) / 2 - 3})"/>
      ${star(top[0] - 10, top[1] + 12, 7)}
    </symbol>`;
  }

  // --- Монеты -----------------------------------------------------------
  function coin(k) {
    const dark = COINS[k][3];
    return `<symbol id="c-${k}" viewBox="0 0 100 100">
      <circle cx="52.5" cy="54" r="45" fill="rgba(0,0,0,.4)"/>
      <circle cx="50" cy="50" r="46" fill="url(#cr-${k})" stroke="${dark}" stroke-width="2.5"/>
      <circle cx="50" cy="50" r="40.5" fill="none" stroke="${COINS[k][0]}" stroke-opacity=".75" stroke-width="5" stroke-dasharray="2.4 2.6"/>
      <circle cx="50" cy="50" r="35" fill="url(#cf-${k})" stroke="${dark}" stroke-opacity=".7" stroke-width="1.6"/>
      <g opacity=".16" transform="translate(50 52) scale(.62) translate(-50 -46)">${clover(dark, 'none', 0)}</g>
      <path d="M22 38A30 30 0 0 1 52 16" fill="none" stroke="#fff" stroke-opacity=".7" stroke-width="4" stroke-linecap="round"/>
      ${star(28, 26, 6, 0.9)}
    </symbol>`;
  }

  // --- Высокие символы ----------------------------------------------------
  const HORSESHOE = 'M27 16C6 52 16 90 50 90C84 90 94 52 73 16';
  const horseshoe = `<symbol id="s-horseshoe" viewBox="0 0 100 100">
    <path d="${HORSESHOE}" fill="none" stroke="rgba(0,0,0,.35)" stroke-width="22" transform="translate(2.5 4)"/>
    <path d="${HORSESHOE}" fill="none" stroke="#5a3200" stroke-width="23"/>
    <path d="${HORSESHOE}" fill="none" stroke="url(#gGoldH)" stroke-width="17.5"/>
    <path d="M23 22C9 52 19 82 50 83.5" fill="none" stroke="#fff" stroke-opacity=".6" stroke-width="3" stroke-linecap="round"/>
    ${[[18.5, 36], [14.5, 53], [19.5, 70], [81.5, 36], [85.5, 53], [80.5, 70]].map(([x, y]) => `<rect x="${x - 2.4}" y="${y - 3.2}" width="4.8" height="6.4" rx="1.4" fill="#5a3200"/>`).join('')}
    <rect x="16" y="8" width="21" height="10" rx="3" fill="url(#gGoldV)" stroke="#5a3200" stroke-width="2.4"/>
    <rect x="63" y="8" width="21" height="10" rx="3" fill="url(#gGoldV)" stroke="#5a3200" stroke-width="2.4"/>
    ${star(30, 30, 8)}${star(76, 78, 5, 0.8)}
  </symbol>`;

  const ale = `<symbol id="s-ale" viewBox="0 0 100 100">
    <rect x="22" y="30" width="48" height="62" rx="8" fill="rgba(0,0,0,.35)" transform="translate(2.5 4)"/>
    <path d="M68 42h9a11 11 0 0 1 11 11v15a11 11 0 0 1-11 11h-9" fill="none" stroke="#4a2400" stroke-width="12"/>
    <path d="M68 42h9a11 11 0 0 1 11 11v15a11 11 0 0 1-11 11h-9" fill="none" stroke="url(#gWood)" stroke-width="7"/>
    <rect x="20" y="30" width="50" height="62" rx="8" fill="url(#gAle)" stroke="#4a2400" stroke-width="3"/>
    <circle cx="36" cy="60" r="2.2" fill="#fff" opacity=".55"/><circle cx="52" cy="70" r="1.6" fill="#fff" opacity=".55"/><circle cx="44" cy="80" r="2.6" fill="#fff" opacity=".45"/><circle cx="58" cy="54" r="1.4" fill="#fff" opacity=".5"/>
    <rect x="20" y="44" width="50" height="7" fill="url(#gGoldV)" stroke="#4a2400" stroke-width="1.6"/>
    <rect x="20" y="76" width="50" height="7" fill="url(#gGoldV)" stroke="#4a2400" stroke-width="1.6"/>
    <circle cx="27" cy="47.5" r="1.6" fill="#5a3200"/><circle cx="63" cy="47.5" r="1.6" fill="#5a3200"/><circle cx="27" cy="79.5" r="1.6" fill="#5a3200"/><circle cx="63" cy="79.5" r="1.6" fill="#5a3200"/>
    <rect x="26" y="35" width="5" height="52" rx="2.5" fill="#fff" opacity=".35"/>
    <g fill="#fffaf0" stroke="#e2cd9c" stroke-width="1.6">
      <circle cx="25" cy="31" r="9"/><circle cx="66" cy="31" r="8.5"/><circle cx="37" cy="24" r="10.5"/><circle cx="53" cy="23" r="11"/><circle cx="45" cy="32" r="9"/>
      <path d="M22 34q-2 10 3 12q4-2 2-11z"/>
    </g>
    <circle cx="33" cy="20" r="3" fill="#fff"/>
    ${star(80, 22, 6, 0.9)}
  </symbol>`;

  const hat = `<symbol id="s-hat" viewBox="0 0 100 100">
    <ellipse cx="52" cy="84" rx="42" ry="11" fill="rgba(0,0,0,.35)"/>
    <ellipse cx="50" cy="80" rx="43" ry="11.5" fill="url(#gGreenD)" stroke="#06300f" stroke-width="2.8"/>
    <path d="M26 79L31 20Q50 13 69 20L74 79Q50 87 26 79Z" fill="url(#gGreenH)" stroke="#06300f" stroke-width="2.8" stroke-linejoin="round"/>
    <ellipse cx="50" cy="20" rx="19" ry="5.5" fill="#45c96a" stroke="#06300f" stroke-width="2.2"/>
    <path d="M28.4 57Q50 63 71.6 57L72.7 70Q50 77 27.3 70Z" fill="#161616"/>
    <rect x="40.5" y="56.5" width="19" height="15.5" rx="2" fill="none" stroke="#5a3200" stroke-width="6"/>
    <rect x="40.5" y="56.5" width="19" height="15.5" rx="2" fill="none" stroke="url(#gGoldV)" stroke-width="3.6"/>
    <path d="M35 25L32 72" stroke="#fff" stroke-opacity=".3" stroke-width="4" stroke-linecap="round"/>
    <g transform="translate(70 52) scale(.26) translate(-50 -46)">${clover('url(#gLeaf)', '#06300f', 5)}</g>
    ${star(22, 28, 6, 0.9)}
  </symbol>`;

  const wild = `<symbol id="s-wild" viewBox="0 0 100 100">
    <circle cx="50" cy="44" r="40" fill="url(#gGlow)"/>
    <path d="M50 46Q58 68 72 76" fill="none" stroke="#5a3200" stroke-width="7" stroke-linecap="round"/>
    <path d="M50 46Q58 68 72 76" fill="none" stroke="url(#gGoldV)" stroke-width="4" stroke-linecap="round"/>
    <g transform="translate(50 44) scale(.95) translate(-50 -46)">
      ${clover('url(#gLeaf)', '#ffd54a', 3.2)}
      ${[0, 90, 180, 270].map(a => `<path d="M50 42L50 20" transform="rotate(${a} 50 46)" stroke="#d6ffe0" stroke-opacity=".6" stroke-width="1.6"/>`).join('')}
    </g>
    <circle cx="50" cy="44" r="6.5" fill="url(#gGoldV)" stroke="#5a3200" stroke-width="1.6"/>
    <path d="M6 70H94L87 80L94 92H6L13 80Z" fill="url(#gRibbon)" stroke="#ffd54a" stroke-width="2.4" stroke-linejoin="round"/>
    <text x="50" y="87.5" text-anchor="middle" font-family="Lilita One,Rubik,sans-serif" font-size="18" fill="#fff" stroke="#5c0010" stroke-width="3.4" paint-order="stroke" letter-spacing="1">WILD</text>
    ${star(24, 20, 6)}${star(80, 62, 4, 0.8)}
  </symbol>`;

  const RAINBOW = ['#ff3b3b', '#ff9a2e', '#ffe23b', '#3fd35f', '#3b9dff', '#9b5bff'];
  const potBody = (heap) => `
    <path d="M18 58Q12 93 50 95Q88 93 82 58Z" fill="url(#gPot)" stroke="#000" stroke-width="2.2"/>
    <ellipse cx="30" cy="94" rx="7" ry="3.5" fill="#111"/><ellipse cx="70" cy="94" rx="7" ry="3.5" fill="#111"/>
    <path d="M24 66Q22 84 34 90" fill="none" stroke="#fff" stroke-opacity=".22" stroke-width="4" stroke-linecap="round"/>
    <ellipse cx="50" cy="58" rx="35" ry="7.5" fill="url(#gPotRim)" stroke="#000" stroke-width="2"/>
    ${heap ? [[30, 54], [40, 47], [51, 44], [62, 47], [71, 54], [36, 56], [50, 52], [62, 56], [45, 40], [57, 41]].map(([x, y]) =>
    `<ellipse cx="${x}" cy="${y}" rx="7.5" ry="6.5" fill="url(#cf-gold)" stroke="#8a5300" stroke-width="1.3"/>`).join('') : ''}`;
  const pot = `<symbol id="s-pot" viewBox="0 0 100 100">
    ${RAINBOW.map((c, i) => `<path d="M${10 + i * 4.5} 60A${40 - i * 4.5} ${46 - i * 4.5} 0 0 1 ${90 - i * 4.5} 60" fill="none" stroke="${c}" stroke-width="4.8"/>`).join('')}
    ${potBody(true)}
    <text x="50" y="82" text-anchor="middle" font-family="Lilita One,Rubik,sans-serif" font-size="15" fill="url(#gGoldV)" stroke="#2a1500" stroke-width="3" paint-order="stroke" letter-spacing=".5">BONUS</text>
    ${star(46, 37, 6)}${star(70, 44, 4, 0.9)}
  </symbol>`;
  const potBig = `<symbol id="s-potbig" viewBox="0 0 100 100">
    <circle cx="50" cy="52" r="48" fill="url(#gGlow)"/>
    ${potBody(true)}
    ${star(46, 36, 7)}${star(68, 42, 5)}
  </symbol>`;
  const lock = `<symbol id="s-lock" viewBox="0 0 100 100">
    <path d="M0 30L100 70M0 70L100 30" stroke="#6b5a3a" stroke-width="7" stroke-dasharray="10 4" opacity=".75"/>
    <path d="M34 46V34a16 16 0 0 1 32 0v12" fill="none" stroke="#b9a37a" stroke-width="7"/>
    <rect x="26" y="44" width="48" height="38" rx="7" fill="url(#gGoldV)" stroke="#4a2c00" stroke-width="3"/>
    <circle cx="50" cy="60" r="5" fill="#4a2c00"/><rect x="47.5" y="62" width="5" height="11" rx="2" fill="#4a2c00"/>
  </symbol>`;
  const starFace = `<symbol id="s-star" viewBox="0 0 100 100">
    <path d="M50 10L61 38L91 40L68 59L76 89L50 72L24 89L32 59L9 40L39 38Z" fill="url(#gGoldV)" stroke="#5a3200" stroke-width="3" stroke-linejoin="round"/>
  </symbol>`;
  const cloverSym = `<symbol id="s-clover" viewBox="0 0 100 100"><g transform="translate(50 50) scale(.95) translate(-50 -46)">${clover('url(#gLeaf)', '#06300f', 3)}</g></symbol>`;

  const defs = `<svg width="0" height="0" style="position:absolute" aria-hidden="true"><defs>${grads}</defs>
    ${gem('ruby', [[50, 8], [88, 30], [88, 70], [50, 92], [12, 70], [12, 30]])}
    ${gem('sapphire', [[50, 5], [92, 50], [50, 95], [8, 50]])}
    ${gem('amethyst', [[20, 12], [80, 12], [94, 30], [50, 94], [6, 30]])}
    ${gem('emerald', [[30, 10], [70, 10], [90, 30], [90, 70], [70, 90], [30, 90], [10, 70], [10, 30]])}
    ${Object.keys(COINS).map(coin).join('')}
    ${horseshoe}${ale}${hat}${wild}${pot}${potBig}${lock}${starFace}${cloverSym}
  </svg>`;

  // --- Лепрекон ---------------------------------------------------------
  // Части (.arm-l, .arm-r, .head, .eyes, .hat, .body) анимируются CSS-классами на корневом <svg>.
  function leprechaun(cls) {
    return `<svg class="lep ${cls || ''}" viewBox="0 0 200 260" aria-hidden="true"><g class="all">
      <ellipse cx="100" cy="252" rx="52" ry="7" fill="rgba(0,0,0,.3)"/>
      <g class="legs">
        <rect x="78" y="198" width="17" height="38" rx="6" fill="#1d8f40" stroke="#06300f" stroke-width="2.5"/>
        <rect x="105" y="198" width="17" height="38" rx="6" fill="#1d8f40" stroke="#06300f" stroke-width="2.5"/>
        <rect x="79" y="218" width="15" height="6" fill="#fff"/><rect x="106" y="218" width="15" height="6" fill="#fff"/>
        <path d="M70 236h26q4 0 4 6v5H64q-1-11 6-11z" fill="#1a1a1a" stroke="#000" stroke-width="2"/>
        <path d="M104 236h26q7 0 6 11h-36v-5q0-6 4-6z" fill="#1a1a1a" stroke="#000" stroke-width="2"/>
        <rect x="80" y="235" width="9" height="7" rx="1.5" fill="none" stroke="#ffd54a" stroke-width="2.4"/>
        <rect x="111" y="235" width="9" height="7" rx="1.5" fill="none" stroke="#ffd54a" stroke-width="2.4"/>
      </g>
      <g class="arm-l">
        <path d="M68 152Q42 165 40 192" fill="none" stroke="#06300f" stroke-width="18" stroke-linecap="round"/>
        <path d="M68 152Q42 165 40 192" fill="none" stroke="#25a14d" stroke-width="13" stroke-linecap="round"/>
        <circle cx="40" cy="199" r="9.5" fill="url(#gSkin)" stroke="#8a4a2a" stroke-width="2"/>
      </g>
      <g class="body">
        <path d="M62 150Q57 206 70 213H130Q143 206 138 150Q100 131 62 150Z" fill="url(#gCoat)" stroke="#06300f" stroke-width="3"/>
        <path d="M86 144L100 186L114 144Q100 139 86 144Z" fill="#fffaf0" stroke="#06300f" stroke-width="2"/>
        <path d="M94 150l6 6l6-6l-6 22z" fill="#1d8f40"/>
        <rect x="63" y="186" width="74" height="11" fill="#151515"/>
        <rect x="91" y="183" width="18" height="17" rx="2" fill="none" stroke="#5a3200" stroke-width="5.5"/>
        <rect x="91" y="183" width="18" height="17" rx="2" fill="none" stroke="url(#gGoldV)" stroke-width="3.5"/>
        <circle cx="80" cy="160" r="3.2" fill="url(#gGoldV)"/><circle cx="80" cy="174" r="3.2" fill="url(#gGoldV)"/>
        <circle cx="120" cy="160" r="3.2" fill="url(#gGoldV)"/><circle cx="120" cy="174" r="3.2" fill="url(#gGoldV)"/>
      </g>
      <g class="arm-r">
        <path d="M132 152Q158 165 160 192" fill="none" stroke="#06300f" stroke-width="18" stroke-linecap="round"/>
        <path d="M132 152Q158 165 160 192" fill="none" stroke="#25a14d" stroke-width="13" stroke-linecap="round"/>
        <circle cx="160" cy="188" r="13" fill="url(#cf-gold)" stroke="#6e3e00" stroke-width="2.4"/>
        <circle cx="160" cy="188" r="8.5" fill="none" stroke="#6e3e00" stroke-opacity=".5" stroke-width="1.4"/>
        <circle cx="160" cy="199" r="9.5" fill="url(#gSkin)" stroke="#8a4a2a" stroke-width="2"/>
      </g>
      <g class="head">
        <ellipse cx="64" cy="110" rx="7" ry="10" fill="url(#gSkin)" stroke="#8a4a2a" stroke-width="2"/>
        <ellipse cx="136" cy="110" rx="7" ry="10" fill="url(#gSkin)" stroke="#8a4a2a" stroke-width="2"/>
        <ellipse cx="100" cy="107" rx="36" ry="34" fill="url(#gSkin)" stroke="#8a4a2a" stroke-width="2.5"/>
        <path d="M66 90Q57 108 66 124L73 119Q67 106 73 93Z" fill="#e8641a" stroke="#8a3a0a" stroke-width="1.5"/>
        <path d="M134 90Q143 108 134 124L127 119Q133 106 127 93Z" fill="#e8641a" stroke="#8a3a0a" stroke-width="1.5"/>
        <path d="M64 111Q61 150 82 166Q92 177 100 170Q108 177 118 166Q139 150 136 111Q128 141 100 143Q72 141 64 111Z" fill="url(#gBeard)" stroke="#8a3a0a" stroke-width="2.5"/>
        <path d="M76 148q4 6 10 4M92 160q5 5 10 1M110 152q6 3 11-3M84 136q-2 6 3 10" fill="none" stroke="#b5490b" stroke-width="2" stroke-linecap="round"/>
        <path d="M89 129Q100 142 111 129Q100 134 89 129Z" fill="#6a1414"/>
        <path d="M95 134q5 3 10 0" fill="none" stroke="#ff7a8a" stroke-width="2.5" stroke-linecap="round"/>
        <path d="M100 124Q88 113 75 124Q86 131 100 127Q114 131 125 124Q112 113 100 124Z" fill="#f07224" stroke="#8a3a0a" stroke-width="2"/>
        <ellipse cx="78" cy="117" rx="8" ry="5" fill="#ff6b6b" opacity=".45"/>
        <ellipse cx="122" cy="117" rx="8" ry="5" fill="#ff6b6b" opacity=".45"/>
        <ellipse cx="100" cy="114" rx="8.5" ry="7.5" fill="#ffad8a" stroke="#8a4a2a" stroke-width="2"/>
        <ellipse cx="97" cy="111" rx="2.5" ry="1.8" fill="#fff" opacity=".7"/>
        <g class="eyes">
          <ellipse cx="86" cy="99" rx="7.5" ry="8.5" fill="#fff" stroke="#5a2a10" stroke-width="1.6"/>
          <ellipse cx="114" cy="99" rx="7.5" ry="8.5" fill="#fff" stroke="#5a2a10" stroke-width="1.6"/>
          <g class="pupils"><circle cx="87" cy="100" r="4.3" fill="#1a3a1a"/><circle cx="115" cy="100" r="4.3" fill="#1a3a1a"/>
          <circle cx="88.5" cy="98.2" r="1.5" fill="#fff"/><circle cx="116.5" cy="98.2" r="1.5" fill="#fff"/></g>
        </g>
        <path class="brow" d="M77 87Q86 80 95 87" fill="none" stroke="#e8641a" stroke-width="4.5" stroke-linecap="round"/>
        <path class="brow" d="M105 87Q114 80 123 87" fill="none" stroke="#e8641a" stroke-width="4.5" stroke-linecap="round"/>
      </g>
      <g class="hat">
        <ellipse cx="100" cy="78" rx="52" ry="10.5" fill="url(#gGreenD)" stroke="#06300f" stroke-width="3"/>
        <path d="M68 78L74 14Q100 5 126 14L132 78Q100 86 68 78Z" fill="url(#gGreenH)" stroke="#06300f" stroke-width="3" stroke-linejoin="round"/>
        <ellipse cx="100" cy="14" rx="26" ry="6.5" fill="#45c96a" stroke="#06300f" stroke-width="2.5"/>
        <path d="M70.6 56Q100 62 129.4 56L130.8 70Q100 77 69.2 70Z" fill="#161616"/>
        <rect x="88.5" y="55" width="23" height="17" rx="2" fill="none" stroke="#5a3200" stroke-width="6.5"/>
        <rect x="88.5" y="55" width="23" height="17" rx="2" fill="none" stroke="url(#gGoldV)" stroke-width="4"/>
        <path d="M78 20L74 72" stroke="#fff" stroke-opacity=".28" stroke-width="5" stroke-linecap="round"/>
        <g transform="translate(124 50) scale(.28) translate(-50 -46)">${clover('url(#gLeaf)', '#06300f', 5)}</g>
      </g>
    </g></svg>`;
  }

  function inject() {
    const host = document.createElement('div');
    host.innerHTML = defs;
    document.body.insertBefore(host.firstChild, document.body.firstChild);
  }

  root.SlotArt = { inject, leprechaun, RAINBOW };
})(window);
