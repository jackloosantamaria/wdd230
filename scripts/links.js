const baseURL = "https://jackloosantamaria.github.io/wdd230/";
const linksURL = "https://jackloosantamaria.github.io/wdd230/data/links.json";
const card = document.querySelector(".card-grid");

async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    //console.log(data);
    displayLinks(data.lessons);
}

const displayLinks = (weeks) =>{
    weeks.forEach((week) =>{
        //let cards = document.createElement("section");
        const list = document.createElement("li");
        const activity = week.links.map(link => {
            return `<a href="${link.url}">${link.title}</a>`;
        }).join(' | ');

        list.innerHTML = activity;

        card.appendChild(list);
    });
}

getLinks();