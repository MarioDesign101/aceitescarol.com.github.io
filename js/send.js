
    // 1. AUTO-COMPLETAR PRODUCTO DESDE CATÁLOGO
    const urlParams = new URLSearchParams(window.location.search);
    const productoDesdeUrl = urlParams.get('producto');
    if (productoDesdeUrl) {
        // Limpiamos guiones y ponemos en mayúsculas para que coincida con tu estilo
        document.getElementById('producto').value = productoDesdeUrl.replace(/-/g, ' ').toUpperCase();
    }

    // 2. PROCESO DE ENVÍO
    document.getElementById('form-carol').addEventListener('submit', function(e) {
        e.preventDefault();

        const numVentas = "525525295020"; // Tu número configurado
        
        // Recolección de variables
        const datos = {
            cliente: document.getElementById('nombre').value,
            whatsapp: document.getElementById('telefono').value,
            correo: document.getElementById('mail').value,
            ubiCliente: document.getElementById('alcaldia').value + ", " + document.getElementById('estado').value,
            producto: document.getElementById('producto').value,
            envase: document.getElementById('contenedor').value,
            cantidad: document.getElementById('cantidad').value,
            empresa: document.getElementById('nameEmpresa').value,
            industria: document.getElementById('industria').value,
            ubiEmpresa: document.getElementById('alcaldiaEmpresa').value + ", " + document.getElementById('estadoEmpresa').value
        };

        // Construcción del mensaje con formato profesional
        const texto = `*NUEVA SOLICITUD DE COTIZACIÓN*%0A%0A` +
                      `*— PRODUCTO —*%0A` +
                      `*Aceite:* ${datos.producto}%0A` +
                      `*Presentación:* ${datos.envase}%0A` +
                      `*Cantidad:* ${datos.cantidad}%0A%0A` +
                      `*— DATOS DEL CLIENTE —*%0A` +
                      `*Nombre:* ${datos.cliente}%0A` +
                      `*Empresa:* ${datos.empresa}%0A` +
                      `*Industria:* ${datos.industria}%0A` +
                      `*WhatsApp:* ${datos.whatsapp}%0A` +
                      `*Ubicación:* ${datos.ubiEmpresa}%0A%0A` +
                      `_Solicitado desde el sitio web Aceites Industriales Carol_`;

        const urlFinal = `https://api.whatsapp.com/send?phone=${numVentas}&text=${texto}`;
        
        window.open(urlFinal, '_blank');
    });