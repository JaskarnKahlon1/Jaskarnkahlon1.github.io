

function check() {
    console.log('test');
}

function submit() {
    alert(output.textContent);
}

function reset() {
    outputInt = 0;
    output.textContent = outputInt;
}

function minus() {
    if (outputInt > 0) {
    outputInt -=12;
    output.textContent = outputInt; }
    
}

function plus() {
    if (outputInt < 100) {
    outputInt +=7;
    output.textContent = outputInt;
    }
}

function random() {
    outputInt = randomNumber(0, 100);
    output.textContent = outputInt;
}

function randomNumber(min, max) {
    const num = Math.floor(Math.random() * (max - min + 1)) + min;
    return num;
  }



const output = document.querySelector('.output');
let outputInt = parseInt(output.textContent);
console.log(outputInt);

const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
// const randomButton = document.querySelector('.random-button').addEventListener('click', random);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);
// const minusButton = document.querySelector('.minus-button').addEventListener('click', minus);
// const plusButton = document.querySelector('.plusButton').addEventListener('click', plus);

const plusButton = document.getElementById('plusButton');

function moveButtonPlus() {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    plusButton.style.left = `${x}px`;
    plusButton.style.top = `${y}px`;
    if (outputInt < 100) {
        outputInt +=5;
        output.textContent = outputInt;
        }
}

const minusButton = document.getElementById('minusButton');

function moveButtonMinus() {
    const x = Math.floor(Math.random() * window.innerWidth);
    const y = Math.floor(Math.random() * window.innerHeight);
    minusButton.style.left = `${x}px`;
    minusButton.style.top = `${y}px`;
    if (outputInt > 0) {
        outputInt -= 1;
        output.textContent = outputInt; }
}






