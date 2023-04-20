let numOne = '';
let lastOperator = '';
let numTwo = '';
let equalsLast = false;

let buttonContainer = document.querySelectorAll('.calculator-button');
buttonContainer.forEach(button => button.addEventListener('click', buttonPressed));

let resultPanelStored = document.querySelector('.result .result-stored');
let resultPanelNew = document.querySelector('.result .result-new');

function buttonPressed(e) {
    let key = e.target.dataset.key;
    switch(key) {
        case '0':
            if(numTwo.length == 0){ break; }
        case '1':
        case '2':
        case '3':
        case '4':
        case '5':
        case '6':
        case '7':
        case '8':
        case '9':
            if(equalsLast){ reset(); }
            numTwo += key;
            break;
        case '.':
            if(equalsLast){ reset(); }
            if(numTwo.length === 0){ numTwo = '0.'; break; }
            if(!(numTwo.includes('.')) && numTwo.length > 0){ numTwo += '.'; } break;
        case '+':
        case '-':
        case 'x':
        case '÷':
            operate(key, false);
            numTwo = '';
            break;
        case '=': operate('=', false); break;
        case 'CE': reset(); break;
        case 'DEL':
            if(!equalsLast){
                numTwo = numTwo.slice(0, numTwo.length - 1);
            } else {
                reset();
            }
            break;
    }
    updateDisplay();
}

function operate(operator, override) {
    if(operator !== '='){
        if(numOne === ''){
            numOne = numTwo;
        } else {
            if(!equalsLast || override){
                let result = 0;
                switch(lastOperator){
                    case '+': result = add(numOne, numTwo); break;
                    case '-': result = subtract(numOne, numTwo); break;
                    case 'x': result = multiply(numOne, numTwo); break;
                    case '÷': result = divide(numOne, numTwo); break;
                    default: result = numTwo;
                }
                numOne = result;
            }
        }
        lastOperator = operator;
        equalsLast = false;
    } else {
        operate(lastOperator, true);
        equalsLast = true;
    }
}

function add(numOne, numTwo) {
    return +numOne + +numTwo;
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

function updateDisplay() {
    if(equalsLast){
        resultPanelStored.textContent = '';
        resultPanelNew.textContent = numOne;
    } else {
        resultPanelStored.textContent = numOne;
        resultPanelNew.textContent = numTwo;
    }
    if(resultPanelNew.textContent === ''){ resultPanelNew.textContent = '0'; }
}

function reset() {
    numOne = '';
    lastOperator = '';
    numTwo = '';
    equalsLast = false;
}