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
// const newArr = [2, 4, 6];
// const result = newArr.every(element => element % 2 === 0)
// console.log(result);

// reduce 💛
// const numArr = [1, 2, 3, 4];

// const result = numArr.reduce((num1, num2) => {
//     console.log(num1, num2);
//     return num1 + num2;
// })
// num1 = 1, num2 = 2, result = 3
// num1 = 3 , num2 = 3, result = 6
// num1 = 6, num2 = 4, result = 10
// console.log(result);

// const newArr = [1, 2, 3, 4];

// const sum = newArr.reduce((num1, num2) => {
//     console.log(num1, num2);
//     return num1 + num2;
// }, 5)
// num1 = 5, num2 = 1, sum = 6;
// num1 = 6, num2 = 2, sum = 8;
// num1 = 8, num2 = 3, sum = 11;
// num1 = 11, num2 = 4, sum = 15;

// console.log(sum);

// reduce example shopping cart 💛
// const productList = [
//     {
//         productName: 'T-Shirt',
//         price: 300
//     },
//     {
//         productName: 'Pant',
//         price: 500
//     },
//     {
//         productName: 'Shirt',
//         price: 450
//     }
// ]

// const totalPrice = productList.reduce((fixedValue, item)=>{
//     return fixedValue + item.price;
// }, 0)
// console.log(totalPrice);

// reduce example book list💛
const bookList = [
    {
        author: 'ibrahim',
        bookName: ['web design'],
        year: [2018]
    },
    {
        author: 'mohammad',
        bookName: ['javascript'],
        year: [2020]
    },
    {
        author: 'ohid',
        bookName: ['HTML'],
        year: [2021]
    },
    {
        author: 'mobarak',
        bookName: ['CSS'],
        year: [2024]
    }
]

const AllBookName = bookList.reduce((value, book)=>{
    // return [...value, ...book.bookName]
    return [...value, ...book.year]
    
}, [])
console.log(AllBookName);

// reduce example name finding💛
const userName = ['rahim', 'ohid', 'rahim', 'mohammad', 'ohid', 'hosne', 'rafiya', 'rifa', 'kawser', 'rifa'];

const allUserName = userName.reduce((autoName, uniqueName)=>{
    if(uniqueName in autoName){
        autoName[uniqueName] = autoName[uniqueName] + 1
    }else{
        autoName[uniqueName] = 1;
    }
    return autoName;
},{});
console.log(allUserName);