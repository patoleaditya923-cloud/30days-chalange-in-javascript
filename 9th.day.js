// =========================== Date And Time ======================================

//----------------------------- 1-Get current date ----------------------------------------
//new Date() creates a Date object containing the current date and time

let today = new Date();

console.log(today);

//==========================================================================================

//----------------------------- 2-Get current year ------------------------------------------------

// -getFullYear() returns the current year

let today = new Date();

console.log(today.getFullYear());

//=====================================================================================================

//---------------------------- 3-Get current month ---------------------------------------------

//Months start from 0.
// January = 0
// February = 1
// July = 6
// Therefore add 1.

let today = new Date();

console.log(today.getMonth() + 1);

//===============================================================================================================

//----------------------------- 4 -get current date (day of month) -------------------------------------------------------

// Returns today's date (1–31).

let today = new Date();

console.log(today.getDate());

//=========================================================================================================================

//-------------------------------- 5 -Get current day name ======================================================

//getDay() returns numbers 0–6.
// We use an array to convert the number into the day name.

let today = new Date();

let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
];

console.log(days[today.getDay()]);

//===========================================================================================

//--------------------------------- 6-Get Current house -------------------------------------------

// Returns current hour in 24-hour format.

let today = new Date();

console.log(today.getHours());

//=========================================================================================================

//---------------------------- 7- digital clock -----------------------------------------------------

//setInterval() runs the function every second.
// Useful for creating a live digital clock.

function showTime() {
    let now = new Date();

    console.log(
        now.getHours() + ":" +
        now.getMinutes() + ":" +
        now.getSeconds()
    );
}

setInterval(showTime, 1000);

//======================================================================================================

//----------------------------------- 8- calculate age -----------------------------------------------------------

// Subtract the birth year from the current year to estimate age.

let birthYear = 2003;

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

console.log(age);

//=======================================================================================================

//--------------------------------------- 9-diffrence bitween Two dates ------------------------------------------

// Subtracting two Date objects returns the difference in milliseconds.
// Divide by 1000 × 60 × 60 × 24 to convert milliseconds into days.

let birthYear = 2003;

let currentYear = new Date().getFullYear();

let age = currentYear - birthYear;

console.log(age);

//==========================================================================================================================

//-------------------------------------- 10 -Countdown timer -------------------------------------------------

// setInterval() runs every second.
// clearInterval() stops the timer when the countdown finishes.

let count = 10;

let timer = setInterval(() => {
    console.log(count);

    count--;

    if (count < 0) {
        clearInterval(timer);
        console.log("Time Up!");
    }

}, 1000);

//============================================================================================================================