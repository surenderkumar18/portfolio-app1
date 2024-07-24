const Calculator = function (value = 0) {
  this.value = value;

  this.add = function (num) {
    this.value += num;
    return this; // Return the object itself for chaining
  };

  this.subtract = function (num) {
    this.value -= num;
    return this; // Return the object itself for chaining
  };

  this.multiply = function (num) {
    this.value *= num;
    return this; // Return the object itself for chaining
  };

  this.divide = function (num) {
    if (num !== 0) {
      this.value /= num;
    } else {
      console.error("Division by zero");
    }
    return this; // Return the object itself for chaining
  };

  this.getValue = function () {
    return this.value;
  };
};

// Usage:
const calc = new Calculator(10);

const result = calc.add(5).subtract(3).multiply(2).divide(4).getValue();

console.log(result); // Output: 5
