// Array Helper Method

//map 💛
//1. it works with in array
//2. return an array with all(?) substitutes
//3. result depends how you manipulate the data
//4. must return form the callback function
//5. does'nt muted the original data

//const numArr = [1, 2, 3, 4, 5];

// numArr.map(function(elm){
//     console.log(elm); // 1, 2, 3, 4, 5
// })

// const numArr = [1, 2, 3, 4, 5];
// const result = numArr.map(function(ele){
//     return ele * 2;
// })

// const result = numArr.map((elm) => elm * 2)
// console.log(result); // 2, 4, 6, 8, 10

// let arr = [2, 3, 5];
// function getSquare(item){
//     return item * item;
// }
// const newArr = arr.map(getSquare);
// console.log(newArr);

// let num = [2, 5, 10];
// function getMultiply(item){
//     return item * 2;
// }
// const multiplyNum = num.map(getMultiply);
// console.log(multiplyNum);

// let sum = [2, 3, 4, 5];
// const sumValue = sum.map(item => item + item);
// console.log(sumValue);


// filter 💛
//const num = [1, 3, 2, 4, 7, 8, 10];

// const result = num.filter(elm => elm === 2)
// console.log(result);

// const finalNum = num.filter(elmt => elmt % 2 === 0)
// console.log(finalNum);

// find 💛
// const numValue = [1, 3, 4, 6, 9, 8, 10];
// const result = numValue.find(element => element % 2 === 0);
// console.log(result);

//findIndex 💛
// const num = [1, 3, 4, 5, 7, 8, 9];
// const resultValue = num.findIndex(element => element === 8);
// console.log(resultValue);

//some 💛
// const newArr = [1, 2, 3, 4, 5, 7];
// const result = newArr.some(element => element % 2 === 0)
// console.log(result);

//every 💛
const newArr = [2, 4, 6];
const result = newArr.every(element => element % 2 === 0)
console.log(result);


