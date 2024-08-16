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