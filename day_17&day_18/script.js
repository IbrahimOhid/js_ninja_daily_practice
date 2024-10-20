// object best practice
const userInfo = {
    firstName : 'mohammad',
    lastName: 'ibrahim',
    email: 'ohid@gmail.com',
    fullName(){
        return this.firstName + ' ' + this.lastName;
    }
}
console.log(userInfo.firstName);
console.log(userInfo['lastName']);
console.log(userInfo.email);
console.log(userInfo.fullName());


//dynamically access properties
const myVar = 'email';
console.log(userInfo[myVar]);
const myName = 'firstName';
console.log(userInfo[myName]);

for(let key in userInfo){
    console.log(key);
    console.log(userInfo[key]);
}


// this
//1. inside the function
//2. outside the function

console.log(this);

// plain function call - window object;
const profile ={
    firstName: 'ohid',
    lastName : 'mohammad',
    email: 'idb@gmail.com',
    fullName(){
    console.log(this);
     return   this.firstName + ' ' + this.lastName;
    }
}
console.log(profile.fullName());

function helloThis(){
    console.log(this);
 }
 
 helloThis();

 function unName(){
    this.name = 'ibrahim'
 }
 unName();
 console.log(name);

 const myCustomObj = {
    name: 'ibrahim',
    email: 'ohid888@gmail.com',
    age: 27,
    myName(){
        console.log('my name is ' + this.name);
    }
 }
 myCustomObj.myName();


 const userName = {
    name : 'rahim',
    age: 20,
    newUser: {
        name: 'karim',
        age: 22,
        userFinalName(){
            console.log('my name is ' + this.name);
        }
    }
 }
 userName.newUser.userFinalName();

 const newObj = {
    name : 'babul',
    age: 22,
    anotherObj: {
        name: 'Habul',
        age: 23,
        myName(){
            console.log('my name is ' + this.name);
        }
    }
 }
 newObj.anotherObj.myName();
 newObj.anotherObj.myName.call(newObj)


const ibrahim = {
    name : 'Mohammad Ibrahim',
    dob: 1997,
    age(currentYear){
        console.log(this.name + ' is ' + (currentYear - this.dob) + ' years old');
    }
}
const mobarak = {
    name : 'Hosne Mobarak',
    dob: 1999
}
ibrahim.age(2024);
ibrahim.age.call(mobarak, 2024);

//factory function
function incrementUser(firstName, lastName, email){
    return{
        firstName,
        lastName,
        email,
        function(){
            return this.firstName + ' ' + this.lastName + ' ' + this.email;
        }
    }
}
console.log(incrementUser('mohammad', 'ibrahim', 'ibrahim@gmail.com'));
console.log(incrementUser('hosne', 'mobarak', 'mobarak@gmail.com'));
console.log(incrementUser('mahir', 'burhan', 'mahir@gmail.com'));


// constructor
function Person (name, age, job){
    this.name = name,
    this.age = age,
    this.job = job
}
const samir = new Person('Samir Hossain', 22, 'Student');
console.log(samir.name);
console.log(samir.job);

function userDetils(firstName, lastName, email){
    this.firstName = firstName,
    this.lastName = lastName,
    this.email = email,
    this.fullName = function(){
        return this.firstName + ' ' + this.lastName
    }
}
const mohammad = new userDetils('Mohammad', 'ibrahim', 'ibrahim@gmail.com');
console.log(mohammad.firstName);
console.log(mohammad.email);
console.log(mohammad.fullName());

const rifa = new userDetils('Rafiya', 'Kawser', 'kawser@gmail.com');
console.log(rifa.lastName);
console.log(rifa.email);
console.log(rifa.fullName());


// copy by value
const a = 20
let b = a;
b = 2;
console.log(a);
console.log(b);

// copy by reference (very uses complex data type)
const aObj = {
    name: 'ohid',
    age: 24
}
const bObj = aObj;
console.log(bObj);
bObj.name = 'Habul'
bObj.age = 27
console.log(bObj);

// pass by value 
const c = 5;
function passValue(inputNum){
    let d = inputNum;
    d = 33;
    return d;
}
console.log(passValue(c));

function numValue(inputNum){
    let e = inputNum;
    e = 33;
    return e;
}
console.log(numValue(5));

//pass by reference
const cObj = {
    name: 'ibrhim'
}

function nameObj(inputObj){
    let dObj = inputObj;
    dObj.name = 'Karim';
    return dObj;
}
console.log(nameObj(cObj));

const xObj = {
    name: 'ohid',
    age: 27
}
function newObj1(inputObj){
    let yObj = inputObj;
    yObj.name = 'habul',
    yObj.age = 34,
    yObj.job = 'student'
    return yObj;
}
console.log(newObj1(xObj));

// assign == shallow copy
// spread operator == shallow copy
// json.stringify == deep copy
const userProfile = {
    name: 'mahir',
    age: 26,
    email: 'mahir@gmail.com',
    address:{
        city: 'coxs Bazar'
    }
}

console.log(userProfile);
const copyProfile = Object.assign({location:'eidgaon'},userProfile);
copyProfile.address.city = 'mirpur'
console.log(copyProfile);
console.log(userProfile);

let cityCopy = JSON.stringify(userProfile);
console.log(cityCopy);
cityCopy = JSON.parse(cityCopy);
cityCopy.address.city = 'habulpur';
console.log(cityCopy);
console.log(copyProfile);