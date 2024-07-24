// Recursion
const factorial = (n) => {
  if (n === 0) {
    return 1;
  } else {
    return n * factorial(n - 1);
  }
};
console.log("Factorial of 5:", factorial(5)); // Output: 120
