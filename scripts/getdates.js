let newYear = new Date(document.lastModified);
document.querySelector("#lastModified").textContent = newYear;

const choice = {
    year: "numeric"
};

document.querySelector("#date").innerHTML = new Date().toLocaleDateString('en-US', choice);

//Hamburger Button

const hamButton = document.querySelector('#menu');
const choices = document.querySelector('.choices');

hamButton.addEventListener('click', () => {
	choices.classList.toggle('open');
	hamButton.classList.toggle('open');
});