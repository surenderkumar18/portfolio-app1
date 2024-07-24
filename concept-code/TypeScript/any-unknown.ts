// any v/s unknown

// ----- 1 -------

let num: any = 10;
console.log(num.toFixed(2));

// unknown
let numUnk: unknown = 10;
//console.log(numUnk.toFixed(2)); // give run time error

// Fix this

if (typeof numUnk === "number") {
  // type checking require for unknown
  console.log(numUnk.toFixed(2)); //
}

// ----- 2 -------

let num2: any = num; // can assign to other variable
console.log(num2);

//let numUnk2: number = numUnk; // Error: Type 'unknown' is not assignable to type 'string'

// fix
let numUnk2: number = numUnk as number; // Type assertion required for 'unknown'
console.log(numUnk2);