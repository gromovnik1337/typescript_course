interface Person {
    name: string;
    age: number;

    greet(phrase: string): void;
}

let user1: Person;

user1 = {
    name: "Vice",
    age: 30,
    greet(phrase: string) {
        console.log(phrase + " " + this.name);
    }
}

user1.greet("Hi there I am");

class Employee implements Person {

    constructor(public name: string, public age: number) { }

    greet(phrase: string) {
        console.log(phrase + " " + this.name);
    }
}

let user2 = new Employee("Tatlimus Prime", 30);
user2.greet("Hi! I am");

// Interfaces as function types:
interface AddFunction {
    (a: number, b: number): number
}

let adder: AddFunction;
adder = (n1: number, n2: number) => {
    return n1 + n2;
}
console.log(adder(3, 4));