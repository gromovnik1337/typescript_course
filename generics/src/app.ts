// Built in generics.
const names: Array<string> = [];
names.push("Vice", "Turtle");

console.log(names.toString())

const promise: Promise<number> = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve(10);
    }, 500);
});

promise.then(data => {
    console.log(data);
})


// Generic functions.

function mergeObject<T extends Object, U extends Object>(objA: T, objB: U) { // This basically says: input will be 2 different objects.
    return Object.assign(objA, objB);
}

const intersection = mergeObject({ name: "Vice" }, { species: "Turtle" });
console.log(intersection.name)

// Create a function that ensures it will always get an object that has length property.
interface Lengthy {
    length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
    let descriptionText = "Got no value.";
    if (element.length > 0) {
        descriptionText = "Got " + element.length + " elements.";
    }

    return [element, descriptionText];
}

console.log(countAndDescribe("Hey there!"));

// Create a function that will ensure it's second parameter is the key of the object passed as the first parameter.
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
    return obj[key];
}

extractAndConvert({ name: "Vice" }, "name");

// Create a generic class.
class DataStorage<T> {
    private data: T[] = [];

    addItem(item: T) {
        this.data.push(item);
    }

    removeItem(item: T) {
        this.data.splice(this.data.indexOf(item), 1);
    }

    getItems() {
        return [...this.data];
    }
}

const textStorage = new DataStorage<string>();
textStorage.addItem("Hi");