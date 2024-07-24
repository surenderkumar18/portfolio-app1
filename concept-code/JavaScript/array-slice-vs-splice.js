// =======================================================>>
// ----------------- slice -------------------------------
// =======================================================>>

// ========= slice last 2 item of an Array =============>>
const array1 = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
];

// Extract elements from the second to last element to the end
const slice_1 = array1.slice(-2, array1.length);
console.log(slice_1); // Output: ['l', 'm']

// ----------------- slice -------------------------------
const groceries = [
  "Carrot",
  "Apple",
  "Banana",
  "Tomato",
  "Orange",
  "Broccoli",
  "Cucumber",
  "Potato",
];

const fruits = groceries.slice(1, 5); // Start from index 1 (inclusive) up to index 5 (exclusive)
console.log(fruits); // Output: ['Apple', 'Banana', 'Tomato', 'Orange']

// -------------------------------------------

const array = ["a", "b", "c", "d", "e"];

// Extract elements from the second to last element to the end
const slice1 = array.slice(-2);
console.log(slice1); // Output: ['d', 'e']

// Extract elements from the third to last element to the second to last element
const slice2 = array.slice(-3, -1);
console.log(slice2); // Output: ['c', 'd']

// =======================================================>>
// ----------------- splice -------------------------------
// =======================================================>>

const groceries1 = [
  "Carrot",
  "Apple",
  "Banana",
  "Tomato",
  "Orange",
  "Broccoli",
  "Cucumber",
  "Potato",
];

const fruits1 = groceries.splice(1, 4); // Start from index 1 (inclusive), extract 4 items
console.log(fruits1); // Output: ['Apple', 'Banana', 'Tomato', 'Orange']
console.log(groceries1); // Output: ['Carrot', 'Broccoli', 'Cucumber', 'Potato']

//------------------------------------

const groceriesADD = [
  "Carrot",
  "Apple",
  "Banana",
  "Tomato",
  "Orange",
  "Broccoli",
  "Cucumber",
  "Potato",
];

const fruitsADD = groceries.splice(1, 4, "Mango", "Pinaple"); // Start from index 1 (inclusive), extract 4 items
console.log(fruitsADD); // Output: ['Apple', 'Banana', 'Tomato', 'Orange']
console.log(groceriesADD); // Output: ['Carrot', 'Mango', 'Pinaple', 'Broccoli', 'Cucumber', 'Potato']
