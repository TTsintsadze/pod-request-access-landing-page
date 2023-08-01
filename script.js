document.getElementById('email-button').addEventListener('click', function() {
    var emailInput = document.getElementById('email-input');
    var errorMessage = document.getElementById('error-message');
    if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
        errorMessage.textContent = "Please enter a valid email address.";
        emailInput.focus();
    } else {
         errorMessage.textContent = "";
    }
});
function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
}
