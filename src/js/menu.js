document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const closeMenu = document.querySelector('.close-menu');

    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });

    closeMenu.addEventListener('click', function () {
        navMenu.classList.remove('active');
    });
});
