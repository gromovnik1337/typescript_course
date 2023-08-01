"use strict";
let age = 29;
if (age > 20) {
    var isOld = true;
    console.log(isOld);
}
// Arrow functions.
const add = (a, b) => {
    return a + b;
};
console.log(add(2, 5));
// Alternative syntax - first defining input and return types of the function:
const printOutput = output => console.log(output);
printOutput(add(2, 5));
// Spread operator (..)
const hobbies = ["Sports", "Piano"];
const activeHobbies = ["Turtling"];
activeHobbies.push(...hobbies); // It will push a coma-separated list of values.
// Rest parameters - also (...)
const addRest = (...numbers) => {
    return numbers.reduce((curResult, curValue) => curResult + curValue, 0);
};
console.log(addRest(5, 6, 5, 7));
// Array & object destructuring.
const [hobby1, hobby2, ...remainingHobbies] = activeHobbies;
console.log(hobby1, hobby2);
const person = {
    firstName: "vice",
    oldFactor: 31
};
const { firstName, oldFactor } = person;
