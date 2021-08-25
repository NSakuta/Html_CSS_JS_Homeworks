const users = [
    new User('Vasya Pupkin', 32, 'Berlin'),
    new User('Natalie Sokuseva', 30, 'Riga'),
    new User('Ilya Makarenko', 33, 'London'),
    new User('Katja Kac', 23, 'Berlin')
];
const currentDate = new Date();
let fullDate = `${currentDate.getDate()}/${(currentDate.getMonth() + 1)}/${currentDate.getFullYear()}`

const usersList = document.querySelector('.user-list');

const createHTMLList = renderUserList(users);

const messages = [
    new Message(users[0], 'About me', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusantium sapiente ullam temporibus voluptas magnam, delectus cum impedit voluptatibus labore.', fullDate),
    new Message(users[1], 'My new story', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusantium sapiente ullam temporibus voluptas magnam, delectus cum impedit voluptatibus labore.', fullDate),
    new Message(users[2], 'Important information', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusantium sapiente ullam temporibus voluptas magnam, delectus cum impedit voluptatibus labore.', fullDate),
    new Message(users[2], 'Great!', 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia accusantium sapiente ullam temporibus voluptas magnam, delectus cum impedit voluptatibus labore.', fullDate)
];


messages[0].comments.push(new Comment(users[1], messages[0], 'First comment of user-1', fullDate));
messages[0].comments.push(new Comment(users[2], messages[0], 'Second comment of User-1', fullDate));
messages[1].comments.push(new Comment(users[0], messages[1], 'First comment of user-2', fullDate));
messages[1].comments.push(new Comment(users[0], messages[1], 'Second comment of user-2', fullDate));
messages[2].comments.push(new Comment(users[1], messages[2], 'First comment of user-3', fullDate));

console.log('Messanges: ', messages)

const leftBox = document.querySelector('.left'),
    rightBox = document.querySelector('.right');

usersList.onclick = (event) => {
    rightBox.innerHTML = ''
    console.log('event: ', event.target.tagName);
    if(event.target.tagName === 'LI') {
        const user = users.find(item => event.target.dataset.id == item.userId);
        const userMessage = messages.filter(message => message.userId === user.userId)

        console.log('UserMessages: ',userMessage);

        if(!userMessage.length) {  
            leftBox.innerHTML = `<p>No messages</p>`
        } else {
            leftBox.innerHTML = userMessage.map(item => item.renderMessage()).join('');
        }     
    }
};

leftBox.onclick = (event) => {
    let target = event.target;
    if(target.tagName !== 'DIV') {
        target = event.target.parentNode;
    }

    console.log('target: ', target);

    const message = messages.filter(el => el.messageId === +target.dataset.id);

    console.log('message: ', message);

    //const user = findUserById(+target.dataset.id)
    
    rightBox.innerHTML = message.map(item => item.renderFullInfo()).join('');
};

function renderUserList(array) {
    return array.forEach(element => {
        usersList.innerHTML += element.renderUser();
    })
};

function findUserById(id) {
    return users.find(el => el.userId === id);
}
