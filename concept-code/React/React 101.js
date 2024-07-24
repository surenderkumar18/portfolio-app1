// - Object
const Person = {
  name: "test",
  age: 25,
  greet() {
    console.log(this.name);
  },
};

// - Class == to create blueprint, so that we can create many Object using this blue print

class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  greet() {
    console.log(this.age, this.name);
  }
}

const user1 = new User("test", 25);
