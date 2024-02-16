// export function rundwill(){

// document.querySelector('#temp').innerHTML = "9";
// const tempera = document.getElementById('temp');
// const temperature = parseFloat(tempera);
// document.querySelector('#windspeed').innerHTML = "6";
// const win = document.getElementById('temp');
// const winds = parseFloat(win);

// var temperature = 8.0;
// var winds = 8.0;

// //If temperature in C is below or equal to 10 and wind speed in kmh is above 4.8 do this
// if (temperature <= 10 && winds > 4.8){
//     const tempfah = CtoF(temperature);
//     const windsmph = KtoM(winds);
//     const windchi = calculatewind(tempfah,windsmph);

//     document.querySelector('#windchill').innerHTML = `${FtoC(windchi)} °C`;
// }
// else{
//     document.querySelector('#windchill').innerHTML = "N/A";
// }
// }








// //convert °C to °F

// function CtoF(temperature){
//     return (temperature * 9/5) + 32;
// }

// //convert mph to kph
// function KtoM(winds){
//     return winds / 1.60934;
// }

// //calculating windchill
// function calculatewind(CtoF, MtoK){
//     const windc = 35.74 + 0.6215 * CtoF - 35.75 * Math.pow(MtoK,0.16) + 0.4275 * CtoF * Math.pow(MtoK,0.16);
//     return windc;
// }

// //converting function
// export function FtoC(tempF){
//     return (tempF - 32) * 5 / 9;
// }



//working js

// var temp= 57;
// var wSpeed= 15;
// var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

// var windChill= Math.round(windChill);
// document.getElementById("windchill").innerHTML= windChill;




var temp= parseFloat(document.getElementById('temp').innerHTML);
var wSpeed= parseFloat(document.getElementById('windspeed').innerHTML);
if (temp <=50 && wSpeed >3){
var windChill= (35.74 + (0.6215 * temp))-(35.75 * Math.pow(wSpeed,0.16)) + (0.4275*temp*Math.pow(wSpeed,0.16));

var windChill= Math.round(windChill);
document.getElementById("windchill").innerHTML= windChill;
}
else{
    document.getElementById("windchill").innerHTML = "N/A";
}
