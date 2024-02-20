// let newYear = new Date(document.lastModified);
// document.querySelector("#lastModified").textContent = newYear;

// const choice = {
//     year: "numeric"
// };

// document.querySelector("#date").innerHTML = new Date().toLocaleDateString('en-US', choice);

const newYear = document.querySelector("#date");
const lastModification = document.querySelector("#lastModified");

let currentYear = new Date().getFullYear();
let lastModified = document.lastModified;

newYear.innerHTML = `${currentYear}`;
lastModification.innerHTML = `${lastModified}`;






//Hamburger Button

const hamButton = document.querySelector('#menu');
const choices = document.querySelector('.choices');

hamButton.addEventListener('click', () => {
	choices.classList.toggle('open');
	hamButton.classList.toggle('open');
});