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
    preparedForLiftOff == true
    console.log("Ready for Launch");
} else {
    preparedForLiftOff == false
    console.log("Not Ready for launch");
}

// add logic below to verify all astronauts are ready

if (astronautStatus == "ready"){
    preparedForLiftOff == true
    console.log("All Astronauts are Ready for Launch");
} else {
    preparedForLiftOff == false
    console.log("All Astronauts are not ready!");
}

// add logic below to verify the total mass does not exceed the maximum limit of 850000

if (totalMassKg <= 850000) {
    preparedForLiftOff == true
    console.log("Total MassKg is within the Limit!!");
} else {
    preparedForLiftOff == false
    console.log("Total MassKg exeeds the Limit!");
}

// add logic below to verify the fuel temperature is within the appropriate range of -150 and -300

if (fuelTempCelsius >= -300 && fuelTempCelsius <= -150){
   preparedForLiftOff == true
   console.log("Fuel Temperature is within the Range");
} else {
    preparedForLiftOff == false
    console.log("Fuel Temperature is not in Range");
}

// add logic below to verify the fuel level is at 100%

if (fuelLevel == "100%") {
   preparedForLiftOff == true
   console.log("FuelLevel is within the range!!!");
} else {
    preparedForLiftOff == false
    console.log("FuelLevel is not in Level!");
}

// add logic below to verify the weather status is clear

if (weatherStatus == "clear") {
    preparedForLiftOff == true
    console.log("Weather Status is Clear!!!");
} else {
    preparedForLiftOff == false
    console.log("Weather Status is not Clear!");
}

// Verify shuttle launch can proceed based on above conditions

if (astronautCount <= 7 && astronautStatus === "ready" && totalMassKg <= 850000 && fuelTempCelsius >= -300 && fuelTempCelsius <= -150 && fuelLevel === "100%" && weatherStatus === "clear") {
    console.log("\nAll systems are a go! Initiating space shuttle launch sequence");
    console.log("---------------------------------------------------------------");
    console.log("Date: " + date + "\nTime: " + time + "\nAstronaut Count: " + astronautCount + "\nCrewMassKg: " + crewMassKg);
    console.log("FuelMassKg: " + fuelMassKg + "\nShuttleMassKg: " + shuttleMassKg + "\nTotalMassKg: " + totalMassKg);
    console.log("FuelTempCelsius: " +fuelTempCelsius + "\nWeatherStatus: " + weatherStatus);
    console.log("---------------------------------------------------------------");
    console.log("Have a safe trip astronauts!")
} else {
    console.log("Shut down the launch operations");
}
