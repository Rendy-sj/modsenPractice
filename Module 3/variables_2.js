// Using var
console.log(x); // undefined
var x = 10;
console.log(x); // 10

// Using let
console.log(y); // ReferenceError: Cannot access 'y' before initialization
let y = 20;

// Using const
console.log(z); // ReferenceError: Cannot access 'z' before initialization
const z = 30;
