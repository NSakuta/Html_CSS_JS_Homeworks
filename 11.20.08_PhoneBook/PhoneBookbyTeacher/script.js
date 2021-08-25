const contacts = [
    {name:'John Doe',phone:'123456789',email:'john@mail.com',address:'Tel Aviv',desc:'Best friend'},
    {name:'Jack Sparrow',phone:'0987654321',email:'jack@mail.com',address:'Carribian Sea',desc:'Pirate'},
    {name:'Tony Stark',phone:'4566778',email:'tony@stark.com',address:'New York',desc:'IronMen'}
];

const root = document.querySelector('#root'),
    nav = document.querySelector('.nav'),
    searchInput = document.querySelector('.search input'),
    searchBtn = document.querySelector('#search-btn');

let currentPageLink = document.querySelector('a[href = "contacts"]'),
    currentContactRow;  

renderContacts();

nav.onclick = (event) => {
    event.preventDefault();
    if(event.target.tagName == 'A') {
        currentPageLink.classList.remove('active'); // удаляем class active у старой ссылки
        currentPageLink = event.target; // перезаписываем ссылку по которой кликнули (currentPageLink будет такой - куда кликнули)
        currentPageLink.classList.add('active'); // устанавливаем ей класс active

        navigationThroughPages(currentPageLink.getAttribute('href')); // что храниться в атрибуте href
    }
    console.log('event current target: ', event.target.tagName);

}

function navigationThroughPages(path) {
    switch(path) {
        case 'contacts':
            renderContacts();
            break;
        case 'addContact':
            renderAddContact();
            break;
        case 'registration':
        renderRegistrationForm();
    }
}

function renderContacts(array) {
    root.className = 'contacts'; 
    root.innerHTML = `
        <ul class = 'list'>
            ${array.map(mapToContactRow).join('')}
        </ul>
        <div class = "contact-view">No selected contact</div>
    `;
    root.querySelector('.list').onclick = contactClickHandler;
}

function renderAddContact() {
    root.className = 'add-contact';
    root.innerHTML = `
    <form name = "addContactForm" action="#">
        <input
        id="inputName"
        class="form-control"
        type="text"
        name="name"
        placeholder="Type name"
        />
        <input
        id="inputPhone"
        class="form-control"
        type="text"
        name="phone"
        placeholder="Type phone"
        />
        <input
        id="inputEmail"
        class="form-control"
        type="text"
        name="email"
        placeholder="Type email"
        />
        <input
        id="inputAddress"
        class="form-control"
        type="text"
        name="address"
        placeholder="Type address"
        />
        <textarea
        id="inputDesc"
        class="form-control"
        type="text"
        name="desc"
        placeholder="Type description"
        ></textarea>
        <div class="buttons"><button class="add-btn">Add</button></div>
    </form>`


    const form = document.forms.addContactForm; // form собирается в псевдоколлекцию forms по name атрибуту
    form.onsubmit = formSubmitHandler;
}

function renderRegistrationForm() {
    root.innerHTML = 'Registration page';
}

function mapToContactRow(contact, index) {
    return `<li class = 'list-item' data-index = ${index}>
            <h2 class = 'title'>${contact.name}</h2>
            <h3 class = 'sub-title'>${contact.phone}</h3>
            <div class = 'delete'></div>
        </li>`
};

function contactClickHandler(event) { 
    let li = event.target;
    console.log('li: ', li);
    if(li.classList.contains('delete')) {
        contacts.splice(li.parentNode.dataset.index, 1); /// 
        console.log('li.parentNode.dataset.index: ',li.parentNode.dataset.index)
        renderContacts();
    } else {
        if(li.tagName !== 'LI') {
            li = event.target.parentNode;
        }
        if(currentContactRow) {
            currentContactRow.classList.remove('item-active'); // фон становится белым
        }
        showContact(li.dataset.index)
        currentContactRow = li;
        currentContactRow.classList.add('item-active'); // фон становится зеленым
    }
}

function showContact(index) {
    const contact = contacts[+index];

    const contactView = root.querySelector('.contact-view')
    contactView.classList.add('contact-view');
    contactView.innerHTML = `
        <h2>${contact.name}</h2>
        <div class="contact-view-row">
        <img src="./img/technology.png" alt="" />
        <h3>${contact.phone}</h3>
        </div>
        <div class="contact-view-row">
        <img src="./img/multimedia.png" alt="" />
        <h3>${contact.email}</h3>
        </div>
        <div class="contact-view-row">
        <img src="./img/buildings.png" alt="" />
        <h3 ">${contact.address}</h3>
        </div>
        <p>${contact.desc}</p>
    `
};

function formSubmitHandler(event) {
    event.preventDefault();
    const form = event.target;

    contacts.push({
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        address: form.address.value,
        //desc: form.desc.value
    });

    clearForm(form);
    renderContacts();
    currentPageLink = document.querySelector('a[href = "contacts"]');
    navigationThroughPages('contacts');

}

function clearForm(form) {
    for(let el of form) {
        if(el.localName != 'button') {
            el.value = '';
        }
    }
};

//////////////////Search 

searchInput.oninput = () => {
    const filterContact = contacts.filter((item) =>
        item.name.toLowerCase().startsWith(searchInput.value.toLowerCase()));

        renderContacts(filterContact);
};

searchBtn.onclick = function () {
    const city = searchInput.value.toLowerCase();
    const contactsByCity = contacts.filter(item => item.address.toLowerCase() === city);
    searchInput.value = '';
    renderContacts(contactsByCity);
}

// document.body.onkeydown = function(e) {
//     if(e.key === 'Enter') {

//     }
// }

// searchInput.addEventlistener('keydown', (e) => console.log(e)); // Option 2 

