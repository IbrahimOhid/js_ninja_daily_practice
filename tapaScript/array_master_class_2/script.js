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

