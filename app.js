/*-------------------------------- Constants --------------------------------*/

const numButtons = document.querySelectorAll('.number'); // stores all .number button elements in 'numButtons'
// console.dir(numButtons); 

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

const display = document.querySelector('.display'); // stores div.display element in 'display'
console.dir(display);

/*----------------------------- Event Listeners -----------------------------*/

numButtons.forEach(numBtn => {
    numBtn.addEventListener('click', handleNumClick);
});

/*-------------------------------- Functions --------------------------------*/

function handleNumClick(event) {
    // console.log(event.target.innerText);
    // console.log(parseInt(event.target.innerText));  // logs the innerText converted to a number
    display.innerText = parseInt(event.target.innerText); // inserts the converted number into the div.display element, shows on calculator screen
}