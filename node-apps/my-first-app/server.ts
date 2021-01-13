
const http = require('http');

const server = http.createServer((request, response) => {
    response.end('Hello');
}
);

const port = process.env.PORT || 2211;

server.listen(port, () => {
    console.log('serving...');
});