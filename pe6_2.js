//CODE
const prompt = require('prompt-sync')();
// Step 1: Create an array of descriptive words
let descriptiveWords = ["amazing", "brilliant", "kind", "energetic", "funny", "creative", "smart", "thoughtful"];
// Step 2: Create a function that contains a prompt asking the user for a name
function describePerson() {
    // Prompt the user for their name
    let name = prompt("Please enter your name:");

    // Step 3: Select a random value from the array using Math.random
    let randomIndex = Math.floor(Math.random() * descriptiveWords.length);
    let randomDescription = descriptiveWords[randomIndex];

    // Step 4: Output the prompt value (name) and the randomly selected array value (description)
    console.log(name + " is " + randomDescription + "!");
}
// Step 5: Invoke the function
describePerson();
//OUTPUT
//Please enter your name:Souradeep
//"Souradeep is kind!"