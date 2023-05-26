/* class Person {
    name = "Kanishka";
    constructor() {
        this.age = 30;
    }
    greet() {
        console.log(
            "Hai, I am" + this.name + "and I am" + this.age + " years old"
        )
    }
} */

function Person() {
    this. age = 30;
    this.name = "Kanishka";
    this.greet = function() {
        console.log(
            "Hai, I am " + this.name + " and I am " + this.age + " years old"
        )
    }
}


const person = new Person();
person.greet()