// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){

  // Write your unit tests here!
  test("The key organization contains the value 'nonprofit'.", function(){
    //let output = test.launchcode.organization;
    expect(launchcode.organization).toBe("nonprofit");
 });
 test("The key executiveDirector contains the value 'Jeff'.", function(){
  //let output = test.launchcode.executiveDirector;
  expect(launchcode.executiveDirector).toBe("Jeff");    
});
test("The key percentageCoolEmployees contains the value 100.", function(){
  //let output = test.launchcode.percentageCoolEmployees;
  expect(launchcode.percentageCoolEmployees).toEqual(100);
});
test("The key programsOffered contains the value ['Web Development', 'Data Analysis', 'Liftoff'].", function(){
  //let output = test.launchcode.programsOffered;
  // expect(launchcode.programsOffered[0]).toBe('Web Development');
  // expect(launchcode.programsOffered[1]).toBe('Data Analysis');
  // expect(launchcode.programsOffered[2]).toBe('Liftoff');
  expect(launchcode.programsOffered.length).toBe(3);
});

// nested describe block
describe ("should have a method called launchOutput, which", function() {

  test("should return 'Launch!' for numbers evenly divisible by 2", function() {
    expect(launchcode.launchOutput(2)).toEqual('Launch!');
  });
  test("should return 'Code!' for numbers evenly divisible by 3", function() {
    expect(launchcode.launchOutput(3)).toEqual('Code!');
});
  test("should return 'Rocks!' for numbers evenly divisible by 5", function() {
    expect(launchcode.launchOutput(5)).toEqual('Rocks!');
});
 
});
});