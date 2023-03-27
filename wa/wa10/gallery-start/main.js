const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [`pic1.jpg`,`pic2.jpg`, `pic3.jpg`, `pic4.jpg`, `pic5.jpg`]

const alt1 = {
    'pic1.jpg' : 'reservoir',
    'pic2.jpg' : 'road',
    'pic3.jpg' : 'bridge',
    'pic4.jpg' : 'snow',
    'pic5.jpg' : 'museum',

}

/* Declaring the alternative text for each image file */

// /* Looping through images */



function fn1() {
    for (var i = 0; i < images.length; i++) {
    var newImage = document.createElement('img');
    newImage.setAttribute('src', "images/pic" + (i+1) + ".jpg");
    newImage.setAttribute('alt', alt1[i]);
    thumbBar.appendChild(newImage);
  }
  }
  fn1();
  thumbBar.addEventListener('click', (e) => {
        displayedImage.src = e.target.src;
        displayedImage.alt = e.target.alt;
  });
/* Wiring up the Darken/Lighten button */
btn.addEventListener('click', (e) => {
    if(e.target.className == 'dark') {
        btn.setAttribute('class', 'light');
        btn.textContent = "Lighten";
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.textContent = "Darken";
        overlay.style.backgroundColor = 'rgba(0,0,0,0)';
    }
});