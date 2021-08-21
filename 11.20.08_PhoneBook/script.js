const addContact = document.querySelector('#addContact'),
    contactList = document.querySelector('#contactList'),
    wrapper = document.querySelector('.wrapper');
    contactListArray = [];

addContact.onclick = createForm;
contactList.onclick = createListOfContacts;


function createForm() {
    wrapper.innerHTML = '';

    const formWrapper = document.createElement('div'),
        form = document.createElement('form'),
        name = document.createElement('input'),
        phone = document.createElement('input'),
        email = document.createElement('input'),
        address = document.createElement('input'),
        text = document.createElement('textarea'),
        addBtn = document.createElement('input'), 
        br = document.createElement('br');

    let iterator = 0;

    name.focus();

    formWrapper.classList.add('form-wrapper');

    form.id = "contact-form";

    name.id = 'name';
    name.classList.add('input');
    name.placeholder = 'Type name';

    phone.id = 'phone';
    phone.classList.add('input');
    phone.placeholder = 'Type phone';

    email.id = 'email';
    email.classList.add('input');
    email.placeholder = 'Type email';

    address.id = 'address';
    address.classList.add('input');
    address.placeholder = 'Type address';

    text.id = 'text';
    text.placeholder = 'Type description';

    addBtn.id = 'addBtn';
    addBtn.type = 'submit';
    addBtn.value = 'ADD';

    wrapper.append(formWrapper);
    formWrapper.append(form);
    form.append(name);
    form.append(br.cloneNode(true));
    form.append(phone);
    form.append(br.cloneNode(true));
    form.append(email);
    form.append(br.cloneNode(true));
    form.append(address);
    form.append(br.cloneNode(true));
    form.append(text);
    form.append(br.cloneNode(true));
    form.append(addBtn);

    form.addEventListener('submit', createArrayFromInputs);

function createArrayFromInputs(event) {
    event.preventDefault();

    const allInputs = document.querySelectorAll('.input');        

    const contact = {
            id: iterator++,
            name: name.value,
            phone: phone.value,
            email: email.value,
            address: address.value,
            description: text.value
        };

    contactListArray.push(contact);
    resetForm(allInputs, text);
    }
};

/////////////////////Contacts page

function createListOfContacts() {

    wrapper.innerHTML = '';

    const leftRigthBoxes = document.createElement('div'),
        leftBox = document.createElement('div'),
        rigthBox = document.createElement('div'),
        ulLeft = document.createElement('ul'),
        info = document.createElement('div');

    leftRigthBoxes.id = 'left-right-box';
    leftBox.id = 'left';
    ulLeft.id = 'contactsLeft';
    rigthBox.id = 'right';
    info.classList.add('info');

    wrapper.append(leftRigthBoxes);
    leftRigthBoxes.append(leftBox);
    leftBox.append(ulLeft);
    leftRigthBoxes.append(rigthBox);

    /////////Create left side List

    for(let i = 0; i < contactListArray.length; i++) {
        const listLeft = document.createElement('li');
            clearBtn = document.createElement('button');

        listLeft.classList.add('left-list');
        clearBtn.classList.add('clearBtn');

        listLeft.innerHTML = `<h1 class="full-name">${contactListArray[i].name}</h1>
        <p class="p-left">${contactListArray[i].phone}</p>
        <hr>`
        listLeft.id = `box_${i}`;
        clearBtn.id = `clearBtn_${i}`;
        clearBtn.innerText = 'X';

        listLeft.append(clearBtn);
        ulLeft.append(listLeft);

        
        const clearBtns = document.querySelectorAll('.clearBtn');
        
    ////////////////Create right side list

        listLeft.onclick = (event) => {
            const id = event.currentTarget.id.split('_')[1];
            console.log('Event(List): ', event);
            console.log('click on list', id);
            if (!contactListArray[id]) return;

            info.id = `Info_${id}`
            
            info.innerHTML = `<h3 class="full-name name-r">${contactListArray[id].name}</h3>
                <p class="p-right">Phone number: ${contactListArray[id].phone}</p>
                <p class="p-right">Email: ${contactListArray[id].email}</p>
                <p class="p-right">Adress: ${contactListArray[id].address}</p>
                <p class="p-right">Description: ${contactListArray[id].description}</p>`
            
            rigthBox.append(info);
    
    ////////////////Erase button

            for (let i of clearBtns) {
                i.onclick = (event) => {
                    console.log('Event(X button): ', event);
                    const id = event.currentTarget.id.split('_')[1];
                    console.log('click on X: ', id);
                    const infos = document.querySelectorAll('.info');

                    let specificLi = document.querySelector(`#box_${id}`);
                    let specificInfo = document.querySelector(`#Info_${id}`);

                    specificLi.remove();
                    specificInfo.remove();
                    contactListArray.splice(id, 1);
   
                event.stopPropagation();

                }   
            }
        }
    }
};

function resetForm(inputs, text) {
    inputs.forEach(input => input.value = '');
    text.value = '';
};

