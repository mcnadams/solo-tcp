const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md');
const ws = fs.createWriteStream('piped.md');

rs.pipe(ws);
