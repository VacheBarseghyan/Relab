document.getElementById('loginForm').addEventListener('submit', function(event) {
    var email = document.getElementById('email').value.trim();
    var password = document.getElementById('password').value.trim();

    if (!validateEmail(email)) {
        alert('Please enter a valid email address.');
        event.preventDefault();
        return false;
    }

    if (password === '') {
        alert('Please enter your password.');
        event.preventDefault();
        return false;
    }

    if (!validatePassword(password)) {
        alert('Password must contain at least one Uppercase letter, one Lowercase letter, one Number, and one special symbol.');
        event.preventDefault();
        return false;
    }

    return true;
});

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*.?&])[A-Za-z\d@$!%*?&]+$/.test(password);
}