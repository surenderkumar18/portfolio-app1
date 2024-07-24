(function () {
  var privateVar = "I am private";
  console.log(privateVar);
})();

console.log(typeof privateVar); // undefined


// -- Lexical this Binding

const add = (a, b) => a + b;
console.log(add(2, 3)); // 5

// Lexical this
const obj = {
    value: 10,
    increment: function() {
        setTimeout(() => {
            this.value++;
            console.log(this.value);
        }, 1000);
    }
};
obj.increment(); // 11
