const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]


// Declare variables left and right arrow 
const leftArrow = document.querySelector(".arrow_left");
const rightArrow = document.querySelector(".arrow_right");

console.log (rightArrow)



// Declare variable dot  
const navDots = document.querySelector(".dots");

// Count total of slides and add a dot for each slide
const totalSlides = slides.length;


// Add a dot for each slide at the bottom of the slide
for (let i = 0; i < totalSlides; i++) {
	const dot = document.createElement('span');   // Create <span> for dot
	dot.classList.add('dot');    // Add class .dot to each dot
	navDots.appendChild(dot);   // Add dot to  <div class="dots">
  }


// Make the select dot different with the method classList
  const selectedDot = navDots.querySelector('.dot');
  if (selectedDot) {
	selectedDot.classList.add('dot_selected');
  }

// Change image, text and dot to infinity !!! HERE !!!
let currentSlide = 0; // Variable pour suivre l'index de la diapositive actuelle

leftArrow.addEventListener('click', function() {
  console.log("Click on left arrow");
  currentSlide--;  // Décrémenter l'index de la diapositive actuelle

  if (currentSlide < 0) {  // Vérifier si index est inférieur à zéro pour revenir à la dernière diapositive
    currentSlide = totalSlides - 1;
  }

  const slide = slides[currentSlide];   // Mise à jour image et texte correspondants à la diapo actuelle
  const image = document.querySelector('.banner-img');
  const tagLine = document.querySelector('#banner p');
  image.src = './assets/images/slideshow/' + slide.image;
  tagLine.innerHTML = slide.tagLine;

  const dots = navDots.querySelectorAll('.dot');   // Mise à jour du bullet point actif
  dots.forEach((dot, index) => {
    dot.classList.remove('dot_selected');
    if (index === currentSlide) {
      dot.classList.add('dot_selected');
    }
  });
});

rightArrow.addEventListener('click', function() {
  console.log("Clic flèche droite");
  currentSlide++;  // Incrémenter index de la diapo actuelle

  if (currentSlide >= totalSlides) { // check si index est sup ou = au nombre de diapos pour revenir à la 1ere diapositive
    currentSlide = 0;
  }

  const slide = slides[currentSlide];  // Mise à jour image et  texte correspondants à la diapo en cours
  const image = document.querySelector('.banner-img');
  const tagLine = document.querySelector('#banner p');
  image.src = './assets/images/slideshow/' + slide.image;
  tagLine.innerHTML = slide.tagLine;

  const dots = navDots.querySelectorAll('.dot');   // Mise à jour du bullet point actif
  dots.forEach((dot, index) => {
    dot.classList.remove('dot_selected');
    if (index === currentSlide) {
      dot.classList.add('dot_selected');
    }
  });
});