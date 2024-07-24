// Define a variable that can hold values of type string or number
let myVar: string | number;

myVar = "hello"; // Valid
myVar = 123; // Valid
myVar = true; // Error: Type 'boolean' is not assignable to type 'string | number'.
