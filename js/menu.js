const menuBtn = document.querySelector('.menu-button');
const navMenu = document.querySelector('.menu'); // Asegúrate de tener esta clase en tu <nav>

menuBtn.addEventListener('click', () => {
    // Alterna la clase para la animación del botón
    menuBtn.classList.toggle('active');
    
    // Alterna la clase para mostrar el menú (puedes usar 'show' o 'active')
    navMenu.classList.toggle('menuActive');
    
    // Mejora SEO/Accesibilidad: cambia el estado del atributo
    const expanded = menuBtn.getAttribute('aria-expanded') === 'true' || false;
    menuBtn.setAttribute('aria-expanded', !expanded);
});