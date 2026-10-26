// Build: bundle src/ into www/game.js and copy static files from public/.
import { build } from 'esbuild';
import { cpSync, mkdirSync, rmSync } from 'node:fs';

const watch = process.argv.includes('--dev');
const OUT = process.env.OUTDIR || 'www';
rmSync(OUT, { recursive: true, force: true });
mkdirSync(OUT, { recursive: true });
cpSync('public', OUT, { recursive: true });
await build({
  entryPoints: ['src/main.js'],
  bundle: true,
  minify: !watch,
  sourcemap: watch,
  format: 'iife',
  target: ['es2019', 'chrome80'],
  outfile: OUT + '/game.js',
  legalComments: 'none',
});
console.log('built ' + OUT + '/');
