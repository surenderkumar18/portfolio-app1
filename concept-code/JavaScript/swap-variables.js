// arithmetic operations: addition

let a = 5;
let b = 10;

console.log("Before swap: a =", a, "b =", b);

a = a + b;
b = a - b;
a = a - b;

console.log("After swap: a =", a, "b =", b);

// 2. Destructuring Assignment:

[a, b] = [b, a];

// 3. Bitwise XOR Operator:

a = a ^ b;
b = a ^ b;
a = a ^ b;
