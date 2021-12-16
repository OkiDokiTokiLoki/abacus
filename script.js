let buttons = Array.from(document.querySelectorAll('.buttons'));
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



buttons.map(button => {
    button.addEventListener('click', (e) => {
        console.log('clicked');
        console.log(e);
        console.log(e.target);
        console.log(e.target.innerText);
    })
})








// buttons.addEventListener('click', (e) => {
//     const {target} = e;

//     if (!target.matches('button')){
//         return;
//     }

//     if (target.classList.contains('operator')){
//         console.log(`operator: ${target.value}`);
//         return;
//     }

//     if (target.classList.contains('decimal')){
//         console.log(`decimal: ${target.value}`);
//         return;
//     }

//     if (target.classList.contains('clear')){
//         console.log(`clear: ${target.value}`);
//         return;
//     }

//     // if (target.classList.contains('delete')){
//     //     console.log(`operator: ${target.value}`);
//     //     return;
//     // }

//     console.log(`number: ${target.value}`);
// });






// https://freshman.tech/calculator/