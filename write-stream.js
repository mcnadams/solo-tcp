const fs = require('fs');

const ws = fs.createWriteStream('write-stream.md');

ws.write('hello world');
ws.write('\nI\'m trying to get caught up');
