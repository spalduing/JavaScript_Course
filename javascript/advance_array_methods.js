//// Map ////

employee1 = {
  name: "Miguel",
  position: "CTO",
  salary: "90000",
};
employee2 = {
  name: "Rodrigo",
  position: "CTO",
  salary: "2153",
};
employee3 = {
  name: "Camilo",
  position: "Engenier",
  salary: "15",
};
employee4 = {
  name: "Jose",
  position: "5485",
  salary: "90000",
};
employee5 = {
  name: "Angel",
  position: "Watchmen",
  salary: "5",
};
employee6 = {
  name: "Brayan",
  position: "accountant",
  salary: "615",
};
employee7 = {
  name: "Estiven",
  position: "Seller",
  salary: "5",
};
employee8 = {
  name: "Juan",
  position: "Cowboy",
  salary: "4651",
};
employee9 = {
  name: "Ismael",
  position: "Publisher",
  salary: "8",
};

// Array of employees
employees = [
  employee1,
  employee2,
  employee3,
  employee4,
  employee5,
  employee6,
  employee7,
  employee8,
  employee9,
];

// Task, encrease the salary of all employees by 25%

// employees.map(employee => {
//    console.log(employee)
//    employee.salary *= 1.25
// })

// console.log("\n")
// employees.map(employee => {
//     console.log(employee)
// })

// let newSalaryList = employees.map((employee) => employee["salary"] * 1.25); // Here we're returnin each employee salary increeased by 25%
// console.log(newSalaryList);

// console.log(employee1); // The original employee stills havin hes initial salary

// //// using reduce ////

// // Task: To find the total salary of the new increased salaries.

// let finalTotalSalary = newSalaryList.reduce(
//   (totalSalary, currentEmployeeSalary) => totalSalary + currentEmployeeSalary
// );

// console.log(finalTotalSalary);

//// USING FILTER ////
// Task: To find employees who have a salary less than 40000

// let basicEmployees = employees.filter(
//   (employee) => employee["salary"] <= 40000
// );

// console.log(basicEmployees);

//// USING SOME ////
// Task: To find if any employee has salary less than 15000

let isSalLessThan15 = employees.some((employee) => employee["salary"] <= 15000);

console.log(
  "Theres any employee with a salary less than 15000 ? : ",
  isSalLessThan15
);
