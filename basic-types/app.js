"use strict";
let userInput;
let userName;
userInput = 5;
userInput = 'Test';
if (typeof userInput === 'string') {
    userName = userInput;
}
// Because this function crashes the script (error is occured, 
// error is thrown) it will return a never type - "It will never return". 
function generateError(message, code) {
    throw { message: message, errorCode: code };
}
generateError('Issue!', 500);
