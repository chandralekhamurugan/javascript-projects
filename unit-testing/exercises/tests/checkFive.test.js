const checkFive = require('../checkFive.js');

test("returns 'num is less than 5' when num < 5.", function() {
    // test code //
    let output = checkFive(2);
    expect(output).toBe("2 is less than 5.");
 });