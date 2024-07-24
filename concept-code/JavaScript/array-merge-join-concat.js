// 1. -------------------------
const mergedArray = [2, "A", 3, "B"];

const mergedString = mergedArray.join("");

console.log(mergedString); // Output: "2A3B"

// 2. -------------------------

const arrays = [
  [2, "A"],
  [3, "B"],
  [4, "D"],
  [6, "T"],
];

// Merge arrays into a single array
const mergedArray = arrays.reduce((acc, curr) => acc.concat(curr), []);

// Convert the merged array to a string
const mergedString = mergedArray.join("");

console.log(mergedString); // Output: "2A3B4D6T"

// 3. -------------------------
const arr1 = [2, "A"];
const arr2 = [3, "B"];

const mergedArray = arr1.concat(arr2);

console.log(mergedArray); // Output: [2, 'A', 3, 'B']
