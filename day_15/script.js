// string
const str = 'IbrahiM OhiD';

console.log(str.length);
console.log(str.toLocaleLowerCase());
console.log(str.toUpperCase());
const user = 'bangladesh   ';
console.log(user.indexOf('a'));
console.log(user.lastIndexOf('a'));
console.log(user.length);
console.log(user.trim())
console.log(user.includes('ba'));

const text = 'hello world';
console.log(text.slice(0, 5));
console.log(text.slice(3, 8));
console.log(text.slice(-5, -2));

const userText = 'i am mohammad ibrahim';
console.log(userText.split(' '));
const para = 'mohammad';
const para1 = ' ibrahim';
console.log(para.concat(para1));
console.log(para.charAt(3));
console.log(para.charCodeAt(3))

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

// object
const profile = {
    lastName :'ibrahim',
    email : 'ohid@gmail.com',
    age: 27
}

for(let pro in profile){
    console.log(profile[pro])
}

const keyvalue = Object.keys(profile);
console.log(keyvalue)