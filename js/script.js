// script.js
const mobileMenu = document.getElementById('mobile-menu');
const menu = document.querySelector('.menu');

mobileMenu.addEventListener('click', () => {
    menu.classList.toggle('active'); // Alterna la clase 'active' para mostrar/ocultar el menú
});