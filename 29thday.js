// ===============================
// Hotel Management Dashboard
// ===============================

// Get Elements
const searchInput = document.getElementById("search");
const roomContainer = document.querySelector(".room-container");
const guestCount = document.getElementById("guestCount");

let bookings = JSON.parse(localStorage.getItem("hotelBookings")) || [];

// Load saved bookings
window.addEventListener("load", loadBookings);

// ===============================
// Load Bookings
// ===============================
function loadBookings() {

    const buttons = document.querySelectorAll(".room button");

    buttons.forEach((button) => {

        const roomName = button.parentElement.querySelector("h3").innerText;

        if (bookings.includes(roomName)) {
            button.innerText = "Booked";
            button.disabled = true;
            button.style.background = "green";
        }

    });

    guestCount.innerText = bookings.length;

}

// ===============================
// Book Room
// ===============================
function bookRoom(button) {

    const room = button.parentElement;

    const roomName = room.querySelector("h3").innerText;

    if (bookings.includes(roomName)) {
        alert("Room already booked!");
        return;
    }

    bookings.push(roomName);

    localStorage.setItem(
        "hotelBookings",
        JSON.stringify(bookings)
    );

    button.innerText = "Booked";
    button.disabled = true;
    button.style.background = "green";

    guestCount.innerText = bookings.length;

    alert(roomName + " booked successfully!");

}

// ===============================
// Search Rooms
// ===============================
searchInput.addEventListener("keyup", function () {

    const value = searchInput.value.toLowerCase();

    const rooms = document.querySelectorAll(".room");

    rooms.forEach((room) => {

        const roomName =
            room.querySelector("h3").innerText.toLowerCase();

        if (roomName.includes(value)) {

            room.style.display = "block";

        } else {

            room.style.display = "none";

        }

    });

});

// ===============================
// Total Rooms
// ===============================
const totalRooms = document.querySelectorAll(".room").length;

document.getElementById("totalRooms").innerText = totalRooms;

// ===============================
// Revenue Calculation
// ===============================
let revenue = 0;

function calculateRevenue() {

    revenue = bookings.length * 150;

    const revenueCard = document.querySelectorAll(".card h2")[3];

    revenueCard.innerText = "$" + revenue;

}

calculateRevenue();

// ===============================
// Update Revenue After Booking
// ===============================
const oldBookRoom = bookRoom;

bookRoom = function (button) {

    oldBookRoom(button);

    calculateRevenue();

};

// ===============================
// Current Date & Time
// ===============================
function updateDateTime() {

    const now = new Date();

    console.log(now.toLocaleString());

}

setInterval(updateDateTime, 1000);

// ===============================
// Welcome Message
// ===============================
console.log("Welcome to Luxury Hotel Management Dashboard");

// ===============================
// Reset All Bookings
// Press Ctrl + Shift + R in browser console
// ===============================
function resetBookings() {

    localStorage.removeItem("hotelBookings");

    location.reload();

}

window.resetBookings = resetBookings;