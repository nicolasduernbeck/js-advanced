// Higher Order Function: Takes in another function
function manipulateArray(arr, manipulator) {
  const output = [];
  for (let i = 0; i < arr.length; i++) {
    output.push(manipulator(arr[i]));
  }
  return output;
}

// Callback Function
function multiplyByTwo(val) {
  return val * 2;
}

// Callback Function
function addThree(val) {
  return val + 3;
}

console.log(manipulateArray([1, 2, 3, 4, 5], multiplyByTwo));
console.log(manipulateArray([1, 2, 3, 4, 5], addThree));
