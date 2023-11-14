// script.js

// JavaScript untuk mengatur carousel
var carouselItems = document.querySelectorAll('.carousel-item');
var currentSlide = 0;

function showSlide(slideIndex) {
  carouselItems.forEach(function(item) {
    item.classList.remove('active');
  });
  carouselItems[slideIndex].classList.add('active');
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + carouselItems.length) % carouselItems.length;
  showSlide(currentSlide);
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % carouselItems.length;
  showSlide(currentSlide);
}

// Ganti slide setiap 3 detik
setInterval(nextSlide, 3000);

function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
      x.style.display = "none";
  } 
  else {
      x.style.display = "block";
  }
}