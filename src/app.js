const http = require('http');
const chalk = require('chalk')
const config = require('./config/defaultConfig');

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    // res.write('');
    res.end('Hello node!');
});

server.listen(config.port, config.hostname, () => {
    const addr = `http://${config.hostname}:${config.port}`;
    console.info(`Server started at ${chalk.green(addr)}`);
});