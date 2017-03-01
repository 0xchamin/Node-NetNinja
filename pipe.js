var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('Request came from : '+req.url);
  var readableStream = fs.createReadStream(__dirname + '/readStream.txt', 'utf-8')
  res.writeHead(200, {'Content-Type' : 'text/plain'});
  readableStream.pipe(res);

}).listen(8080, 'localhost');

console.log('Server listens on localhost : 8080');
