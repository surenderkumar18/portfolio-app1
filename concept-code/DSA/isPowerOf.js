function isPowerOf(base, num) {
  // Check if the base or num is less than or equal to 0
  if (base <= 0 || num <= 0) {
    return false;
  }

  // Keep dividing num by base until num becomes 1
  while (num !== 1) {
    // Check if num is divisible by base
    if (num % base !== 0) {
      return false;
    }
    // Divide num by base
    num /= base;
  }

  // If num becomes 1, then it is a power of base
  return true;
}

// Test cases
console.log(isPowerOf(2, 8)); // Output: true (8 is 2^3)
console.log(isPowerOf(3, 27)); // Output: true (27 is 3^3)
console.log(isPowerOf(5, 125)); // Output: true (125 is 5^3)
console.log(isPowerOf(2, 10)); // Output: false (10 is not a power of 2)
console.log(isPowerOf(3, 16)); // Output: false (16 is not a power of 3)
