const paragraph = document.getElementById("paragraph").innerText;
const input = document.getElementById("input");

const timer = document.getElementById("timer");
const wpm = document.getElementById("wpm");
const accuracy = document.getElementById("accuracy");
const restart = document.getElementById("restart");

let timeLeft = 60;
let timerStarted = false;
let interval;

function startTimer(){

interval = setInterval(()=>{

timeLeft--;

timer.innerText = timeLeft;

if(timeLeft<=0){

clearInterval(interval);

input.disabled = true;

calculateResult();

}

},1000);

}

input.addEventListener("input",()=>{

if(!timerStarted){

timerStarted = true;

startTimer();

}

calculateLive();

});

function calculateLive(){

let typed = input.value;

let typedWords = typed.trim().split(/\s+/).filter(word=>word!="").length;

let minutes = (60-timeLeft)/60;

let speed = 0;

if(minutes>0){

speed = Math.round(typedWords/minutes);

}

wpm.innerText = speed;

let correct = 0;

for(let i=0;i<typed.length;i++){

if(typed[i]===paragraph[i]){

correct++;

}

}

let acc = typed.length===0 ? 100 : Math.round((correct/typed.length)*100);

accuracy.innerText = acc+"%";

}

function calculateResult(){

calculateLive();

}

restart.addEventListener("click",()=>{

clearInterval(interval);

timeLeft = 60;

timer.innerText = 60;

wpm.innerText = 0;

accuracy.innerText = "100%";

input.value = "";

input.disabled = false;

timerStarted = false;

});