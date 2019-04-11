const net = require('net');

const server = net.createServer(connectedClient => {
    console.log('client connected!');
    connectedClient.on('data', data => {
        console.log(data.toString());
        connectedClient.write(data);
    });
});

server.listen(12345);
