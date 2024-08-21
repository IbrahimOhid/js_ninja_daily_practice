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