"use strict";
class Department {
    constructor(name) {
        this.name = name;
        // name: string;
        this.employees = [];
        this.assets = [];
    }
    describe() {
        console.log("Deparment: " + this.name);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeData() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
const accounting = new Department("Accounting");
console.log(accounting);
accounting.describe();
const objectTest = { describe: accounting.describe };
// objectTest.describe(); // This will return an error because of "this: Department".
// accounting.employees.push("Test") // This will return an error because it is a private proeprty.
accounting.addEmployee("Vice");
accounting.printEmployeeData();
accounting.addEmployee("Test");
accounting.printEmployeeData();
// Inheritance.
class ITDepartment extends Department {
    addAssets(asset) {
        this.assets.push(asset);
    }
    printAssets() {
        console.log(this.assets);
    }
}
const itdept = new ITDepartment("IT Dep");
itdept.describe();
itdept.addAssets("Computer");
itdept.printAssets();
class SpecialDept extends Department {
    get getLastMission() {
        if (this.lastMission) {
            return this.lastMission;
        }
        throw new Error("No last mission found!");
    }
    set setLastMission(mission) {
        if (this.lastMission === mission) {
            console.log("Mission already exists!");
        }
        this.lastMission = mission;
    }
    constructor(name, special_task, last_mission) {
        super(name);
        this.special_task = special_task;
        this.special_task = special_task;
        this.lastMission = last_mission;
    }
}
const specialdpt = new SpecialDept("special dept", "special operations", "Nicaragua");
console.log(specialdpt.special_task);
console.log(specialdpt.getLastMission);
specialdpt.setLastMission = "Nicaragua";
specialdpt.setLastMission = "Croatia";
console.log(specialdpt.getLastMission);
