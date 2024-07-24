//Type assertion can be done in two ways:

// 1. ----- Angle-bracket syntax:-----

let variable1: any = "hello";
let strLength1: number = (<string>variable1).length; // Angle-bracket syntax
console.log(strLength1); // Output: 5

// 2. ----- as keyword

let variable2: any = "world";
let strLength2: number = (variable2 as string).length; // 'as' keyword
console.log(strLength2); // Output: 5

// Example using 'any'
let variable1: any = 10; // variable1 can hold any value
console.log(variable1.toFixed()); // No type checking performed, may cause runtime error

// Example using 'unknown'
let variable2: unknown = 10; // variable2 can hold any value, but type checking is stricter
// console.log(variable2.toFixed()); // Error: Property 'toFixed' does not exist on type 'unknown'
if (typeof variable2 === "number") {
  console.log(variable2.toFixed()); // Type checking is required before using 'unknown'
}

// Assigning 'any' and 'unknown' to other types
let str: string = variable1; // No type checking performed, allowed with 'any'
// let str: string = variable2; // Error: Type 'unknown' is not assignable to type 'string'
let num: number = variable2 as number; // Type assertion required for 'unknown'
console.log(num.toFixed()); // Type checking is required after type assertion

// 2. ---------------------------------
