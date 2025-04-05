//  T-001: Create an array of 5 elements using the Array Constructor. 💛💛💛

const myArray = new Array('Rahim', 'Karim', 'ohid', 'ibrahim', 'mohammad');
console.log(myArray);

//  T-002: Create an array of 3 empty slots. 💛💛💛

const myEmpty = new Array(3);
console.log(myEmpty);

// T-003: Create an array of 6 elements using the Array literals and access the fourth element in the array using its length property. 💛💛💛

const myNum = [1, 2, 3, 4, 5, 6];
const newNum = myNum[myNum.length - 3];
console.log(newNum);

// T-004: Use the for loop on the above array to print elements in the odd index. 💛💛💛

const yourNum = [1, 2, 3, 4, 5, 6];

for (let i = 1; i < yourNum.length; i += 2) {
    console.log(yourNum[i]);
}

//  T-005: Add one element at the front and the end of an array. 💛💛💛

const fruit = ['Banana', 'Potato', 'Orange'];
const unshiftFruit = fruit.unshift('Apple');
const pushFruit = fruit.push('Grape');
console.log(fruit);

//  T-006: Remove an element from the front and the end of an array. 💛💛💛

const game = ['Cricket', 'Racket', 'Tennis'];
const shiftGame = game.shift();
const popGame = game.pop();
console.log(game);

// T-007: Create an array containing the name of your favourite foods(10 foods). Destructure the 6th food element from the array using destructuring. 💛💛💛

const favoriteFood = ['🍊', '🥦', '🍅', '🍄', '🍆', '🍌', '🌶', '🌽', '🥕', '🍉'];
const [, , , , , banana] = favoriteFood;
console.log(banana);

// T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.

const favFood = ['🍊', '🥦', '🍅', '🍄', '🍆', '🍌', '🌶', '🌽', '🥕', '🍉'];
const [orange, Cauliflower, ...fruits] = favFood;
console.log(fruits);

// T-009: Clone an Array(Shallow cloning) 💛💛💛

const userName = ['rahim', 'karim', 'ohid'];
console.log(userName.slice());
console.log(userName.concat());

// T-010: Empty an array using its length property 💛💛💛

const studentName = ['habul', 'babul', 'rabul', 'karim'];
console.log(studentName.length = 0);
console.log(studentName);

// T-011: Create an array of 10 elements(number 1 to 10). Resize the array to length 6 once you find the number 5 in that array. Hint: Use for-loop. 💛💛💛

const idNum = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < idNum.length; i++) {
    if (idNum[i] === 5) {
        idNum.length = 6
        console.log(idNum);
    }
}

// T-012: Create an Array of 10 elements. Use the splice() method to empty the array. 💛💛💛

const newArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(newArr.splice(0, newArr.length));
console.log(newArr);

// T-013: Create an Array of 10 elements. You can empty the array in multiple ways: using the length property, using the pop() method, using the shift() method, setting the array with [], or the splice() method. Which among these methods are most efficient and why? 💛💛💛

let againArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const emptyArrL = againArr.length = 0;
// const emptyArrPop = againArr.pop(againArr.length = 0);
// const emptyArrShift = againArr.shift(againArr.length = 0);
// const emptyArrSplice = againArr.splice(0, againArr.length);
againArr = []
console.log(againArr);

// T-014: What happens when you concatenate two empty arrays? 💛💛💛

const arr1 = [];
const arr2 = [];
console.log(arr1.concat(arr2));

// T-015: How can you check if a value is partially matching with any of the elements of an Array? 💛💛💛

const food = ['apple', 'orange', 'banana', 'grape'];

const matchFood = food.find((fruit) => fruit.includes('app'));
console.log(matchFood);

// const matchFood  = food.filter((fruit)=> fruit.includes('app'));
// console.log(matchFood);

// const matchFood  = food.some((fruit)=> fruit.includes('app'));
// console.log(matchFood);

// T-016: What is the difference between the slice() and splice() methods? 💛💛💛

// slice immutable
const sliceArr = [1, 2, 3, 4];
console.log(sliceArr.slice(1, 3));
console.log(sliceArr);

// splice mutable
const spliceArr = [1, 2, 3, 4];
console.log(spliceArr.splice(1, 2));
console.log(spliceArr);

// T-017: Create an Array of alphanumeric strings. Sort the elements in both ascending and descending orders. You must be doing this in an immutable way such that the source array never gets modified. 💛💛💛

