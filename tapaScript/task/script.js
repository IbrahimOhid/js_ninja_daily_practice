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
console.log(studentName.length);