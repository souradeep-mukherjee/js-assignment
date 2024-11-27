// Step 1: Create an empty array, myTable, to hold your table data
let myTable = [];
// Step 2: Set variable values for the number of rows and columns
let numRows = 5;  // You can change this to set how many rows you want in the table
let numCols = 4;  // You can change this to set how many columns you want in the table
// Step 3: Set up a counter variable with an initial value of 0
let counter = 0;
// Step 4: Create a for loop to construct each row of the table
for (let i = 0; i < numRows; i++) {
    // Step 5: Create a temporary array (tempTable) to hold each row's data
    let tempTable = [];
    // Step 6: Nested loop to count the columns and generate each cell
    for (let j = 0; j < numCols; j++) {
        // Step 7: Increment the counter each iteration of the inner loop
        counter++;
        // Step 8: Push the counter value to the tempTable (this represents the cell in the table)
        tempTable.push(counter);
    }
    // Step 9: Push the tempTable (the complete row) to the main table
    myTable.push(tempTable);
}
// Step 10: Output the table into the console using console.table
console.table(myTable);
//OUTPUT
//┌─────────┬────┬────┬────┬────┐
//│ (index) │ 0  │ 1  │ 2  │ 3  │
//├─────────┼────┼────┼────┼────┤
//│ 0       │ 1  │ 2  │ 3  │ 4  │
//│ 1       │ 5  │ 6  │ 7  │ 8  │
//│ 2       │ 9  │ 10 │ 11 │ 12 │
//│ 3       │ 13 │ 14 │ 15 │ 16 │
//│ 4       │ 17 │ 18 │ 19 │ 20 │
//└─────────┴────┴────┴────┴────┘