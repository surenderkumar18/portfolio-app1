/**
 * Methods for Shallow Copy
 *
 */

// -- 1. Object.assign() for Shallow Copy

const original = { a: 1, b: { c: 2 } };
const shallowCopy = Object.assign({}, original);
shallowCopy.b.c = 3;
console.log(original.b.c); // Output: 3

// --- 2. Spread Operator for Shallow Copy

const original1 = { a: 1, b: { c: 2 } };
const shallowCopy = { ...original1 };
shallowCopy.b.c = 3;
console.log(original1.b.c); // Output: 3

/**
 * Methods for Deep Copy
 *
 */

// -- 1. JSON.stringify() and JSON.parse()

const original2 = { a: 1, b: { c: 2 } };
const deepCopy = JSON.parse(JSON.stringify(original2));
deepCopy.b.c = 3;
console.log(original2.b.c); // Output: 2

// -- 2. Recursive Function

function deepCopy(obj) {
  if (obj === null || typeof obj !== "object") {
    return obj;
  }

  if (Array.isArray(obj)) {
    const copy = [];
    obj.forEach((_, i) => (copy[i] = deepCopy(obj[i])));
    return copy;
  }

  const copy = {};
  Object.keys(obj).forEach((key) => {
    copy[key] = deepCopy(obj[key]);
  });

  return copy;
}

const original3 = { a: 1, b: { c: 2 } };
const deepCopyObj = deepCopy(original3);
deepCopyObj.b.c = 3;
console.log(original3.b.c); // Output: 2
