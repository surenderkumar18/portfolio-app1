// Numeric Union:

let num: number | string;
num = 10; // Valid
num = "twenty"; // Valid

// Boolean Union:
let bool: boolean | number;
bool = true; // Valid
bool = 0; // Valid

//Object Union:
type Point = { x: number; y: number };
type Circle = { radius: number };
let shape: Point | Circle;
shape = { x: 10, y: 20 }; // Valid
shape = { radius: 5 }; // Valid

//Array Union:
let arr: number[] | string[];
arr = [1, 2, 3]; // Valid
arr = ["a", "b", "c"]; // Valid

//Function Union:
type Operation = (a: number, b: number) => number;
let op: Operation | string;
op = (x, y) => x + y; // Valid
op = "addition"; // Valid

// type

type Greating = {
    num: number;
    name: string:
}
function foo(param: Greating){}
