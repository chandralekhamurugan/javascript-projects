// All 6 id numbers to be selected Randomly
let idNumbers = [291, 414, 503, 599, 796, 890];

// Code your selectRandomEntry function here:
function selectRandomEntry(arr){
  let idx = Math.floor(Math.random()* arr.length);
  return arr[idx];
}

//new array with selecting 3 unique id numbers randomly
function uniqueIdNum(count){
let crewId = []
while (crewId.length != count){
  let randomId = selectRandomEntry(idNumbers);
  if (crewId.length === 0)
    crewId.push(randomId);
  else if(!crewId.includes(randomId))
   crewId.push(randomId);
  }
  return crewId;
}

let selectedRandomId = uniqueIdNum(3);
console.log("Lucky ID: " + selectedRandomId);


// Here are the candidates and the 'animals' array:
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

// array containing all 6 candidates above
let animals = [candidateA,candidateB,candidateC,candidateD,candidateE,candidateF];

// Code your buildCrewArray function here:
function buildCrewArray(luckyIdNum, candObjects){
  let selectdCrew = [];
  for (i = 0; i < candObjects.length; i++){
    if (luckyIdNum.includes(candObjects[i].astronautID)){
      selectdCrew.push(candObjects[i]);
    }
  }
  return selectdCrew;
}

let crewToSpace = buildCrewArray(selectedRandomId, animals);

// Code your template literal and console.log statements:
console.log(`${crewToSpace[0].name}, ${crewToSpace[1].name}, and ${crewToSpace[2].name} are going to space`);