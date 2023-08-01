"use strict";
function add(n1, n2, showResult, phrase) {
    console.log(typeof n1, typeof n2);
    console.log(phrase);
    if (showResult) {
        console.log(n1 + n2);
    }
    else {
        return n1 + n2;
    }
}
const number1 = 5;
const number2 = 2.8;
const printResult = true;
const phraseTest = 'test';
const result = add(number1, number2, printResult, phraseTest);
