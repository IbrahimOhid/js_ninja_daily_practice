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
// const bookList = [
//     {
//         author: 'ibrahim',
//         bookName: ['web design'],
//         year: [2018]
//     },
//     {
//         author: 'mohammad',
//         bookName: ['javascript'],
//         year: [2020]
//     },
//     {
//         author: 'ohid',
//         bookName: ['HTML'],
//         year: [2021]
//     },
//     {
//         author: 'mobarak',
//         bookName: ['CSS'],
//         year: [2024]
//     }
// ]

// const AllBookName = bookList.reduce((value, book)=>{
//     // return [...value, ...book.bookName]
//     return [...value, ...book.year]
    
// }, [])
// console.log(AllBookName);

// reduce example name finding💛
// const userName = ['rahim', 'ohid', 'rahim', 'mohammad', 'ohid', 'hosne', 'rafiya', 'rifa', 'kawser', 'rifa'];

// const allUserName = userName.reduce((autoName, uniqueName)=>{
//     if(uniqueName in autoName){
//         autoName[uniqueName] = autoName[uniqueName] + 1
//     }else{
//         autoName[uniqueName] = 1;
//     }
//     return autoName;
// },{});
// console.log(allUserName);

// reduce example object key value matching 💛
//find{
//   '21': [ { name: 'rifa', age: 21 } ],
//   '25': [ { name: 'ibrahim', age: 25 } ],
//   '27': [ { name: 'mohammad', age: 27 }, { name: 'ohid', age: 27 } ]
// }

// const people = [
//     {name:'mohammad', age: 27},
//     {name: 'ibrahim', age: 25},
//     {name: 'ohid', age: 27},
//     {name: 'rifa', age: 21}
// ]

// const uniqueAge = people.reduce((acc, curr)=>{
//     const newAge = curr.age;
//     if(newAge in acc){
//         acc[newAge].push(curr);
//     }else{
//         acc[newAge] = [curr]
//     }
//     return acc;
// }, {})
// console.log(uniqueAge);

// 💛
//find{
//   '21': [ { name: 'rifa', age: 21 } ],
//   '25': [ { name: 'ibrahim', age: 25 } ],
//   '27': [ { name: 'mohammad', age: 27 }, { name: 'ohid', age: 27 } ]
// }
// const people = [
//     {name:'mohammad', age: 27},
//     {name: 'ibrahim', age: 25},
//     {name: 'ohid', age: 27},
//     {name: 'rifa', age: 21}
// ]

// function groupBy(obj, property){
//     const newAge = obj.reduce((arr, curr)=>{
//         const peopleAge = curr[property];
//         if(peopleAge in arr){
//             arr[peopleAge].push(curr)
//         }
//         else{
//             arr[peopleAge] = [curr]
//         }
//         return arr;
//     }, {});
//     return newAge;
// }
// console.log(groupBy(people, 'age'));

// REDUCE BEST PRACTICE 💛💛💛

// implementing sum 💚

// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.reduce((acc, cur)=>{
//     console.log(`Acc - ${acc}, Cur ${cur}`);
//     return acc + cur;
// })
// console.log(result);

// const num = [1, 2, 3, 4, 5];
// const sum = num.reduce((acc, cur)=>{
//     console.log(`Acc- ${acc}, Curr- ${cur}`);
//     return acc + cur;
// },5)
// console.log(sum);

// Array flat method 💚
// const nestedArray = [[1], 2, [3,4], [5,6,7], 8, 9, [10]];
// console.log(nestedArray.flat());

// reduce method 💚
// const nestedArray1 = [[11,12, 13], 14, 15, [16], [17, 18], 19, [20]];
// const array = nestedArray1.reduce((acc, cur)=>{
//     return acc.concat(cur);
// }, [])
// console.log(array);

// reduce number value method 💚

// const num = [1,2,3,4,5];
// const result = num.reduce((acc, cur)=>{
//     return acc.concat(cur * 2)
// }, [])
// console.log(result);

// frequency checker / vote checker 💚

// const vote = ['java', 'php', 'javascript', 'php', 'javascript', 'java'];
// const voteResult = vote.reduce((acc, cur)=>{
//     if(acc[cur]){
//         acc[cur]++
//     }else{
//         acc[cur] = 1;
//     }
//     return acc;
// },{})
// console.log(voteResult);

// discount product 💚
const  products = [
    {name: 'T-shirt', price: 300},
    {name: 'Pant', price: 400},
    {name: 'shirt', price: 90},
    {name: 'shoe', price: 80},
    {name: 'pumaShoe', price: 800},
]

const filterProduct = products.filter(product => product.price >= 100);
console.log(filterProduct)
const discountProduct = filterProduct.map(product => {
    product.price = product.price / 2;
    return product;
})
console.log(discountProduct);

// forEach multiply💚
const numArr = [1, 3, 5, 8];
const count = [];
const result = numArr.forEach((elm)=>{
  count.push(elm ** 2);
})
console.log(count)