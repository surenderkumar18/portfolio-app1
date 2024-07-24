function findFirstRepeatedWord(str) {
  // Split the string into words
  const words = str.split(" ");

  // Create a set to store unique words encountered so far
  const seenWords = new Set();

  // Iterate through each word in the array of words
  for (let word of words) {
    // Check if the word has been seen before
    if (seenWords.has(word)) {
      // If it has been seen before, it's the first repeated word
      return word;
    } else {
      // If it hasn't been seen before, add it to the set
      seenWords.add(word);
    }
  }

  // If no repeated word is found, return null
  return null;
}

// Test the function
const input = "Ravi had been saying that he had been there";
const repeatedWord = findFirstRepeatedWord(input);
console.log("First repeated word:", repeatedWord); // Output: had
