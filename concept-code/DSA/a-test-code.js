// 2nd smallest element of a sorted rotated array. E.g. 5,6,1,2,3,4

/**
 * loop till i+1 < i
 */

function smallestElement(arr) {
  let ind = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      ind = i + 1;
      break;
    }
  }
  if (ind === 0) return arr.length - 2;

  return ind + 1;
}

console.log(smallestElement([5, 4, 3, 2, 1, 0]));
