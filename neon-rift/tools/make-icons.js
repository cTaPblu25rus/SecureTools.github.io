// Renders the app icon and store graphics with a headless browser canvas.
// Usage: node tools/make-icons.js  (writes public/icons/* and promo/*)
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');

const draw = `
function icon(size){
  const c=document.createElement('canvas'); c.width=c.height=size; const x=c.getContext('2d');
  const s=size/512; x.scale(s,s);
  const bg=x.createRadialGradient(256,230,10,256,256,360); bg.addColorStop(0,'#2a0a55'); bg.addColorStop(1,'#05010f');
  x.fillStyle=bg; x.fillRect(0,0,512,512);
  const cy=220;
  for(let i=11;i>=0;i--){
    const r=18+Math.pow(i/11,1.8)*330; const t=i/11;
    x.strokeStyle='hsl('+(185+t*120)+',100%,'+(55+10*(1-t))+'%)';
    x.lineWidth=2+t*7; x.shadowColor=x.strokeStyle; x.shadowBlur=18*s+4;
    x.beginPath(); x.arc(256,cy+t*60,r,0,Math.PI*2); x.stroke();
  }
  x.shadowBlur=0;
  for(let i=0;i<16;i++){ const a=i/16*Math.PI*2; x.strokeStyle='rgba(0,229,255,0.35)'; x.lineWidth=2;
    x.beginPath(); x.moveTo(256+Math.cos(a)*20,cy+Math.sin(a)*20); x.lineTo(256+Math.cos(a)*420,cy+60+Math.sin(a)*420); x.stroke(); }
  const g=x.createRadialGradient(256,cy,0,256,cy,70); g.addColorStop(0,'rgba(255,255,255,0.95)'); g.addColorStop(1,'rgba(255,43,214,0)');
  x.fillStyle=g; x.beginPath(); x.arc(256,cy,70,0,Math.PI*2); x.fill();
  // ship
  x.save(); x.translate(256,395); x.shadowColor='#00e5ff'; x.shadowBlur=30;
  x.fillStyle='#e9fdff'; x.beginPath(); x.moveTo(0,-95); x.lineTo(130,40); x.lineTo(30,22); x.lineTo(0,55); x.lineTo(-30,22); x.lineTo(-130,40); x.closePath(); x.fill();
  x.shadowBlur=0; x.fillStyle='#00b8d9'; x.beginPath(); x.moveTo(0,-60); x.lineTo(18,10); x.lineTo(0,30); x.lineTo(-18,10); x.closePath(); x.fill();
  x.restore();
  const fg=x.createRadialGradient(256,470,0,256,470,60); fg.addColorStop(0,'rgba(0,229,255,0.9)'); fg.addColorStop(1,'rgba(0,229,255,0)');
  x.fillStyle=fg; x.fillRect(180,420,152,92);
  return c.toDataURL('image/png');
}
function feature(){
  const c=document.createElement('canvas'); c.width=1024; c.height=500; const x=c.getContext('2d');
  const bg=x.createLinearGradient(0,0,1024,500); bg.addColorStop(0,'#05010f'); bg.addColorStop(1,'#2a0a55'); x.fillStyle=bg; x.fillRect(0,0,1024,500);
  const im=new Image(); return new Promise(res=>{ im.onload=()=>{ x.drawImage(im,600,26,448,448);
    x.save(); x.transform(1,0,-0.15,1,0,0);
    x.font='italic 900 120px Inter, sans-serif'; x.fillStyle='#fff'; x.shadowColor='#00e5ff'; x.shadowBlur=30; x.fillText('NEON',110,200);
    const g=x.createLinearGradient(0,220,0,350); g.addColorStop(0,'#ffffff'); g.addColorStop(0.5,'#ff2bd6'); g.addColorStop(1,'#7a00ff');
    x.fillStyle=g; x.shadowColor='#ff2bd6'; x.font='italic 900 140px Inter, sans-serif'; x.fillText('RIFT',130,340); x.restore();
    x.shadowBlur=0; x.fillStyle='#c9d3f2'; x.font='600 30px Inter, sans-serif'; x.fillText('Бесконечный 3D-туннель · 360°',70,420);
    res(c.toDataURL('image/png')); }; im.src=icon(512); });
}
`;

(async () => {
  const root = path.join(__dirname, '..');
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.setContent('<html><body></body></html>');
  await page.addScriptTag({ content: draw });
  const save = (file, dataUrl) => { fs.mkdirSync(path.dirname(file), { recursive: true }); fs.writeFileSync(file, Buffer.from(dataUrl.split(',')[1], 'base64')); };
  for (const sz of [192, 512]) save(path.join(root, 'public/icons/icon-' + sz + '.png'), await page.evaluate((s) => icon(s), sz));
  const mip = { mdpi: 48, hdpi: 72, xhdpi: 96, xxhdpi: 144, xxxhdpi: 192 };
  for (const [k, sz] of Object.entries(mip)) save(path.join(root, 'android/app/src/main/res/mipmap-' + k + '/ic_launcher.png'), await page.evaluate((s) => icon(s), sz));
  save(path.join(root, 'promo/feature-graphic-1024x500.png'), await page.evaluate(() => feature()));
  save(path.join(root, 'promo/icon-512.png'), await page.evaluate(() => icon(512)));
  await browser.close();
  console.log('icons written');
})();
