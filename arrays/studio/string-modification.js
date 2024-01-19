const input = require('readline-sync');
let str = "LaunchCode";

//1) Use string methods to remove the first three characters from the string and add them to the end.
//Hint - define another variable to hold the new string or reassign the new string to str.
let removestr = str.slice(0,3);
console.log(removestr);
let newstr = (str.slice(3) + removestr);
// let newstr = (str.slice(3).push(removestr));
console.log(newstr);

//Use a template literal to print the original and modified string in a descriptive phrase.
console.log(`Original String: ${str}`);
console.log(`Modified String: ${newstr}`);

//2) Modify your code to accept user input. Query the user to enter the number of letters that will be relocated.
let modifystr = (input.question("Enter the string: "));
let swap = Number(input.question("Enter the number of letters to be swap?: "));
let modifystr1 = modifystr.slice(swap) + modifystr.slice(0, swap);
console.log(`Original String: ${modifystr}`);
console.log(`Modified String: ${modifystr1}`);

//3) Add validation to your code to deal with user inputs that are longer than the word. In such cases, default to moving 3 characters. Also, the template literal should note the error.
let maxwordlength = (8);
if (modifystr.length >= maxwordlength ) {
  console.log("Error: User inputs are longer the word. Defaultly moving 3 characters");
  modifystr = modifystr.slice(3);
  console.log(modifystr);
} else {
console.log("Input is Valid");
}