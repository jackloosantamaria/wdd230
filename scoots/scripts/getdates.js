//date

// let newYear = new Date(document.lastModified);
// document.querySelector("#lastModified").textContent = newYear;

// const choice = {
//     year: "numeric"
// };

// document.querySelector("#date").innerHTML = new Date().toLocaleDateString("en-US", choice);

//New Format Date

const newYear = document.querySelector("#date");
const lastModification = document.querySelector("#lastModified");

let currentYear = new Date().getFullYear();
let lastModified = document.lastModified;

newYear.innerHTML = `${currentYear}`;
// lastModification.innerHTML = `${lastModified}`;


//Hamburger Button

const hamButton = document.querySelector('#menu');
const choice = document.querySelector('.choices');

hamButton.addEventListener('click', () => {
	choice.classList.toggle('open');
	hamButton.classList.toggle('open');
});

//image transition

const slides = document.querySelectorAll(".slide");
let currentSlide = 0;

function nextSlide() {
	currentSlide = (currentSlide + 1) % slides.length;
	updateSlider();
}

function updateSlider(){
	const slideWidth = slides[0].offsetWidth;
	const newPosition = currentSlide * slideWidth;
	document.querySelector(".slider").style.transform = `translateX(-${newPosition}px)`;
}

setInterval(nextSlide, 3000);
