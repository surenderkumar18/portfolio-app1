// Using union and intersection types together
type Employee = {
  id: number;
  name: string;
};

type Manager = {
  id: number;
  name: string;
  department: string;
};

type EmployeeOrManager = Employee | Manager;

type EmployeeAndManager = Employee & Manager;

const employee: EmployeeOrManager = { id: 1, name: "John" };
const manager: EmployeeOrManager = { id: 2, name: "Alice", department: "IT" };

const employeeAndManager: EmployeeAndManager = {
  id: 3,
  name: "Bob",
  department: "HR",
};
