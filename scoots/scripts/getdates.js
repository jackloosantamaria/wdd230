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

//Weather info





const currentTemp = document.querySelector("#temp");
const weatherIcon = document.querySelector("#weather-icon");
const captionDesc = document.querySelector("figcaption");
const humidity = document.querySelector("#hum");


const url = 'https://api.openweathermap.org/data/2.5/weather?lat=20.50619779894648&lon=-86.94570287731085&units=metric&appid=d93c11a8f8e7a7283aed823d47647002';

async function apiFetch(){
    try{
        const response = await fetch(url);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }
        else{
            throw Error(await response.text());
        }
    }catch(error){
    }
}

function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}`;
	humidity.innerHTML = `${data.main.humidity}`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", "weather icon");
    captionDesc.textContent = `${desc}`;
    
    
}

//Forecast

const forecastTemp1 = document.querySelector("#forecastTemp1");
const weatherIcon1 = document.querySelector("#weatherIcon1");
const figCap1 = document.querySelector("#fig2");
const forecast1 = document.querySelector("#forecast1");
const humidity1 = document.querySelector("#humi");

const url1 = 'https://api.openweathermap.org/data/2.5/forecast?lat=20.50619779894648&lon=-86.94570287731085&units=metric&appid=d93c11a8f8e7a7283aed823d47647002';

async function forecastApiFetch(){
    try{
        const response = await fetch(url1);
        if(response.ok){
            const data = await response.json();
            console.log(data);
            displayForecast(data);
        }
        else{
            throw Error(await response.text());
        }
    }catch(error){
        console.log(error);
    }
}

function displayForecast(data){
    forecastTemp1.innerHTML = `${data.list[7].main.temp.toFixed(1)}&deg;C`;
	humidity1.innerHTML = `${data.list[7].main.humidity}`;
    const iconsrc1 = `https://openweathermap.org/img/w/${data.list[7].weather[0].icon}.png`;
    let desc1 = data.list[6].weather[0].description;
    weatherIcon1.setAttribute("src", iconsrc1);
    figCap1.textContent = `${desc1}`;

}   

function forecastDates(){
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];

    const currentDate = new Date();
    const todayIn = currentDate.getDay();

    forecast1.innerHTML = `${daysOfWeek[(todayIn + 1) % 7]}`;

}

apiFetch();
forecastDates();
forecastApiFetch();