const alphanumericArray = ['abc123', 'def789', 'xyz456', 'user1', 'pass42'];
// Immutable ascending sort (using spread operator)
console.log([...alphanumericArray].sort());
// Immutable descending sort
console.log(alphanumericArray.sort().reverse());

// T-018: Can you give examples of sparse and dense arrays? 💛💛💛

/// ????

// T-019: Give a practical usages of the .fill() method 💛💛💛

const color = ['red', 'blue', 'yellow', 'pink'];
console.log(color.fill('orange', 2, 4));

// T-020: How to convert an array to a string? 💛💛💛

const conStr = [1, 2, 3, 4, 5];
console.log(conStr.toString());

const allStr = ['apple', 'banana', 'orange', 'grape'];
console.log(allStr.toString());

// 💛💛💛💛💛💛💛💛💛💛
const employees = [
    { id: 1, name: "Alice", departmentId: 1, salary: 5000 },
    { id: 2, name: "Bob", departmentId: 2, salary: 7000 },
    { id: 3, name: "Charlie", departmentId: 3, salary: 4500 },
    { id: 4, name: "Diana", departmentId: 1, salary: 5500 },
    { id: 5, name: "Edward", departmentId: 2, salary: 8000 },
    { id: 6, name: "Fiona", departmentId: 4, salary: 6000 },
    { id: 7, name: "George", departmentId: 3, salary: 5200 },
    { id: 8, name: "Helen", departmentId: 4, salary: 7200 },
    { id: 9, name: "Ian", departmentId: 2, salary: 4800 },
    { id: 10, name: "Jane", departmentId: 1, salary: 5100 },
];

const departments = [
    { id: 1, name: "HR" },
    { id: 2, name: "Engineering" },
    { id: 3, name: "Marketing" },
    { id: 4, name: "Sales" },
];

// T-021: Can you filter employees who work in the "Engineering" department? 💛💛💛💛

const employeeDep = employees.filter((employee) => {
    const checkEng = departments.find(dep => dep.name === 'Engineering').id;
    return employee.departmentId === checkEng;
});
console.log(employeeDep);

// T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)". 💛💛💛

const combineEmp = employees.map((employee) => {
    const departmentId = departments.find(dep => dep.id === employee.departmentId);
    return `${employee.name} (${departmentId.name})`;
})
console.log(combineEmp);

// T-023: Find the highest salary among employees. 💛💛💛

const highSalary = employees.reduce((max, employeeSalary) => {
    return max > employeeSalary.salary ? max : employeeSalary.salary;
}, 0)
console.log(highSalary);

// T-024: Check if there is at least one employee in the "Sales" department. 💛💛💛

const salesEmp = employees.filter((employee) => {
    const depSales = departments.find(depName => depName.name === 'Sales').id;
    return employee.departmentId === depSales;
});
console.log(salesEmp);

// T-025: Write a function to filter employees earning more than 6000. 💛💛💛

const highEarning = employees.filter(employee => employee.salary > 6000);
console.log(highEarning);

// T-026: Create an array of employee names only. 💛💛💛

const employeeName = employees.map(employee => employee.name);
console.log(employeeName);

// T-027: Calculate the total salary of all employees using 💛💛💛

const totalSalary = employees.reduce((acc, curr) => {
    return acc + curr.salary;
}, 0);
console.log(totalSalary);

// T-028: Is there any employee earning less than 5000? 💛💛💛

const lessSalary = employees.find((employee) => {
    return employee.salary < 5000;
});
console.log(lessSalary);

// T-029: Find the first employee who earns exactly 5100. 💛💛💛

const exactSalary = employees.find((employee) => {
    return employee.salary === 5100;
});
console.log(exactSalary);

// T-030: Find the last employee in the "HR" department. 💛💛💛

const lastHrEmployee = employees.filter((employee) => {
    const dep = departments.find((dept) => dept.name === 'HR').id;
    return employee.departmentId === dep;
});
console.log(lastHrEmployee[lastHrEmployee.length - 1]);


// T-031: Find the first employee in the "Marketing" department. 💛💛💛

const firstMarketingEmp = employees.filter((employee) => {
    const dep = departments.find((dept) => dept.name === 'Marketing').id;
    return employee.departmentId === dep;
});
console.log(firstMarketingEmp[0]);

//  T-032: Check if all employees earn more than 4000.💛💛💛

const earnMore = employees.every((employee) => {
    return employee.salary > 4000;
});
console.log(earnMore);

//  T-033: Find the first employee in the "Sales" department. 💛💛💛

