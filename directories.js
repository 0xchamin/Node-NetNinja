var fs = require('fs');

// unlink('name of the file to delete');
// fs.unline('writeme.txt')
console.log('Creatig stuff directory');
// Synchronesou method
fs.mkdirSync('stuff');
fs.mkdirSync('stuff-temp');

console.log('Synchronesouly Created');


//remove directory
//Synchronesou :: blocking method
console.log('Remove Directory');

fs.rmdirSync('stuff-temp');

console.log('Direcotory removed');


// Asynchronesou methods of creating/deleting directories
