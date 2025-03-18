// Array Destructuring in JS ⤵

// const [tomato, banana, orange] = ['🍅', '🍌', '🍊'];
// console.log(tomato);
// console.log(orange);

// const [musrome, banana = '🍌'] = ['🍄']
// console.log(musrome);
// console.log(banana);

const [apple, , orange] = ['🍅','🍌','🍊']
console.log(apple);
console.log(orange);

// const user = ['rahim', 'karim', 'mobin', 'ibrahim', ['jisan', 'firuz', 'tiya']];
// console.log(user[4][1]);

// const [r, k, m, i, [j, f, t]] = user
// console.log(r);
// console.log(m);
// console.log(j);


// ... rest Parameter 💛💛
const [r, f, ...rest] = ['rahim', 'fahim', 'ibrahim', 'mahir', 'jisan'];
console.log(r);
console.log(rest);
console.log(rest[1]);


// Destructure use Cases 💛💛
let sad = '😭';
let happy = '😊';

 [happy, sad] = [sad, happy];
 console.log(happy, sad);

 let isSkilled = true;
 let notSkilled = false;

[notSkilled, isSkilled]  = [isSkilled, notSkilled];
console.log(notSkilled, isSkilled);

// ... spread Operator 💛💛

const friendName = ['Hablu', 'Bablu', 'Dablu'];
const tiktoker = ['alex sabuj', 'price mamun', 'kala mia'];

const result = [...friendName, ...tiktoker];
console.log(result);

let nums = [1,2,3,4];
console.log(nums.length);

nums.length = 5;
console.log(nums.length);


// create, update, remove, access method 💛💛💛

// concat 💛
const num1 = [1,2,3];
const num2 = [4,5,6];
const marged = num1.concat(num2);
console.log(marged);

const num3 = [2,3,4,5];
const num4 = [6, 7, 8, 9];
const num5 = [10, 11, 12, 13];
console.log(num3.concat(num5, num4));
