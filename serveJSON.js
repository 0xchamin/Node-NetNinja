var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type' : 'application/json'});

  var myObj = {
    name : 'CK',
    job : 'Reserach Engineer',
    age : 26
  };
  res.end(JSON.stringify(myObj)); // end method needs strings , not objects so convert to string
}).listen(8080, 'localhost');

console.log('Server is running on port : 8080');
