const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('password2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passwordMatch = false;

function validateForm() {
    // using constraint API
    isValid = form.checkValidity();
    // Message for the error
    if (!isValid) {
        message.textContent = 'Please fill out all the fields';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        return;
    }
    // Check if both the password are same
    if (password1El.value == password2El.value) {
        passwordMatch = true;
        password1El.style.borderColor = 'green';
        password2El.style.borderColor = 'green';
    } else {
        passwordMatch = false;
        message.textContent = 'Make sure to write the same password';
        message.style.color = 'red';
        messageContainer.style.borderColor = 'red';
        password1El.style.borderColor = 'red';
        password2El.style.borderColor = 'red';
        return;
    }
    // If form is valid and the password matches
    if (isValid && passwordMatch) {
        message.textContent = 'Registered successfully!';
        message.style.color = 'green';
        messageContainer.style.borderColor = 'green';
    }
}
// To colloct the user data
function storeData() {
    const user = {
        name: form.name.value,
        phone: form.name.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    }
    console.log(user);
}

function processFormData(e) {
    e.preventDefault();
    // Form validate
    validateForm();
    // Submit data if valid
    if (isValid && passwordMatch) {
        storeData();
    }
}
// Add event listner
form.addEventListener('submit', processFormData);