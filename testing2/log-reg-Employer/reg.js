// document.getElementById('registrationForm').addEventListener('submit', function(event) {
//     let name = document.getElementById('name').value.trim();
//     let lastName = document.getElementById('lastName').value.trim();
//     let date = document.getElementById('date').value.trim();
//     let email = document.getElementById('email').value.trim();
//     let password = document.getElementById('password').value.trim();
//     let repeatPassword = document.getElementById('repeatPassword').value.trim();

//     if (name === '') {
//         alert('Please enter your name.');
//         event.preventDefault();
//         return false;
//     }

//     if (lastName === '') {
//         alert('Please enter your last name.');
//         event.preventDefault();
//         return false;
//     }

//     if (date === '') {
//         alert('Please enter your birth date.');
//         event.preventDefault();
//         return false;
//     }

//     if (!validateEmail(email)) {
//         alert('Please enter a valid email address.');
//         event.preventDefault();
//         return false;
//     }

//     if (password === '') {
//         alert('Please create a password.');
//         event.preventDefault();
//         return false;
//     }

//     if (repeatPassword === '') {
//         alert('Please repeat your password.');
//         event.preventDefault();
//         return false;
//     }

//     if (repeatPassword !== password) {
//         alert('Passwords do not match.');
//         event.preventDefault();
//         return false;
//     }

//     return true;
// });

// function validateEmail(email) {
//     return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
// }







// window.onload = function() {
//     document.getElementById('registrationForm').onsubmit = function(event) {
//         event.preventDefault();
        
//         var errorMessages = document.querySelectorAll('.error');
//         errorMessages.forEach(function(element) {
//             element.textContent = '';
//         });
        
//         var name = document.getElementById('name').value.trim();
//         var lastName = document.getElementById('lastName').value.trim();
//         var birthDate = document.getElementById('date').value.trim();
//         var email = document.getElementById('email').value.trim();
//         var password = document.getElementById('password').value.trim();
//         var repeatPassword = document.getElementById('repeatPassword').value.trim();
        
//         if (name === '' || lastName === '' || birthDate === '' || email === '' || password === '' || repeatPassword === '') {
//             document.getElementById('emptyFieldsError').textContent = 'All fields are required';
//             return;
//         }
        
//         var emailRegex = /^\S+@\S+\.\S+$/;
//         if (!emailRegex.test(email)) {
//             document.getElementById('emailFormatError').textContent = 'Email address is not valid';
//             return;
//         }
        
//         var passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+])[A-Za-z\d!@#$%^&*()_+]{8,}$/;
//         if (!passwordRegex.test(password)) {
//             document.getElementById('passwordFormatError').alert('Password must contain at least one uppercase letter, one lowercase letter, one number, one symbol, and be at least 8 characters long');
//             return;
//         }
        
        // if (password !== repeatPassword) {
        //     document.getElementById('passwordMatchError').alert('Passwords do not match');
        //     return;
        // }
        
//         alert('Form submitted successfully');
//     }
// }




///////////////////////////////////////////////////////////////////////////////////////


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

if (password !== repeatPassword) {
    alert('Passwords do not match');
    return;
}

function validateEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function validatePassword(password) {
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*.?&])[A-Za-z\d@$!%*?&]+$/.test(password);
}