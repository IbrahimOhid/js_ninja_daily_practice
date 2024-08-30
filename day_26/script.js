// Scope 💛
// 1. Global Scope => outside of function or block
// 2. Function Scope => inside of function
// 3. Block Scope => {}

// global scope example 💚
const a = 10;
console.log(a)

// function scope example 💚
function myFun(){
  const b = 20;
  console.log(b)
  console.log(a)
}
myFun()
// block scope example 💚
if(true){
  const c = 30;
  console.log(c);
  console.log(a);
}


// scope chaining 💛
let e = 10;

function func1(){
  let f = 12;
  function func2(){
    let g = 20;
    let f = 40;
    console.log(g);
    console.log(e);
    console.log(f);
  }
  func2()
}
func1()

{
  let x = 5;
  {
    let y = 10;
    {
      let z = 20;
      console.log(z);
      console.log(x);
      console.log(y);
    }
  }
}

// closer scope 💛

function outerFunc(firstName) {
  return function innerFunc(lastName){
    return firstName + ' ' + lastName
  }
}
console.log(outerFunc('mohammad')('ibrahim'));

// gamePlay 💚
// function gamePlay(){
//   let life = 3;
//   return ()=>{
//     life--
//     console.log('my life....', life)
//   }
// }
// let play = gamePlay();
// console.log(play)

// calculate 💚

function calculation(){
  const result = 10 * 3;
  return (num)=>{
   return result + num; 
  }
}
const total = calculation();
console.log(total(10));

// hosting 💛
sum()
function sum(){
  const a = 10;
  const b = 15;
  const c = 20;
  const total = a + b + c;
  console.log(total);
}

// IIFE =>immediately invoked function expression 💛

(function(){
  let num1 = 10;
  let num2 = 20;
  console.log(num1 + num2);
})();