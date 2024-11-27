//CODE
// Step 1: Create an empty array
let shoppingList = [];
// Step 2: Add Milk, Bread, and Apples to the list
shoppingList.push("Milk", "Bread", "Apples");
// Step 3: Update "Bread" with Bananas and Eggs
let breadIndex = shoppingList.indexOf("Bread");
if (breadIndex !== -1) {
    shoppingList.splice(breadIndex, 1, "Bananas", "Eggs");
}
// Step 4: Remove the last item from the array and output it to the console
let removedItem = shoppingList.pop();
console.log("Removed item:", removedItem);
// Step 5: Sort the list alphabetically
shoppingList.sort();
// Step 6: Find and output the index value of Milk
let milkIndex = shoppingList.indexOf("Milk");
console.log("Index of Milk:", milkIndex);
// Step 7: After Bananas, add Carrots and Lettuce
let bananasIndex = shoppingList.indexOf("Bananas");
if (bananasIndex !== -1) {
    shoppingList.splice(bananasIndex + 1, 0, "Carrots", "Lettuce");
}
// Step 8: Create a new list containing Juice and Pop
let newList = ["Juice", "Pop"];
// Step 9: Combine both lists, adding the new list twice to the end of the first list
shoppingList = shoppingList.concat(newList, newList);
// Step 10: Get the last index value of Pop and output it to the console
let lastPopIndex = shoppingList.lastIndexOf("Pop");
console.log("Last index of Pop:", lastPopIndex);
// Step 11: Output the final list
console.log("Final shopping list:", shoppingList);
//OUTPUT
//Removed item: Apples
//Index of Milk: 2
//Last index of Pop: 8
//Final shopping list: [
//  'Bananas', 'Carrots',
//  'Lettuce', 'Eggs',
//  'Milk',    'Juice',
//  'Pop',     'Juice',
//  'Pop'
//]