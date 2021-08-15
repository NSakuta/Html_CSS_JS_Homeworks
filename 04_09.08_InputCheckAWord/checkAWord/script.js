const sbmBtn = document.querySelector('.sbmBtn'),
    input = document.querySelector('.input'),
    input2 = document.querySelector('.input2'),
    checkBtn = document.querySelector('.checkBtn'),
    lines = document.querySelector('.lines'), 
    info = document.querySelector('.info'),
    enterAWord = document.querySelector('h3');


sbmBtn.onclick = () => {
    let count = input.value.length;
    let inputValue1 = input.value.toLowerCase();
    let slash = '&#95; '
    let slashArray = [];
    let bingo = 0;
    fillArr(slashArray, slash, count);

    const inputArray = [];
    fillArrWithInput(inputArray, inputValue1, count);

    renderP(slashArray);

    info.innerHTML = `The word has ${count} letters`
    
    hide(sbmBtn);
    hide(input);
    hide(enterAWord);
    show(checkBtn);
    show(input2);
   
    checkBtn.onclick = () => {
        let inputValue2 = document.querySelector('.input2').value.toLowerCase();
        let emptySpace = 0;
        let number = 0;

        for(let i = 0; i < count; i++) {
            if(inputValue2 === inputValue1[i]){
                slashArray[i] = inputValue2;
                lines.innerHTML = '';
                renderP(slashArray);
                document.querySelector('.input2').value = '';
                bingo++;
            } else if(inputValue2 === '') {
                emptySpace++;
            } else if(!(isNaN(inputValue2))) {
                number++;
            }
        }
        getInfoMessage(bingo, emptySpace, number, count);
        console.log('bingo', bingo);
    }
};

function hide(element) {
    element.style.display = 'none';
};

function show(element) {
    element.style.display = 'block';
};

function fillArr(array, el, length) {
    for(let i = 0; i < length; i++) {
        array.push(el);
    }
};

function fillArrWithInput(array, el, length) {
    for(let i = 0; i < length; i++) {
        array.push(el.charAt(i));
    };
};

function renderP(array) {
    for(let i = 0; i < array.length; i++) {
        lines.innerHTML += `${array[i]}`;
    }
};

function getInfoMessage(bingo, emptySpace, number, count) {
    if (bingo === count) {
        hide(checkBtn);
        hide(input2);
        info.innerHTML = `Congratulation! You win!`
        document.querySelector('.input2').value = '';
    } else if (bingo > 0 && bingo !== count) {
        info.innerHTML = `Right!`
    } else if (emptySpace > 0 || number > 0) {
        info.innerHTML = `Please enter a valid data!`;
        document.querySelector('.input2').value = '';
    } else {
        info.innerHTML = `UPS! No such letter`;
        document.querySelector('.input2').value = '';
    }
    return info.innerHTML;
}