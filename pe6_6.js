// Step 1: Create a function to calculate the factorial
function factorial(n) {
    // Step 2: Base case (stopping condition)
    if (n === 0) {
        return 1; // Factorial of 0 is 1
    } else {
        // Recursive call
        console.log("Current value of n: " + n); // Print current value for tracking
        return n * factorial(n - 1); // Multiply n by the factorial of (n-1)
    }
}

// Step 3: Invoke the function with an argument (e.g., 5)
let result_1 = factorial(5);

// Step 4: Output the result of the factorial calculation
console.log("Factorial result: " + result_1);
//Step 5: Changing the input with an argument(e.g., 7)
let result_2 = factorial(7);
console.log("Factorial result: " + result_2);
//OUTPUT
/*
Current value of n: 5
Current value of n: 4
Current value of n: 3
Current value of n: 2
Current value of n: 1
Factorial result: 120
Current value of n: 7
Current value of n: 6
Current value of n: 5
Current value of n: 4
Current value of n: 3
Current value of n: 2
Current value of n: 1
Factorial result: 5040
*/