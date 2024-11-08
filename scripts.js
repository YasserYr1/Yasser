const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('#nav-header');

menuIcon.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});