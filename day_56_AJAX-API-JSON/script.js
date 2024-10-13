// javascript object
// const data = {
//     name: 'ibrahim',
//     age: 27,
//     profession: 'web Engineer',
//     toBeDesigner: null
// }

// JSON Object
// new Date, undefined, function are not support as valid json value
// const userData = {
//     'name': 'ibrahim',
//     'age': 27,
//     'profession': 'web Engineer',
//     'toBeDesigner': null;
// }

// json stringify & json parse
const data = {
  name: "ibrahim",
  age: 27,
  profession: "web Engineer",
  toBeDesigner: null,
};
const dataResult = JSON.stringify(data);
console.log(dataResult);
console.log(typeof dataResult);

const dataResult2 = JSON.parse(dataResult);
console.log(dataResult2);
console.log(typeof dataResult2);
console.log(dataResult2.name);
console.log(dataResult2.profession);

// fetch
// fetch('https://jsonplaceholder.typicode.com/users')
// .then(res => res.json())
// .then(data => console.log(data))
// .catch(err => console.log(err))

// fetch use await

// async function findUser() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json();
//         console.log(data);
//     }
//     catch(err){
//         console.log(err);
//     }
// }
// findUser()

async function receiveUser() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}
receiveUser();
