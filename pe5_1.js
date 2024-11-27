//CODE
const prompt = require('prompt-sync')();
// Step 1: Create a variable for the max value of the number guessing game
let maxValue = 5;
// Step 2: Generate a random number between 1 and the max value (inclusive)
let solution = Math.floor(Math.random() * maxValue) + 1;
// Step 3: Create a variable to track whether the guess is correct
let isCorrect = false;
// Step 4: Use a while loop to ask for a number between 1 and maxValue
while (!isCorrect) {
    try {
        // Prompt the user to enter a number between 1 and maxValue
        let userGuess = prompt(`Guess a number between 1 and ${maxValue} (or type 'exit' to quit): `);
        // Check if the user wants to exit
        if (userGuess.toLowerCase() === 'exit') {
            console.log("You chose to exit the game. Goodbye!");
            break; // Exit the loop
        }
        // Convert the user's input to a number
        userGuess = Number(userGuess);
        // Check if the input is valid
        if (isNaN(userGuess) || userGuess < 1 || userGuess > maxValue) {
            console.log(`Please enter a valid number between 1 and ${maxValue}.`);
            continue; // Restart the loop
        }
        // Step 5: Check if the user's guess is correct
        if (userGuess === solution) {
            isCorrect = true;
            console.log("Congratulations! You've guessed the correct number!");
        } else if (userGuess < solution) {
            console.log("Your guess is too low. Try again!");
        } else {
            console.log("Your guess is too high. Try again!");
        }
    } catch (error) {
        console.log("An error occurred. Exiting the game.");
        break; // Gracefully exit on unexpected errors
    }
}
//OUTPUT
//Guess a number between 1 and 5 (or type 'exit' to quit): 3
//Congratulations! You've guessed the correct number!
//Guess a number between 1 and 5 (or type 'exit' to quit): 4
//Your guess is too high. Try again!
//Guess a number between 1 and 5 (or type 'exit' to quit): exit
//You chose to exit the game. Goodbye!