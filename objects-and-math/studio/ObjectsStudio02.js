// Code your orbitCircumference function here:
let orbitCircumference = function(radius){
  return Math.round(2 * Math.PI*radius);
};
console.log(orbitCircumference(10));

// Code your missionDuration function here:
function missionDuration(noOfOrbitsCompleted, orbitRadius = 2000, orbitSpeed = 28000){
  let orbitDuration = 0;
  let orbitDistance = noOfOrbitsCompleted * orbitCircumference(orbitRadius);
  orbitDuration = Math.round(orbitDistance / orbitSpeed * 100)/100;
  //console.log(`The mission will travel ${orbitDistance}km around the planet, and it will take ${orbitDuration} hours to complete.`)
  return orbitDuration;
}
console.log(missionDuration(3));

// Candidate data & crew array.
let candidateA = {
   'name':'Gordon Shumway',
   'species':'alf',
   'mass':90,
   'o2Used':function(hrs){return 0.035*hrs},
   'astronautID':414
 };
 let candidateB = {
   'name':'Lassie',
   'species':'dog',
   'mass':19.1,
   'o2Used':function(hrs){return 0.030*hrs},
   'astronautID':503
 };
 let candidateC = {
   'name':'Jonsey',
   'species':'cat',
   'mass':3.6,
   'o2Used':function(hrs){return 0.022*hrs},
   'astronautID':796
 };
 let candidateD = {
   'name':'Paddington',
   'species':'bear',
   'mass':31.8,
   'o2Used':function(hrs){return 0.047*hrs},
   'astronautID':291
 };
 let candidateE = {
   'name':'Pete',
   'species':'tortoise',
   'mass':417,
   'o2Used':function(hrs){return 0.010*hrs},
   'astronautID':599
 };
 let candidateF = {
   'name':'Hugs',
   'species':'ball python',
   'mass':2.3,
   'o2Used':function(hrs){return 0.018*hrs},
   'astronautID':890
 };
 
  // Copy/paste your selectRandomEntry function here:
  let crew = [candidateA,candidateC,candidateE];

function selectRandomEntry(arr){
  let idx = Math.floor(Math.random()* arr.length);
  return arr[idx];
}
 
 // Code your oxygenExpended function here:
 function oxygenExpended(candObjects1){
  let noOfOrbits = 3;
  let orbitDuration = missionDuration(noOfOrbits);
  //let duration = missionDuration(noOFOrbits, 1500, 25000);
  let oxyUsed = Math.round(candObjects1.o2Used(orbitDuration) * 1000)/1000;
  //console.log(`${candObjects1.name} will perform the spacewalk, which will last ${orbitDuration} hours and require ${oxyUsed} kg of oxygen.`);
  return oxyUsed;
 }
 randCandidates = selectRandomEntry(crew);
 console.log(oxygenExpended(randCandidates));

 //Bonus Mission
 let oxygenArr = [];
 for (i = 0; i < crew.length; i++){
  oxygenArr.push(oxygenExpended(crew[i]));
 }
 console.log(oxygenArr);

 console.log(minNumberInArray(oxygenArr));
function minNumberInArray (arr)
{
    let minValue=arr[0];
    for (let item of arr)   
    {
        if (item<minValue)
        {
            minValue=item;
        }
    }
    return minValue;
}

//console.log(minNumberInArray(oxyArr));

let minOxyAnimal = crew[oxygenArr.indexOf(minNumberInArray(oxygenArr))];
console.log(`${minOxyAnimal.name} will perform the spacewalk, with least consumption of oxygen`);
 