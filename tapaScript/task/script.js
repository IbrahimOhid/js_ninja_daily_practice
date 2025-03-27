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

// const checkEng = departments.find(department => department.name === 'Engineering').id;
// console.log(checkEng);


// const depId = employees.filter((employee) => {

//     return employee.departmentId === checkEng;

// })
// console.log(depId);

// T-022: Create a new array that combines employee names and department names in the format: "Alice (HR)". 💛💛💛

const depIds = departments.filter(department=> department.id)
console.log(depIds);

const combineEmp = employees.map((employee)=>{
    console.log(depIds.id);
    console.log(employee.departmentId);
   if(employee.departmentId === depIds.id){
    return `${employee.name} (${depIds.name})`
   }else{
    employee
   }
});
console.log(combineEmp);


