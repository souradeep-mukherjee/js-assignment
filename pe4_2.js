//CODE
// Step 1: Create a prompt to ask the user's age
const prompt = require('prompt-sync')();
let age = prompt("Please enter your age:");
// Step 2: Convert the response from the prompt to a number
age = Number(age);
// Step 3: Declare a message variable to hold the response message
let message;
// Step 4: If the input age is equal to or greater than 21, set the message
if (age >= 21) {
    message = "You are allowed entry to the venue and can purchase alcohol.";
}
// Step 5: If the input age is equal to or greater than 19, set the message
else if (age >= 19) {
message = "You are allowed entry to the venue, but you cannot purchase alcohol.";
}
// Step 6: Provide a default else statement to deny entry if none are true
else {
    message = "You are not allowed entry to the venue.";
}
// Step 7: Output the response message to the console
console.log(message);
//OUTPUT
//Please enter your age:21
//You are allowed entry to the venue and can purchase alcohol.