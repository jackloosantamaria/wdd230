const modeButton = document.querySelector("#mode");
const main = document.querySelector("#main-grid-box");
const body = document.querySelector("#body-index");
const bodyDiscover = document.querySelector("#body-discover")
const bodyDirectory = document.querySelector("#body-directory")
const bodyJoin = document.querySelector("#join-body");
const mainDiscover = document.querySelector("#discovery-main");
const mainDirectory = document.querySelector("#directory-main");
const mainJoin = document.querySelector("#main-join");

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("Dark Mode")){
        main.style.background = "#000";
        body.style.background = "#000";
        //mainDiscover.style.background = "#000";
    

        modeButton.textContent = "Light Mode";
    }else{
        main.style.background = "#fff";
        body.style.background = "#fff";
        // mainDiscover.style.background = "#fff";


        modeButton.textContent = "Dark Mode"
    }


});

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("Dark Mode")){
        bodyDiscover.style.background = "#000";
        mainDiscover.style.background = "#000";
    

        modeButton.textContent = "Light Mode";
    }else{
        bodyDiscover.style.background = "#fff";
        mainDiscover.style.background = "#fff";


        modeButton.textContent = "Dark Mode"
    }


});

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("Dark Mode")){
        bodyDirectory.style.background = "#000";
        mainDirectory.style.background = "#000";
    

        modeButton.textContent = "Light Mode";
    }else{
        bodyDirectory.style.background = "#fff";
        mainDirectory.style.background = "#fff";


        modeButton.textContent = "Dark Mode"
    }


});

modeButton.addEventListener("click", () => {
    if (modeButton.textContent.includes("Dark Mode")){
        bodyJoin.style.background = "#000";
        mainJoin.style.background = "#000";
    

        modeButton.textContent = "Light Mode";
    }else{
        bodyJoin.style.background = "#fff";
        mainJoin.style.background = "#fff";


        modeButton.textContent = "Dark Mode"
    }


});