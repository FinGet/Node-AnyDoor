const http = require('http');
const chalk = require('chalk');
const path = require('path');
const config = require('./config/defaultConfig');
const route = require('./help/route')

const server = http.createServer((req, res) => {
    // const url = req.url;
    const filePath = path.join(config.root, req.url);
    route(req, res, filePath)
    // fs.stat(filePath, (err, stats) => {
    //     if (err) {
            
    //     }
    //     if (stats.isFile()) {
    //         res.statusCode = 200;
    //         res.setHeader('Content-Type', 'text/plain');
    //         fs.createReadStream(filePath).pipe(res);             
    //     } else if(stats.isDirectory()) {
    //         fs.readdir(filePath, (err, files) => {
    //             res.statusCode = 200;
    //             res.setHeader('Content-Type', 'text/plain');
    //             res.end(files.join(','));
    //         })
    //     }
    // })
    // res.statusCode = 200;
    // res.setHeader('Content-Type', 'text/plain');
    // // res.write('');
    // res.end('Hello node!');
});

server.listen(config.port, config.hostname, () => {
    const addr = `http://${config.hostname}:${config.port}`;
    console.info(`Server started at ${chalk.green(addr)}`);
});