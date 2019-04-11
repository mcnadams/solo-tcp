const net = require('net');

const allClients = [];
const server = net.createServer(connectedClient => {
    console.log('client connected!');
    allClients.push(connectedClient);
    connectedClient.on('data', data => {
        console.log(data.toString());
        allClients.forEach(client => {
            client.write(`From server: ${data}`);
        });
    });
    connectedClient.on('end', () => {
        console.log('client disconnected');
    });
});

server.listen(12345);
