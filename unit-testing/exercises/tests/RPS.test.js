//const test = require('../RPS.js');
const test = require('../RPS.js');

// test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function(){
//     let output = test.whoWon('rock','paper');
//     expect(output).toBe("Player 2 wins!");
//  });
 
 it("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function(){
    let output = test.whoWon('paper','scissors');
    expect(output).toBe("Player 2 wins!");
 });

 