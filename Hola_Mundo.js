// app.js
const http = require('http');
const hostname = '127.0.0.1';
const port = 3000;

http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain; charset=utf-8' });
  res.end('Hola Mundo!\n');
}).listen(port, hostname, () => {
  console.log(`Servidor corriendo en http://${hostname}:${port}/`);
});
