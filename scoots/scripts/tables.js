//Rentals

document.addEventListener("DOMContentLoaded", async function(){
    
    const linksURL = "https://jackloosantamaria.github.io/wdd230/scoots/data/rentals.json"

    async function loadRentalData() {
        try{
            const response = await fetch(linksURL);
            const data = await response.json();
            return data["Max Rental Pricing"];
        }catch(error){
            console.error("Error loading rental data: ", error);
            return null;
        }
    }

    async function renderTable(){
        const rentalData = await loadRentalData();
        if (!rentalData){
            return;
        }

        const tableBody = document.querySelector("#rentalTable tbody");

        for (const rentalType in rentalData){
            for (const personType in rentalData[rentalType]){
                const rowData = rentalData[rentalType][personType];
                const row = document.createElement("tr");
                row.innerHTML = `<td>${rentalType}</td><td>${personType}</td>`;
                for (const vehicle in rowData){
                    row.innerHTML += `<td>${rowData[vehicle]}</td>`;
                }
                tableBody.appendChild(row);
            }
        }
    }

    renderTable();
});