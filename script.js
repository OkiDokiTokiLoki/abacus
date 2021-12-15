const operationDisplay = document.querySelector('.operation');
const resultDisplay = document.querySelector('.result');

const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
}

function updateDisplay(){
    resultDisplay.textContent = calculator.displayValue;
}

updateDisplay();

