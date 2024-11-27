//CODE
// Step 1: Set up an empty array to store the calculated values
let resultsArray = [];
// Step 2: Create a loop that runs 10 times, incrementing by 1 each time
for (let i = 0; i < 10; i++) {
    // For the first value, multiply the loop count by 5
    let value1 = i * 5;
    // For the second value, multiply the loop counter by itself (square it)
    let value2 = i * i;
    // Step 3: Create a function that adds two values and returns the result
    function calculate(val1, val2) {
        return val1 + val2; // Add the two numbers and return the result
    }
    // Step 4: Call the function, passing in the two values, and store the result
    let result = calculate(value1, value2);
    // Step 5: Push the result to the array
    resultsArray.push(result);
}
// Step 6: Output the value of the array into the console
console.log(resultsArray);
//OUTPUT
//[
//    0,  6, 14,  24,  36,
//    50, 66, 84, 104, 126
//]