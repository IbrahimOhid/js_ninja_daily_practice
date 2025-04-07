const divElm = document.createElement(('div'), 'heo');
divElm.className = 'redText'
divElm.setAttribute('id', 'red');


const todoList = document.querySelector('.todo-list');
todoList.appendChild(divElm)