let toDoList = ['Task1', 'Task2', 'Task3'];
const input = document.querySelector('.input');
const add = document.querySelector('#add');
const ul = document.querySelector('#ul');

const render = () => {
    for (let i = 0; i < toDoList.length; i++) {
        const li = document.createElement('li');
        const div = document.createElement('div');
        div.innerHTML = toDoList[i];
        li.append(div);
        const button = document.createElement('button');
        button.innerHTML = 'Delete';
        li.append(button);
        ul.append(li);
        button.addEventListener('click', () => {
            toDoList.splice(i, 1);
            ul.innerHTML = null;
            localStorage.setItem('newArray', JSON.stringify(toDoList));
            render();
        });
    };
    JSON.parse(localStorage.getItem('newArray'));
};
render();

    add.addEventListener('click', () => {
        toDoList.push(input.value);
        ul.innerHTML = null;
        localStorage.setItem('newArray', JSON.stringify(toDoList));
        render();
        input.value = null;
    });