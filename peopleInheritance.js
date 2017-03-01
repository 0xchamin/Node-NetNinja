var events = require('events');
var util = require('util');

var Person = function(name){
  this.name = name;
}

util.inherits(Person, events.EventEmitter);

var chamin = new Person('chamin');
var harini = new Person('harini');
var jj = new Person('JJ');
var gamaya = new Person('Gamaya');

var friends = [chamin, harini, jj, gamaya];


friends.forEach(function(pal){
  pal.on('sayHi', function(message){
    console.log(pal.name+'  said '+message);
  });
});


chamin.emit('sayHi', 'Hello CK');
harini.emit('sayHi', 'Hello CK kohomada');
jj.emit('sayHi', 'CK, You there');
gamaya.emit('sayHi', 'CK etin mokada wenne');
