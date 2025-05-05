/*-------------------------------- Constants --------------------------------*/

const numButtons = document.querySelectorAll('.number'); // stores all .number button elements in 'numButtons'
const operButtons = document.querySelectorAll('.operator'); // stores all button.operator elements in 'operButtons'
// console.dir(numButtons); 
// console.dir(operButtons);

/*-------------------------------- Variables --------------------------------*/

let firstNum = null;        // var to store first number
let secondNum = null;       // var to store second number 
let operatorSelect = null;  // var to store selected operator 

/*------------------------ Cached Element References ------------------------*/

const display = document.querySelector('.display'); // stores div.display element in 'display'
display.innerText = '0';                            // display shows '0' until a number button is pressed
// console.dir(display);

/*----------------------------- Event Listeners -----------------------------*/

numButtons.forEach(numBtn => {                          // listens for click event on 'numButtons'
    numBtn.addEventListener('click', handleNumClick);   // with callback function 'handleNumClick()'
});

operButtons.forEach(operBtn => {                         // listens for click event on 'operButtons'
    operBtn.addEventListener('click', handleOperClick);  // with callback function 'handleOperClick()'
});

/*-------------------------------- Functions --------------------------------*/

function handleNumClick(event) {                       // callback function for 'numButtons' eventListener
    const number = parseInt(event.target.innerText);        // stores innerText converted to number of the .button.number element into 'number'
    // const numberTwo = parseInt(event.target.innerText);
    if (operatorSelect === null) {                      // if no operator was selected
        firstNum = number;                                 // number clicked is stored in var 'firstNum'
        display.innerText = firstNum;                    
        console.log(`first number: ${firstNum}`);           // logs firstNum
        const isNum = typeof (firstNum);                    // double checking number datatype
        console.log(isNum);                                 // still a number!
    } else {
        secondNum = number;                                 // if operatorSelect !== null, second number is stored
        display.innerText = secondNum;
        console.log(`second number: ${secondNum}`);
        const isNum2 = typeof (secondNum);
        console.log(isNum2);
    }
    // display.innerText = parseInt(event.target.innerText); // inserts the converted number into the div.display element, shows on calculator screen
}

function handleOperClick(event) {                      // callback function for 'operButtons' eventListener
    const operator = event.target.innerText;           // stores the innerText of button pressed in 'operator'
    // console.log(operator);
    if (operator === 'C') {                            // if 'C' button is pressed
        firstNum = null;                               // all vars reset back to null 
        secondNum = null;
        operatorSelect = null;
        display.innerText = '0';                       // clear the screen and display '0' 
    } else {                                           // otherwise...         
        operatorSelect = operator;

    }
}