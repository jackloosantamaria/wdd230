const baseURL = "https://jackloosantamaria.github.io/wdd230/";
const linksURL = "https://jackloosantamaria.github.io/wdd230/data/links.json";
const card = document.querySelector(".card-grid");

async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data.weeks);
}

const displayLinks = (weeks) =>{
    weeks.forEach((week) =>{
        let cards = document.createElement("section");
        let week = document.createElement("li");
        let activity = document.createElement("a")

        //week.textContent = `${week.lesson}`;
        activity.setAttribute("href", week.url);
        activity.textContent = week.title;

        cards.appendChild(week);
        cards.appendChild(activity);

        card.appendChild(cards);
    });
}

getLinks();