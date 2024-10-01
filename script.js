// let num = 1;
// while(num <= 10){
//     console.log(num);
//     num += 2;
// }

// let num = 1

// while(num <= 20) {
// if(num % 4 === 0){
// console.log(num);
// }
// num++;
// }

// let num = 100;
// while(num < 150) {
// console.log(num + 1);
// num--;
// }

// let num = 1

// while(num <= 100) {
// if(num % 2 === 0){
// console.log(num);
// }
// num++;
// }

// for(let i = 1; i <= 100; i++){
//     if(i % 2 === 0){
//         console.log(i);
//     }
// }



let n = 3;
for(let i = 1; i <= n; i++){
    for(let j = 1; j <= 3; j++){
        console.log(i, j);
    }
    console.log(i);
}

function repeat(n){
    for(let i = 1; i <= n; i++){
        const value = ['$']
        for(let j = 1; j <= i; j++){
            console.log(i, j);
        }
        console.log(i);
    }
}
repeat(3);

const arr = [1, 14, 2, 100, 3, 6];
console.log(arr.sort((a, b)=> {
   return a - b;
}));
console.log(arr.sort((a, b) => {
    return b - a;
}));

const laptop = [
    {brand: 'dell', year: 2022},
    {brand: 'zxer', year: 1971},
    {brand: 'acer', year: 2001}
]
// console.log(laptop.sort((a, b)=>{
//     return a.year - b.year;
// }));

