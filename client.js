const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});

const clientOfServer = net.createConnection(12345, 'localhost', () => {
    console.log('I am connected');
    rl.prompt();
    rl.on('line', line => {
        clientOfServer.write(line);
        rl.prompt();
    });
});

clientOfServer.on('data', data => {
    console.log(data.toString());
    rl.prompt();
});

clientOfServer.on('end', () => {
    console.log('server disconnected');
    process.exit();
});
