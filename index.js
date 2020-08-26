let toDoList = ['Сходить в магазин', 'Уборка', 'Готовка'];

const input = document.querySelector('.input')
const add = document.querySelector('#add');
const remove = document.querySelector('#remove');
const ul = document.querySelector('#ul');

for (let i = 0; i < toDoList.length; i++) {
    const li = document.createElement('li');
    li.append([toDoList[i]]);
    ul.append(li);
};

let resultAdd = () => {
    const li = document.createElement('li');
    li.textContent = input.value;
    ul.append(li);
};

add.addEventListener('click', resultAdd);