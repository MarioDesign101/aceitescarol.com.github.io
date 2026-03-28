document.addEventListener('DOMContentLoaded', function() {
    const formulario = document.getElementById('form-cotizacion-carol');
    
    // 1. Detectar producto desde la URL (Catálogo -> Cotización)
    const urlParams = new URLSearchParams(window.location.search);
    const productoUrl = urlParams.get('producto');
    if (productoUrl) {
        document.getElementById('producto').value = productoUrl.replace(/-/g, ' ').toUpperCase();
    }

    // --- FUNCIONES DE VALIDACIÓN ---
    const esTextoValido = (texto) => /^[a-zA-ZÀ-ÿ\s.]{3,50}$/.test(texto.trim());
    const esEmailValido = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const esTelefonoValido = (tel) => /^\d{10}$/.test(tel.replace(/\s/g, ''));

    // 2. Manejo del Envío
    formulario.addEventListener('submit', function(e) {
        e.preventDefault();

        // Referencias de campos para validación
        const nombre = document.getElementById('nombre');
        const telefono = document.getElementById('telefono');
        const mail = document.getElementById('mail');
        const empresa = document.getElementById('nameEmpresa');
        const cantidad = document.getElementById('cantidad');
        const producto = document.getElementById('producto');

        // --- VALIDACIONES ---
        // --- VALIDACIONES CON ALERTS ESPECÍFICOS ---
        
        // 1. Validación de Nombre
        if (!esTextoValido(nombre.value)) {
            alert("❌ ERROR EN NOMBRE: Por favor, ingresa un nombre real (solo letras y espacios, mínimo 3 caracteres).");
            nombre.focus(); 
            return; // Detiene el envío
        }

        // 2. Validación de Teléfono
        if (!esTelefonoValido(telefono.value)) {
            alert("❌ ERROR EN TELÉFONO: El número de WhatsApp debe tener exactamente 10 dígitos numéricos (ej: 5512345678).");
            telefono.focus(); 
            return;
        }

        // 3. Validación de Correo
        if (!esEmailValido(mail.value)) {
            alert("❌ ERROR EN CORREO: La dirección de correo electrónico no tiene un formato válido (ejemplo@dominio.com).");
            mail.focus(); 
            return;
        }

        // 4. Validación de Producto
        if (producto.value.trim().length < 4) {
            alert("❌ ERROR EN PRODUCTO: Debes especificar qué aceite estás solicitando.");
            producto.focus(); 
            return;
        }

        // 5. Validación de Cantidad
        if (cantidad.value <= 0 || cantidad.value === "") {
            alert("❌ ERROR EN CANTIDAD: La cantidad de contenedores debe ser al menos 1.");
            cantidad.focus(); 
            return;
        }

        // 6. Validación de Empresa
        if (!esTextoValido(empresa.value)) {
            alert("❌ ERROR EN EMPRESA: Ingresa un nombre de empresa válido (solo letras y espacios).");
            empresa.focus(); 
            return;
        }

        // --- PROCESAMIENTO DE DATOS ---
        const numVentas = "525525295020"; // Tu número configurado
        
        const datos = {
            cliente: nombre.value.trim(),
            tel: telefono.value.trim(),
            correo: mail.value.trim(),
            locCli: document.getElementById('alcaldia').value.trim() + ", " + document.getElementById('estado').value,
            prod: producto.value.trim(),
            envase: document.getElementById('contenedor').options[document.getElementById('contenedor').selectedIndex].text,
            cant: cantidad.value,
            empresa: empresa.value.trim(),
            industria: document.getElementById('industria').value.trim(),
            locEmp: document.getElementById('alcaldiaEmpresa').value.trim() + ", " + document.getElementById('estadoEmpresa').value
        };

        // 3. Formato de mensaje para WhatsApp
        const mensajeFinal = 
            `*COTIZACIÓN WEB: CAROL*%0A%0A` +
            `*— PRODUCTO —*%0A` +
            `*Item:* ${datos.prod}%0A` +
            `*Presentación:* ${datos.envase}%0A` +
            `*Cantidad:* ${datos.cant}%0A%0A` +
            `*— EMPRESA Y ORIGEN —*%0A` +
            `*Empresa:* ${datos.empresa}%0A` +
            `*Industria:* ${datos.industria}%0A` +
            `*Ubicación:* ${datos.locEmp}%0A%0A` +
            `*— CONTACTO —*%0A` +
            `*Nombre:* ${datos.cliente}%0A` +
            `*WhatsApp:* ${datos.tel}%0A` +
            `*Mail:* ${datos.correo}%0A%0A` +
            `_Enviado desde Aceites Industriales Carol_`;

        // 4. Abrir WhatsApp
        window.open(`https://api.whatsapp.com/send?phone=${numVentas}&text=${mensajeFinal}`, '_blank');
    });
});