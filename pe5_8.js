//CODE
// Step 1: Set up a string variable to use as output
let outputString = "";
// Step 2: Select a number to skip and set that number as a variable
let skipNumber = 4; // You can change this to any number between 0 and 9
// Step 3: Create a for loop that counts to 10
for (let i = 0; i < 10; i++) {
    // Step 4: Add a condition to check if the value of the looped variable is equal to the number to skip
    if (i === skipNumber) {
        // Step 5: If the number is to be skipped, continue to the next number
        continue;
    }
    // Step 6: Append the new count value to the end of the main output variable
    outputString += i;
}
// Step 7: Output the main variable after the loop completes
console.log("Output with continue: " + outputString);
// Reset the output string
outputString = "";
// Step 8: Reuse the code, but change continue to break and see the difference
for (let i = 0; i < 10; i++) {
    // Step 4: Add a condition to check if the value of the looped variable is equal to the number to skip
    if (i === skipNumber) {
        // Step 5: If the number is to be skipped, break the loop
        break;
    }
    // Step 6: Append the new count value to the end of the main output variable
    outputString += i;
}
// Step 7: Output the main variable after the loop completes
console.log("Output with break: " + outputString);
//OUTPUT
//Output with continue: 012356789
//Output with break: 0123