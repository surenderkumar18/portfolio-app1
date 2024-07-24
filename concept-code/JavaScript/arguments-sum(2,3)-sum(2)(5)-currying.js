function sum(x, y) {
  if (arguments.length === 2) {
    // If two arguments are provided, directly return the sum
    return x + y;
  } else if (arguments.length === 1) {
    // If only one argument is provided, return a function that accepts the second argument
    return function (y) {
      return x + y;
    };
  } else {
    // Handle invalid input
    throw new Error("Invalid number of arguments");
  }
}

// Test cases
console.log(sum(2, 3)); // Output: 5
console.log(sum(2)(3)); // Output: 5

/// ----------- 2 --------------------------

// Original function to filter products
function filterProducts(products, criteria) {
  // Logic to filter products based on criteria
  return products.filter((product) => {
    // Check if product meets the criteria
    return (
      product.category === criteria.category &&
      product.price >= criteria.minPrice &&
      product.price <= criteria.maxPrice &&
      product.available === criteria.available
    );
  });
}

// Curried version of the filter function
function curriedFilterProducts(criteria) {
  return function (products) {
    return filterProducts(products, criteria);
  };
}

// Usage
const products = [
  {
    id: 1,
    name: "Product A",
    category: "Electronics",
    price: 500,
    available: true,
  },
  {
    id: 2,
    name: "Product B",
    category: "Clothing",
    price: 50,
    available: true,
  },
  {
    id: 3,
    name: "Product C",
    category: "Electronics",
    price: 1000,
    available: false,
  },
];

// Partial application to create specialized filter functions
const filterElectronics = curriedFilterProducts({ category: "Electronics" });
const filterAffordable = curriedFilterProducts({ minPrice: 0, maxPrice: 100 });

// Use specialized filter functions
const filteredElectronics = filterElectronics(products);
console.log(filteredElectronics);
// Output: [{ id: 1, name: 'Product A', category: 'Electronics', price: 500, available: true }, { id: 3, name: 'Product C', category: 'Electronics', price: 1000, available: false }]

const filteredAffordable = filterAffordable(products);
console.log(filteredAffordable);
// Output: [{ id: 2, name: 'Product B', category: 'Clothing', price: 50, available: true }]
