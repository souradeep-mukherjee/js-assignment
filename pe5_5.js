//CODE
// Step 1: Create a grid array variable
let grid = [];
// Step 2: Set a value of 64 for the number of cells
let totalCells = 64;
// Step 3: Set a counter to 0
let counter = 0;
// Step 4: Create a global variable for the row array
let row = [];
// Step 5: Create a loop that will iterate up to the number of cells + 1
for (let i = 0; i <= totalCells; i++) {
    // Step 6: Outer if statement - check if the counter is divisible by 8 (number of columns)
    if (counter % 8 === 0) {
        // Step 7: Inner if statement - check if the row is undefined (first run or row complete)
        if (row.length > 0) {
            grid.push(row); // Add row to grid when complete
        }
        row = []; // Reset the row for the next batch of cells
    }
    // Step 10: Add the counter value to the row array
    row.push(counter);
    // Step 11: If the row is complete (length reaches 8), add it to the grid
    if (row.length === 8) {
        grid.push(row); // Add row to grid
        row = []; // Reset row for the next set
    }
    // Step 9: Increment the main counter by 1
    counter++;
}
// Step 13: Output the grid into the console
console.table(grid);
//OUTPUT
//┌─────────┬────┬────┬────┬────┬────┬────┬────┬────┐
//│ (index) │ 0  │ 1  │ 2  │ 3  │ 4  │ 5  │ 6  │ 7  │
//├─────────┼────┼────┼────┼────┼────┼────┼────┼────┤
//│ 0       │ 0  │ 1  │ 2  │ 3  │ 4  │ 5  │ 6  │ 7  │
//│ 1       │ 8  │ 9  │ 10 │ 11 │ 12 │ 13 │ 14 │ 15 │
//│ 2       │ 16 │ 17 │ 18 │ 19 │ 20 │ 21 │ 22 │ 23 │
//│ 3       │ 24 │ 25 │ 26 │ 27 │ 28 │ 29 │ 30 │ 31 │
//│ 4       │ 32 │ 33 │ 34 │ 35 │ 36 │ 37 │ 38 │ 39 │
//│ 5       │ 40 │ 41 │ 42 │ 43 │ 44 │ 45 │ 46 │ 47 │
//│ 6       │ 48 │ 49 │ 50 │ 51 │ 52 │ 53 │ 54 │ 55 │
//│ 7       │ 56 │ 57 │ 58 │ 59 │ 60 │ 61 │ 62 │ 63 │
//└─────────┴────┴────┴────┴────┴────┴────┴────┴────┘