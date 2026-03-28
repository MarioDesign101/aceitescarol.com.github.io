
function filterCatalog() {
    // 1. Capturar el texto del usuario y pasarlo a minúsculas
    const input = document.getElementById('catalog-search');
    const filter = input.value.toLowerCase().trim();
    
    // 2. Apuntar a los artículos de productos
    const products = document.querySelectorAll('.products-item');
    const fallback = document.getElementById('search-fallback');
    let hasResults = false;

    products.forEach(product => {
        const title = product.querySelector('.sub-titulo').innerText.toLowerCase();
        const description = product.querySelector('.texto').innerText.toLowerCase();

        // 3. Comparar si el texto ingresado está en el título O en la descripción
        if (title.includes(filter) || description.includes(filter)) {
            product.style.display = ""; // Muestra el producto
            hasResults = true;
        } else {
            product.style.display = "none"; // Oculta el producto
        }
    });

    // 4. Mostrar alerta visual si no hay coincidencias
    fallback.style.display = hasResults ? "none" : "block";
}
