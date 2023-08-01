// Define an object.
const person = {
    name: 'Vice',
    age: 31,
    hobbies: ['Sports', 'Turtling']
};

enum Role { ADMIN, READ_ONLY, AUTHOR }; // custom type

// Define an object explicitly - not a good practice.
// It is better to let TS infer the type.
// However, there are cases when type inference does not work as intended.
const person_detailed: {
    name: string;
    age: number;
    hobbies: string[];
    identity: [number, string]; // tuple
    role: Role;
} = {
    name: 'Vice',
    age: 31,
    hobbies: ['Sports', 'Turtling'], // Array.
    identity: [2, 'turtle'],
    role: Role.ADMIN
};

console.log(person)

for (const hobby of person.hobbies) {
    console.log(hobby);
    console.log(hobby.toUpperCase());
}

if (person_detailed.role === 0) {
    console.log('Admin!')
}