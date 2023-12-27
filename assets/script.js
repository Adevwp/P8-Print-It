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

// Add event listener on arrow first left, then right

leftArrow.addEventListener("click", function () {
	console.log("Clic on left arrow");
  });

rightArrow.addEventListener("click", function () {
	console.log("Clic on right arrow");
  });

// Declare variable dot  
const bannerDot = document.querySelector(".dots");


