function secondSmallest(arr) {
  if (arr.length < 2) {
    throw new Error("Array must contain at least two elements");
  }

  let first = Infinity;
  let second = Infinity;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < first) {
      second = first;
      first = arr[i];
    } else if (arr[i] < second && arr[i] !== first) {
      second = arr[i];
    }
  }

  if (second === Infinity) {
    throw new Error("Array must contain at least two unique elements");
  }

  return second;
}

// Example usage:
const arr = [3, 1, 4, 1, 2, 5];
console.log(secondSmallest(arr)); // Output: 2
