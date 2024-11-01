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
