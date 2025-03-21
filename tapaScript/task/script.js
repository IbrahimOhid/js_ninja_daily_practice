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

for(let i = 1; i < yourNum.length; i+=2){
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

const favoriteFood = ['🍊','🥦','🍅','🍄','🍆','🍌','🌶','🌽','🥕','🍉'];
const [, , , , ,banana] = favoriteFood;
console.log(banana);

 // T-008: Take out the last 8 food items from the above array using the Array destructuring. Hint: rest parameter.

 const favFood = ['🍊','🥦','🍅','🍄','🍆','🍌','🌶','🌽','🥕','🍉'];
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

for(let i = 0; i < idNum.length; i++){
    if(idNum[i] === 5){
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


