let toDoList = ['Task1', 'Task2', 'Task3'];
const input = document.querySelector('.input')
const add = document.querySelector('#add');
const ul = document.querySelector('#ul');

for (let i = 0; i < toDoList.length; i++) {
    const li = document.createElement('li');
    li.append(toDoList[i]);
    ul.append(li);
    const button = document.createElement('button');
    button.textContent = 'Delete'
    li.append(button);
};

const addTask = () => {
    const li = document.createElement('li');
    li.textContent = input.value;
    ul.append(li);
    toDoList.push(li.textContent);
    const button = document.createElement('button');
    button.innerHTML = 'Delete';
    li.append(button);
};
    add.addEventListener('click', addTask);

const deleteTask = () => {
    for (let list of toDoList) {
    toDoList.splice(list, 1);
    }
};
const button = document.querySelectorAll('button');

    for (let but of button) {
        but.addEventListener('click', deleteTask);
    };