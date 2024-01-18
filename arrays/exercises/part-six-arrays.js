//Arrays can hold different data types, even other arrays! A multi-dimensional array is one with entries that are themselves arrays.

//1) Define and initialize the arrays specified in the exercise to hold the name, chemical symbol and mass for different elements.
let element1 = ['hydrogen', 'H', 1.008];
let element2 = ['helium', 'He', 4.003];
let element26 = ['iron', 'Fe', 55.85];
console.log(element1);
console.log(element2);
console.log(element26);

//2) Define the array 'table', and use 'push' to add each of the element arrays to it. Print 'table' to see its structure.
let table = [];
table.push(element1);
table.push(element2);
table.push(element26);
console.log(table[0]);
console.log(table[1]);
console.log(table[2]);
//3) Use bracket notation to examine the difference between printing 'table' with one index vs. two indices (table[][]).
console.log(table[0], table[0][0]);


//4) Using bracket notation and the table array, print the mass of element1, the name for element 2 and the symbol for element26.
console.log("The Mass of element1 is: " + table[0][2]);
console.log("The Name for element2 is: " + table[1][0]);
console.log("The Symbol for element26: " + table[2][1]);
//5) 'table' is an example of a 2-dimensional array. The first “level” contains the element arrays, and the second level holds the name/symbol/mass values. Experiment! Create a 3-dimensional array and print out one entry from each level in the array.
let threedtable = [
[
    ["Hydrogen", "H", 1.008],
    ["helium", "He", 4.003],
    ["iron", "Fe", 55.85]
],
[
    ["gold", "G", 10.55],
    ["silver", "S", 52.65],
    ["copper", "C", 47.96]
],
[
    ["red", "R", 87.21],
    ["blue", "B", 45.32],
    ["yellow", "Y", 35.62]
]
]


console.log(threedtable[0]);
console.log(threedtable[1]);
console.log(threedtable[2]);
console.log("Element Name: " + threedtable[0][1][0]);
console.log("Element Symbol: " + threedtable[1][2][1]);
console.log("Element Mass: " + threedtable[2][0][2]);