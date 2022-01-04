class biodata {
    constructor(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }

    render(element) {
        let print = `Name : ${this.name} <br> Age : ${this.age} <br>Gender : ${this.gender}`;
        element.innerHTML = print;
    }
}

const person = new biodata("isana", 22, "male");
const app = document.getElementById("app");
person.render(app);