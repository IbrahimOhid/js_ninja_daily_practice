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

const user = ['rahim', 'karim', 'mobin', 'ibrahim', ['jisan', 'riya', 'tiya']];
console.log(user[4][1]);