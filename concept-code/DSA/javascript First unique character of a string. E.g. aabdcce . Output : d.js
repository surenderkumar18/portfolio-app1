function firstUniqueChar(str) {
  // Create a map to store the frequency of each character
  const charCount = new Map();

  // Iterate through the string to count the frequency of each character
  for (let char of str) {
    charCount.set(char, (charCount.get(char) || 0) + 1);
  }

  // Iterate through the string again to find the first character with a frequency of 1
  for (let char of str) {
    if (charCount.get(char) === 1) {
      return char;
    }
  }

  // If no unique character is found, return null or an appropriate value
  return null;
}

// Test the function
const str = "aabdcce";
console.log(firstUniqueChar(str)); // Output: "d"
