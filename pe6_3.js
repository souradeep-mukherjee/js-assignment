//CODE
// Step 1: Set up two variables containing number values
let num1 = 10;
let num2 = 5;
// Step 2: Set up a variable to hold an operator, either + or -
let operator = "+"; // You can also try "-" for subtraction
// Step 3: Create a function that performs the operation
function calculate(number1, number2, operation) {
    // Step 3: Use a condition to check if the operator is + or - and perform the corresponding operation
    if (operation === "+") {
        return number1 + number2; // Add numbers
    } else if (operation === "-") {
        return number1 - number2; // Subtract numbers
    } else {
        return number1 + number2; // Default to addition if no valid operator is provided
    }
}
// Step 4: Output the result with console.log()
console.log("Result with operator '" + operator + "': " + calculate(num1, num2, operator));
// Step 5: Update the operator to be the other operator type and call the function again
operator = "-"; // Change the operator to subtraction
console.log("Result with operator '" + operator + "': " + calculate(num1, num2, operator));
//OUTPUT
//Result with operator '+': 15
//Result with operator '-': 5