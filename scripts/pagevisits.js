const pageDisplay = document.querySelector(".visit");
let arrayVisits = Number(window.localStorage.getItem("arrayVisits-ls")) || 0;

if (arrayVisits !==0){
    pageDisplay.textContent = `Number of Visits: ${arrayVisits}`;
    }
else{
    pageDisplay.textContent = `First Visit`;
}

arrayVisits++;

localStorage.setItem("arrayVisits-ls", arrayVisits);

document.addEventListener("ContentLoaded", function(){
    const lastVisit = localStorage.getItem("lastVisit");

    if(lastVisit){
        const currentDate = Date.now();
        const dateDifference = currentDate - parseInt(lastVisit);
        const dayDifference = Math.floor(dateDifference / (1000 * 60 * 60 * 24));

        const message = document.getElementById("message");

        if(dayDifference === 0){
            message.textContent = "Welcome Back!"
        }
        else{
            message.textContent = `Your last visit was ${dayDifference} days ago`;
        }
    }
    else{
        localStorage.setItem("lastVisit", Date.now());
        document.getElementById("message").textContent = "Welcome!"
    }
});