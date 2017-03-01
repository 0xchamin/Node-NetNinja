var fs = require('fs');

/**
fs
read files
write files

Synchronesou is blocking
Asynchronesou is non-blocking
*/

//Synchronesou code
// read file
var content = fs.readFileSync('readme.txt' , 'utf-8');

//console.log(content);


console.log('Hi CK');

// write files
//Synchronesou method
fs.writeFileSync('writeme.txt', 'Hi CK');
console.log('Asynchronesou method of file read and file write');

//non-blocking
// Asynchronesou code
fs.readFile('readme.txt', 'utf-8', function(err, data){
  if(err){
    return 'Error';
  }else{
    console.log('Wede hari \n');
    console.log('Data = \n '+data);
  }
});


console.log('Async balamu :) \n');


fs.writeFile('write2.txt','New Content '+content);
