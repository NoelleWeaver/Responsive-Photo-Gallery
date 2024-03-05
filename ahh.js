var slideIndex = 1;
// showSlides(slideIndex);

function openModal() {
    document.getElementById("myModal").style.display = "block";
}

function closeModal() {
    document.getElementByClassName("fullscreen")[0].style.display = "none";
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}
function imageLoader(location){
    //div background to image url
    document.getElementsByClassName('fullscreen')[0].style.backgroundImage = `url("${location}")`
    //set display to block 
    console.log('test')
    document.getElementsByClassName('fullscreen')[0].style.display = 'block';
    document.getElementByClassName('fullscreen')[0].style.backgroundSize = 'cover';
    document.getElementByClassName('fullscreen')[0].style.backgroundSize = 'cover';
}

// function showSlides(n) {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     if (n > slides.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = slides.length}
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none";
//     }
//     slides[slideIndex-1].style.display = "block";
// }