//CODE
// Step 1: Setup a blank array, myWork
let myWork = [];
// Step 2: Using a for loop, create a list of 10 objects with alternating true/false status
for (let i = 1; i <= 10; i++) {
    // Step 3: Use a ternary operator to alternate the status based on whether the lesson number is even or odd
    let status = (i % 2 === 0) ? false : true; // true for odd lessons, false for even lessons
    // Step 4: Create a lesson object with name and status
    let lesson = {
        name: `Lesson ${i}`,
        status: status
    };
    // Step 5: Push the lesson object to the myWork array
    myWork.push(lesson);
}
// Step 6: Output the array to the console
console.log(myWork);
//OUTPUT
//[
//    { name: 'Lesson 1', status: true },
//    { name: 'Lesson 2', status: false },
//    { name: 'Lesson 3', status: true },
//    { name: 'Lesson 4', status: false },
//    { name: 'Lesson 5', status: true },
//    { name: 'Lesson 6', status: false },
//    { name: 'Lesson 7', status: true },
//    { name: 'Lesson 8', status: false },
//    { name: 'Lesson 9', status: true },
//    { name: 'Lesson 10', status: false }
//]