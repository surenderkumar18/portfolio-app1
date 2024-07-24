function compressString(input) {
  let compressedString = "";
  let count = 1;

  // Iterate through the input string
  for (let i = 0; i < input.length; i++) {
    // Check if the current character is the same as the next character
    if (input[i] === input[i + 1]) {
      // If yes, increment the count
      count++;
    } else {
      // If no, append the count and the character to the compressed string
      compressedString += count + input[i];
      // Reset the count to 1 for the next character
      count = 1;
    }
  }

  return compressedString;
}

// Test the function
const input = "SSSSSTTPPQ";
console.log(compressString(input)); // Output: "5S2T2P1Q"
