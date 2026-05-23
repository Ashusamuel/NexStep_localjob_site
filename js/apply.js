const applicationForm = document.getElementById("applyForm");

//Inputs
const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const education = document.getElementById("education");
const coverLetter= document.getElementById("coverLetter");
const cvUpload = document.getElementById("cvUpload");


//Erroe messages
const firstNameError = document.getElementById("firstNameErr");
const lastNameError = document.getElementById("lastNameErr");
const emailError = document.getElementById("emailErr");
const phoneError = document.getElementById("phoneErr");
const educationError = document.getElementById("educationErr");
const coverLetterErr = document.getElementById("coverLetterErr");
const cvErr = document.getElementById("cvErr");

//Success message
const messageBox = document.getElementById("completed");
messageBox.style.display = "none";

// Email Regex
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

//Submit form
applicationForm.addEventListener("submit", function (event){
     event.preventDefault();

//Hide error messages first
firstNameError.style.display = "none";
lastNameError.style.display = "none";
emailError.style.display = "none";
phoneError.style.display = "none";
educationError.style.display = "none";
coverLetterErr.style.display = "none";
cvErr.style.display = "none";

let isFormValid = true;

if (firstName.value.trim() === ""){
    firstNameError.style.display = "block";
    isFormValid = false;
}
if (lastName.value.trim() === ""){
    lastNameError.style.display = "block";
    isFormValid = false;
}if (!emailPattern.test(email.value)){
    emailError.style.display = "block";
    isFormValid = false;
}if (phone.value.trim()<9){
    phoneError.style.display = "block";
    isFormValid = false;
}if (education.value.trim() === ""){
    educationError.style.display = "block";
    isFormValid = false;
}if (coverLetter.value.trim()<20){
    coverLetterErr.style.display = "block";
    isFormValid = false;
}if (cvUpload.value.trim() === ""){
    cvErr.style.display = "block";
    isFormValid = false;
}

if (!isFormValid) return;

//SUCCESS
messageBox.style.display = "block";
setTimeout(() => {
       messageBox.style.display = "none";
    }, 3000);

    form.reset();

})
