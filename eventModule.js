var events = require('events');



var myCustomEvent = new events.EventEmitter();

myCustomEvent.on('fireEvent', function(name){
  console.log(`${name} fired the bullet`);
});

myCustomEvent.on('water', function(name, address){
  temp(name);
  console.log('Needed water. bring from '+address);
});

var temp = function(name){
  this.name = name;
  console.log('Name printed' + this.name)
}

myCustomEvent.emit('fireEvent', 'chamin');

myCustomEvent.emit('water', 'Harini', 'Australia')
