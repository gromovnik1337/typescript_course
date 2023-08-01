let userInput: unknown;
let userName: string;

userInput = 5;
userInput = 'Test';
if (typeof userInput === 'string'){ 
    userName = userInput;
}


// Because this function crashes the script (error is occured, 
// error is thrown) it will return a never type - "It will never return". 
function generateError(message: string, code: number): never {
    throw {message: message, errorCode: code};
}

generateError('Issue!', 500);