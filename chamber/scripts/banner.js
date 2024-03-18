document.addEventListener("DOMContentLoaded", function(){
    const today = new Date().getDay();
    if (today === 1 || today === 2 || today === 3){
        document.getElementById("banner").style.display = "block";
    }

});

function closeBanner(){
    document.getElementById("banner").style.display = "none";
    
}

///////////////////Membership/////////////////////////////

const memberUrl = "https://jackloosantamaria.github.io/wdd230/chamber/data/members.json"

async function getMembership(){
    const response = await fetch(memberUrl);
    const data = await response.json();
    filterMember(data.companies);
}

const filterMember = (members) =>{
    const premiumMembers = members.filter(member => member.membership === 'Silver' || member.membership === 'Gold');

    const choosingMembers = premiumMembers.sort(() => 0.5 - Math.random()).slice(0,Math.floor(Math.random()*2) + 2);

    const container = document.getElementById("companies");
    container.innerHTML = "";

    choosingMembers.forEach(member => {
        const memberHTML = `
            <section class="box company">
                <img src="${member.logo}" alt="${member.name}">
                <h2>${member.name}</h2>
                <p>${member.description}</p>
                <p>${member.address}</p>
                <p><a href="tel:${member.phone}">${member.phone}</a></p>
                <p><a href="${member.url}" target="_blank">${member.url}</a></p>
            </section>
        `;

        container.innerHTML += memberHTML;
    });

    
}

getMembership();