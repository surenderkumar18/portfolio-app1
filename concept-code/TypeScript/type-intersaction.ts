// -- Intersection Types

// Define an interface for a person with name and age properties
interface Person {
  name: string;
  age: number;
}

// Define an interface for a student with name and grade properties
interface Student {
  name: string;
  grade: string;
}

// Define an intersection type for a student who is also a person
type StudentPerson = Person & Student;

// Create a variable of type StudentPerson
let student: StudentPerson = {
  name: "Alice",
  age: 20,
  grade: "A",
};
