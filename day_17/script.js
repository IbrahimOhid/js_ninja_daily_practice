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