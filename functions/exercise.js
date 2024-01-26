// 1. makeline(size) function
function makeLine(size){
    let line = "";
    for (i = 0; i < size; i++){
    line += "#"
    }
    return line;
}
// calling line function
console.log(makeLine(5));

// // 2. makesquare(size) function

function makesquare(size) {
    let square = "";
    for (let i = 0; i < size; i++) {
      square += (makeLine(size) + "\n");
    }
    return square.slice(0, -1);
  }
  // calling square function
  console.log(makesquare(5))


// 3. makeRectangle(width, height) function

function makeRectangle(width, height) {
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
  }
  // calling rectangle function
  console.log(makeRectangle(5, 3));

// 4. makeDownwardStairs(height) function
function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1) + '\n');
    }
    return stairs.slice(0, -1);
  }
  // calling downstairs function
  console.log(makeDownwardStairs(5));

// 5. makeSpaceLine(numSpaces, numChars) function
function makeSpaceLine(numSpaces, numChars){
    let spaceline = "";
    for (i = 0; i < numSpaces; i++){
        spaceline += " ";
    }
    for (i = 0; i < numChars; i++){
        spaceline += "#";
    }
    for (i = 0; i < numSpaces; i++){
        spaceline += " ";
    }
    return spaceline
}
// calling spaceline function
console.log(makeSpaceLine(3, 5));

// 6. makeIsoscelesTriangle(height) function
function makeIsoscelesTriangle(height){
    let IsoscelesTriangle = "";
    for (let i = 0; i < height; i++){
        IsoscelesTriangle += (makeSpaceLine(height -i-1, 2 * i + 1 ) + "\n");
    }
    return IsoscelesTriangle.slice(0, -1);
}
// calling IsoscelesTriangle function
console.log(makeIsoscelesTriangle(5))
// console.log("a");

// 7. makeDiamond(height) function
function makeDiamond(height){
    return diamond = (makeIsoscelesTriangle(height).split("").reverse().join(""));
    }    

// calling diamond function
console.log(makeDiamond(5));

// Bonus Mission:
// makeline(size) function
function makeLine(size, char = "#"){
  let line = "";
  for (let i = 0; i < size; i++){
    line += char;
  }
  return line;
}
// calling line function
console.log(makeLine(5, "$*"));


