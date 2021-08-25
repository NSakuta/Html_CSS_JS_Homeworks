class User {
    constructor(name, age, city) {
        this.userId = User.id++,
        this.name = name,
        this.age = age,
        this.city = city
    }
    static id = 0;

    renderUser() {
        return `
            <li data-id="${this.userId}">${this.name}, ${this.city}</li>
        `
    }
}