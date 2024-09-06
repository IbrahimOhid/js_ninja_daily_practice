//very useful math function
const num = 22.5195;
const newNum = - 11;
console.log(Math.trunc(num));
console.log(Math.ceil(num));
console.log(Math.floor(num));
console.log(Math.round(num));
console.log(Math.max(1, 5, 8, 2, 99, 22, 88));
console.log(Math.min(99, 100, 80, 3, 5, 2, 1));
console.log(Math.random()); 
console.log(Math.random() * 5);  
console.log(Math.abs(newNum)); 
console.log(Math.pow(3, 3));  

//random number: 0 up to 5
const numResult = Math.ceil(Math.random() * 5);
console.log(numResult); 
const numValue = Math.floor(Math.random() * 5 + 1);
console.log(numValue);           
//random number from 2 to 6
function numberValue(num1, num2){
    return Math.ceil(Math.random() * Math.abs((num1 - num2)) + num1)
}                        
console.log(numberValue(2, 6));      

//date
const date = new Date();
console.log(date);
console.log(date.toString());
console.log(date.toDateString());
console.log(date.toTimeString());
console.log(date.toISOString());
console.log(date.toUTCString());
console.log(date.toLocaleString());
console.log(date.toLocaleDateString());
console.log(date.toLocaleTimeString());
console.log(date.getDate())
console.log(date.getFullYear());
console.log(date.getHours());
console.log(date.getMonth());

// digital clock function
function getCurrentTime(){
    const date = new Date();
    let hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    hours = hours > 12 ? hours - 12 : hours;
    currentHours = hours >= 10 ? hours : '0' + hours; 
    currentMinutes = minutes >= 10 ? minutes : '0' + minutes;
    currentSeconds = seconds >= 10 ? seconds : '0' + seconds; 
    return `${currentHours}:${currentMinutes}:${currentSeconds}`
}
console.log(getCurrentTime());

// setTimeOut

// setTimeout(()=>{
//     console.log(getCurrentTime());
// }, 1000)

// setInterval
// setInterval(()=>{
//     console.log(getCurrentTime());
// }, 1000)

