// Initialize Variables below
let date = "Monday 2019-03-18";
let time = "10:05:34 AM";
let astronautCount = 7;
let astronautStatus = "ready";
let averageAstronautMassKg = 80.7;
let crewMassKg = astronautCount * averageAstronautMassKg;
let fuelMassKg = 760000;
let shuttleMassKg = 74842.31;
let totalMassKg = crewMassKg + fuelMassKg + shuttleMassKg;
let maximumMassLimit = 850000;
let fuelTempCelsius = -225;
let minimumFuelTemp = -300;
let maximumFuelTemp = -150;
let fuelLevel = "100%";
let weatherStatus = "clear";
let preparedForLiftOff = true;

// add logic below to verify total number of astronauts for shuttle launch does not exceed 7

if (astronautCount <= 7){
    console.log("Ready for Launch");
} else {
    console.log("Cannot proceed with launch");
}

// add logic below to verify all astronauts are ready

if (!astronautStatus == "ready"){
    console.log("Not ready for Launch!");
} else {
    console.log("Ready for Launch");
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg <= 850000) {
    console.log("Total MassKg is within the Limit!!");
} else {
    console.log("Total MassKg exeeds the Limit!");
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTempCelsius >= -150 && fuelTempCelsius <= -300){
   console.log("Fuel Temperature is within the Range");
} else {
    console.log("Fuel Temperature is not in Range");
}

// add logic below to verify the fuel level is at 100%

if (!fuelLevel == "100%") {
   console.log("Fuel is not in Level!");
} else {
    console.log("Fuel Level is within the range!!!");
}

// add logic below to verify the weather status is clear

if (!weatherStatus == "Clear") {
    console.log("Weather Status is not Clear!");
} else {
    console.log("Weather Status is Clear!!!");
}

// Verify shuttle launch can proceed based on above conditions

if (astronautCount <= 7 && totalMassKg <= 850000 && fuelTempCelsius <= -300 && fuelLevel == "100%" && weatherStatus == "Clear" && preparedForLiftOff == true) {
    console.log("Shuttle is ready to Launch!!!");
} else {
    console.log("Shuttle is not ready to Launch");
}
