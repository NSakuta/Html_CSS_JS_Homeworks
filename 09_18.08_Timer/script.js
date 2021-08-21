const btn = document.querySelector('#btn'),
    input = document.querySelector('#date-input'),
    box = document.querySelector('.box');

const title = ['days', 'hours', 'minutes', 'seconds'];

let id;

btn.addEventListener('click', start)

function start() {

    if(id != null) { /// если заного запускаем, чистим предыдущий запуск
        clearInterval(id);
    }

    input.innerHTML = '';
    box.innerHTML = '';

    const date = input.value.split('.').reverse().join('/') // без разницы в два часа
    const deadLine = new Date(date);

    if(!date) return;

    id = setInterval(renderDateTimer, 1000, deadLine);
};

function renderDateTimer(date) {

    const difference = date - new Date(); // день.месяц.год - год.месяц.день

    if(difference < 0) {
        clearInterval(id);
        box.innerHTML = `Time is over`;
        return;
    } else {
        box.innerHTML = '';
        const days = Math.floor(difference / (24 * 60 * 60 * 1000)), // 1 * 24 * 60 * 60 * 1000
            hours = Math.floor((difference / (60 * 60 * 1000)) %24),
            minutes = Math.floor((difference / (60 * 1000)) % 60),
            seconds = Math.floor((difference / 1000) % 60);

    const timeLeftArr = [days, hours, minutes, seconds];
    
    for(let i = 0; i < 4; i++) {
        const div = document.createElement('div');
        div.classList.add('boxes');
        div.id = `box-${i}`;
        div.innerHTML = `<h1>${timeLeftArr[i]}</h1>
        <p>${title[i]}<p>`;
        box.append(div);
        }
    }    
};

