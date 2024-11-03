// factorial
function factorial(num){
    let total = 1;
    for(let i = 1; i <= num; i++){
        total*= i
    }
    return total;
}
console.log(factorial(5));

// recursion
function recursion(num){
    if(num === 0){
        return 1
    }
    return num * recursion(num - 1);
}
console.log(recursion(5));

// sum all value
// reduce (mandatory)

function sum(arr){
 return arr.reduce((acc, cur)=>{
    console.log(acc);
    console.log(cur);
    return acc+=cur;
 })
 
}
console.log(sum([1, 2, 3, 4, 5]));