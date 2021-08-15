const myForm = document.querySelector('#myForm'),
    input = document.querySelector('#input'),
    ul = document.querySelector('.toDoList'), 
    addBtn = document.querySelector('#addBtn');

const toDoList = [];

addBtn.onclick = () => {
    let text = input.value;
    let li = document.createElement('li');
    let checkBox = document.createElement('input');

    // checkBox.type = 'checkbox'; ----> Вариант 1
    checkBox.setAttribute('type', 'checkbox'); // ---> Вариант 2
    
    li.innerText = input.value;
    li.prepend(checkBox);

        checkBox.onchange = () => {
            li.style.textDecoration = checkBox.checked ? 'line-through' : 'none'
        }
    
    ul.append(li);
    input.value = '';
    input.focus();    
    
}



