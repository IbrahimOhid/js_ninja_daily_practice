// array

const arr = [2, 3, 4];
// last element add
console.log(arr.push(5));
console.log(arr);
// last element remove
console.log(arr.pop());
console.log(arr);
// first element add
console.log(arr.unshift(1));
console.log(arr);
// first element remove
console.log(arr.shift());
console.log(arr);


//slice
const num = ['a', 'b', 'c', 'd', 'e'];
console.log(num.slice(0,3));
console.log(num.slice(2, 5));
console.log(num.slice(-4, -1));

const addNum = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(addNum.slice(-5, -1));
console.log(addNum.slice(-3));


// concat
const numb1 = [1, 2, 3, 4];
console.log(numb1.concat(5, 6, 7, 8, 9));

const number1 = [11, 12, 13];
const number2 = [14, 15, 16];
console.log(number1.concat(number2));

// join

const arrNum = [1, 2, 3, 4, 6];
console.log(arrNum.join('='));
console.log(arrNum.join('-'));

// indexof
const numb = [1, 2, 3, 4, 5];
console.log(numb.indexOf(5));
console.log(numb.indexOf(2));

// lastIndexOf
const numb2 = [1, 5, 3, 4, 5, 6, 7, 8, 6]
console.log(numb2.lastIndexOf(6));

// reverse

const arrs = [1, 2, 3, 4, 5];
console.log(arrs.reverse());