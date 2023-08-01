"use strict";
// Built in generics.
const names = [];
names.push("Vice", "Turtle");
console.log(names.toString());
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 500);
});
promise.then(data => {
    console.log(data);
});
// Generic functions.
function mergeObject(objA, objB) {
    return Object.assign(objA, objB);
}
const intersection = mergeObject({ name: "Vice" }, { species: "Turtle" });
console.log(intersection.name);
function countAndDescribe(element) {
    let descriptionText = "Got no value.";
    if (element.length > 0) {
        descriptionText = "Got " + element.length + " elements.";
    }
    return [element, descriptionText];
}
console.log(countAndDescribe("Hey there!"));
// Create a function that will ensure it's second parameter is the key of the object passed as the first parameter.
function extractAndConvert(obj, key) {
    return obj[key];
}
extractAndConvert({ name: "Vice" }, "name");
// Create a generic class.
class DataStorage {
    constructor() {
        this.data = [];
    }
    addItem(item) {
        this.data.push(item);
    }
    removeItem(item) {
        this.data.splice(this.data.indexOf(item), 1);
    }
    getItems() {
        return [...this.data];
    }
}
const textStorage = new DataStorage();
textStorage.addItem("Hi");
