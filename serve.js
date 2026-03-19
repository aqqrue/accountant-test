const http = require('http');
const fs = require('fs');
const path = require('path');
const port = process.env.PORT || 3000;

const mime = { '.html': 'text/html', '.js': 'application/javascript', '.css': 'text/css', '.png': 'image/png', '.jpg': 'image/jpeg', '.ogg': 'audio/ogg', '.mp3': 'audio/mpeg' };

http.createServer((req, res) => {
    let file = req.url === '/' ? '/index.html' : req.url;
    const ext = path.extname(file);
    const filePath = path.join(__dirname, file);
    fs.readFile(filePath, (err, data) => {
        if (err) { res.writeHead(404); res.end('Not found'); return; }
        res.writeHead(200, { 'Content-Type': mime[ext] || 'application/octet-stream' });
        res.end(data);
    });
}).listen(port, () => console.log(`Server running on port ${port}`));
