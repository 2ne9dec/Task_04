let toDoList = ['Task1', 'Task2', 'Task3'];

const input = document.querySelector('.input')
const add = document.querySelector('#add');
const remove = document.querySelector('#remove');
const ul = document.querySelector('#ul');

for (let i = 0; i < toDoList.length; i++) {
    
    const li = document.createElement('li');
    li.append(toDoList[i]);
    ul.append(li);
};
console.dir(ul)

const resultAdd = () => {
    const li = document.createElement('li');
    li.textContent = input.value;
    ul.append(li);
    toDoList.push(li.textContent);
};
add.addEventListener('click', resultAdd);


for (let list of toDoList) {
    
}