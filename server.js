const http = require("node:http");
const fs = require("node:fs");
const path = require("node:path");
const root = path.resolve(__dirname, "public");
const types = {".html":"text/html; charset=utf-8",".css":"text/css; charset=utf-8",".js":"text/javascript; charset=utf-8",".svg":"image/svg+xml"};
const server = http.createServer((req,res) => {
  let pathname;
  try { pathname = decodeURIComponent(new URL(req.url, "http://localhost").pathname); }
  catch { res.writeHead(400); return res.end("Bad request"); }
  let file = path.resolve(root, "." + pathname);
  if (file !== root && !file.startsWith(root + path.sep)) {
    res.writeHead(403); return res.end("Forbidden");
  }
  if (pathname === "/") file = path.join(root, "index.html");
  fs.readFile(file, (error, data) => {
    if (error) {
      if (path.extname(pathname)) { res.writeHead(404); return res.end("Not found"); }
      file = path.join(root, "index.html");
      return fs.readFile(file, (fallbackError, html) => {
        if (fallbackError) { res.writeHead(500); return res.end("App unavailable"); }
        res.writeHead(200, {"Content-Type":types[".html"],"Cache-Control":"no-store"});
        res.end(html);
      });
    }
    res.writeHead(200, {"Content-Type":types[path.extname(file)] || "application/octet-stream","Cache-Control":"no-store"});
    res.end(data);
  });
});
const port = Number(process.env.PORT || 4173);
server.listen(port, "127.0.0.1", () => console.log(`History API Lab: http://127.0.0.1:${port}`));
