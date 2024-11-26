const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const subjectInput = document.getElementById("subject");
const messageInput = document.getElementById("message");
const submitBtn = document.getElementById("submit_contact_btn");

// Email regex pattern
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

const nameInputRegex = /^[a-zA-Z]{2,}(?: [a-zA-Z]{2,})+$/;

const minLengthRegex = /^.{10,}$/;

let isNameValid;
let isEmailValid;
let isSubjectValid;
let isMessageValid;


// Validation function

function ToggleDisable() {
    submitBtn.disabled = !(isNameValid && isEmailValid && isSubjectValid && isMessageValid);
}

// Helper function to toggle validation classes
function toggleValidationClass(inputElement, isValid) {
    if (isValid) {
        inputElement.classList.add("is-valid");
        inputElement.classList.remove("is-invalid");
    } else {
        inputElement.classList.add("is-invalid");
        inputElement.classList.remove("is-valid");
    }
}

function validateName() {
    isNameValid = nameInputRegex.test(nameInput.value);
    toggleValidationClass(nameInput, isNameValid);
    ToggleDisable();
}

function validateEmail() {
    isEmailValid = emailRegex.test(emailInput.value);
    toggleValidationClass(emailInput, isEmailValid);
    ToggleDisable();

}

function validateSubject() {
    isSubjectValid = minLengthRegex.test(subjectInput.value);
    toggleValidationClass(subjectInput, isSubjectValid);
    ToggleDisable();

}

function validateMessage() {
    isMessageValid = minLengthRegex.test(messageInput.value);
    toggleValidationClass(messageInput, isMessageValid);
    ToggleDisable();


}


// Event listeners for real-time validation
nameInput.addEventListener("input", validateName);
emailInput.addEventListener("input", validateEmail);
subjectInput.addEventListener("input", validateSubject);
messageInput.addEventListener("input", validateMessage);



// Email handler
// Emailjs
(function(){
    emailjs.init({
      publicKey: "iU23aOkfO8hlU82B9",
    });
 })();

function sendMail(e){
    e.preventDefault();
    let params={
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    }

const serviceID = "service_o7y3jfu";
const templateID = "template_cqv3xae";

emailjs.send(serviceID,templateID,params)
.then(res=>{
    document.getElementById('contact_form').reset();
    document.getElementById('submit_contact_btn').disabled=true;
    document.querySelectorAll('#contact_form input , #contact_form textarea').forEach((element)=>{
        element.classList.remove('is-valid');
    })
    isEmailValid = false;
    isEmailValid = false;
    isMessageValid = false;
    isSubjectValid = false;
    toastTrigger("success");
})
.catch(error=>{
    toastTrigger("error");
})

}

// Popping Toast After sending email
const contactToast = document.getElementById('contactToast')
const toastBootstrap = bootstrap.Toast.getOrCreateInstance(contactToast);

function toastTrigger(status){
    let toastBody = document.querySelector('.toast-body');
    if (status==="success") {
        toastBody.innerText="Thank You ! For sending Email . I will reply you if required.";
        toastBody.classList.add('text-success');
    }
    else if(status === "error"){
         toastBody.innerText="Sorry ! Your Email wasn't sent. Please Try Again Later";
        toastBody.classList.add('text-danger');
    }
    toastBootstrap.show();
    
}


// Adding Event listener
document.getElementById('contact_form').addEventListener('submit',sendMail);