//CODE
// Step 1: Set the starting value for the countdown
let start = 10;
// Step 2: Create the countdown function
function countdown(value) {
    // Step 3: Output the current value of the countdown
    console.log(value);

    // Step 4: If the countdown reaches less than 1, return to stop   the recursion
    if (value < 1) {
        return;  // Stop the countdown
    }
    // Step 5: If the value is still greater than or equal to 1, call the function again with value - 1
    countdown(value - 1); // Recursively call countdown with a smaller value
}
// Step 6: Call the countdown function with the starting value of 10
countdown(start);
//OUTPUT
//10
//9
//8
//7
//6
//5
//4
//3
//2
//1
//0