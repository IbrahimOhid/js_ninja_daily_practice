// Think in a JavaScript way

// scope

// var x = 20;

// function myFun(){
//     // var x = 10;
//     x = 13;
//     console.log(x);
// }
// myFun();
// console.log(x);

// JavaScript Hoisting

myFun();
function myFun(){
    console.log('I love Javascript');
}

// object create();

const captain = {
    name: 'ibrahim',
    age: 27,
    position: 'Web Engineer'
}
const newPlayer = Object.create(captain);
console.log(newPlayer.name);
