// Seleccionar el botón y el menú
const menuToggle = document.querySelector("#menu-toggle");
const navMenu = document.querySelector("#nav-menu");

// Añadir un evento de clic al botón
menuToggle.addEventListener("click", () => {
    navMenu.classList.toggle("show"); // Alterna la clase 'show'
});
