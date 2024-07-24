function findMaxCountInMap(map) {
  let maxCount = 0;
  let maxValue = null;

  for (let [key, value] of map) {
    if (value > maxCount) {
      maxCount = value;
      maxValue = key;
    }
  }

  return { maxValue, maxCount };
}

function countCharacters(str) {
  const charCount = new Map();

  for (let char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  return charCount;
}

const inputString = "aabbbccde";
const charCount = countCharacters(inputString);
const result = findMaxCountInMap(charCount);
console.log(result); // Output: { maxValue: 'b', maxCount: 3 }
