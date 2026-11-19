const http = require('http');
const fs = require('fs');
const path = require('path');

const root = __dirname;
const port = process.env.PORT || 3000;
const types = { '.html':'text/html; charset=utf-8', '.css':'text/css; charset=utf-8', '.js':'text/javascript; charset=utf-8', '.svg':'image/svg+xml', '.txt':'text/plain; charset=utf-8' };

http.createServer((req, res) => {
  const pathname = decodeURIComponent(req.url.split('?')[0]);
  const requested = pathname === '/' ? '/index.html' : pathname;
  const file = path.resolve(root, `.${requested}`);
  if (!file.startsWith(root) || !fs.existsSync(file) || fs.statSync(file).isDirectory()) {
    res.writeHead(404, {'Content-Type':'text/plain; charset=utf-8'});
    res.end('Not found');
    return;
  }
  res.writeHead(200, {'Content-Type': types[path.extname(file)] || 'application/octet-stream'});
  fs.createReadStream(file).pipe(res);
}).listen(port, () => console.log(`Sheeshpal General Store website running on port ${port}`));
