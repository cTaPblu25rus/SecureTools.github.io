// Renders the app icon and store graphics on a headless browser canvas.
// Usage: node tools/make-icons.mjs  (writes public/icons/*, android mipmaps and promo/*)
import { chromium } from 'playwright';
import { writeFileSync, mkdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import { dirname, join } from 'node:path';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');

const draw = `
function rifle(x, s) {
  x.save(); x.scale(s, s);
  x.fillStyle = '#1b1c1f';
  x.beginPath();
  x.moveTo(-210, -18); x.lineTo(40, -18); x.lineTo(60, -30); x.lineTo(150, -30); x.lineTo(150, -20); x.lineTo(240, -20); x.lineTo(240, -8);
  x.lineTo(150, -8); x.lineTo(150, 2); x.lineTo(60, 6); x.lineTo(30, 6); x.lineTo(10, 80); x.lineTo(-22, 74); x.lineTo(-10, 6);
  x.lineTo(-70, 6); x.lineTo(-90, 46); x.lineTo(-120, 40); x.lineTo(-108, 6); x.lineTo(-150, 6); x.lineTo(-215, 40); x.lineTo(-230, 30); x.lineTo(-215, -2); x.closePath(); x.fill();
  x.fillStyle = '#7a4a24'; x.fillRect(-212, -14, 70, 18); x.fillRect(60, -18, 80, 20);
  x.restore();
}
function icon(size) {
  const c = document.createElement('canvas'); c.width = c.height = size; const x = c.getContext('2d');
  const s = size / 512; x.scale(s, s);
  const bg = x.createLinearGradient(0, 0, 0, 512); bg.addColorStop(0, '#3a6fb0'); bg.addColorStop(0.55, '#e9c98f'); bg.addColorStop(0.56, '#c49a5c'); bg.addColorStop(1, '#8a6232');
  x.fillStyle = bg; x.fillRect(0, 0, 512, 512);
  // Desert walls.
  x.fillStyle = '#b9905a'; x.fillRect(0, 210, 120, 120); x.fillRect(392, 180, 120, 150);
  x.fillStyle = '#a07a48'; for (let i = 0; i < 6; i++) { x.fillRect(0, 222 + i * 18, 120, 3); x.fillRect(392, 192 + i * 22, 120, 3); }
  // Reticle.
  x.strokeStyle = '#ffc04a'; x.lineWidth = 14; x.shadowColor = 'rgba(0,0,0,0.6)'; x.shadowBlur = 12;
  x.beginPath(); x.arc(256, 230, 130, 0, Math.PI * 2); x.stroke();
  x.lineWidth = 12;
  for (const [a, b, c2, d] of [[256, 70, 256, 160], [256, 300, 256, 390], [96, 230, 186, 230], [326, 230, 416, 230]]) { x.beginPath(); x.moveTo(a, b); x.lineTo(c2, d); x.stroke(); }
  x.fillStyle = '#ff4a3a'; x.beginPath(); x.arc(256, 230, 12, 0, Math.PI * 2); x.fill();
  x.shadowBlur = 0;
  x.save(); x.translate(250, 420); x.rotate(-0.08); rifle(x, 0.95); x.restore();
  return c;
}
function feature() {
  const c = document.createElement('canvas'); c.width = 1024; c.height = 500; const x = c.getContext('2d');
  const bg = x.createLinearGradient(0, 0, 0, 500); bg.addColorStop(0, '#2c5c98'); bg.addColorStop(0.6, '#e2c48c'); bg.addColorStop(0.61, '#b68a50'); bg.addColorStop(1, '#6e4c24');
  x.fillStyle = bg; x.fillRect(0, 0, 1024, 500);
  x.fillStyle = '#a98450'; x.fillRect(0, 200, 260, 110); x.fillRect(760, 160, 264, 150);
  x.drawImage(icon(360), 640, 70);
  x.font = '900 120px Arial, sans-serif'; x.shadowColor = 'rgba(0,0,0,0.7)'; x.shadowBlur = 14; x.shadowOffsetY = 6;
  x.fillStyle = '#f4f4f4'; x.fillText('STRIKE', 60, 190);
  x.fillStyle = '#ffc04a'; x.fillText('ZONE', 60, 310);
  x.shadowBlur = 6; x.font = '700 30px Arial, sans-serif'; x.fillStyle = '#ffffff';
  x.fillText('Закладка бомбы · Дезматч · Гонка вооружений', 62, 380);
  x.fillText('Боты · 3 карты · 12 видов оружия', 62, 422);
  return c;
}
window.out = { icon512: icon(512).toDataURL(), icon192: icon(192).toDataURL(), feature: feature().toDataURL(),
  m: { mdpi: icon(48).toDataURL(), hdpi: icon(72).toDataURL(), xhdpi: icon(96).toDataURL(), xxhdpi: icon(144).toDataURL(), xxxhdpi: icon(192).toDataURL() } };
`;

const browser = await chromium.launch();
const page = await browser.newPage();
await page.setContent('<html><body></body></html>');
await page.addScriptTag({ content: draw });
const out = await page.evaluate(() => window.out);
const save = (file, url) => { mkdirSync(dirname(file), { recursive: true }); writeFileSync(file, Buffer.from(url.split(',')[1], 'base64')); };
save(join(root, 'public/icons/icon-512.png'), out.icon512);
save(join(root, 'public/icons/icon-192.png'), out.icon192);
save(join(root, 'promo/icon-512.png'), out.icon512);
save(join(root, 'promo/feature-graphic-1024x500.png'), out.feature);
for (const [d, url] of Object.entries(out.m)) save(join(root, `android/app/src/main/res/mipmap-${d}/ic_launcher.png`), url);
await browser.close();
console.log('icons written');
