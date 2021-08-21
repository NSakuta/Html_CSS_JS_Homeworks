const input = document.querySelector('#input'),
    startBtn = document.querySelector('#start-btn'),
    stopBtn = document.querySelector('#stop-btn'),
    result = document.querySelector('.result');

let count,
    id;

input.focus();

startBtn.onclick = startTimer;

stopBtn.onclick = stopTimer;

function startTimer() {

    count = parseInt(input.value);
    if(isNaN(count)) return;

    startBtn.disabled = true; // startBtn.setAttribute('disabled', true);
    stopBtn.disabled = false;
    input.disabled = true;
    result.innerText = count;

    id = setInterval(function() {
        count--;
        if(count > 0) {
            result.innerText = count;
        } else {
            stopTimer();
        }
    }, 1000);
};

function stopTimer() {
    clearInterval(id);
    startBtn.disabled = false; // startBtn.setAttribute('disabled', true);
    stopBtn.disabled = true;
    
    if(count > 0) {
        result.innerText = `Timer is stopped`;
        input.value = count;
    } else {
        result.innerText = `Time is over`;
        input.disabled = false;
    }
};

