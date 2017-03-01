var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('The request is served at '+req.url);
  res.writeHead(200, {'Content-Type' : 'text/html'});
  var readStream = fs.createReadStream(__dirname + '/index.html', 'utf-8');
  readStream.pipe(res);
}).listen(8080,'localhost');



console.log('The server is running at localhost:8080');
