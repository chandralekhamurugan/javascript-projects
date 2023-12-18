// Declare and assign the variables below

let ShuttleName = "Determination";
let ShuttleSpeedMph = 17500;
let MarsDistanceKm = 225000000;
let MoonDistanceKm = 384400;
const MilesPerKm = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.

console.log(typeof ShuttleName);
console.log(typeof ShuttleSpeedMph);
console.log(typeof MarsDistanceKm);
console.log(typeof MoonDistanceKm);
console.log(typeof MilesPerKm);

// Calculate a space mission below
let MilestoMars = MarsDistanceKm * MilesPerKm;
let HourstoMars = MilestoMars / ShuttleSpeedMph;
let DaystoMars = HourstoMars / 24;


// Print the results of the space mission calculations below

console.log(ShuttleName + " will take " +  DaystoMars + " days to reach the Mars.");

// Calculate a trip to the moon below

let MilestoMoon = MoonDistanceKm * MilesPerKm;
let HourstoMoon = MilestoMoon / ShuttleSpeedMph;
let DaystoMoon = HourstoMoon / 24;

// Print the results of the trip to the moon below

console.log(ShuttleName + " will take " +  DaystoMoon + " days to reach the Moon.");