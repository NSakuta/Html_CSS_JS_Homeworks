const jazzbtn = document.querySelector('#jazz-btn'),
    rockbtn = document.querySelector('#rock-btn'),
    bluesbtn = document.querySelector('#blues-btn'),
    content = document.querySelector('.content');  

const jazzInfoArray = createArray(9),
    bluesInfoArray = createArray(8),
    rockInfoArray = createArray(5);

function createArray(length) {
    const obj = []    
    for(let i = 0; i < length; i++) {
        const item = {
            id: '',
            title: '',
            text: ''
        };

        item.id = i;
        item.title = `Item-${i + 1}`;
        item.text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste aut tempore deserunt explicabo incidunt neque dolores inventore distinctio dolorum sunt illo assumenda quae alias nam cum molestiae voluptas, nihil, dolore libero autem corrupti itaque? Nobis distinctio obcaecati quod quae dolor blanditiis sint perspiciatis repellendus. Qui animi quam consequuntur vitae itaque amet, quae voluptates eveniet quo voluptate soluta, ipsam illo! Suscipit delectus vero magni facilis quam, dignissimos illum atque vitae adipisci laboriosam laudantium sed officia architecto velit, minus facere omnis repellendus!'
        obj.push(item);
    }
    return obj;
}

jazzbtn.onclick = () => {
    content.innerHTML = '';
    clearBtnBgColor(jazzbtn, rockbtn, bluesbtn);
    createElements(9, 'genre');
    const div = document.querySelector('.content').children;
    createElementInElements(div, 'p', 'Jazz-item', 'text');

    for(let i = 0; i < div.length; i++) {
        div[i].style.backgroundColor = 'rgb(169, 160, 175)';

        div[i].onclick = (event) => {
            const id = +event.currentTarget.id.split('_')[1];
            const el = jazzInfoArray.find((item) => item.id === id);
            hide(div);
            const bigDiv = document.createElement('div');
            bigDiv.className = 'bigDiv';
            bigDiv.style.backgroundColor = 'rgb(169, 160, 175)';
            bigDiv.innerHTML = `<h3>${el.title}</h3><br><p>${el.text}</p>`;
            bigDiv.classList.add = 'text-2';
            content.append(bigDiv);
            
        }
    }
    jazzbtn.style.backgroundColor = 'rgb(169, 160, 175)';
}

rockbtn.onclick = () => {
    content.innerHTML = '';
    clearBtnBgColor(jazzbtn, rockbtn, bluesbtn);
    createElements(5, 'genre');
    const div = document.querySelector('.content').children;
    createElementInElements(div, 'p', 'Rock-item', 'text')
    for(let i = 0; i < div.length; i++) {
        div[i].style.backgroundColor = 'rgb(172, 194, 166)';

        div[i].onclick = (event) => {
            const id = +event.currentTarget.id.split('_')[1];
            const el = rockInfoArray.find((item) => item.id === id);
            hide(div);
            const bigDiv = document.createElement('div');
            bigDiv.className = 'bigDiv';
            bigDiv.style.backgroundColor = 'rgb(172, 194, 166)';
            bigDiv.innerHTML = `<h3>${el.title}</h3><br><p>${el.text}</p>`;
            content.append(bigDiv);
            
        }
    }
    rockbtn.style.backgroundColor = 'rgb(172, 194, 166)'; 
};

bluesbtn.onclick = () => {
    content.innerHTML = '';
    clearBtnBgColor(jazzbtn, rockbtn, bluesbtn);
    createElements(8, 'genre');
    const div = document.querySelector('.content').children;
    createElementInElements(div, 'p', 'Blues-item', 'text');

    for(let i = 0; i < div.length; i++) {
        div[i].style.backgroundColor = 'rgb(186, 187, 138)';

        div[i].onclick = (event) => {
            const id = +event.currentTarget.id.split('_')[1];
            const el = bluesInfoArray.find((item) => item.id === id);
            hide(div);
            const bigDiv = document.createElement('div');
            bigDiv.className = 'bigDiv';
            bigDiv.style.backgroundColor = 'rgb(186, 187, 138)';
            bigDiv.innerHTML = `<h3>${el.title}</h3><br><p>${el.text}</p>`;
            content.append(bigDiv);
            
        }
    }
    bluesbtn.style.backgroundColor = 'rgb(186, 187, 138)';
};

function createElementInElements(array, selector, textInside, className) {
    for(let i = 0; i < array.length; i++) {
        const p = document.createElement(selector);
        p.innerText = `${textInside}-${i + 1}`;
        p.className = className;
        array[i].append(p);
    }
};

function createElements(count, selector) {
    for(let i = 0; i < count; i++) {
        const div = document.createElement('div');
        div.className = selector;
        div.id = `${selector}_${i}`;
        content.append(div);
    }
};

function hide(el) {
    for(let i = 0; i < el.length; i++) {
        el[i].style.display = 'none';
    }
};

function clearBtnBgColor(btn1, btn2, btn3){
    btn1.style.backgroundColor = 'rgb(164, 176, 177)';
    btn2.style.backgroundColor = 'rgb(164, 176, 177)';
    btn3.style.backgroundColor = 'rgb(164, 176, 177)';
};

