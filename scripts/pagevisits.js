const pageDisplay = document.querySelector(".visit");
let arrayVisits = Number(window.localStorage.getItem("arrayVisits-ls")) || 0;

if (arrayVisits !==0){
    pageDisplay.textContent = arrayVisits;
    }
else{
    pageDisplay.textContent = `First Visit`;
}

arrayVisits++;

localStorage.setItem("arrayVisits-ls", arrayVisits);
