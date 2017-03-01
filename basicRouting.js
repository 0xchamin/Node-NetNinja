var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  console.log('Request came from '+req.url);
  //var readableStream = fs.createReadStream();
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type' : 'text/html'});
    //res.end('feed me popcorn !');
    fs.createReadStream(__dirname + '/index.html', 'utf-8').pipe(res);
  }else if (req.url ===  '/contact') {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/contact.html', 'utf-8').pipe(res);
  }else if(req.url === '/api/friends'){
    res.writeHead(200, {'Content-Type' : 'application/json'});
    var friends = [
                    {name : 'CK', age : 26, country : 'SG'},
                    {name : 'Harini', age: 26, country :'AUS'},
                    {name : 'JJ', age : 27, country : 'SL'}
                  ]
    res.end(JSON.stringify(friends));
  }else {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }

  //res.writeHead(200, {'Content-Type' : 'text/html'});
  //res.end('feed me popcorn !');

}).listen(7000, 'localhost');

console.log('\n\n The server is listening on localhost port 7000');
