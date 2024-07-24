
// set & get on Map

const charCount = new Map();

for (let char of str) {
  charCount.set(char, (charCount.get(char) || 0) + 1);
}

// -- iterate on Map [key, value]

for (let [key, value] of map) {
  if (value > maxCount) {
    maxCount = ....;
    maxValue = ...;
  }
}

// -- Map has key

// The has() method of Map instances returns a boolean indicating whether an element 
// with the specified key exists in this map or not.

const map1 = new Map();
map1.set('bar', 'foo');

console.log(map1.has('bar'));
// Expected output: true

console.log(map1.has('baz'));
// Expected output: false

/**
 * 
 * // Invert the Map
 * 
 */


// Original Map
let myMap = new Map([
  [1, 'one'],
  [2, 'two'],
  [3, 'three'],
]);

// Invert the Map
let invertedMap = new Map([...myMap.entries()].map(
  ([key, value]) => ([value, key]))
);

// Retrieve value using the new key
console.log(invertedMap.get('one')); // Output: 1
