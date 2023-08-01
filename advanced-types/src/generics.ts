// Intersection types
type Admin = {
    name: string;
    privileges: string[];
};

type Employee = {
    name: string;
    startDate: Date;
};

type ElevatedEmployee = Admin & Employee;

const e1: ElevatedEmployee = {
    name: "Vice",
    privileges: ["make-server"],
    startDate: new Date()
};

// Type guards.
type Combinable = string | number;
let CmbFn = (a: Combinable, b: Combinable) => {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}

console.log(CmbFn("hello", "world"));

type UnknownEmployee = Admin | Employee;
function printEmployeeInformation(emp: UnknownEmployee) {
    console.log("Employee name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Priviliges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("startDate: " + emp.startDate);
    }

}

printEmployeeInformation({ name: "Test", privileges: ["none"], startDate: new Date() });

// Discriminated Unions.
interface Bird {
    type: "bird"; // This is a type assignment! This is a literal type.
    flyingSpeed: number;
}

interface Horse {
    type: "horse";
    runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
    let speed;
    switch (animal.type) {
        case "bird":
            speed = animal.flyingSpeed;
            break;
        case "horse":
            speed = animal.runningSpeed;
            break;
    }
    console.log("Moving at speed: " + speed);
}

moveAnimal({ type: "horse", runningSpeed: 30 });

// Type Casting.
// These will be infered as general types.
const paragraph = document.querySelector("p");
const paragraph_id = document.getElementById("message-output");

// These are specifically type casted.
const userInputElement = <HTMLInputElement>document.getElementById("user-input");
userInputElement.value = "Accessing value field!"

const alsoUserInputElement = <HTMLInputElement>document.getElementById("user-input")! as HTMLInputElement;
alsoUserInputElement.value = "Again accessing value field!"

// Index Properties.
interface ErrorContainer {
    [prop: string]: string; // Unknown name & number of properties but their names can be interpreted as strings and they will contain strings.
    id: string;
    // num: number; // This will not be possible, because of index type limitations.
}

const errorBag: ErrorContainer = {
    id: "Mail error",
    email: "Not a valid email!"
}

// Function overloads.
function add(a: string, b: string): string;
function add(a: number, b: number): number;
function add(a: Combinable, b: Combinable) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}