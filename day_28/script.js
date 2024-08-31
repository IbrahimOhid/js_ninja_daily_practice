const num = [12,13,14,15];
const num2 = [];
num.forEach((n)=>{
    num2.push(n + 5);
    
})
console.log(num2);

// const para1 = document.querySelector('p');
// const para1 = document.getElementsByClassName('para1');
// const para1 = document.getElementById('para1');
// const para1 = document.querySelector('.para1');
// console.log(para1);

// accessing attributes
// const ulElem = document.querySelector('ul');
// console.log(ulElem);
// console.log('TextContent', ulElem.textContent);
// console.log('Html', ulElem.innerHTML);
// console.log('attribute', ulElem.getAttribute('class'));
// console.log('attribute', ulElem.getAttribute('id'));
// console.log('className', ulElem.className);
// console.log('IdName', ulElem.id);
// console.log('style', ulElem.style);

// const allLink = document.querySelectorAll('a');
// console.log(allLink);

// event delegation 💛
const liEle = document.querySelector('ul');
liEle.addEventListener('click', (evt)=>{
    console.log(evt.target.textContent);
})