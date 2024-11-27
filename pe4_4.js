//CODE
// Step 1: Generate a random number between 0 and 5
let randomNumber = Math.random(); // Random number between 0 and 1
randomNumber = randomNumber * 6; // Scale the random number to the range 0-5
randomNumber = Math.floor(randomNumber); // Round down to get an integer between 0 and 5
// Step 2: Create a prompt to get the user's question
const prompt = require('prompt-sync')();
let userQuestion = prompt("Ask the Magic 8-Ball a question:");
// Step 3: Create 6 responses using a switch statement
let response;
switch (randomNumber) {
    case 0:
        response = "Yes, definitely!";
        break;
    case 1:
        response = "No, absolutely not.";
        break;
    case 2:
        response = "Maybe, try again later.";
        break;
    case 3:
        response = "I'm not sure, ask again.";
        break;
    case 4:
        response = "It is certain!";
        break;
    case 5:
        response = "I wouldn't count on it.";
        break;
}
// Step 4: Combine the user's question with the random response
let finalResponse = `You asked: "${userQuestion}"\nMagic 8-Ball says: ${response}`;
// Step 5: Output the result to the console
console.log(finalResponse);
//OUTPUT
//Ask the Magic 8-Ball a question:4
//You asked: "4"
//Magic 8-Ball says: Yes, definitely!
//Ask the Magic 8-Ball a question:0
//You asked: "0"
//Magic 8-Ball says: Maybe, try again later.