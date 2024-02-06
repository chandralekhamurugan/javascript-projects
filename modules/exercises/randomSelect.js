// //const input = require('readline-sync');
// const randomFromArray = require('./display.js');

function randomFromArray(arr){
  //Your code here to select a random element from the array passed to the function.
      let index = Math.floor(Math.random()*arr.length);
    return arr[index];
 }
console.log(randomFromArray);

//TODO: Export the randomFromArray function.
module.exports = {
  randomFromArray: randomFromArray
};

