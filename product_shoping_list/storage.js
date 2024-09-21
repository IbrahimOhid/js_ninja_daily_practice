// set data 
localStorage.setItem('name', 'ibrahim');
localStorage.setItem('age', 27);
// get data / received data
localStorage.getItem('name');
localStorage.getItem('age');
// remove data
localStorage.removeItem('name');
localStorage.removeItem('age');

// object
// const userInfo = {
//     name: 'ibrahim',
//     age: 27
// }
// localStorage.setItem('user', JSON.stringify(userInfo));
// const data = localStorage.getItem('user');
// const userData = JSON.parse(data);