const myMap = new Map();
myMap.set("key1", "value1");
myMap.set("key2", "value2");
myMap.set("key3", "value3");

for (const [key, value] of myMap.entries()) {
  console.log(`Key: ${key}, Value: ${value}`);
}


// OUTPUT

Key: key1, Value: value1
Key: key2, Value: value2
Key: key3, Value: value3
