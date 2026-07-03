// index.html — hamburger nav toggle
const ham = document.getElementById('hamburger');
const nav = document.getElementById('navLinks');
ham.addEventListener('click', () => nav.classList.toggle('open'));
