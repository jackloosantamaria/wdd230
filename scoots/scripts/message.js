const maxTempMessage = document.querySelector("#temperatureMessage");
const maxTempSpan = document.querySelector("#tempMax");

let maxTemp = -1000;

const url123 = 'https://api.openweathermap.org/data/2.5/weather?lat=20.50619779894648&lon=-86.94570287731085&units=metric&appid=d93c11a8f8e7a7283aed823d47647002';

async function apiFetch(){
    try{
        const response = await fetch(url123);
        if (response.ok){
            const data = await response.json();
            console.log(data);
            displayResults(data);
        }else{
            throw Error(await response.text());
        }
    }catch(error){

    }
}

function displayResults(data){
        const maxTemp = data.main.temp_max;
        maxTempSpan.textContent = `${maxTemp}`;
    
}

// function findMaxTemperature(data){
//     let maxTemp = -Infinity;
//     data.list.forEach(item => {
//         const temp = item.main.temp_max;
//         if(temp > maxTemp){
//             maxTemp = temp;
//         }
//     });
//     return maxTemp;
// }

apiFetch();

function closeNotice(){
    document.getElementById("temperatureMessage").style.display = "none";   
}
