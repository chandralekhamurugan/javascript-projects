function findMinValue(arr){
  let min = arr[0];
  for (i = 0; i < arr.length; i++){
    if (arr[i] < min){
      min = arr[i];
    }
  }
  return min;
}

//Create a function with an array of numbers as its parameter. This function will return a new array with the numbers sorted from least to greatest value.

/*Within the function:
1) Define a new, empty array to hold the final sorted numbers.
2) Use the findMinValue function to find the minimum value in the old array.
3) Add the minimum value to the new array, and remove the minimum value from the old array.
4) Repeat parts b & c until the old array is empty.
5) Return the new sorted array.
6) Be sure to print the results in order to verify your code.*/

//Your function here...

function sortNums(arr){
  let sortedArray = [];
  while (arr.length > 0){
    let min = findMinValue(arr);
    sortedArray.push(min);
    arr.splice(arr.indexOf(min), 1);
    // console.log("where is it working");
  }
  return sortedArray;
}

//Sample arrays for testing:
let nums2A = [5, 10, 2, 42];
let nums2B = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3C = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

console.log(sortNums(nums2A));
console.log(sortNums(nums2B));
console.log(sortNums(nums3C));
// console.log("********");

/* BONUS MISSION: Refactor your sorting function to use recursion below:
 */
function sortNumsRecur(arr, sorted = []){
  //Base-case return final sorted array
  if(arr.length === 0){
    return sorted;
  }
  let min = findMinValue(arr);
  sorted.push(min);
  arr.splice(arr.indexOf(min), 1);
  
	// Call function with updated arrays
	return sortNumsRecur(arr, sorted);
}

//Sample arrays for testing:
let nums3a = [5, 10, 2, 42];
let nums3b = [-2, 0, -10, -44, 5, 3, 0, 3];
let nums3c = [200, 5, 4, 10, 8, 5, -3.3, 4.4, 0];

// printing sortNumsRecursion
console.log(sortNumsRecur(nums3a));
console.log(sortNumsRecur(nums3b));
console.log(sortNumsRecur(nums3c));
