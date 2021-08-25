class Message {
    constructor(User, title, text, date) {
        this.userId = User.userId,
        this.title = title, 
        this.text = text
        this.messageId = Message.id++
        this.comments = [];
        this.date = date
    }

    static id = 0;

    renderMessage() {
        return `
            <div data-id="${this.messageId}">
                <h1>Title: ${this.title}</h1>
                <h3>Published: ${this.date}</h3>
            </div>
        `
    }

    renderFullInfo() {
        return `
            <div>
                <h2>${this.title}</h2>
                <p>${this.text}</p>
                <h4>Published: ${this.date}</h4>
                <hr>
                ${(this.comments.length === 0) ? '<p>No comment</p>' : this.comments.map(item => item.renderComment()).join('')}
                
            </div>`
            
    }
};