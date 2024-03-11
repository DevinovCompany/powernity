document.addEventListener("DOMContentLoaded", function () {
  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  const nextButton = document.getElementById('next');
  const prevButton = document.getElementById('prev');

  function goToSlide(n) {
    slides[currentSlide].style.display = 'none';
    currentSlide = (n + totalSlides) % totalSlides;
    slides[currentSlide].style.display = 'flex';
  }

  nextButton.addEventListener('click', () => {
    goToSlide(currentSlide + 1);
  });

  prevButton.addEventListener('click', () => {
    goToSlide(currentSlide - 1);
  });

  // Fonction pour initialiser le slider et afficher le premier slide
  function initSlider() {
    slides.forEach((slide, index) => {
      slide.style.display = 'none'; // Cacher tous les slides
    });
    slides[0].style.display = 'flex'; // Afficher le premier slide
  }

  // Automatiquement défile
  setInterval(() => {
    goToSlide(currentSlide + 1);
  }, 3000); // Changer de slide toutes les 3 secondes

  initSlider(); // Appel de la fonction pour initialiser le slider
});
