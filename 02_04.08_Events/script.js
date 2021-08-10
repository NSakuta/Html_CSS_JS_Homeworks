//Task01
/* 
сделать шесть кнопок и абзац с текстом. Три кнопки меняют размер шрифта в абзаце (15px, 25px, 35px). 
Оставшиеся три меняют цвет текста - на синий, красный зеленый. Изменение размера шрифта не изменяет цвет 
и наооборот - изменение цвета не влияет на размер
 */

const btnSize = document.querySelectorAll('.size .btn'),
    btnColor = document.querySelectorAll('.color .btn'),
    firstText = document.querySelector('#text');
console.log(btnSize);


// for(let i = 0; i < btnSize.length; i++) {
//     btnSize.item(i).onclick = () => {
//         let j = 15;
//         document.querySelector('#text').style.fontSize = `${j}px`;
//         console.log(`${j}px`);
//         j += 10;
//     }
// }

function changeSize(el, size){
    el.style.fontSize = `${size}px`;
}

function changeColor(el, color){
    el.style.fontSize = `${color}px`;
}

btnSize.onclick = () => {
    changeSize(firstText, '15');
}

btnSize.item(0).onclick = () => {
    document.querySelector('#text').style.fontSize = '15px';
}
btnSize.item(1).onclick = () => {
    document.querySelector('#text').style.fontSize = '25px';
}
btnSize.item(2).onclick = () => {
    document.querySelector('#text').style.fontSize = '35px';
}

btnColor.item(0).onclick = () => {
    document.querySelector('#text').style.color = 'red';
}
btnColor.item(1).onclick = () => {
    document.querySelector('#text').style.color = 'green';
}
btnColor.item(2).onclick = () => {
    document.querySelector('#text').style.color = 'blue';
}

//Task02
/* 
Сделать два input, для каждого инпута своя кнопка. Под инпутами текст. В одном инпуте можно задавть размер шрифта, 
при нажатии на кнопку шрифта текста становится того размера, который ввели. Второй инпут для цвета, соответсвенно 
при нажатии на кнопку цвет текста становится таким, который задали в инпуте.
 */

const inputSize = document.querySelector('#size-set'),
    inputColor = document.querySelector('#color-set'),
    btnSize2 = document.querySelector('.size'),
    btnColor2 = document.querySelector('.color'),
    secondText = document.querySelector('#text2');

btnSize2.onclick = () => {
    const sizeValue = inputSize.value;
    secondText.style.fontSize = `${sizeValue}px`;
    console.log(`${sizeValue}px`)
    inputSize.value = '';
}

btnColor2.onclick = () => {
    const colorValue = inputColor.value;
    secondText.style.fontSize = `${colorValue}px`;
    console.log(`${colorValue}px`)
    inputColor.value = '';
}

 ////////////////////////////////////

// function changeText() {
//     secondText.style = `font-size: ${inputSize.value}px; color: ${inputColor.value}`;
//     inputColor.value = '';
//     inputSize.value = ''; 
// }

// btnSize.onclick = changeText();
// btnColor.onclick = changeText();


//Task03*
/* 
На странице сделать квадрат, изначально черного цвета, при нажатии на квадрат, его цвет менется на другой рандомный цвет, 
а в самом квадрате появляется порядковый номер сделанного клика

*/

const quadrat = document.querySelector('#quadrat');

// let counter = 1;

// quadrat.onclick = () => {
//     //quadrat.style.backgroundColor = 'red';
//     quadrat.style.backgroundColor = `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`;
//     // counter++;
//     //document.querySelector('.output').textContent = counter++; // Вариант 1
//     quadrat.querySelector('.output').textContent = counter++; // Вариант 2
// }

function getRandomNum() {
    return Math.floor(Math.random() * 256);  // всегда + 1
}

function clickHandler() {
    let counter = 1;
    return () => {
        quadrat.style.backgroundColor = `rgb(${getRandomNum()}, ${getRandomNum()}, ${getRandomNum()})`;
        quadrat.querySelector('.output').textContent = counter++; 
    }
}

const myClickHandler = clickHandler();
quadrat.onclick = myClickHandler;
