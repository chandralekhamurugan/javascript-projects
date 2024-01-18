//Part Three section one

let language = 'JavaScript';

//1. Use string concatenation and two slice() methods to print 'JS' from 'JavaScript'
let initials = (language.slice(0, 1) + language.slice(4,5));
console.log("Initials using slice(): " + initials);

//2. Without using slice(), use method chaining to accomplish the same thing.
let initialschain = (language.charAt(0) + language.charAt(4));
console.log("Initials using method chaining: " + initialschain);

//3. Use bracket notation and a template literal to print, "The abbreviation for 'JavaScript' is 'JS'."
console.log("The abbrevation for " + language + " is " + initials + ".");

//4. Just for fun, try chaining 3 or more methods together, and then print the result.
let chaining = (language.slice(0,1).replace("J", "Q").toLowerCase() + language.slice(4,5).replace("S", "A").toLowerCase());
console.log(chaining)

//Part Three section Two

//1. Use the string methods you know to print 'Title Case' from the string 'title case'.

let notTitleCase = 'title case';
console.log(`${notTitleCase.slice(0,1).toUpperCase()}itle ${notTitleCase.slice(notTitleCase.indexOf('c'),notTitleCase.indexOf('c')+1).toUpperCase()}ase`);
