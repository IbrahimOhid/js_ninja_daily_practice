                // Array
let myInfo = ['ibrahim', 'ohid', 30, 'web Developer'];
console.log(myInfo[1]);
myInfo[3] = 'wed designer';
myInfo[4] = true;
console.log(myInfo);

const fullName = `${myInfo[0]} ${myInfo[1]}`;
console.log(fullName);

const setName = myInfo[0] + ' ' + myInfo[1];
console.log(setName);

const profile = ['mohammad', 'ibrahim', 27, 'designer'];
const fullLength = profile.length - 1;
console.log(profile[fullLength]);

const firstArray = [];
firstArray[0] = 'ibrahim';
firstArray[2] = 'ohid'
console.log(firstArray);

const secondArray = new Array('rafiya', 'kawser', 'rifa');
secondArray[3] = 'ibrahim';
console.log(secondArray[3]);

const complexArray = [1, 'ohid', true, null, 'rahim', undefined, ['hosna', 'mobarak']]
const lastValue = complexArray.length - 1;
console.log(complexArray[lastValue][1]);

                // Object
const personalInfo = {
    firstName : 'mohammad',
    lastName : 'ibrahim',
    age : 26,
    profession : 'web engineer'
}
personalInfo.isDeveloper = "ture";
console.log(personalInfo);
console.log(personalInfo.age);
console.log(personalInfo.isDeveloper);

const myPersonalInfo = {
    name : 'ibrahim',
    age : 27,
    hobbies : ['reading_book', 'web developer', 'software engineer'],
    obj : {
        key1 : 'value1',
        key2 : 'value2'
    }
}

console.log(myPersonalInfo.hobbies[2]);
console.log(myPersonalInfo.obj.key2);


const uniqueObj = {};
uniqueObj.name = 'ibrahim',
uniqueObj.profession = 'web engineer'
console.log(uniqueObj);
console.log(uniqueObj.profession);

const newObj = new Object({name: 'ohid', age: 27, profession: 'web engineer'});
console.log(newObj);
console.log(newObj.age);

const firstObj = new Object();
firstObj.designation = 'web developer',
firstObj.experience = '3 years'
console.log(firstObj);