var counter = function(){
  return 'This is counter method';
}

var add = function(num1, num2){
  return `The two numbers are ${num1} and ${num2}. The sum is ${num1+num2}`;
}

var sexy = function(){
  return 'this is a sexy function';
}

var temp = function(){
  console.log('Temp method');
}

var ninjas = function(arr){
  temp();
  return 'First Ninja is '+arr[0]+' and the 2nd is '+arr[1];
}

//module.exports.ninjas = ninjas;
//module.exports.sexy = sexy;
//module.exports.add = add;

module.exports = {
  ninjas : ninjas,
  sexy : sexy,
  counter : counter,
  add : add
}
