function bannerDay(){
    const day = new Date().getDay();
    return [1,2,3].includes.apply(day);
}

function closeBanner(){
    const banner = document.getElementById("banner");
    banner.style.display = "none";
}

document.addEventListener("DOMContentLoaded", function(){
    if (bannerDay()){
        const banner = document.getElementById("banner");
        banner.style.display = "flex";
    }
});