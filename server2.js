var http = require('http');
var count = 0;
var server = http.createServer(function (req, res) {
    count++;
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.write('Hello world from a Node.js app - container server 2!\n');
    res.write('We have ' + count + ' visits!\n');
    res.end();
});

server.listen(3000);
console.log('server running on 3000...')