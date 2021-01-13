var http = require('http');
var fun = require('./index');
var server = http.createServer(function (request, response) {
    // fun();
    response.end('abc');
});
var port = process.env.PORT || 9999;
server.listen(port, function () {
    console.log(`serving at port ${port}...`);
});

server.on('error', error => { console.log(error.message) });