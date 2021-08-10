const input = document.querySelector('#simple-input');

// input.onchange = () => {
//     //console.log('hello!'); //----> после нажатия на инпут, убирая курсор в console появляется значение
//     console.log(input.value);
// };


/////////////////////Вариант 2

// input.onchange = (event) => {
//     console.log(event.target.value);
// };


////////////В Console появляется посимвольное изменение

// input.oninput = (event) => {
//     console.log(event.target.value);
// }

///////////////////////////////KeyCode (код действия) действие происходит после нажатия какой то кнопки

// input.onkeydown = (event) => { // 27 = escape
//     if(event.keyCode === 27) {
//         console.log(event.target.value);
//     }
// };

/////////////////////onfocus (когда захолим в input)

// input.onfocus = () => {
//     console.log('Hello!');
// }

// /////////////////onblur (когда выходим из input)

// input.onblur = () => {
//     console.log('Good bye!');
// }

///////////////////Form

const myForm = document.querySelector('#my-form');

myForm.onsubmit = () => {
    console.log(myForm.querySelector('#first-name').value);
    console.log(myForm.querySelector('#last-name').value);
};