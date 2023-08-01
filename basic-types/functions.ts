function add(n1: number, n2: number): number {
    return n1 + n2;
}

function printResult(n: number) {
    console.log('Result is ' + n);
}

printResult(add(5, 6));

// This has undefined return type becasue a return
// value of a function that does not return anything is used 
// as an argument to console.log.
console.log(printResult(add(5, 6)));

let combineResults: (a: number, b: number) => number;
combineResults = add;

console.log(combineResults(5, 12));

// Callback example.
function addAndHandle(n1: number, n2: number, cb: (num: number) => void) {
    const result = n1 + n2;
    cb(result);
}