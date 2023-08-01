"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(n) {
    console.log('Result is ' + n);
}
printResult(add(5, 6));
// This has undefined return type becasue a return
// value of a function that does not return anything is used 
// as an argument to console.log.
console.log(printResult(add(5, 6)));
let combineResults;
combineResults = add;
console.log(combineResults(5, 12));
