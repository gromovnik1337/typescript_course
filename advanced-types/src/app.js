"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function Logger(constructor) {
    console.log("Logging...");
    console.log(constructor);
}
function FactoryLogger(logString) {
    return function Logger(constructor) {
        console.log(logString);
        console.log(constructor);
    };
}
function WithTemplate(template, hookID) {
    return function (_) {
        const hookEl = document.getElementById(hookID);
        if (hookEl) {
            hookEl.innerHTML = template;
        }
    };
}
//@Logger
let Person = class Person {
    constructor() {
        this.name = 'Max';
        console.log(`Creating a person object...`);
    }
};
Person = __decorate([
    FactoryLogger("Logging Person"),
    WithTemplate("<h1>Person Object</h1>", "app")
], Person);
const pers = new Person();
console.log(pers);