const firstSales = employees.filter((employee) => {
    const dep = departments.find(dep => dep.name === 'Sales').id;
    return employee.departmentId === dep;
});
console.log(firstSales[0]);

// T-034: Verify if all employees belong to a department listed in the departments array. 💛💛💛

const verifyEmp = employees.every((employee) => {
    const dep = departments.map(dep => dep.id);
    return dep.includes(employee.departmentId);
});
console.log(verifyEmp);

// T-035: Log each employee's name and department name to the console. 💛💛💛
// 🛑🛑🛑🛑🛑

// T-036: Extract all employee names into a single array. 💛💛💛

const extractAllEmployee = employees.map((employee) => {
    return employee.name;
});
console.log(extractAllEmployee);

// T-037: Increment each employee's salary by 10% 💛💛💛

const incrementSalary = employees.map((employee) => {
    return employee.salary + (employee.salary / 100) * 10;
});
console.log(incrementSalary);

// T-038: Assume each employee can have multiple skills. Create an array of employee skills and flatten them. Example: [{name: "Alice", skills: ["Excel", "Management"]}, ...]. 💛💛💛

const employees1 = [
    { id: 1, name: "Alice", departmentId: 1, salary: 5000, skills: ["Excel", "Management"] },
    { id: 2, name: "Bob", departmentId: 2, salary: 7000, skills: ["JavaScript", "React"] },
    { id: 3, name: "Charlie", departmentId: 3, salary: 4500, skills: ["Python", "Data Analysis"] },
    { id: 4, name: "Diana", departmentId: 1, salary: 5500, skills: ["Management", "Communication"] },
    { id: 5, name: "Edward", departmentId: 2, salary: 8000, skills: ["Node.js", "AWS"] },
    { id: 6, name: "Fiona", departmentId: 4, salary: 6000, skills: ["Java", "Spring"] },
    { id: 7, name: "George", departmentId: 3, salary: 5200, skills: ["SQL", "Database"] },
    { id: 8, name: "Helen", departmentId: 4, salary: 7200, skills: ["Angular", "TypeScript"] },
    { id: 9, name: "Ian", departmentId: 2, salary: 4800, skills: ["HTML", "CSS"] },
    { id: 10, name: "Jane", departmentId: 1, salary: 5100, skills: ["Project Management", "Agile"] },
  ];

const multipleSkill = employees1.flatMap((employee)=>{
    return employee.skills;
});
console.log(multipleSkill);

// T-039: Find the total salary of all employees working in the "Engineering" department. 💛💛💛

const engDep = departments.find(dep => dep.name === 'Engineering').id;
const engineeringEmployees = employees.filter((employee)=>{
   return employee.departmentId === engDep;
});
const totalEngSalary = engineeringEmployees.reduce((acc, curr)=>{
    return acc + curr.salary;
}, 0);
console.log(totalEngSalary);

// T-040: Check if there is any department where all employees earn more than 5000. 💛💛💛

const allDepartment = employees.filter((employee)=> employee.salary > 5000);
console.log(allDepartment);

//  T-041: Assume each employee has a projects array (e.g., { id: 1, name: "Alice", projects: ["Project A", "Project B"] }). Find the total number of unique projects being handled across all employees. 💛💛💛

const employees2 = [
    { id: 1, name: "Alice", projects: ["Project A", "Project B"] },
    { id: 2, name: "Bob", projects: ["Project B", "Project C"] },
    { id: 3, name: "Charlie", projects: ["Project A", "Project D"] },
    { id: 4, name: "Diana", projects: ["Project C"] },
    { id: 5, name: "Edward", projects: ["Project E", "Project F"] },
  ];

  const projectArr = employees2.flatMap(employee => employee.projects);
  const uniqueProjects = [...new Set(projectArr)];
  console.log(uniqueProjects.length);

  // T-042: For each employee, find their department name and return an array of employee names with their department names. 💛💛💛

  const depInfo = departments.reduce((acc, curr)=>{
    acc[curr.id] = curr.name;
    return acc;
  }, {});
  console.log(depInfo);

  const employeesWithDep = employees.map(employee => ({
    name: employee.name,
    department: depInfo[employee.departmentId]
  }))
  console.log(employeesWithDep);

  // T-043: Get a list of names of employees earning more than 6000. 💛💛💛

  const earnMore6000 = employees.filter(employee => employee.salary > 6000)
                                .map(employee => employee.name)
  console.log(earnMore6000);