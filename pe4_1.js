//CODE
// Step 1: Create a variable with a Boolean value
let myVariable = true;
// Step 2: Output the value of the variable to the console
console.log("Initial value of myVariable:", myVariable);
// Step 3: Check whether the variable is true and output a message
if (myVariable) {
    console.log("The variable is true!");
}
// Step 4: Add another if statement with an ! to check whether the condition is not true
if (!myVariable) {
    console.log("The variable is not true!");
}
// Step 5: Change the variable to the opposite value and observe the result
myVariable = !myVariable;
console.log("Changed value of myVariable:", myVariable);
if (myVariable) {
    console.log("The variable is true!");
}
if (!myVariable) {
    console.log("The variable is not true!");
}
//Initial value of myVariable: true
//The variable is true!
//Changed value of myVariable: false
//The variable is not true!