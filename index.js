let numOne = 0;
let operator = '';
let numTwo = 0;

function operate(operator) {
    let result = 0;
    switch(operator){
        case '+': result = add(numOne, numTwo); break;
        case '-': result = subtract(numOne, numTwo); break;
        case '*': result = multiply(numOne, numTwo); break;
        case '/': result = divide(numOne, numTwo); break;
    }
    numOne = result;
    return result;
}

function add(numOne, numTwo) {
    return numOne + numTwo;
}
function subtract(numOne, numTwo) {
    return numOne - numTwo;
}
function multiply(numOne, numTwo) {
    return numOne * numTwo;
}
function divide(numOne, numTwo) {
    return numOne / numTwo;
}