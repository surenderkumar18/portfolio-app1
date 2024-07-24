function countPairsWithSum(arr, targetSum) {
  // Create a hashmap to store the occurrences of each number
  const numCounts = {};
  let count = 0;

  // Iterate through the array and update the hashmap
  for (let num of arr) {
    const complement = targetSum - num;
    if (numCounts[complement]) {
      count += numCounts[complement]; // Increment count by the occurrences of the complement
    }
    // Increment the occurrences of the current number
    numCounts[num] = (numCounts[num] || 0) + 1;
  }

  return count;
}

// Test the function
const arr = [1, 2, 3, 4, 5];
const targetSum = 7;
console.log(countPairsWithSum(arr, targetSum)); // Output: 2 (pairs: [2, 5] and [3, 4])
