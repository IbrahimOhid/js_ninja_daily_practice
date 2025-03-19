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

// join 💛
const fullName = ['Mohammad', 'Ibrahim', 'Ohid'];
const joining = fullName.join(' ');
console.log(joining);

// fill 💛
const fruit = ['banana', 'orange', 'potato', 'grape'];
// const fillFruit = fruit.fill('mango');
// console.log(fillFruit);
const againFill = fruit.fill('tomato',2,4);
console.log(againFill);

// includes 💛
const userInfo = ['rahim', 'korim', 'fahim', 'mahim', 'korim', 'ahmed', 'babul', 'ahmed'];
console.log(userInfo.includes('rahim'));

console.log(userInfo.indexOf('korim'));
console.log(userInfo.lastIndexOf('korim'));
console.log(userInfo.indexOf('ahmed'));
console.log(userInfo.lastIndexOf('ahmed'));

// reverse 💛
const laptop = ['dell', 'hp', 'acer', 'Lenovo'];
console.log(laptop.reverse());

// sort 💛
const number = [3, 20, 223, 100, 2, 5, 1, 99, 10938];

// const resultNum = number.sort(function(a,b){return a - b});
const resultNum = number.sort(function(a,b){return b - a});
console.log(resultNum);

// splice 💛
const names = ['habul', 'kabul', 'babul', 'rahul', 'dahul'];
const resultName = names.splice(1,0,'rahim');
console.log(names);

const spliceName = ['potato', 'orange', 'banana', 'mango', 'papaya'];
const spliceResult = spliceName.splice(2, 2, 'grape');
console.log(spliceResult);
console.log(spliceName);

console.log(spliceName.length = 0);
console.log(spliceName);

// at 💛
const newName = ['ibrhim', 'rahim', 'karim', 'mohammad', 'ohid', 'rafiya'];
console.log(newName.at(3));
console.log(newName.at(-5));

// flat 💛
const allNum = [1, 2, 3, [4, [5, 6, [7, 8, [9, 10]]]]];
console.log(allNum.flat(Infinity));

// toReversed 💛
const num11 = [11, 12, 13, 14, 15];
console.log(num11.toReversed());

// toSorted 💛
const month = ['jan', 'feb', 'march', 'april'];
console.log(month.toSorted());

// toSpliced 💛
const playName = ['cricket', 'football', 'boliball', 'racket'];
console.log(playName.toSpliced(1,1,'caram'));
