// Think in a JavaScript way

// scope

var x = 20;

function myFun(){
    // var x = 10;
    x = 13;
    console.log(x);
}
myFun();
console.log(x);