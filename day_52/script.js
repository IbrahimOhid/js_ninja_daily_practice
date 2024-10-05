// Asynchronous Programming

function one(){
    setTimeout(()=>{
        console.log('One');
        return 1
    }, 2000)
}

function two(){
    console.log('Two 1 st');
    return 2; 
}

function three(){
    setTimeout(()=>{
        console.log('Three');
        return 1
    }, 2000)
}

console.log(one());
console.log(two());
console.log(three());

// callback patten

function four(fn){
    setTimeout(()=>{
        console.log('Four');
        fn(4)
    }, 2000)
}

    four((num)=>{
        console.log(num);
    })

function five(fn){
    setTimeout(() => {
        console.log('Five');
        fn(5)
    },2000);
}

    five((num)=>{
        console.log(num);
    })



function six(fn){
    setTimeout(() => {
        console.log('Six');
        fn(6);
    }, 2000);
}

 six((num)=>{
        console.log(num);
    })

// callback hell

function seven(sn){
    setTimeout(() => {
        console.log('Seven');
        sn(7)
    }, 2000);
}

function eight(en){
    setTimeout(() => {
        console.log('Eight');
        en(8);
    }, 2000);
}

function nine(nn){
    setTimeout(() => {
        console.log('Nine');
        nn(9)
    }, 2000);
}

seven((num1)=>{
    console.log(num1);
    eight((num2)=>{
        console.log(num1 + num2);
        console.log(num2);
        nine((num3)=>{
            console.log(num1 + num2 + num3);
            console.log(num3);
        })
    })
})


