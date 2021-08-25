class Comment {
    constructor(User, Message, text, date) {
        this.id = Message.messageId,
        this.text = text,
        this.date = date
        this.userId = User.userId

    }
    static id = 0; 

    renderComment() {
        return `
            <div>
                <h3>Commented: ${findUserById(this.userId).name}</h3>
                <p>${this.text}</p>
                <p>Published on: ${this.date}</p>
            </div>
        `
    }
};