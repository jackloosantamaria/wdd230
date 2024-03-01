let newYear = new Date(document.lastModified);
document.querySelector("#lastModified").textContent = newYear;

const choice = {
    year: "numeric"
};

document.querySelector("#date").innerHTML = new Date().toLocaleDateString("en-US", choice);

//Hamburger Button

const hamButton = document.querySelector('#menu');
const choices = document.querySelector('.choices');

hamButton.addEventListener('click', () => {
	choices.classList.toggle('open');
	hamButton.classList.toggle('open');
});

//hidden timestamp


const currentDate = new Date();
  
const mm = currentDate.getMonth() + 1;
const dd = currentDate.getDate();
const yy = currentDate.getFullYear();
const hours = currentDate.getHours();
const min = currentDate.getMinutes();
const sec = currentDate.getSeconds();

const newDateTime = `${mm.toString().padStart(2, '0')}-${dd.toString().padStart(2, '0')}-${yy} ${hours.toString().padStart(2, '0')}:${min.toString().padStart(2, '0')}:${sec.toString().padStart(2, '0')}`;

document.getElementById('dhidden').value = newDateTime;