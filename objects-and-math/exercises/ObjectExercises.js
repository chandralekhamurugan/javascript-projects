// After you have created the other object literals, add the astronautID property to each one.
let superChimpOne = {
   name: "Chad",
   species: "Chimpanzee",
   mass: 9,
   age: 6,
   astronautID: 1,
   move: function () {return Math.floor(Math.random()*11)}
};

let salamander = {
   name: "Lacey",
   species: "Axolotl Salamander",
   mass: 0.1,
   age: 5,
   astronautID: 2,
   move: function () {return Math.floor(Math.random()*11)}
};

let superChimpTwo = {
   name: "Brad",
   species: "Chimpanzee",
   mass: 11,
   age: 6,
   astronautID: 3,
   move: function () {return Math.floor(Math.random()*11)}
};

let dog = {
   name: "Leroy",
   species: "Beagle",
   mass: 14,
   age: 5,
   astronautID: 4,
   move: function () {return Math.floor(Math.random()*11)}
};


let waterBear = {
   name: "Almina",
   species: "Tardigrade",
   mass: (0.0000000001).toFixed(10),
   age: 1,
   astronautID: 5,
   move:  function () {return Math.floor(Math.random()*11)}
};

// Create an array to hold the animal objects.
let crew = [superChimpOne, salamander, superChimpTwo, dog, waterBear];


// Print out the relevant information about each animal.
console.log(crew);

// Start an animal race!

//Part -2 Create crewReports function

function crewReports(superChimpOne){
   
   console.log(`${superChimpOne.name} is a ${superChimpOne.species}. They are ${superChimpOne.age} years old and ${superChimpOne.mass} kilograms. Their ID is ${superChimpOne.astronautID}.`);
   return superChimpOne;
};
console.log(crewReports(superChimpOne));


// Part 3: Crew Fitness function

function fitnessTest(crew){
   let results = [], numSteps,turns;
   for (let i = 0; i < crew.length; i++){
   numSteps = 0;
   turns = 0;
   while (numSteps < 20){
      numSteps += crew[i].move();
      turns++
   }
   // let results = fitnessTest(candidates)
   results.push(`${crew[i].name} took ${turns} turns to take 20 steps.`);
}
return results;
}
let fitnessTestResults = fitnessTest(crew)
console.log(fitnessTestResults);



