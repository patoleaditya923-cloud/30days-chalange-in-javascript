let students = [];

function addStudent(){

    let id = document.getElementById("id").value;
    let name = document.getElementById("name").value;
    let course = document.getElementById("course").value;

    if(id==="" || name==="" || course===""){
        alert("Fill all fields");
        return;
    }

    let student={
        id:id,
        name:name,
        course:course
    };

    students.push(student);

    displayStudents();

    document.getElementById("id").value="";
    document.getElementById("name").value="";
    document.getElementById("course").value="";
}

function displayStudents(){

    let table=document.getElementById("studentList");

    table.innerHTML="";

    students.forEach(function(student,index){

        table.innerHTML += `
        <tr>

            <td>${student.id}</td>
            <td>${student.name}</td>
            <td>${student.course}</td>

            <td>
                <button onclick="deleteStudent(${index})">
                    Delete
                </button>
            </td>

        </tr>
        `;

    });

}

function deleteStudent(index){

    students.splice(index,1);

    displayStudents();

}