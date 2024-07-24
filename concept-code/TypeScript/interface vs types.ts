// ----------------------------------
interface Printable {
  print(): void;
}

class Document implements Printable {
  print() {
    console.log("Printing document...");
  }
}

// -----------Syntax-----------------------

// Interface declaration
interface Person {
  name: string;
  age: number;
}

// Type alias declaration
type Point = {
  x: number;
  y: number;
};

// ----------- Extensibility --------------

// interface: Interfaces can be extended using the extends keyword.
// type: Type aliases cannot be extended or inherited.

interface Shape {
  color: string;
}

interface Square extends Shape {
  sideLength: number;
}

type Point = { x: number; y: number };
// This will cause an error
// type Point2D = Point & { z: number; };

// ----------- Declaration Merging -------

// interface: Interfaces support declaration merging, meaning you can define multiple interfaces
//            with the same name, and their members will be merged into a single interface.
// type: Type aliases do not support declaration merging.

interface Animal {
  name: string;
}

interface Animal {
  age: number;
}

const dog: Animal = {
  name: "Dog",
  age: 5,
};

type Point = { x: number; y: number };
// This will cause an error
// type Point = { z: number; };
