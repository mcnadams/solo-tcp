const net = require('net');

const client = net.createConnection(12345, 'localhost', () => {
    console.log('I am connected');
    client.write('hello I am a client');
});
