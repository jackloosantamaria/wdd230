const modeButton = document.querySelector("#mode");
const header = document.querySelector("header");
const main = document.querySelector("#main-grid-box");
const footer = document.querySelector("footer");
const menu = document.querySelector(".choices");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("Dark Mode")){
        main.style.background = "#000";
        body.style.background = "#000";
        //header.style.background = "#000";
        //footer.style.background = "#000";
        // menu.style.background = "#000";

        modeButton.textContent = "Light Mode";
    }else{
        main.style.background = "#fff";
        body.style.background = "#fff";
        modeButton.textContent = "Dark Mode"
    }


});