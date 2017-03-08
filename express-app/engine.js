var express = require('express');
var app = express();

/**
  HTML VERBS
  GET : app.get('route',fn);
  POST : app.post('route', fn);
  UPDATE :
  DELETE : app.delete('route', fn);
*/

//set view-engine
app.set('view engine', 'ejs');

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
});

app.get('/contact-us', function(req, res){
  res.sendFile(__dirname + '/contact-us.html');
});

//dynamic requests
app.get('/profile/:name', function(req, res){

  //render template engine
  //first param : page in the view = profile.ejs
  //second param : object
  // can send multiple properties in the object

  var data = {
    job : 'RE',
    country : 'SG',
    friends : ['Gamaya', 'Harini', 'Jayani', 'Sampath', 'Isuru', 'Mana']
  }
  res.render('profile', {person : req.params.name, data : data});




});

app.listen(3000);
