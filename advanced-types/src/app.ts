function Logger(constructor: Function) {
    console.log("Logging...");
    console.log(constructor);
}

function FactoryLogger(logString: String) {
    return function Logger(constructor: Function) {
        console.log(logString);
        console.log(constructor);
    };
}

function WithTemplate(template: string, hookID: string) {
    return function (_: Function) {
        const hookEl = document.getElementById(hookID);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    }
}

//@Logger
@FactoryLogger("Logging Person")
@WithTemplate("<h1>Person Object</h1>", "app")
class Person {
    name = 'Max';

    constructor() {
        console.log(`Creating a person object...`);
    }
}

const pers = new Person();
console.log(pers);