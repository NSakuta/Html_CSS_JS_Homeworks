//Task02
//Галерея  

const gallery = [
    "url('./images/animals.jpg')",
    "url('./images/bear.jpg')",
    "url('./images/belka.jpg')",
    "url('./images/birds.jpg')",
    "url('./images/birdsMore.jpg')",
    "url('./images/fish.jpg')",
    "url('./images/fishingB.jpg')",
    "url('./images/frogs.jpg')",
    "url('./images/hunting.jpg')",
    "url('./images/insect.jpg')",
    "url('./images/monkey.jpg')",
    "url('./images/suslik.jpg')",
];

const img = document.querySelector('.img'),
    prevBtn = document.querySelector('.btn.prev'),
    nextBtn = document.querySelector('.btn.next');
let counter = 0;

img.style.backgroundImage = gallery[counter];

nextBtn.onclick = () => {
    if(counter === gallery.length - 1) {
        return counter = 0;
    }

    counter++;
    
    img.style.backgroundImage = gallery[counter];
    console.log(gallery[counter]);   
}

prevBtn.onclick = () => {
    if(counter === 0) {
        return counter = gallery.length - 1;
    }
    counter--;

    img.style.backgroundImage = gallery[counter];
    console.log(gallery[counter]);
}

////////////////////////Index2.html

const images2 = document.querySelectorAll('.item'); // ---> nodelist

const img = document.querySelector('.img'),
    prevBtn = document.querySelector('.btn.prev'),
    nextBtn = document.querySelector('.btn.next');
let currentIndex = 0;

nextBtn.onclick = () => {
    images2[currentIndex].style.display = 'none';
    if(currentIndex === images2.length) {
        currentIndex = 0;
    }
}









