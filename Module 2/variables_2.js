// Using var
var x = 1; // Declare x and assign 1
var x = 2; // Redeclaration of x, no error is thrown
console.log(x); // Outputs 2, as the last declaration overrides the previous one

// Using let
let y = 1; // Declare y and assign 1
//let y = 2; // Error: "Identifier 'y' has already been declared"
console.log(y); // Outputs 1, as the variable y is not redeclared

// Using const
const z = 1; // Declare z and assign 1
//const z = 2; // Error: "Identifier 'z' has already been declared"
console.log(z); // Outputs 1, as the variable z is not redeclared
