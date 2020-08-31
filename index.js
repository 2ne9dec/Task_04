const toDoList = [];

const input = document.querySelector('.input');
const add = document.querySelector('#add');
const ul = document.querySelector('#ul');

const render = () => {
    for (let i = 0; i < toDoList.length; i++) {
        const li = document.createElement('li');
        const div = document.createElement('div');
        const button = document.createElement('button');
        div.innerHTML = toDoList[i];
        li.append(div);
        button.innerHTML = 'Delete';
        li.append(button);
        ul.append(li);
            button.addEventListener('click', () => {
                toDoList.splice(i, 1);
                ul.innerHTML = null;
                localStorage.setItem('list', JSON.stringify(toDoList));
                render();
            });
        };
    };
render();

    add.addEventListener('click', () => {
        toDoList.push(input.value);
        ul.innerHTML = null;
        localStorage.setItem('list', JSON.stringify(toDoList));
        render();
        input.value = null;
    });

    // localStorage.clear();

const data = () => {
    if (localStorage.length !== 0 && localStorage.length !== undefined) {
            toDoList.push(JSON.parse(localStorage.getItem('list')));
        render();
    }
};
data();