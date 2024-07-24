// Create a new Map
let myMap = new Map();

// Function to set a key-value pair in the Map
function setKeyValue(key, value) {
  // Check if the key already exists in the Map
  if (myMap.has(key)) {
    // If the key exists, get the current value and increment it by 1
    let currentValue = myMap.get(key);
    myMap.set(key, currentValue + 1);
  } else {
    // If the key doesn't exist, set the value to 1
    myMap.set(key, 1);
  }
}

// Example usage
setKeyValue("key1", "value1"); // Add a new key-value pair
setKeyValue("key2", "value2"); // Add another new key-value pair
setKeyValue("key1", "value3"); // Increment the value associated with an existing key
setKeyValue("key2", "value4"); // Increment the value associated with another existing key

// Print the Map
console.log(myMap);
