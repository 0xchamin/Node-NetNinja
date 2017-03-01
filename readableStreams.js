var http = require('http');
var fs = require('fs');

// create readable stream
// which file we want to read
// read a large file
// read small amount at a time
// fill up the buffer in chunks

//var readStream = fs.createReadStream(__dirname + '/readStream.txt'); //without character encoding

var readStream = fs.createReadStream(__dirname + '/readStream.txt', 'utf-8'); //with character encoding

/// check first chunk of data
readStream.on('data', function(chunk){
  console.log('new chunk received :');
  console.log(chunk);
});


/**
readFile vs createReadStream
readFile : read entire file and store in memory
createReadStream : readstreamwise : chunk of memory 
*/


/**
var server = http.createServer(function(req, res){

  console.log('Request URL : '+req.url);
  res.writeHead(200,{'Content-Type' : 'text/plain'});
  res.end('Hi CK ! \n You look awesome')
}).listen(3000);

console.log('Server Started');
*/
