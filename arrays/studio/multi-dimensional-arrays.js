const input = require('readline-sync');

food = "water bottles,meal packs,snacks,chocolate";
equipment = "space suits,jet packs,tool belts,thermal detonators";
pets = "parrots,cats,moose,alien eggs";
sleepAids = "blankets,pillows,eyepatches,alarm clocks";

//1) Use split to convert the strings into four cabinet arrays. Alphabetize the contents of each cabinet.
let cabinet1 = food.split(",").sort();
let cabinet2 = equipment.split(",").sort();
let cabinet3 = pets.split(",").sort();
let cabinet4 = sleepAids.split(",").sort();
console.log(cabinet1, cabinet2, cabinet3, cabinet4);


//2) Initialize a cargoHold array and add the cabinet arrays to it. Print cargoHold to verify its structure.
let cargoHold = [cabinet1, cabinet2, cabinet3, cabinet4];

console.log(cargoHold);

//3) Query the user to select a cabinet (0 - 3) in the cargoHold.
let newcargohold = Number(input.question("Please select a cabinet in the CargoHold between (0 - 3): "));

//4) Use bracket notation and a template literal to display the contents of the selected cabinet. If the user entered an invalid number, print an error message.
if (newcargohold >= 0 && newcargohold < 4) {
    console.log(`selected cabinet ${newcargohold}: ${cargoHold[newcargohold]}`);
} else {
    console.log("Error: Please select a cabinet number between 0-3 in the cargo_hold1")
}
    

//5) Modify the code to query the user for BOTH a cabinet in cargoHold AND a particular item. Use the 'includes' method to check if the cabinet contains the selected item, then print “Cabinet ____ DOES/DOES NOT contain ____.”
let particularitem = (input.question("Please enter a cabinet number in cargo to pick an particular item: "));
if(newcargohold >= 0 && newcargohold < 4) {
  if (cargoHold[newcargohold].includes(particularitem)){
     console.log(`selected cabinet ${newcargohold} Does contain ${particularitem}.`);
  } else {
    console.log(`selected cabinet ${newcargohold} Does not contain ${particularitem}`);
  }
} else {
console.log("Error: Please select a cabinet number between 0-3 in the cargo_hold1");
}
