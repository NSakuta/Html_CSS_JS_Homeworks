const inputText = document.querySelector('#myInput'),
    addBtn = document.querySelector('#addBtn'),
    list = document.querySelector('#todo-list');


const toDoArray = []; //{id, toDo, done}

addBtn.onclick = () => {
    let text = inputText.value.trim();

    if(text) {
        toDoArray.push(createObject(text));
        //const elArray = toDoArray.map(mapTaskToListElement);
        renderParent('#todo-list', toDoArray.map(mapTaskToListElement));
        console.log('togoarray after: ', toDoArray);
    }
};

function mapTaskToListElement(obj, index) { ///(что, куда)
    const li = document.createElement('li'),
        checkbox = document.createElement('input'),
        title = document.createElement('h2'),
        button = document.createElement('button');
    
    li.className = "list-group-item d-flex align-items-center";
    checkbox.type = 'checkbox';
    checkbox.className = "col-1";
    checkbox.checked = obj.done;
    title.className = 'col-9';
    title.innerText = obj.toDo;
    
    title.style.textDecoration = obj.done ? 'line-through' : 'none';
    button.innerText = 'Remove';
    button.className = 'col-2 btn btn-danger';

        button.onclick = () => {
            toDoArray.splice(index, 1);   
            renderParent('#todo-list', toDoArray.map(mapTaskToListElement));     
        }

        checkbox.onchange = () => { /// когда поставили галочку
            toDoArray[index].done = checkbox.checked;
            title.style.textDecoration = checkbox.checked ? 'line-through' : 'none';
        }

    li.append(checkbox);
    li.append(title);
    li.append(button);

    return li;

}

function renderParent(selector, array) {
    const element = document.querySelector(selector);
    if(element) {
        element.innerHTML = '';
        array.forEach(item => {
            element.append(item);
        });
    }
}

function createObject(task) {
    return {
        id: toDoArray.length, // 1, 2, 3, ... // iterator++
        toDo: task,
        done: false
    }
};




