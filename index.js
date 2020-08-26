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

const resultAdd = () => {
    const li = document.createElement('li');
    li.textContent = input.value;
    ul.append(li);
    toDoList.push(li.textContent);
};
add.addEventListener('click', resultAdd);

// let removeList = () => {
//     for (let list of toDoList) {
//         if () {
//             list.splice();
//         }
//     }
// };
// remove.addEventListener('click', removeList);