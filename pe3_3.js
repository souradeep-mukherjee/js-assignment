//CODE
// Step 1: Create an array containing three values: 1, 2, and 3
let originalArray = [1, 2, 3];
// Step 2: Nest the original array into a new array three times
let nestedArray = [originalArray, originalArray, originalArray];
// Step 3: Output the value 2 from one of the arrays into the console
console.log(nestedArray[0][1]); // Accessing the first nested array and its second element
//OUTPUT
//2