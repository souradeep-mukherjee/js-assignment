//CODE
// Step 1: Create a simple object with three items in it
let myObject = {
    item1: 'Apple',
    item2: 'Banana',
    item3: 'Cherry'
};
// Step 2: Using the for in loop, get the properties' names and values from the object and output them into the console
console.log("Object properties and values:");
for (let key in myObject) {
    console.log(`${key}: ${myObject[key]}`);
}
// Step 3: Create an array containing the same three items
let myArray = ['Apple', 'Banana', 'Cherry'];
// Using the for loop to iterate over the array and output the values into the console
console.log("Array values:");
for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
// Using the for in loop to iterate over the array and output the values into the console
console.log("Array values using for in loop:");
for (let index in myArray) {
    console.log(myArray[index]);
}
//OUTPUT
//Object properties and values:
//item1: Apple
//item2: Banana
//item3: Cherry
//Array values:
//Apple
//Banana
//Cherry
//Array values using for in loop:
//Apple
//Banana
//Cherry