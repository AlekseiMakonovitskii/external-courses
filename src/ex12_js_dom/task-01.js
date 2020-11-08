var slideIndex = 1;

function next() {
  showSlides(slideIndex += 1);
}

function back() {
  showSlides(slideIndex -= 1);
}

function showSlides(x) {
  var slides = document.getElementsByClassName("slider");

  if (x > slides.length) {
    slideIndex = 1;
  }

  if (x < 1) {
    slideIndex = slides.length;
  }

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }

  slides[slideIndex - 1].style.display = "block";
}
