"use strict";
const e1 = {
    name: "Vice",
    privileges: ["make-server"],
    startDate: new Date()
};
let CmbFn = (a, b) => {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
};
console.log(CmbFn("hello", "world"));
function printEmployeeInformation(emp) {
    console.log("Employee name: " + emp.name);
    if ("privileges" in emp) {
        console.log("Priviliges: " + emp.privileges);
    }
    if ("startDate" in emp) {
        console.log("startDate: " + emp.startDate);
    }
}
printEmployeeInformation({ name: "Test", privileges: ["none"], startDate: new Date() });
function moveAnimal(animal) {
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
const userInputElement = document.getElementById("user-input");
userInputElement.value = "Accessing value field!";
const alsoUserInputElement = document.getElementById("user-input");
alsoUserInputElement.value = "Again accessing value field!";
const errorBag = {
    id: "Mail error",
    email: "Not a valid email!"
};
function add(a, b) {
    if (typeof a === "string" || typeof b === "string") {
        return a.toString() + b.toString();
    }
    return a + b;
}
