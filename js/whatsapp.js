document.addEventListener('DOMContentLoaded', function() {
        // Seleccionamos la nube (tooltip) por su ID
        const tooltip = document.getElementById('whatsapp-tooltip');

        // Configurar el temporizador: 10,000 milisegundos = 10 segundos
        setTimeout(function() {
            // Añadimos la clase CSS 'show' para activarla
            tooltip.classList.add('show');
        }, 10000); // <-- Tiempo de espera
    });