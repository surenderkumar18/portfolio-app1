const employees = [
  { name: "Alia", marks: -678 },
  { name: "Bobby", marks: 100 },
  { name: "Alex", marks: 223 },
  { name: "Alex", marks: -23 },
  { name: "Bobby", marks: 723 },
];

// Step 1: Group marks by employee name
const marksByEmployee = employees.reduce((acc, emp) => {
  acc[emp.name] = acc[emp.name] || [];
  acc[emp.name].push(emp.marks);
  return acc;
}, {});

// Step 2: Calculate average marks for each employee
const averageMarksByEmployee = Object.entries(marksByEmployee).reduce(
  (acc, [name, marks]) => {
    const sum = marks.reduce((total, mark) => total + mark, 0);
    const average = sum / marks.length;
    acc[name] = average;
    return acc;
  },
  {}
);

// Step 3: Find the maximum average marks
const maxAverageMarks = Math.max(...Object.values(averageMarksByEmployee));

console.log("Maximum average marks:", maxAverageMarks);
