const form = document.getElementById("form");

const nameInput = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

form.addEventListener("submit", function(e){

    e.preventDefault();

    validateForm();

});

function showError(input,message){

    input.classList.remove("success");
    input.classList.add("error");

    input.nextElementSibling.innerText = message;

}

function showSuccess(input){

    input.classList.remove("error");
    input.classList.add("success");

    input.nextElementSibling.innerText = "";

}

function validateForm(){

    let valid = true;

    // Name

    if(nameInput.value.trim()===""){
        showError(nameInput,"Name is required");
        valid=false;
    }
    else{
        showSuccess(nameInput);
    }

    // Email

    const emailPattern=/^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email.value.trim()===""){
        showError(email,"Email is required");
        valid=false;
    }
    else if(!emailPattern.test(email.value)){
        showError(email,"Invalid Email");
        valid=false;
    }
    else{
        showSuccess(email);
    }

    // Phone

    const phonePattern=/^[0-9]{10}$/;

    if(phone.value.trim()===""){
        showError(phone,"Phone Number required");
        valid=false;
    }
    else if(!phonePattern.test(phone.value)){
        showError(phone,"Enter 10 digit phone");
        valid=false;
    }
    else{
        showSuccess(phone);
    }

    // Password

    if(password.value.length<6){
        showError(password,"Minimum 6 characters");
        valid=false;
    }
    else{
        showSuccess(password);
    }

    // Confirm Password

    if(confirmPassword.value===""){
        showError(confirmPassword,"Confirm Password");
        valid=false;
    }
    else if(confirmPassword.value!==password.value){
        showError(confirmPassword,"Passwords do not match");
        valid=false;
    }
    else{
        showSuccess(confirmPassword);
    }

    if(valid){
        alert("Registration Successful!");
        form.reset();

        document.querySelectorAll("input").forEach(input=>{
            input.classList.remove("success");
        });
    }

}