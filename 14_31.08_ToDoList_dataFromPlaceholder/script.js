const BASE_URL = 'https://jsonplaceholder.typicode.com',
    userCards = document.querySelector('.user-cards'),
    wrapper = document.querySelector('.wrapper'),
    todoList = document.querySelector('.todo-list');

wrapper.classList.add('wrapper')
userCards.classList.add('user-cards');
todoList.classList.add('todo-list')

getUsers();


async function getUsers() {
    const response = await fetch(`${BASE_URL}/users`)
    const users = await response.json();

    renderAllUsers(users);

    console.log('users: ', users);    
}

async function getTodoListByUserId(id) {
    const response = await fetch(`${BASE_URL}/todos?userId=${id}`)
    const todos = await response.json();

    console.log('todos: ', todos);    

    return todos;

}

function renderOneUser(user) {
    const div = document.createElement('div');
    div.classList.add('box');
    div.setAttribute(`data-id`, `${user.id}`)

    div.innerHTML = `<h4>${user.name}</h4>
    <h5>${user.username}</h5>
    <p>${user.email}</p>`
    userCards.append(div);
    
}

function renderAllUsers(array) {
    array.forEach(el => {
        renderOneUser(el);
    });

    wrapper.prepend(userCards);

    const allCards = document.querySelectorAll('.box');

    allCards.forEach(card => card.onclick = renderTodoList);

}


function renderTodoList(e) {
    todoList.innerHTML = '';

    let id = e.target.dataset.id;
    const ul = document.createElement('ul');

    if(e.target.tagName !== 'DIV') {
        id = e.target.parentNode.dataset.id;
    }

    getTodoListByUserId(id).then(res => {
        let name = res.find(el => el.userId);
        ul.innerHTML = `<li id='first-ul'>User id: ${name.userId}</li>`;
        res.forEach(el => el.onclick = renderList(el, ul))
    });

    todoList.append(ul);

    console.log('id: ', id)
    //console.log('tag: ', tag)

}

function renderList(todo, ul) {
    ul.innerHTML += `<li>${todo.title}</li>`
}




