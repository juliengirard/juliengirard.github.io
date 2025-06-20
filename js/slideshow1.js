/**
 * carousel from https://www.w3schools.com/howto/tryit.asp?filename=tryhow_css_js_lightbox
 * modifield by Julien Girard - 2025
 */

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

document.addEventListener("keydown", function(event) {
  if (event.key === "Escape") {
    closeModal();
  } else if (event.key === "ArrowRight") {
    plusSlides(1);  // go to next slide
  } else if (event.key === "ArrowLeft") {
    plusSlides(-1); // go to previous slide
  }
});