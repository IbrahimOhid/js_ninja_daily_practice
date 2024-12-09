// const profile = {
//     name: 'ibrahim',
//     getInfo(){
//         return `${this.name} - ${this.age}`
//     }
// }
// console.log(profile.name);

// Object.defineProperty(profile, '_age',{
//     value: 28,
//     configurable: false,
//     writable: false,
//     enumerable: false
// })
// console.log(profile._age);
// profile._age = 13;
// console.log(profile._age);

// constructor function 💚💚💚
function profile(name, age){
    this.name = name,
    this.age = age,
    this.userInfo = function(){
        return `${this.name} - ${this.age}`
    }
}

const ibrahim = new profile('ibrahim', 27);
const jisan = new profile('jisan', 25);
console.log(ibrahim);
console.log(jisan);
console.log(ibrahim.userInfo());
console.log(jisan.userInfo());

// string literal
const str = 'samim'
console.log(str);

// string literal constructor
const strA = new String('samim')
console.log(strA);
console.log(strA.length);
console.log(strA.toLocaleUpperCase());

// array
const arrC = new Array(1,2,3,4)
console.log(arrC.length);
console.log(arrC);

// object
const nameInfo = new Object({
    name1: 'ibrahim',
    name2: 'ohid'
})
console.log(nameInfo);
console.log(nameInfo.name1);
console.log(nameInfo.name2);