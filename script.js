const totalAssets = 500;
let openTickets = 24;
const users = 42;
const locations = 18;
const systems = 150;
const ticketButton = document.getElementById("ticket-button");
const closeticketButton = document.getElementById("closeticket-button");


ticketButton.addEventListener("click", function () {
    openTickets = openTickets + 1;
    document.getElementById("open-tickets").textContent = openTickets;
});

closeticketButton.addEventListener("click", function () {
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
