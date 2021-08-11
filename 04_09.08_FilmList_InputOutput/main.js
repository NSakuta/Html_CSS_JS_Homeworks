const clickBtn = document.querySelector('#clickBtn'),
    ul = document.querySelector('.output'),
    input = document.querySelector('.inp'),
    filmArray = [];

let counter = 1;
input.focus();

// clickBtn.onclick = () => {
//     let value = input.value;
//     value = value.trim();  // without empty spaces
//     if(!value) { // (title == '') ---> boolean - false
//         alert('Enter title!');
//         input.value = '';
//         return;
//     }
//     const li = document.createElement('li');
//     li.innerHTML = `${counter++}. ${value}`;
//     ul.append(li); 
//     input.value = '';
// };

// ///////////////////////////////////Более функциональное решение

// clickBtn.onclick = () => {
//     let value = input.value;
//     value = value.trim();  // without empty spaces
//     if(!value) { // (title == '') ---> boolean - false
//         alert('Enter title!');
//         emptyInput(input);
//     } else {
//         const li = createLi(counter, title);
//         counter++;
//         ul.append(li); 
//         emptyInput(input);
//     }
// };

// function createLi(number, title) {
//     const li = document.createElement('li');
//     li.innerHTML = `${number}. ${title}`;
//         li.onclick = () => {
//             li.classList.toggle('line-through');
//         }
//     return li;
// };

// function emptyInput(el) {
//     el.value = '';
//     el.focus();
// };


////////////////////////////////////Вариант 2. Сохраняем фильмы в массив

clickBtn.onclick = () => {
    let value = input.value.trim();
    if(!value) { // (title == '') ---> boolean - false
        alert('Enter title!');
        emptyInput(input);
    } else {
        filmArray.push(value);  
        ul.innerHTML = '';    
        renderUl();  
        emptyInput(input);
    }
    console.log('FilmArray: ', filmArray);
};

function renderUl() {
    for(let i = 0; i < filmArray.length; i++){
        ul.innerHTML += `<li>${i + 1}. ${filmArray[i]}</li>`;
    }
};


function createLi(number, title) {
    const li = document.createElement('li');
    li.innerHTML = `${number}. ${title}`;
        li.onclick = () => {
            li.classList.toggle('line-through');
        }
    return li;
};

function emptyInput(el) {
    el.value = '';
    el.focus();
};

// console.log('FilmArray: ', filmArray);


///////////////////////////////////Variant


clickBtn.onclick = () => {
    let value = input.value.trim();

    if(!value) { // (title == '') ---> boolean - false
        alert('Enter title!');
        emptyInput(input);
    } else {
        filmArray.push(value);  
        ul.innerHTML = '';    
        renderUl();  
        emptyInput(input);
    }
    console.log('FilmArray: ', filmArray);

};

// function renderUl() {
//     const arr = filmArray.map((film, index) => createFilmLi(film, index));
//     arr.forEach(li => ul.append(li));
// };

function renderUl() {
    filmArray.map((film, index) => createFilmLi(film, index)).forEach(li => ul.append(li));
};

function emptyInput(el) {
    el.value = '';
    el.focus();
};

console.log('FilmArray: ', filmArray);

function createFilmLi(title, index) {
    const li = document.createElement('li');
    li.innerHTML = `${index + 1}. ${title}`;
        li.onclick = () => {
            li.classList.toggle('line-through');
        }
    return li;
};



