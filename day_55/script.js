// regExp practice
const para = 'i am Mohamma ibrahim ohid';


// literal Patten
const regPara = /ohid/ig;
console.log(regPara.test(para));

// search
console.log(para.search(regPara));
// match
console.log(para.match(regPara));
// exec
console.log(regPara.exec(para));
// test
console.log(regPara.test(para));