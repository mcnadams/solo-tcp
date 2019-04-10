const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md');
const ws = fs.createWriteStream('stream-copy.md');

rs.on('data', chunk => {
    console.log(chunk.toString());
    ws.write(chunk);
});

rs.on('end', () => {
    ws.end();
});
