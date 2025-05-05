/*-------------------------------- Constants --------------------------------*/

const numButtons = document.querySelectorAll('.number'); // stores all .number button elements in 'numButtons'
const operButtons = document.querySelectorAll('.operator'); // stores all button.operator elements in 'operButtons'
// console.dir(numButtons); 
console.dir(operButtons);

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

const display = document.querySelector('.display'); // stores div.display element in 'display'
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
    // console.log(event.target.innerText);
    // console.log(parseInt(event.target.innerText));  // logs the innerText converted to a number
    display.innerText = parseInt(event.target.innerText); // inserts the converted number into the div.display element, shows on calculator screen
}

function handleOperClick(event) {                      // callback function for 'operButtons' eventListener
    console.log(event.target.innerText);
}