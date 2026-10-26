// Minimal static server for the built www/ folder.
import http from 'node:http';
import { readFile } from 'node:fs/promises';
import { extname, join, normalize } from 'node:path';
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.png': 'image/png', '.webmanifest': 'application/manifest+json', '.json': 'application/json' };
export function serve(root, port = 0) {
  return new Promise((resolve) => {
    const srv = http.createServer(async (req, res) => {
      const url = decodeURIComponent(req.url.split('?')[0]);
      const p = normalize(join(root, url === '/' ? 'index.html' : url));
      if (!p.startsWith(normalize(root))) { res.writeHead(403); res.end(); return; }
      try { const d = await readFile(p); res.writeHead(200, { 'content-type': TYPES[extname(p)] || 'application/octet-stream' }); res.end(d); }
      catch { res.writeHead(404); res.end('not found'); }
    });
    srv.listen(port, '127.0.0.1', () => resolve(srv));
  });
}
