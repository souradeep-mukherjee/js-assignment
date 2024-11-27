//CODE
// Step 1: Create an empty array
let myArray = [];
// Step 2: Run a loop 10 times, adding a new incrementing value to the array
for (let i = 0; i < 10; i++) {
    myArray.push(i); // Adding incrementing values to the array
}
// Step 3: Log the array into the console
console.log("Array:", myArray);
// Step 4: Use a for loop to iterate through the array and output into the console
console.log("Using a for loop:");
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
// Step 5: Use the for of loop to output the value into the console from the array
console.log("Using a for of loop:");
for (let value of myArray) {
    console.log(value);
}
//OUTPUT
//  Array: [
//    0, 1, 2, 3, 4,
//    5, 6, 7, 8, 9
//  ]
//  Using a for loop:
//  0
//  1
//  2
//  3
//  4
//  5
//  6
//  7
//  8
//  9
//  Using a for of loop:
//  0
//  1
//  2
//  3
//  4
//  5
//  6
//  7
//  8
//  9