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

renderContacts(contacts);

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
            renderContacts(contacts);
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
    root.querySelector('.list').onclick = (event)=>{
        contactClickHandler(event, array);
    }
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
        type="email"
        name="email"
        placeholder="Type email" required
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

function contactClickHandler(event, array) { 
    let li = event.target;
    console.log('li: ', li);
    if(li.classList.contains('delete')) {
        array.splice(li.parentNode.dataset.index, 1); /// 
        renderContacts(array);
    } else {
        if(li.tagName !== 'LI') {
            li = event.target.parentNode;
        }
        if(currentContactRow) {
            currentContactRow.classList.remove('item-active'); // фон становится белым
        }
        console.log()
        showContact(li.dataset.index, array)
        console.log('li.dataset.index', li.dataset.index)
        currentContactRow = li;
        currentContactRow.classList.add('item-active'); // фон становится зеленым
    }
}

function showContact(index, array) {
    const contact = array[+index];

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

    console.log('form: ', form)
    

    if(!formValidation(form)) {
        contacts.push({
            name: form.name.value,
            phone: form.phone.value,
            email: form.email.value,
            address: form.address.value,
        });

        showSuccess(form.name.value);
        clearForm(form);
    } 

    // clearForm(form);
    //     renderContacts(contacts);
    //     currentPageLink = document.querySelector('a[href = "contacts"]');
    //     navigationThroughPages('contacts');

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
    console.log('contacts: ', contacts)

    const city = searchInput.value.toLowerCase();
    const contactsByCity = contacts.filter(item => item.address.toLowerCase() == city);

    console.log('contactbycity: ', contactsByCity)
    searchInput.value = '';
    renderContacts(contactsByCity);
}

document.body.onkeydown = function (e) {
    if (e.key === 'Enter') {
        const city = searchInput.value.toLowerCase();
        const contactsByCity = contacts.filter(item => item.address.toLowerCase() === city);
        searchInput.value = '';
        renderContacts(contactsByCity);
    }
}

/////////////////Validation

function formValidation(form) {
    let usersMistakes = false; 

    for(let i of form) {
        if(i.localName !== 'button') {
            i.classList.remove('is-invalid');
        
            if(i.value.trim() === '') {
                i.classList.add('is-invalid');
                usersMistakes = true;
            } else {
                i.classList.remove('is-invalid');
            }
        }
    }

    if(usersMistakes) {
        showError('Please, fill in all requiered fields!');
    }

    return usersMistakes;
}

function showError(errorText) {
    let div = root.querySelector('.alert');
    console.log('div bevore: ', div)

    if(div === null) {
        div = document.createElement('div')
        console.log('div after: ', div)
        root.prepend(div);
    }
    div.className = 'alert alert-danger';
    div.innerHTML = errorText;

    return div;

}

function showSuccess(name) {
    let div = root.querySelector('.alert');

    if(div === null) {
        div = document.createElement('div')
        root.prepend(div);
    }
    div.className = 'alert alert-success';
    div.innerHTML = `${name}, you have success`;

    return div;
}