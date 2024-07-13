function myInfo(){
    console.log('Mohammad Ibrahim');
}
myInfo();
myInfo();

function multiply(){
    console.log(11 + 3);
}
multiply();
multiply();


function plus(num){
    console.log(num + num);
}
plus(3);

function minus(num){
    console.log(num - num);
}
minus(20);

function multiplication(num1, num2){
    console.log(num1 * num2);
}
multiplication(10, 30);

function area(length, width){
    console.log(length * width);
}
area(3, 5);

function info(person1, person2, person3){
    console.log('Hi i am '+ person1);
    console.log('Hi i am '+ person2);
    console.log('Hi i am '+ person3);
}
info('ibrahim', 'rifa', 'ohid');

function equal(num1, num2, num3 = 2){
    return(num1 * num2 * num3);
}
const result = equal(2, 3, 4);
console.log(result);
const result2 = equal(3, 3);
console.log(result2);

function userInfo(name, age, profession, hobby){
    const personInfo = `i am ${name}. i am ${age}. i am a ${profession}. i love ${hobby}`;
    return personInfo;
}
console.log(userInfo('samim', 20, 'web designer', 'learning'));
console.log(userInfo('ibrahim', 26, 'web engineer', 'learning'));

const profile = {
    name: 'ibrahim',
    age: 27,
    fullInfo(){
        return this.name + "-" + this.age;
    }
}
console.log(profile.name);
console.log(profile.age);
console.log(profile.fullInfo());
