const calculator = document.querySelector('.calculator');
const buttons = calculator.querySelector('.buttons');
const operatorKeys = buttons.querySelectorAll('[data-type="operator"]');
const operationDisplay = document.querySelector('.operation');
const resultDisplay = document.querySelector('.result');

buttons.addEventListener('click', event => {
  if (!event.target.closest('button')) return;

  const key = event.target;
  const keyValue = key.textContent;
  const displayValue = operationDisplay.textContent;
  const { type } = key.dataset;
  const { previousKeyType } = calculator.dataset;

  if (type === 'number') {
      if (displayValue === '0' || previousKeyType === 'operator') {
      operationDisplay.textContent = keyValue;
    } else {
      operationDisplay.textContent = displayValue + keyValue;
    }
  };

  if (type === 'operator') {
    operatorKeys.forEach(element => { element.dataset.state = '' })
    key.dataset.state = 'selected';

    calculator.dataset.firstNumber = displayValue;
    calculator.dataset.operator = key.dataset.key;
    calculator.dataset.operand = key.dataset.operand;
  };

  if (type === 'equal') {
    const firstNumber = calculator.dataset.firstNumber;
    const operator = calculator.dataset.operator;
    const operand = calculator.dataset.operand;
    const secondNumber = displayValue;
    operationDisplay.textContent = `${firstNumber} ${operand} ${secondNumber}`;
    resultDisplay.textContent = operate(firstNumber, operator, secondNumber);
  };

  //key.dataset.operand

  if (type === 'clear') {
    operationDisplay.textContent = '';
    resultDisplay.textContent = '0';
    delete calculator.dataset.firstNumber;
    delete calculator.dataset.operator;
  };

  if (type === 'delete'){
    operationDisplay.textContent = operationDisplay.textContent.slice(0,-1);
  };

  calculator.dataset.previousKeyType = type;
});

function operate (firstNumber, operator, secondNumber) {
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);

  if (operator === 'plus') return firstNumber + secondNumber;
  if (operator === 'minus') return firstNumber - secondNumber;
  if (operator === 'multiply') return firstNumber * secondNumber;
  if (operator === 'divide') return firstNumber / secondNumber;
}
