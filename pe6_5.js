//CODE
// Step 1: Create a variable with let and assign a string value of "1000"
let value = "1000";
// Step 2: Create an IIFE and assign a new value to the same variable inside the function
(function() {
    let value = "500"; // Local value within the IIFE scope
    console.log("Inside IIFE, local value: " + value); // Prints local value
})();
// Step 3: Create another IIFE expression, assign it to a new result variable
let result = (function() {
    let value = "200"; // Local value within this IIFE scope
    return value; // Return the local value
})();
// Print the result of the IIFE invocation
console.log("After IIFE, result value: " + result); // Prints the local value returned by the IIFE
// Step 4: Create an anonymous function with a parameter and invoke it
(function(value) {
    console.log("Inside anonymous function, passed value: " + value); // Prints passed-in value
})("300"); // Pass in a value to the function
//OUTPUT
//Inside IIFE, local value: 500
//After IIFE, result value: 200
//Inside anonymous function, passed value: 300