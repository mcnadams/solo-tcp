const net = require('net');
const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: '> '
});

rl.prompt();

// const client = net.createConnection(12345, 'localhost', () => {
//     console.log('I am connected');
//     client.write('hello I am a client');
// });
