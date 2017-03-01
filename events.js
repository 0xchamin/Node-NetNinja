var events = require('events');

var customEvents = new events.EventEmitter();

customEvents.on('onMyClick', function(){
  console.log('onMyClick executed');
});

customEvents.on('newClickDetected', function(message){
  console.log(`The message is : ${message}`)
});

customEvents.emit('onMyClick');

console.log('\n\n ************* \n\n');

customEvents.emit('newClickDetected', 'Welcome to Singapore CK !!!');
