const calculator = document.querySelector('.calculator');
const buttons = calculator.querySelector('.buttons');
const operationDisplay = document.querySelector('.operation');
const resultDisplay = document.querySelector('.result');
const operatorKeys = buttons.querySelectorAll('[data-type="operator"]');

buttons.addEventListener('click', event => {
  if (!event.target.closest('button')) return;

  console.log('hello world');
});

function operate (firstNumber, operator, secondNumber) {
  firstNumber = parseInt(firstNumber);
  secondNumber = parseInt(secondNumber);

  if (operator === 'plus') return firstNumber + secondNumber;
  if (operator === 'minus') return firstNumber - secondNumber;
  if (operator === 'times') return firstNumber * secondNumber;
  if (operator === 'divide') return firstNumber / secondNumber;
}
