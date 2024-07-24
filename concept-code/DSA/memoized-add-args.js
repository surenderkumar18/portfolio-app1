function add(...args) {
  return args.reduce((acc, curr) => acc + curr, 0);
}

function memoized(fn) {
  let cache = new Map(); // Using Map for caching results

  return function (...args) {
    const sortedArgs = args.slice().sort(); // Sort the arguments
    const key = sortedArgs.join(","); // Create a unique key based on sorted arguments
    if (cache.has(key)) {
      return cache.get(key); // Return cached result if available
    } else {
      const result = fn(...args); // Call original function
      cache.set(key, result); // Cache the result
      return result;
    }
  };
}

let memoizedAdd = memoized(add);

console.log(memoizedAdd(2, 3)); // Output: 5 (result of 2 + 3)
console.log(memoizedAdd(3, 2)); // Output: 5 (memoized result using sorted arguments)
console.log(memoizedAdd(2, 3)); // Output: 5 (cached result)
console.log(memoizedAdd(4, 5)); // Output: 9 (result of 4 + 5)
console.log(memoizedAdd(5, 4)); // Output: 9 (memoized result using sorted arguments)
console.log(memoizedAdd(4, 5)); // Output: 9 (cached result)
