"use strict";
// Define an object.
const person = {
    name: 'Vice',
    age: 31,
    hobbies: ['Sports', 'Turtling']
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
})(Role || (Role = {}));
; // custom type
// Define an object explicitly - not a good practice.
// It is better to let TS infer the type.
// However, there are cases when type inference does not work as intended.
const person_detailed = {
    name: 'Vice',
    age: 31,
    hobbies: ['Sports', 'Turtling'],
    identity: [2, 'turtle'],
    role: Role.ADMIN
};
console.log(person);
for (const hobby of person.hobbies) {
    console.log(hobby);
    console.log(hobby.toUpperCase());
}
if (person_detailed.role === 0) {
    console.log('Admin!');
}
