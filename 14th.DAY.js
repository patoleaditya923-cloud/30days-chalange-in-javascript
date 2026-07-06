//------------------------------------------- Counter App ------------------------------------------------
let count = 0;

let display = document.getElementById("count");


function increase() {
    count++;
    display.textContent = count;
}

function decrease() {
    count--;
    display.textContent = count;
}
function resetCounter() {
    count = 0;
    display.textContent = count;
}