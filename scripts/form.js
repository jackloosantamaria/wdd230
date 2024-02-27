const kp1 = document.querySelector("#keyphrase");
const kp2 = document.querySelector("#keyphrase2");
const showdisplay = document.querySelector("display");

kp2.addEventListener("focusout", verify);

function verify(){
    if(kp1.value !== kp2.value){
        showdisplay.textContent = "!Key Phrases do not match";
        showdisplay.style.visibility = "show";
        kp2.style.backgroundColor = "#fff0f3";
        kp2.value = "";
        kp2.focus();
    }else{
        showdisplay.style.display = "none";
        kp2.style.backgroundColor = "#fff";
        kp2.style.color = "#000";
    }
}

const rangeValue = document.getElementById("rangevalue");
const range = document.getElementById("r");

range.addEventListener("change", displayRValue);
range.addEventListener("input", displayRValue);

function displayRValue(){
    rangeValue.innerHTML = range.value;
}