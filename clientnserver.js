var http = require('http');

// create server
var server = http.createServer(function(req, res){

  console.log('Request made \n');
  console.log('request url = '+req.url);
  //when a request come this function fire
  //param 1 : request object
  // param2 : response object
  // response send to browser
  res.writeHead(200,{
    'Content-Type':'text/plain'
  });
  // end the response and send to browser
  res.end('Hey CK !');
});

// specify port number listen to :
server.listen(3000, '127.0.0.1'); // when a request comes to this ip port: res.function fires
console.log('Listening on localhost:3000');
