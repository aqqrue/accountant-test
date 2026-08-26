const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 43123;

const mime = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.ogg': 'audio/ogg', '.mp3': 'audio/mpeg' };

http.createServer((req, res) => {
    let file = (req.url || '/').split('?')[0];
    if (file === '/') file = '/index.html';
    const ext = path.extname(file);
    const filePath = path.join(__dirname, file);
    fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found'); return; }
        res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
        res.end(data);
    });
}).listen(port, '0.0.0.0', () => console.log(`Server running on http://127.0.0.1:${port}`));
