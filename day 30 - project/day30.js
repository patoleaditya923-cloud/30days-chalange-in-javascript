let notes = JSON.parse(localStorage.getItem("notes")) || [];

displayNotes();

function addNote(){

const title=document.getElementById("title").value;

const content=document.getElementById("content").value;

if(title==="" || content===""){
alert("Fill all fields");
return;
}

notes.push({
title,
content
});

localStorage.setItem("notes",JSON.stringify(notes));

document.getElementById("title").value="";
document.getElementById("content").value="";

displayNotes();

}

function displayNotes(){

const noteContainer=document.getElementById("notes");

noteContainer.innerHTML="";

notes.forEach((note,index)=>{

noteContainer.innerHTML+=`
<div class="note">

<h3>${note.title}</h3>

<p>${note.content}</p>

<button onclick="editNote(${index})">Edit</button>

<button onclick="deleteNote(${index})">Delete</button>

</div>
`;

});

}

function deleteNote(index){

notes.splice(index,1);

localStorage.setItem("notes",JSON.stringify(notes));

displayNotes();

}

function editNote(index){

document.getElementById("title").value=notes[index].title;

document.getElementById("content").value=notes[index].content;

notes.splice(index,1);

localStorage.setItem("notes",JSON.stringify(notes));

displayNotes();

}

document.getElementById("search").addEventListener("keyup",function(){

const value=this.value.toLowerCase();

const note=document.querySelectorAll(".note");

note.forEach(n=>{

n.style.display=n.innerText.toLowerCase().includes(value)?"block":"none";

});

});

document.getElementById("darkBtn").onclick=function(){

document.body.classList.toggle("dark");

}