const container = document.querySelector('.container');
const boxes = document.getElementsByClassName('box'); // ---> следит динамически 

let userAnswer = +prompt("Please, enter a number: ");

createBoxes(userAnswer);

function createBoxes(length) {
    for(let i = 0; i < length; i++) {
        let box = document.createElement('div');
        box.className = 'box';
        box.style.backgroundColor = createBgColor();
        container.append(box);
    }
};

container.onclick = (event) => {
    if(event.target.classList.contains('box')) {
        event.target.remove();
    }
};

function randomNum(max) {
    return Math.floor(Math.random() * max);
}
function createBgColor() {
    return `rgb(${randomNum(256)}, ${randomNum(256)}, ${randomNum(256)})`;
}

// function removeElement(event) {
//     if(event.target.classList.contains('box')) {
//         event.target.remove();
//     }
// };