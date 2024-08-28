let slides = document.querySelectorAll(".slide");
let currentSlide = 0;
let btnNext = document.querySelector(".btn");
let btnPrev = document.querySelector(".btn1");

slides.forEach((slide, index) => {
  slide.style.display = "none";
  if (index === 0) {
    slide.style.display = "block";
  }
});
btnNext.addEventListener("click", () => {
  currentSlide++;
  if (currentSlide >= slides.length) {
    currentSlide = 0;
  }
  updateSlider();
});

btnPrev.addEventListener("click", () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  updateSlider();
});

function updateSlider() {
  slides.forEach((slide) => {
    slide.style.display = "none";
  });
  slides[currentSlide].style.display = "block";
}
