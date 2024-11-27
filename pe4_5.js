//CODE
// Step 1: Create a variable called prize and use a prompt to ask the user to set the value
const prompt = require('prompt-sync')();
let prize = prompt("Choose a number between 0 and 10 to win a prize!");
// Step 2: Convert the prompt response to a number data type
prize = Number(prize);
// Step 3: Create a variable to use for the output message
let message = "My Selection: ";
// Step 4: Use the switch statement (and creativity) to provide a response based on the number
switch (prize) {
    case 0:
        message += "Sorry, you didn't win anything. Better luck next time!";
        break;
    case 1:
        message += "Congratulations! You won a small candy!";
        break;
    case 2:
        message += "Awesome! You've won a stuffed toy!";
        break;
    case 3:
        message += "Nice! You've won a free coffee!";
        break;
    case 4:
        message += "Great choice! You won a movie ticket!";
        break;
    case 5:
        message += "Fantastic! You've won a $5 gift card!";
        break;
    case 6:
        message += "Wow! You won a free lunch!";
        break;
    case 7:
        message += "Incredible! You've won a portable speaker!";
        break;
    case 8:
        message += "Unbelievable! You've won a smartwatch!";
        break;
    case 9:
        message += "Amazing! You've won a weekend getaway!";
        break;
    case 10:
        message += "Jackpot! You won a brand new car!";
        break;
    default:
        message += "Oops! Please choose a valid number between 0 and 10.";
        break;
}
// Step 5: Output the message back to the user
console.log(message);
//OUTPUT
//Choose a number between 0 and 10 to win a prize!6
//My Selection: Wow! You won a free lunch!
//Choose a number between 0 and 10 to win a prize!7
//My Selection: Incredible! You've won a portable speaker!
//Choose a number between 0 and 10 to win a prize!3
//My Selection: Nice! You've won a free coffee!