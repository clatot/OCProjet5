const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let slideNumber = 0;
let leftArrow = document.querySelector("#banner .arrow_left")
let rightArrow = document.querySelector("#banner .arrow_right") 
let dotsParent = document.querySelector("#banner .dots")
let slideImage = document.querySelector("#banner .banner-img")
let tagLineTitle = document.querySelector("#banner p")

for (let i = 0; i < slides.length; i++) {
	let dot = document.createElement("span")
	dot.classList.add("dot")
	dotsParent.appendChild(dot)
}
let dots = document.querySelectorAll("#banner .dot")

change()

leftArrow.addEventListener("click", function () {

	if (slideNumber === 0) {
		slideNumber = (slides.length -1)
	} else {
		slideNumber --
	}

	defilement()

	console.log("Fleche gauche cliquée.")
})

rightArrow.addEventListener("click", function () {

	if (slideNumber === (slides.length -1)) {
		slideNumber = 0
	} else {
		slideNumber ++
	}

	defilement()

	console.log("Fleche droite cliquée.")
})

function defilement() {
	for (let i = 0; i < slides.length; i++) {
		dots[i].classList.remove("dot_selected")
	}
	
	change()
}

function change() {
	dots[slideNumber].classList.add("dot_selected")
	slideImage.src = slides[slideNumber].image
	tagLineTitle.innerHTML = slides[slideNumber].tagLine
}