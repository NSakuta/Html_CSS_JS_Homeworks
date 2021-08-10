// Task01
/* 
    1. Calculator
    2. Проверка строки является ли она палиндромом
    3. Счетчик кликов
 */

const addBtn = document.querySelector('#addBtn'),
    subBtn = document.querySelector('#subBtn'),
    multBtn = document.querySelector('#multBtn'),
    divBtn = document.querySelector('#divBtn'),
    output = document.querySelector('#output'),
    checkBtn = document.querySelector('#checkBtn'),
    result = document.querySelector('#result'),
    clickBtn = document.querySelector('#clickBtn');


addBtn.onclick = () => {
    let sum = Number(document.querySelector('.sum1').value) + Number(document.querySelector('.sum2').value);
    output.innerHTML = sum;
};

multBtn.onclick = () => {
    let mult = Number(document.querySelector('.mult1').value) * Number(document.querySelector('.mult2').value);
    output3.innerHTML = mult;
}

divBtn.onclick = () => {
    let div = Number(document.querySelector('.div1').value) / Number(document.querySelector('.div2').value);
    output4.innerHTML = div;
}

subBtn.onclick = () => {
    let sub = Number(document.querySelector('.min1').value) - Number(document.querySelector('.min2').value);
    output2.innerHTML = sub;
}

////////////////////Palindrom

checkBtn.onclick = () => {
    let palindrom = document.querySelector('.palindrom').value;

    for(let i = 0; i < palindrom.length / 2; i++) {
        if(palindrom.charAt(i) === palindrom.charAt(palindrom.length - 1 - i)){
            return result.innerHTML = 'Palindrom!', result.style.color = 'green';
        } else {
            return result.innerHTML = 'Not palindrom!', result.style.color = 'red';
        }
    }
}

////////////////////Click counter

let counter = 0;

clickBtn.onclick = () => {
    document.querySelector('#click').innerHTML = `click: ${counter++}`;
}