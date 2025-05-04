/*-------------------------------- Constants --------------------------------*/
const numButtons = document.querySelectorAll('.number'); // stores all .number button elements in numButtons
console.dir(numButtons); 

/*-------------------------------- Variables --------------------------------*/

/*------------------------ Cached Element References ------------------------*/

/*----------------------------- Event Listeners -----------------------------*/
numButtons.forEach(numBtn => {
    numBtn.addEventListener('click', handleNumClick);
});

/*-------------------------------- Functions --------------------------------*/
function handleNumClick(event) {
    console.log(event.target.innerText);
}