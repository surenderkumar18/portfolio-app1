[ slice last 2 item of an array? ]()

"**Inclusive**" means that the element at the start index is included in the `extracted slice.`
"**Exclusive**" means that the element at the end index is `not included` in the extracted slice.

**NOTE:**

- `2nd parameter in` _slice_ is the **end index** `(exclusive) until which the array will be sliced.`
- `2nd parameter in` [splice] `indicates the` **number of elements to remove from the array**

# slice

1.  `does not modify the original array;`
2.  `It takes two optional parameters:` _start_ and _end_.
3.  `start specifies the index at which to begin extraction (`**inclusive**`), and end specifies` **the index** `at which to stop extraction (`**exclusive**`).`
4.  [If end is not provided](), slice extracts elements from _start to the end of the array_.

# splice

1.  `splice` **modifies the original array** by **adding or removing** `elements from it.`
2.  `It takes three parameters: start, deleteCount, and optionally item1, ..., itemN.`
3.  [start] `specifies the index at which to start modifying the array.`
4.  [deleteCount] `specifies the` **number of elements to remove from the array.**
5.  [If deleteCount is 0](), no elements are removed.
6.  `The remaining parameters (item1, ..., itemN) are optional and represent the elements to add to the array at the specified start index.`
7.  `splice returns an array containing the deleted elements.`

Original Array: ['A', 'B', 'C', 'D', 'E', 'F', 'G']

splice(2, 3, 'X', 'Y', 'Z'):
Removes 3 elements starting from index 2 and replaces them with 'X', 'Y', 'Z'

Array after splice: ['A', 'B', 'X', 'Y', 'Z', 'F', 'G']

slice(2, 5):
Extracts elements starting from index 2 up to, but not including, index 5

Result of slice: ['C', 'D', 'E']

---
