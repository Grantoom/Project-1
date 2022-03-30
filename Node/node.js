const http = require('http');

const server = http.createServer();

server.on('request', (req, res) => {
    res.end('Vsem Zdarova.js');
});

server.listen(3000, () => console.log('Сервер работает'));