const chatBox = document.getElementById("chatBox");
const input = document.getElementById("userInput");
const sendBtn = document.getElementById("sendBtn");
const themeBtn = document.getElementById("themeBtn");

function addMessage(text, sender){

const msg=document.createElement("div");

msg.classList.add("message",sender);

msg.innerHTML=text;

chatBox.appendChild(msg);

chatBox.scrollTop=chatBox.scrollHeight;

}

function botReply(userText){

const replies=[

"Interesting question! 😊",

"I can help with HTML, CSS, JavaScript and React.",

"Tell me more.",

"Thanks for your message!",

"That's a great idea 💡",

"Try learning JavaScript DOM Manipulation next."

];

const randomReply=replies[Math.floor(Math.random()*replies.length)];

setTimeout(()=>{

addMessage(randomReply,"bot");

},1000);

}

sendBtn.addEventListener("click",()=>{

const text=input.value.trim();

if(text==="") return;

addMessage(text,"user");

botReply(text);

input.value="";

});

input.addEventListener("keypress",(e)=>{

if(e.key==="Enter"){

sendBtn.click();

}

});

themeBtn.addEventListener("click",()=>{

document.body.classList.toggle("dark");

});