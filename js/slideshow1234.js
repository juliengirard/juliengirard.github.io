/**
 * Multi-gallery carousel (4 modals) adapted from W3Schools
 * Modified by Julien Girard - 2025
 */

function createSlideshow(modalId, slideClass, dotClass, captionId) {
  let index = 1;

  function openModal() {
    document.getElementById(modalId).style.display = "block";
    showSlides(index);
  }

  function closeModal() {
    document.getElementById(modalId).style.display = "none";
  }

  function plusSlides(n) {
    showSlides(index += n);
  }

  function currentSlide(n) {
    showSlides(index = n);
  }

  function showSlides(n) {
    let i;
    const slides = document.getElementsByClassName(slideClass);
    const dots = document.getElementsByClassName(dotClass);
    const captionText = document.getElementById(captionId);

    if (n > slides.length) index = 1;
    if (n < 1) index = slides.length;

    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    if (slides.length > 0) {
      slides[index - 1].style.display = "block";
      dots[index - 1].className += " active";
      if (captionText) {
        captionText.innerHTML = dots[index - 1].alt || "";
      }
    }
  }

  // Keyboard support (only if modal is open)
  document.addEventListener("keydown", function (event) {
    if (document.getElementById(modalId).style.display === "block") {
      if (event.key === "Escape") closeModal();
      if (event.key === "ArrowRight") plusSlides(1);
      if (event.key === "ArrowLeft") plusSlides(-1);
    }
  });

  return { openModal, closeModal, plusSlides, currentSlide };
}

// Instantiate 4 independent slideshows
const slideshow1 = createSlideshow("myModal1", "mySlides1", "demo1", "caption1");
const slideshow2 = createSlideshow("myModal2", "mySlides2", "demo2", "caption2");
const slideshow3 = createSlideshow("myModal3", "mySlides3", "demo3", "caption3");
const slideshow4 = createSlideshow("myModal4", "mySlides4", "demo4", "caption4");

// Bind functions globally for inline HTML use
window.openModal1 = slideshow1.openModal;
window.closeModal1 = slideshow1.closeModal;
window.plusSlides1 = slideshow1.plusSlides;
window.currentSlide1 = slideshow1.currentSlide;

window.openModal2 = slideshow2.openModal;
window.closeModal2 = slideshow2.closeModal;
window.plusSlides2 = slideshow2.plusSlides;
window.currentSlide2 = slideshow2.currentSlide;

window.openModal3 = slideshow3.openModal;
window.closeModal3 = slideshow3.closeModal;
window.plusSlides3 = slideshow3.plusSlides;
window.currentSlide3 = slideshow3.currentSlide;

window.openModal4 = slideshow4.openModal;
window.closeModal4 = slideshow4.closeModal;
window.plusSlides4 = slideshow4.plusSlides;
window.currentSlide4 = slideshow4.currentSlide;
