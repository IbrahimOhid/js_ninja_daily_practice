// // async await 💛💛💛

// function one(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       resolve(1);
//     }, 2000);
//   })
//   }

//   function two(){
//     return new Promise((resolve, reject)=>{
//       setTimeout(() => {
//         resolve(2);
//       }, 2000);
//     })
//     }

//     function three(){
//       return new Promise((resolve, reject)=>{
//         setTimeout(() => {
//           reject('error');
//         }, 2000);
//       })
//       }

//  async function run() {
//  try{
//   const out1 = await one();
//  const out2 = await two();
//  const out3 = await three();
//  console.log(out1, out2, out3);
//  }
//  catch(err){
//   console.log(err);
//  }
//  }
//  run();

//  function four(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       resolve(4)
//     }, 2000);
//   })
//  };

//  function five(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       resolve(5)
//     }, 2000);
//   })
//  };

//  function six(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       resolve(6)
//     }, 2000);
//   })
//  };

//  async function allInput() {
//  try{
//   const outFour = await four();
//   const outFive= await five();
//   const outSix = await six();
//   //console.log(outFour, outFive, outSix);
//   return [outFour, outFive, outSix]
//  }
//  catch(err){
//   console.log(err);
//  }
//  }

// (async function(){
//   console.log(await allInput())
// })();

// Asynchronous practice 💚💚💚
// function getValue(){
//   var x;
//   setTimeout(() => {
//    x = 12;
//   }, 2000);
//   return x;
// }
// const value = getValue();
// console.log(value);

// Callback practice 💚💚💚
// function getVar(){
//   setTimeout(() => {
//     console.log('A Function that takes some time');
//   }, 3000);
// }

// function anotherFun(){
//   console.log('Another Function');
// }

// console.log(getVar());
// console.log(anotherFun());

// function myName(Callback){
//   setTimeout(() => {
//     console.log('Ibrahim');
//     Callback()
//   }, 3000);
// }

// function broName(){
//   console.log("Ebnol");
// }

// myName(broName);

// function num(a,b, callback){
//   setTimeout(() => {
//     console.log(a+b);
//     callback()
//   }, 5000);
// }

// function info(){
//   console.log('Another Function');
// }
// num(15, 3, info);

// promise practice 💛💛💛
// function marryMe() {
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       //resolve('Success');
//       reject('No')
//     }, 3000);
//   })
// }

// marryMe()
//   .then((data) => {
//     console.log(data);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// async & await

// function newPromise(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       if(true){
//         resolve('Yes');
//       }
//       else{
//         reject("No")
//       }
//     }, 5000);
//   })
// }

// async function result() {
//   const finalResult = await newPromise();
//   console.log(finalResult);
// }
// result();

// function aPromise(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       if(false){
//         reject('Error')
//       }
//       else{
//         resolve('Show Data')
//       }
//     }, 3000);
//   })
// }

// async function resultPromise() {
//   try{
//     const data = await aPromise();
//     console.log(data);
//   }
//   catch(err){
//     console.log(err);
//   }
// }
// resultPromise();

// function promiseOne(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       if(true){
//         resolve('Promise 1 Resolved');
//       }
//       else{
//         reject("Promise 1 Failed")
//       }
//     }, 3000);
//   })
// }

// function promiseTwo(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       if(true){
//         resolve("Promise 2 Resolved")
//       }
//       else{
//         reject("Promise 2 Failed")
//       }
//     }, 3000);
//   })
// }

// async function promiseResult() {
//   const data = await Promise.all([promiseOne, promiseTwo]);
//   console.log(data);
// }
// promiseResult();


// function getName(){
//   return new Promise((resolve, reject)=>{
//     resolve('ibrahim')
//   })
// }

// function getAge(name){
//   return new Promise((resolve, reject)=>{
//     if(name === 'ibrahim'){
//       resolve(21);
//     }
//     else{
//       reject('Data Not Found');
//     }
//   })
// }

// async function result() {
//   const name = await getName();
//   const age = await getAge(name);
//   console.log('My Name is ' + name + ' i am ' + age + ' old');
// }
// result();

// function myName(){
//   return new Promise((resolve, reject)=>{
//     setTimeout(() => {
//       resolve('iBRAHIM');
//     }, 3000);
//   })
// }

// async function nameResult() {
//   const data = await myName();
//   console.log(data);
//   console.log('one..');
// }
// nameResult();


// async function getData(){
//   let url = await fetch('https://jsonplaceholder.typicode.com/users');
//   let data = await url.json();
//   console.log(data);
// }

// async function anotherData() {
//   const data = await getData();
//   console.log('ohid');
// }
// anotherData()



// forEach practice
const users = ['ibrahim', 'rifa', 'rahim', 'ebnol'];
users.forEach((user)=>{
  console.log(user);
});

// map practice
// const numbers = [1, 2, 3, 4, 5];
// const result = numbers.map((num)=> num * 2);
// console.log(result);

// filter practice
const numbers = [5, 2, 1, 10, 11];
const result = numbers.filter((number)=> number > 5);
console.log(result);

const userInfo = [
  {name:'ibrahim', age: 26, profession}
]