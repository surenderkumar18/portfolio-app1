/**
 * Regular Functions
 */

// -- 1. Global Context:

function regularFunction() {
  console.log(this); // In non-strict mode, logs global object (window); in strict mode, logs undefined
}
regularFunction();

// -- 2. Global Context

const obj = {
  value: 42,
  regularFunction: function () {
    console.log(this); // Logs the obj object
  },
};
obj.regularFunction();

// -- 3. Constructor Context

function Person(name) {
  this.name = name;
}
const person = new Person("Alice");
console.log(person.name); // Logs "Alice"

// -- 4. Event Handlers

const button = document.createElement("button");
button.textContent = "Click me";
button.onclick = function () {
  console.log(this); // Logs the button element
};
document.body.appendChild(button);

/**
 * Arrow Functions
 */

// -- 1. Global Context:

const arrowFunction = () => {
  console.log(this); // Inherits `this` from the surrounding scope
};
arrowFunction(); // Logs the global object if called in the global context

// -- 2. Method Context:

const obj = {
  value: 42,
  arrowFunction: () => {
    console.log(this); // `this` is inherited from the global scope
  },
};
obj.arrowFunction(); // Logs the global object, not `obj`

// -- 3. Inside Method:
// This means that "this" inside an arrow function is the same as "this" outside the arrow function.

const obj = {
  value: 42,
  regularFunction: function () {
    const arrowFunction = () => {
      console.log(this); // `this` refers to `obj` because it's defined in `regularFunction`
    };
    arrowFunction();
  },
};
obj.regularFunction(); // Logs the obj object
