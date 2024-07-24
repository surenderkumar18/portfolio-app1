// 1. Using Array Destructuring:

let arr = [1, 2, 3, 4, 5];
[arr[1], arr[2]] = [arr[2], arr[1]];

// 2. Using splice() Method:

let arrsplice = [1, 2, 3, 4, 5];
arrsplice.splice(1, 2, arr[2], arr[1]);
