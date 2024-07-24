// Define sample array of products
const products = [
  { title: "Product C", price: 30, rating: 4.5 },
  { title: "Product A", price: 20, rating: 4.2 },
  { title: "Product B", price: 25, rating: 4.0 },
];

// Function to sort array of products by specified criteria
function sortProducts(products, criteria) {
  switch (criteria) {
    case "title":
      return products.sort((a, b) => a.title.localeCompare(b.title));
    case "price":
      return products.sort((a, b) => a.price - b.price);
    case "rating":
      return products.sort((a, b) => b.rating - a.rating);
    default:
      throw new Error("Invalid sorting criteria");
  }
}

// Sort array of products by title
console.log(sortProducts(products, "title"));

// Sort array of products by price
console.log(sortProducts(products, "price"));

// Sort array of products by rating
console.log(sortProducts(products, "rating"));
