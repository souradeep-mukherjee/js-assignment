//CODE
// Step 1: Create an object named people with an empty array called friends
let people = {
    friends: []
};
// Step 2: Create three variables, each containing an object with first name, last name, and ID
let friend1 = { firstName: "Alice", lastName: "Smith", id: 1 };
let friend2 = { firstName: "Bob", lastName: "Johnson", id: 2 };
let friend3 = { firstName: "Charlie", lastName: "Brown", id: 3 };
// Step 3: Add the three friends to the friends array
people.friends.push(friend1, friend2, friend3);
// Step 4: Output the people object to the console
console.log("People object:", people);
//OUTPUT
//People object: {
//    friends: [
//        { firstName: 'Alice', lastName: 'Smith', id: 1 },
//        { firstName: 'Bob', lastName: 'Johnson', id: 2 },
//        { firstName: 'Charlie', lastName: 'Brown', id: 3 }
//      ]
//    }