function smallestElementInRoatedArray(arr) {
  let ind = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    if (arr[i + 1] < arr[i]) {
      ind = i + 1;
      break;
    }
  }
  if (ind === 0) return arr[arr.length - 2];
  if (ind === arr.length - 1) return arr[0];
  return arr[ind + 1];
}

console.log(smallestElementInRoatedArray([5, 6, 7, 8, 9, 4]));
