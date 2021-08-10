//Задания:

// 1) Удалить все рекламные блоки со страницы (правая часть сайта)

const adv = document.querySelectorAll('.promo__adv img'), 
    promo = document.querySelector('.promo__adv').children; // ---> коллекция 
console.log(promo);

//promo.forEach(item => item.remove());

for(let i = promo.length - 1; i >= 0; i--) {
    promo[i].remove(); 
}
///Variant 2
for(let i = 0; i < promo.length; i++) {
    promo[i].remove(); 
    i--;
}

// adv.item(0).remove();

//for (let el of promo) el.style.display = 'none'


// 2) Изменить жанр фильма, поменять "комедия" на "драма"

const genre = document.querySelector('.promo__genre');

genre.innerHTML = 'Drama';

// 3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
// Реализовать только при помощи JS

const bg = document.querySelector('.promo__bg');
console.log(genre);

bg.style.background = "url('img/bg.jpg') center center/cover no-repeat";

// 4) Список фильмов на странице сформировать на основании данных из этого JS файла.
// Отсортировать их по алфавиту 

'use strict';

const movieDB = {
    movies: [
        "On the Rocks",
        "The Trip to Greece",
        "Bad Education",
        "The Nest",
        "Nomadland"
    ]
};

console.log('Movies: ', movieDB.movies);

const list = document.querySelectorAll('.promo__interactive-list li');
console.log(list);


for(let i = 0; i < list.length; i++) {

    console.log('Innertext:', list[i].innerHTML);
    list[i].innerHTML = movieDB.movies[i];
}

// 5) Добавить нумерацию выведенных фильмов 

for(let i = 0; i < list.length; i++){
    list[i].innerHTML = (i + 1) + '. ' + list[i].innerHTML;
}

