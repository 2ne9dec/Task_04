const toDoList = ['Task1', 'Task2', 'Task3'];
const input = document.querySelector('.input');
const add = document.querySelector('#add');
const ul = document.querySelector('#ul');

const render = () => {
    for (let i = 0; i < toDoList.length; i++) {
        const li = document.createElement('li');
        li.append(toDoList[i]);
        ul.append(li);
        const button = document.createElement('button');
        button.addEventListener('click', () => {
            toDoList.splice(i, 1);
            ul.innerHTML = null;
            render();
        });
        button.textContent = 'Delete';
        li.append(button);
    };
};
render();

    add.addEventListener('click', () => {
        toDoList.unshift(input.value);
        ul.innerHTML = null;
        render();
        input.value = null;
    });