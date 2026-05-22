const form = document.getElementById("postForm");

// Inputs
const companyName = document.getElementById("companyName");
const email = document.getElementById("contactEmail");
const jobTitle = document.getElementById("jobTitle");
const jobType = document.getElementById("jobType");
const jobLocation = document.getElementById("jobLocation");
const salary = document.getElementById("salary");
const description = document.getElementById("jobDesc");

// Error Messages
const companyNameErr = document.getElementById("companyNameErr");
const contactEmailErr = document.getElementById("contactEmailErr");
const jobTitleErr = document.getElementById("jobTitleErr");
const jobTypeError = document.getElementById("jobTypeError");
const jobLocationError = document.getElementById("jobLocationError");
const jobDescError = document.getElementById("jobDescError");

// Success Message
const messageBox = document.getElementById("completed");
messageBox.style.display = "none";

// Email Regex
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


// FORM SUBMIT
form.addEventListener("submit", function(event){

    event.preventDefault();

    // Hide errors first
    companyNameErr.style.display = "none";
    contactEmailErr.style.display = "none";
    jobTitleErr.style.display = "none";
    jobTypeError.style.display = "none";
    jobLocationError.style.display = "none";
    jobDescError.style.display = "none";

    let isFormValid = true;

    // Company Name
    if(companyName.value.trim() === ""){
        companyNameErr.style.display = "block";
        isFormValid = false;
    }

    // Email
    if(!emailPattern.test(email.value)){
        contactEmailErr.style.display = "block";
        isFormValid = false;
    }

    // Job Title
    if(jobTitle.value.trim() === ""){
        jobTitleErr.style.display = "block";
        isFormValid = false;
    }

    // Job Type
    if(jobType.value === ""){
        jobTypeError.style.display = "block";
        isFormValid = false;
    }

    // Location
    if(jobLocation.value.trim() === ""){
        jobLocationError.style.display = "block";
        isFormValid = false;
    }

    // Description
    if(description.value.trim().length < 50){
        jobDescError.style.display = "block";
        isFormValid = false;
    }

    // Stop form if invalid
    if(!isFormValid){
        return;
    }

    // SUCCESS
    messageBox.style.display = "block";
    
    setTimeout(() => {
       messageBox.style.display = "none";
    }, 3000);

    form.reset();
});

