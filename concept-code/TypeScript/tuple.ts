/**
 * In TypeScript, a tuple is a fixed-size array where the type of each
 * element is known and can be different from the types of other elements
 * in the array. Tuples allow you to express an array with a fixed number
 * of elements, each potentially of a different type.
 */

// Declare a tuple type
let myTuple: [string, number, boolean];

// Initialize the tuple
myTuple = ["hello", 123, true];

// Access elements by index
console.log(myTuple[0]); // Output: "hello"
console.log(myTuple[1]); // Output: 123
console.log(myTuple[2]); // Output: true

// Modify elements
myTuple[0] = "world";
myTuple[1] = 456;

// Pushing additional elements or modifying types will result in TypeScript errors
