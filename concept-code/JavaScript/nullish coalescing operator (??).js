// 1. -----------------

let a = 0; // falsy value
let b = 7; // truthy value
let c = a || b; // Evaluates to b because a is falsy
console.log(c); // Output will be 7

// 2. -----------------

let aa = 0; // falsy value
let bb = 7; // truthy value
let cc = aa ?? bb; // Evaluates to b because a is not null or undefined
console.log(cc); // Output will be 0
