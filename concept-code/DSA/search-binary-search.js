/* --- component of binary search
    0. work on sorted array
    1. target
    2. left
    3. right
    4. mid
    5. while
    6. Check if target is present at mid
    7. If target is greater, ignore left half
    8. If target is smaller, ignore right half
    9. If target is not present, return false
*/

function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);

    // Check if target is present at mid
    if (arr[mid] === target) {
      return mid;
    }

    // If target is greater, ignore left half
    if (arr[mid] < target) {
      left = mid + 1;
    } else {
      // If target is smaller, ignore right half
      right = mid - 1;
    }
  }

  // If target is not present in the array
  return -1;
}

// Example usage:
const array = [2, 3, 4, 10, 40];
const target = 10;
console.log("Index of", target, ":", binarySearch(array, target));
