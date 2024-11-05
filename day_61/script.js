// // factorial 💚💚💚
// function factorial(num){
//     let total = 1;
//     for(let i = 1; i <= num; i++){
//         total*= i
//     }
//     return total;
// }
// console.log(factorial(5));

// recursion 💚💚💚
// function recursion(num){
//     if(num === 0){
//         return 1
//     }
//     return num * recursion(num - 1);
// }
// console.log(recursion(5));

// // sum all value 💚💚💚
// // reduce (mandatory)
// Reduce Best Practice 💛💛💛💛

// function sum(arr){
//  return arr.reduce((acc, cur)=>{
//     console.log(acc);
//     console.log(cur);
//     return acc+=cur;
//  })

// }
// console.log(sum([1, 2, 3, 4, 5]));

// 💚💚💚
// let arr = [{z:2}, {z:3}, {z:5}];

// function sumArr(inputArr){
//     return inputArr.reduce((acc, curr)=>{
//         console.log(acc);
//         console.log(curr);
//          acc += curr.z;
//          return acc;
//     }, 0)
// }
// console.log(sumArr(arr));

// 💚💚💚
// answer: {total: 6}
// let arr2 = [{a:3}, {a:1}, {a:2}];
// function sumArr2(inputArr2){
//     return inputArr2.reduce((acc, cur)=>{
//         acc.total += cur.a;
//         return acc
//     }, {total: 0})
// }
// console.log(sumArr2(arr2));


// answer: [ 1, 2, 3, 4, 5, 6 ] 💚💚💚
// let numArray = [
//     [1,2],
//     [3],
//     [4],
//     [5,6]
// ].reduce(function (value1, value2){
//     return value1.concat(value2)
// }, [])
// console.log(numArray); 


//AnsWer: { ibrahim: 2, rahim: 1, karim: 2, jisan: 1, ohid: 1, mohammad: 1 } 💚💚💚
let userName = ['ibrahim', 'rahim', 'karim', 'ibrahim', 'jisan', 'ohid', 'karim', 'mohammad'];
let countNames = userName.reduce(function (allName, name){
    if(name in allName){
        allName[name]++;
    }
    else{
        allName[name] = 1;
    }
    return allName;
}, {})
console.log(countNames); 