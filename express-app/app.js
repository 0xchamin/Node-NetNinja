var express = require('express');
var app = express();

/**
  HTML VERBS
  GET : app.get('route',fn);
  POST : app.post('route', fn);
  UPDATE :
  DELETE : app.delete('route', fn);
*/

//respond to request
app.get('/', function(req, res){
  //no need to add content type and set headers
  //express knows
  res.send('<h1> HOME PAGE</h1>');
});

app.get('/contact', function(req, res){
  //no need to add content type and set headers
  //express knows
  res.send('<h1> CONTACT PAGE</h1>');
});

app.get('/about', function(req, res){
  //no need to add content type and set headers
  //express knows
  res.send('<h1> ABOUT PAGE</h1>');
});

app.get('/home', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.get('/contact-us', function(req, res){
  res.sendFile(__dirname + '/contact-us.html');
});

//dynamic requests
app.get('/profile/:id', function(req, res){
  res.send(`<h2>You Requested user id  ${req.params.id}</h2>`);
});

app.listen(3000);
