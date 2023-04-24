

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

const minusButton = document.querySelector('.minus-button').addEventListener('click', minus);
const plusButton = document.querySelector('.plus-button').addEventListener('click', plus);
const resetButton = document.querySelector('.reset-button').addEventListener('click', reset);
const randomButton = document.querySelector('.random-button').addEventListener('click', random);
const submitButton = document.querySelector('.submit-button').addEventListener('click', submit);



// const slider = document.getElementById('slider');
// const optionsDiv = document.getElementById('options');
// const options = optionsDiv.querySelectorAll('button');
// slider.addEventListener('click', function(event) {
//     optionsDiv.style.display = 'block';
//     options.forEach(option => {
//       option.addEventListener('click', function() {
//         slider.value = value;
//         outputInt = slider.value;
//           output.textContent = outputInt;

//         optionsDiv.style.display = 'none';
//       });
//     });
//   });



// // Get the canvas element
const canvas = document.querySelector('canvas');

// Set the width and height of the canvas
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const context = canvas.getContext('2d');

let x = 0;
let y = 0;
let num = 0;




canvas.addEventListener('click', event => {
  x = event.clientX;
  y = event.clientY;
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const color = `rgb(${r}, ${g}, ${b})`;

  context.fillStyle = color;
  context.beginPath();
  context.arc(x, y, 10, 0, 2 * Math.PI);
  context.fill();
  num++;
  console.log(num);
  outputInt = num;
  output.textContent = outputInt;


});






