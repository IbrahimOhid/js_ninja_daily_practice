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