function isPrime(n) {
  // Step 1: Handle special cases
  if (n <= 1) return false; // 1 and below are not prime numbers
  if (n === 2) return true; // 2 is a prime number
  if (n % 2 === 0) return false; // Any other even number is not a prime

  // Step 2: Check for odd divisors up to the square root of n
  for (let i = 3; i * i <= n; i += 2) {
    if (n % i === 0) return false; // If n is divisible by any of these, it's not a prime
  }

  // If no divisors are found, n is a prime number
  return true;
}

// Example usage
console.log(isPrime(29)); // true
console.log(isPrime(15)); // false
