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
