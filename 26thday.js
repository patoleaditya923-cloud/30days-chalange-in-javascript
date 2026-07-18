let patients = [];

function addPatient(){

let name=document.getElementById("name").value;
let age=document.getElementById("age").value;
let gender=document.getElementById("gender").value;

if(name=="" || age==""){
alert("Fill all fields");
return;
}

patients.push({
name,
age,
gender
});

document.getElementById("name").value="";
document.getElementById("age").value="";

displayPatients();

}

function displayPatients(){

let table=document.getElementById("patientTable");

table.innerHTML="";

patients.forEach((patient,index)=>{

table.innerHTML+=`
<tr>

<td>${patient.name}</td>

<td>${patient.age}</td>

<td>${patient.gender}</td>

<td>

<button
class="delete"
onclick="deletePatient(${index})">

Delete

</button>

</td>

</tr>

`;

});

document.getElementById("patientCount").innerHTML=patients.length;

}

function deletePatient(index){

patients.splice(index,1);

displayPatients();

}

document.getElementById("search").addEventListener("keyup",function(){

let value=this.value.toLowerCase();

let rows=document.querySelectorAll("#patientTable tr");

rows.forEach(row=>{

let text=row.innerText.toLowerCase();

row.style.display=text.includes(value)?"":"none";

});

});