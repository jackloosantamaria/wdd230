let newYear = new Date(document.lastModified);
document.querySelector("#lastModified").textContent = newYear;

const choice = {
    year: "numeric"
};

document.querySelector("#date").innerHTML = new Date().toLocaleDateString("en-US", choice);