function generateResume() {

    document.getElementById("rName").innerText =
        document.getElementById("name").value || "Your Name";

    document.getElementById("rEmail").innerText =
        document.getElementById("email").value;

    document.getElementById("rPhone").innerText =
        document.getElementById("phone").value;

    document.getElementById("rAddress").innerText =
        document.getElementById("address").value;

    document.getElementById("rObjective").innerText =
        document.getElementById("objective").value;

    document.getElementById("rEducation").innerText =
        document.getElementById("education").value;

    document.getElementById("rExperience").innerText =
        document.getElementById("experience").value;

    let skills = document.getElementById("skills").value.split(",");

    let skillList = document.getElementById("rSkills");

    skillList.innerHTML = "";

    skills.forEach(function(skill){

        if(skill.trim() !== ""){

            let li = document.createElement("li");

            li.innerText = skill.trim();

            skillList.appendChild(li);

        }

    });

}