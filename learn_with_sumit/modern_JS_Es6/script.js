// ES6 fat Arrow Function 💛💛💛

function number(){
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
const reduceResult = reduceNum.reduce((acc, curr)=>{
  return  acc + curr;
  
});
console.log(reduceResult);
