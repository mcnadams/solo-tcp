const fs = require('fs');

const rs = fs.createReadStream('./1_streams.md');

rs.on('data', chunk => {
    console.log(chunk);
});

let body = '';
rs.on('data', chunk => {
    body += chunk;
});

rs.on('end', () => {
    console.log('body:', body);
});
