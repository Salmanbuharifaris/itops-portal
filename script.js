const totalAssets = 500;
let openTickets = 24;
const users = 42;
const locations = 18;
const systems = 150;

const addTicketButton = document.getElementById("addTicket-Button");
const closeTicketButton = document.getElementById("closeTicket-Button");

function updateTicketDisplay() {
    document.getElementById("open-tickets").textContent = openTickets;
}

addTicketButton.addEventListener("click", function () {
    if (openTickets < 100) {
        openTickets = openTickets + 1;
        document.getElementById("open-tickets").textContent = openTickets;
    }
});

closeTicketButton.addEventListener("click", function () {
    if (openTickets > 0) {
        openTickets = openTickets - 1;
        document.getElementById("open-tickets").textContent = openTickets;
    }
});

console.log("ITOps Portal loaded");

document.getElementById("total-assets").textContent = totalAssets;
document.getElementById("open-tickets").textContent = openTickets;
document.getElementById("users").textContent = users;
document.getElementById("locations").textContent = locations;
document.getElementById("systems").textContent = systems;
