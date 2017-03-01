var http = require('http');
var fs = require('fs');


var readableStream = fs.createReadStream(__dirname + '/readStream.txt');
var writableStream = fs.createWriteStream(__dirname + '/writeStream.txt');


readableStream.on('data', function(chunk){
  console.log('Chunk received:');
//  console.log(chunk);
  writableStream.write(chunk);
});

// pipe is only usable in readable stream to writable, not writable to readable

readableStream.pipe(writableStream);
