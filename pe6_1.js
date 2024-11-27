//CODE
// Step 1: Create a function that takes two parameters, adds them together, and returns the result
function addNumbers(num1, num2) {
    return num1 + num2;
}
// Step 2: Set up two different variables with two different values
let a = 5;
let b = 10;
// Step 3: Use the function on the two variables and output the result using console.log
let result1 = addNumbers(a, b);
console.log("The result of adding a and b is: " + result1);
// Step 4: Create a second call to the function using two more numbers as arguments
let c = 20;
let d = 30;
let result2 = addNumbers(c, d);
console.log("The result of adding c and d is: " + result2);
//OUTPUT
//The result of adding a and b is: 15
//The result of adding c and d is: 50