// understanding function

// function avoid the code repetition
function userName(firstName, lastName){
    return `${firstName} ${lastName}`
}
console.log(userName('Mohammad', 'Ibrahim'));;

function profile(fName = 'hosne', lName = 'karim'){
    return `${fName} ${lName}`
}
console.log(profile(undefined, 'mobarak'));

// loop inside function
let userProfile = ['mohammad', 'ibrahim', 'ohid'];
function allUser(nameValue){
    let userName = '';
    for(let name of nameValue){
        userName += name + ' ';
    }
    return userName;
}
console.log(allUser(userProfile));

// first class function
function calculate(num1, num2, action){
  return  action(num1, num2)
}
console.log(calculate(5,2, sum));
console.log(calculate(5,2, multiply));
console.log(calculate(5,2, square));

function sum(num1, num2){
    return num1 + num2;
}

function multiply(num1, num2){
    return num1 * num2;
}

function square(num1, num2){
    return num1 ** num2
}

// function can be returned another function
function printFullName(firstName){
    return function PrintLastName(lastName){
        return firstName + ' ' + lastName;
    }
}
const fullName = printFullName('mohammad');
console.log(fullName('ibrahim'));
console.log(printFullName('rafiya')('kawser'));

// interview question
// sum(3)(2)
function addNum(num1){
    return function (num2){
        return num1 + num2
    }
    }
    console.log(addNum(3)(2));

// higher order function
//callback function
// lambda function


//statement vs expression

//statement(command)
if(true){

};

switch(true){

};

const a = 5;

function something(){

}

// expression(value)
10
'ibrahim'
null
undefined

// expression can be written in right side of the variable


// evolution of function

// function statement
function addition(num1, num2){
    return num1 + num2;
}
console.log(addition(3, 2));

// function expression
const additions = function(num1, num2){
    return num1 + num2;
}
console.log(additions(10, 2));

// arrow function
const fullUserName = (firstName, lastName) =>{
    return firstName + ' ' + lastName;
}
console.log(fullUserName('mohammad', 'ibrahim'));

// auto return arrow function
const squares = num1 => num1 * num1;
console.log(squares(5));
