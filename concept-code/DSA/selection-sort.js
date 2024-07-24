// ------- Selecttion sort ------

function printMainArr(arr) {
  let str = arr.join();
  console.log("Outer array is::: ", str);
}

function innerArray(inArr, elm) {
  inArr.push(elm);
  let str = inArr.join();
  console.log("Inner array is::: ", str);
}

function selectionSort(arr) {
  // use two loop
  // find minimum mumber in array and swap with first item of remaining unsorted array
  // use destructing to swap
  //  [arr[i], arr[minIndex]]= [arr[minIndex], arr[i]]

  let len = arr.length;

  for (let i = 0; i < len - 1; i++) {
    //printMainArr(arr);
    //let iArray = [];
    // loop run for len - 1
    let minIndex = i; // start with minIndex 0
    for (let j = i + 1; j < len; j++) {
      // let j = i + 1
      if (arr[j] < arr[minIndex]) {
        minIndex = j; //
      }
      //innerArray(iArray, arr[j]);
    }

    if (minIndex !== i) {
      // if indexes are not same
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]; // swap element
    }
  }
  return arr; // return array
}

const arr = [64, 25, 12, 22, 11];
console.log("Original array:", arr);
console.log("Sorted array:", selectionSort(arr));
