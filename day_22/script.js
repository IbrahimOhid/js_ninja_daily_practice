// Array Destructuring method
// const userInfo = [undefined, 27, 'web designer'];

// const [firstName = 'ohid', , profession] = userInfo;
// //console.log(firstName, age, profession);
// console.log(firstName, profession);


// object destructuring
// const userProfile = {
//     firstName : 'Mohammad',
//     lastName : 'ibrahim',
//     profession: 'web engineer'
// }
// const {firstName, lastName, profession} = userProfile;
// console.log(firstName, profession);

// rest operator(...)
// using array
// const userName = ['ohid','ibrahim', 'hosne', 'rafiya', 'kawser', 'rifa'];
// const [firstUser, sencondUser, ...anotherName] = userName;
// console.log(firstUser);
// console.log(anotherName);
//using object
// const userdetails = {
//     firstName : 'Mohammad',
//     lastName : 'ibrahim',
//     age: 27,
//     profession: 'web engineer'
// }
// const {lastName, profession, ...allUserInfo} = userdetails;
// console.log(lastName, profession);
// console.log(allUserInfo);


// spread operator(...)
// using object
// const professionInfo = ['ibrahim', 27, 'ohid@gmail.com'];
// const homeInfo = ['ohid', 'vat kawa', ...professionInfo];
// console.log(homeInfo);

// const userdetails = {
//     firstName : 'Mohammad',
//     lastName : 'ibrahim',
//     age: 27,
//     profession: 'web engineer'
// }
// const {firstName, profession, ...info} = userdetails;
// console.log(firstName, profession, info);

// const profile = {
//     firstName : 'ibrahim',
//     age : 27,
//     profession: 'web engineer'
// }

// const newProfile = {
//     sortName : 'Mr',
//     ...profile,
//     address : 'Eidgaon'
// }
// console.log(newProfile);

// destructuring and rest function
function printUser({firstName, age, ...value}){
    console.log(value);
    return `${firstName} ${age}`
}

const userInfo = {
    firstName : 'ibrahim',
    email: 'ohid@gmail.com',
    age : 27
}
console.log(printUser(userInfo));

// null colaceing

// falsy value
// false, 0, '', null, undefined, Nan

let num = 0;
let numResult = num || 20;
console.log(numResult);

let title = '';
let titleResult = title || 'ohid';
console.log(titleResult);

// null & undefined are consider falsy value
let number = 0;
let resultNum = number ?? 22;
console.log(resultNum);
let text = '';
let textResult = text ?? 'ibrahim';
console.log(textResult);

console.log(true ?? false);
console.log(false ?? true);

// nested data destructuring 
const user = {
    name: 'ohid',
    id : 2024,
    // education: {
    //     degree : 'Bsc',
            // college:{
            //     name : 'uctc'
            // }
    // }
}

const {education: {degree} = {degree: 'Bsc'}} = user;
console.log(degree);

