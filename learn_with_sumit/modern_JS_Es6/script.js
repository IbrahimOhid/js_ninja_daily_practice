// ES6 fat Arrow Function 💛💛💛

function number() {
    return 10;
}
console.log(number());

const num = () => 10;
console.log(num());

// Truthy / Falsy values 💛💛💛

// falsy value ⤵

// "", NaN, undefined, false, 0, null

// ftp://192.168.0.102:2221

// Ternary Operator 💛💛💛

const age = 3;

const result = (age >= 18) ? 'Adult' : 'Child';
console.log(result);

// Array Find

const numbers = [1, 2, 3, 4, 11, 20, 38];

const results = numbers.find(num => num > 4);
console.log(results);


// findIndex

const userName = ['rahim', 'karim', 'mohammad', 'aziz', 'kolim'];
const userIndex = userName.findIndex(user => user === 'kolim');
console.log(userIndex);

// filter

const allNum = [1, 2, 3, 4, 5, 6];
const filterResult = allNum.filter(num => num > 2);
console.log(filterResult);

// slice 

const numb = [1, 2, 3, 4, 5];
const sliceResult = numb.slice(1, 3);
console.log(sliceResult);

// splice

const spliceArr = [1, 2, 3, 4, 5, 6, 7, 8];
const spliceResult = spliceArr.splice(2, 3, 1, 2, 3);
console.log(spliceArr);

// map

const mapNum = [2, 3, 4, 5, 10];

const mapResult = mapNum.map(num => num * 2);
console.log(mapResult);

// reduce

const reduceNum = [1, 2, 3, 4, 5];
const reduceResult = reduceNum.reduce((acc, curr) => {
    return acc + curr;

});
console.log(reduceResult);

// for in use only Object

const userDetails = {
    name: 'ibrahim',
    age: 28,
    isSkilled: true
}

for (property in userDetails) {
    console.log(property);
}

// function default parameter

function defaultNum(x = 10) {
    return x;
}
console.log(defaultNum());

// spread operator

const spreadNum = [1, 2, 3];

const resultSpread = [...spreadNum, 4, 5, 6];
console.log(resultSpread);

const a = [...spreadNum]; // exact array copy 
const resultA = a.push(4)
console.log(a);
console.log(spreadNum)

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
console.log(...num1, ...num2)

const allUserName = ['rahim', 'karim',];
const allName = ['Ibrahim', ...allUserName, 'mohammad'];
console.log(allName)

// object spread operator

var myObj1 = {
    x: 1,
    y: 2
}

var myObj2 = {
    a: 1,
    b: 2
}
console.log({ ...myObj1, ...myObj2 });

// rest parameter

function newNum(a, b, ...num) {
    console.log(a)
    console.log(b)
    console.log(num)
}

newNum(1, 2, 3, 4, 5)

// Destructuring

// object Destructuring 

const userDetail = {
    name: 'ibrahim',
    ages: 28,
    isSkilled: true
}

const { ages, name: title } = userDetail;
console.log(ages, title);

const university = {
    name: 'UCTC',
    education: {
        degree: 'Bsc in Mechanical Engineering',
        year: 2024,
        subject: {
            sub: 'ME'
        }
    }
}

const { education: { subject: sub } } = university;
console.log(sub);


// array Destructuring 

const arrayDe = [1, 2, 3, 4, 5];

const [e, f, ...nums] = arrayDe;
console.log(nums);


const [, g,,, h] = arrayDe;
console.log(h);

const arrDes = [1, 2, 3, [4, 500, 200, 100], 4, 5, 6];

const [,,,[,p,,q],,r] = arrDes;
console.log(r);
console.log(p);
console.log(q);

var u = 1
var v = 2

var [u, v] = [v, u];
console.log(u);
console.log(v);


// template literals

const pi = 3.14;
const myAge = 28;

console.log(`This is ${pi}. My Age is ${myAge}`);