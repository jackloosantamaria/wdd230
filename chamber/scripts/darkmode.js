const main = document.querySelector("#main-grid-box");
const body = document.querySelector("body");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("Dark Mode")){
        main.style.background = "#000";
        body.style.background = "#000";
        

        modeButton.textContent = "Light Mode";
    }else{
        main.style.background = "#fff";
        body.style.background = "#fff";
        modeButton.textContent = "Dark Mode"
    }


});