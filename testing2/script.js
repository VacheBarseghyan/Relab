const firstNavbar = document.getElementById('firstNavbar');
const secondNavbar = document.getElementById('secondNavbar');
const toggleBtn = document.getElementById('toggleBtn');
const toggleBtn2 = document.getElementById('toggleBtn2');

toggleBtn.addEventListener('click', function() {
    firstNavbar.style.display = 'none';
    secondNavbar.style.display = 'show';
});

toggleBtn2.addEventListener('click', function() {
    firstNavbar.style.display = 'show';
    secondNavbar.style.display = 'none';
});