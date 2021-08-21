const homeBtn = document.querySelector('#homeBtn'),
        cartBtn = document.querySelector('#cartBtn');

const items = [
    {
        id: 0,
        img: 'url(./img/B2B\ Ecommerce\ 2\ Cart\ Y.png)',
        title: 'Ceaser salad',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptas?',
        price: '6',
    },
    {
        id: 1,
        img: 'url(./img/B2B\ Ecommerce\ 2\ Cart\ Y.png)',
        title: 'Tomato soup',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptas?',
        price: '5',
    },
    {
        id: 2,
        img: 'url(./img/B2B\ Ecommerce\ 2\ Cart\ Y.png)',
        title: 'Steak',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptas?',
        price: '12',
    },
    {
        id: 3,
        img: 'url(./img/B2B\ Ecommerce\ 2\ Cart\ Y.png)',
        title: 'Orange juice',
        info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque, voluptas?',
        price: '3',
    },
];

const titles = ['Title', 'Price', 'Count', 'Total'];
const cartArray = [];


homeBtn.onclick = () => {
    const root = document.querySelector('#root');
    root.innerHTML = '';

    const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

    createCards(wrapper);
    root.append(wrapper);

    const btns = document.querySelectorAll('button');

    for(let btn of btns) {
        btn.onclick = (event) => {
            const id = event.currentTarget.id.split('_')[1];
            let findObjWithSameId = items.find((el) => el.id == id);

            const itemInCart = cartArray.find((el) => el.id == id);

            if(itemInCart) {
                itemInCart.count++;
            } else {   ////////////// создании копии обьекта
                cartArray.push({
                    id,
                    title: findObjWithSameId.title,
                    price: findObjWithSameId.price,
                    count: 1
                })
            } 
        }
    }
    
    console.log('Items: ', items);
    console.log('cartArray: ', cartArray);

};

cartBtn.onclick = () => {
    const root = document.querySelector('#root');
    root.innerHTML = '';

    const wrapper = document.createElement('div');
        wrapper.classList.add('wrapper');

        const table = document.createElement('table');
        table.classList.add('table');

    createTable(table);
    wrapper.append(table)
    root.append(wrapper);

    const total = document.createElement('div');
    total.innerHTML = `Total: ${cartArray.reduce((total, item) => total += item.count * item.price, 0)}`;
    root.append(total);
}

function createCards(divWrapper) {
    for(let i of items) {

        const box = document.createElement('div');
        box.id = 'box';

        const img = document.createElement('div');
        img.classList.add('img');

        const title = document.createElement('h2');
        title.id = 'title'
        title.innerHTML = i.title;

        const info = document.createElement('p');
        info.innerHTML = i.info;

        const price = document.createElement('h2');
        price.innerHTML = `Price: € ${i.price}` ;

        const buyBtn = document.createElement('button');
        buyBtn.classList.add('button');
        buyBtn.id = `Item_${i.id}`;
        buyBtn.innerText = 'Add to cart'


        box.append(img);
        box.append(title);
        box.append(info);
        box.append(price);
        box.append(buyBtn);
        divWrapper.append(box);
    }
};


function createTable(table) {

 for(let i = 0; i <= cartArray.length; i++)  {
    const tr = document.createElement('tr');
    if(i === 0) {
        tr.classList.add('table-title');
    }
    for(let j = 0; j < 4; j++) {
        const td = document.createElement('td');
        td.classList.add('table-text');
        td.classList.add(`id_${j + 1}`);
        if(i === 0) {
            td.innerHTML = titles[j];
            td.classList.add('table-title')
        } else if (j === 0) {
            console.log('i: ', cartArray[i - 1].title);
            console.log('td: ', td)
            td.innerHTML = cartArray[i - 1].title;
        } else if (j === 1) {
            td.innerHTML = `${cartArray[i - 1].price} Euro`;
        } else if (j === 2) {
            td.innerHTML = cartArray[i - 1].count;
        } else if (j === 3) {
            td.innerHTML = `${cartArray[i - 1].count * cartArray[i - 1].price} Euro`;
        }
        tr.append(td);    
        }
        table.append(tr);
    } 
};



//////////////Variant 2

// for(let i = 0; i < items.length; i++) {
//     const tr = document.createElement('tr');
//     tr.innerHTML = `<td>${items[i].title}</td>
//     <td>${items[i].price}</td>
//     <td>${items[i].count}</td>
//     <td>${items[i].price * items[i].count}</td>`
//     table.append(tr);
// }



