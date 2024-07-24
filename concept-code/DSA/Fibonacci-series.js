/**
 * 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, ...

Here's a breakdown of the Fibonacci series:

The first number in the sequence is 0.
The second number in the sequence is 1.
Each subsequent number is the sum of the two preceding numbers.

 */

// 1. Find the nth Number in fibonacci series using Iterative and Recursive Approach.

function fibonacciIterative(n) {
  let a = 0,
    b = 1;
  if (n === 0) return a;
  if (n === 1) return b;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
}

// Test the iterative approach
console.log(fibonacciIterative(0)); // Output: 0
console.log(fibonacciIterative(1)); // Output: 1
console.log(fibonacciIterative(5)); // Output: 5
console.log(fibonacciIterative(10)); // Output: 55
