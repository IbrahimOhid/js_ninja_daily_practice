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
// replace
console.log(para.replace(regPara, 'Ibrahim'));

// Group
const dates = '2024-10-02, 2022-03-01';
const regDate = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/g;
console.log(dates.replace(regDate, '$<day>.$<month>.$<year>'));
console.log(dates.match(regDate));