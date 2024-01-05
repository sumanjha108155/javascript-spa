// geeting the dom elements 
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slides = document.getElementById('images');


// creating variable for current pointer and image array
let current = 0;
let img = ['slide2.png','slide3.png','slide4.png','slide5.png','slide6.png']; 

// setting event listeners for imae carousel
next.addEventListener('click', () => {
    let imagesrc= "url('../images/" + img[current] + "')";
    slides.style.backgroundImage = imagesrc;
    current = current + 1 ;
    if(current > img.length) {
        slides.style.backgroundImage = "url('../images/slide1.png')";
        current = 0;
    }
});

prev.addEventListener('click', () => {
    
    if(current == 0) {
        slides.style.backgroundImage = "url('../images/slide1.png')";
        current = -1;
    } else if(current < 0 ) {
        current = img.length -1;
        slides.style.backgroundImage = "url('../images/" + img[current] + "')";
    }
    else {
        current = current - 1;
        slides.style.backgroundImage = "url('../images/" + img[current] + "')";
    }
});

setInterval(() =>{
    slides.style.backgroundImage = "url('../images/" + img[current] + "')";
    current = current + 1 ;
    if(current > img.length) {
        slides.style.backgroundImage = "url('../images/slide1.png')";
        current = 0;
    }
}, 4000)



// functions for redirection to home about images and services page
function home() {
    window.location.href = '#home';
}

function about() {
    window.location.href = '#aboutus';
}

function image() {
    window.location.href = '#images';
}

function services() {
    window.location.href = '#services';
}

