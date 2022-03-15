"use strict";

const qs = require('querystring');
const http = require("http");
const url = require('url');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
    switch (req.method) {
        case 'GET' :
            if (req.url === '/') {
                res.setHeader('Content-Type', 'text/plain');
                res.writeHead(200);
                res.end('Hello Node.js Http Server');
            } else if (req.url.substring(0, 5) === '/data') {
                const queryParams = url.parse(req.url, true).query;

                res.setHeader('Content-Type', 'text/html');
                res.writeHead(200);
                res.write('<html><head><title>Javascript 200</title></head>');

                for (let key in queryParams) {
                    res.write(`<h1>${key}</h1>`);
                    res.write(`<h2>${queryParams[key]}</h2>`);
                }

                res.end('</body></html>');
            }
            break;
        case 'POST':
            let body = '';

            req.on('data', (chunk) => {
                body += chunk;
            });
            req.on('end', () => {
                const obj = qs.parse(body);
                res.writeHead(200);
                res.end(JSON.stringify(obj));
            });
            req.on('error', (err) => {
                console.log(err.stack);
            });
            break;
        default:
            res.end();
    }
});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
})
