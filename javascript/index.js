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

let img = ['slide2.png','slide3.png','slide4.png','slide5.png','slide6.png'];

const prev = document.getElementById('prev');
const next = document.getElementById('next');
const slides = document.getElementById('images');

let current = 0;


next.addEventListener('click', () => {
    slides.style.backgroundImage = "url('../images/" + img[current] + "')";
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