// ----------------------------------------------------
console.log({} == false); // false

// -------------------- Object.entries ----------------

// Object.entries;
const obj = { "Alia:": "-678" };

for (const [key, value] of Object.entries(obj)) {
  console.log(`Key: ${key}, Value: ${value}`);
}

// ----------------- array.includes --------------------

const array = [1, 2, 3, 4, 5];

console.log(array.includes(3)); // Output: true
console.log(array.includes(6)); // Output: false

// ---------- find mode --------------

if (num % base !== 0) {
  return false;
}

// ---------- Object.keys ------
const person = {
  name: "John",
  age: 30,
};

const keys = Object.keys(person); // ["name", "age"]

// ------------ Element in an Array --------------

const array = [1, 2, 3, 4, 5];
const element = 3;
const isInArray = array.includes(element); // true
const isInArray = array.indexOf(element) !== -1; // true

const isInArray = array.some((item) => item === element);
console.log(isInArray); // true

// ------------ 2. Element in an Object --------------

const obj = { a: 1, b: 2, c: 3 };
const key = "b";
const isInObject = key in obj;
console.log(isInObject); //

const obj = { a: 1, b: 2, c: 3 };
const key = "b";
const isInObject = obj.hasOwnProperty(key);
console.log(isInObject); // true

// ------------ Element in a String --------------

const str = "Hello, world!";
const substring = "world";
const isInString = str.includes(substring);
console.log(isInString); // true

const str = "Hello, world!";
const substring = "world";
const isInString = str.indexOf(substring) !== -1;
console.log(isInString); // true

// ------ Using search (with regular expressions): --

const str = "Hello, world!";
const substring = "world";
const isInString = str.search(substring) !== -1;
console.log(isInString); // true
