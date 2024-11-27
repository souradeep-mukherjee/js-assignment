//CODE
// Step 1: Create a new myCar object with properties
let myCar = {
    make: "Porsche",
    model: "911 Carrera",
    year: 2023,
    mileage: 10.5, // mileage in kmpl
    automatic: true
};
// Step 2: Create a variable for the property name 'color'
let propertyName = "color";
// Use the variable to assign a new value to the color property
myCar[propertyName] = "Black";
// Step 3: Use the same variable to add a new property 'forSale'
propertyName = "forSale";
// Assign a value to the forSale property
myCar[propertyName] = true;
// Step 4: Output make and model into the console
console.log("Make:", myCar.make);
console.log("Model:", myCar.model);
// Step 5: Output the value of forSale into the console
console.log("For Sale:", myCar.forSale);
//OUTPUT
//Make: Porsche
//Model: 911 Carrera
//For Sale: true