var events = require('events');
var utils = require('util');

var Person = function(name){
  this.name = name;
}

utils.inherits(Person, events.EventEmitter);

var chamin = new Person("Chamin");
var harini = new Person("Harini");
var jayani = new Person("Jayani");

console.log(chamin);

// creating people array
var people  = [chamin, harini, jayani];

// loop through people array
people.forEach(function(personal){
  personal.emit('hungry', function(message){
    console.log(personal.name +'  says '+ message + 'when gets hungry');
  });
  //console.log(personal.name);
});

chamin.on('hungry', 'Badagini deiyoo');

// assigning events to objects
