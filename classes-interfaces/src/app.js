"use strict";
let user1;
user1 = {
    name: "Vice",
    age: 30,
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
};
user1.greet("Hi there I am");
class Employee {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet(phrase) {
        console.log(phrase + " " + this.name);
    }
}
let user2 = new Employee("Tatlimus Prime", 30);
user2.greet("Hi! I am");
let adder;
adder = (n1, n2) => {
    return n1 + n2;
};
console.log(adder(3, 4));
