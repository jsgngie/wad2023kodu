document.getElementById('signupForm').addEventListener('submit', function (event) {
    var password = document.getElementById('password').value;
    var passwordRequirements = document.getElementById('passwordRequirements');

    var lengthCondition = password.length >= 8 && password.length < 15;
    var uppercaseCondition = /[A-Z]/.test(password);
    var lowercaseCondition = /[a-z].*[a-z]/.test(password);
    var numericCondition = /\d/.test(password);
    var startUppercaseCondition = /^[A-Z]/.test(password);
    var underscoreCondition = /_/.test(password);

    if (lengthCondition && uppercaseCondition && lowercaseCondition && numericCondition && startUppercaseCondition && underscoreCondition) {
        passwordRequirements.style.display = 'none';
        alert("Signup successful!")
    } else {
        passwordRequirements.style.display = 'block';
        passwordRequirements.innerHTML = "Password is not valid. Please follow these conditions: " +
            "<ul>" +
            "<li>At least 8 characters and less than 15 characters</li>" +
            "<li>At least one uppercase alphabet character</li>" +
            "<li>At least two lowercase alphabet characters</li>" +
            "<li>At least one numeric value</li>" +
            "<li>Should start with an uppercase alphabet</li>" +
            "<li>Should include the character “_”</li>" +
            "</ul>";

        event.preventDefault();
    }
});