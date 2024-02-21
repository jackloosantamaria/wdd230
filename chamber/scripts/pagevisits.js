const pageDisplay = document.querySelector(".visits");
let arrayVisits = Number(window.localStorage.getItem("arrayVisits-ls")) || 0;

if (arrayVisits !==0){
    pageDisplay.textContent = arrayVisits;
    }
else{
    pageDisplay.textContent = `First Visit`;
}

arrayVisits++;

localStorage.setItem("arrayVisits-ls", arrayVisits);

document.addEventListener("DOMContentLoaded", function () {
    const lastVisit = localStorage.getItem("lastVisit");

    if(lastVisit){
        const currentDate = Date.now();
        const daysDifference = currentDate - parseInt(lastVisit);
        const days = Math.floor(daysDifference / (1000 * 60 * 60 *24));

        const showMessageElement = document.getElementById("show_message");

        if (days === 0){
            showMessageElement.textContent = `Back so soon! Awesome!`;
        }else{
            showMessageElement.textContent = `You last visited ${days} days ago.`;
        }
    }else{
        localStorage.setItem("lastVisit", Date.now());
        document.getElementById("show_message").textContent = "Welcome! Let us know if you have any questions."
    }
});
