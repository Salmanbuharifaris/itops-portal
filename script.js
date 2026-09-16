const totalAssets = 500;
let openTickets = 24;
const users = 42;
const locations = 18;
const systems = 150;

const addTicketButton = document.getElementById("add-ticket-button");
const closeTicketButton = document.getElementById("close-ticket-button");

function updateTicketDisplay() {
    document.getElementById("open-tickets").textContent = openTickets;
}

function updateDashboard() {
    document.getElementById("total-assets").textContent = totalAssets;
    document.getElementById("users").textContent = users;
    document.getElementById("locations").textContent = locations;
    document.getElementById("systems").textContent = systems;
}

addTicketButton.addEventListener("click", function () {
    if (openTickets < 100) {
        openTickets = openTickets + 1;
        updateTicketDisplay();
    }
});

closeTicketButton.addEventListener("click", function () {
    if (openTickets > 0) {
        openTickets = openTickets - 1;
        updateTicketDisplay();
    }
});

console.log("ITOps Portal loaded");

updateDashboard();
