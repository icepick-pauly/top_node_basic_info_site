var http = require('http');
var fs = require('fs');
var url = require('url');

http.createServer((req, res) => {
    const q = url.parse(req.url, true);
    const file = q.pathname !== '/' ? `.${q.pathname}.html` : 'index.html';
    fs.readFile(file, (err, data) => {
        if (err) {
            res.writeHead(404, {'Content-Type': 'text/html'});
            return res.end(`<h1>404 Not Found</h1><a href="/">Return to home</a>`)
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
    })
}).listen(8080);

