function crearCajas() {
    // Solicitar al usuario el número de cajas
    let numeroDeCajas = parseInt(prompt("¿Cuántas cajas deseas colocar?"));

    // Validar el número de cajas
    if (isNaN(numeroDeCajas) || numeroDeCajas <= 0) {
        alert("Por favor, ingresa un número válido mayor que 0.");
        return;
    }

    // Seleccionar el contenedor para las cajas
    let contenedor = document.getElementById('cajas-container');
    contenedor.innerHTML = ''; // Limpiar el contenedor

    // Determinar la clase y colores según el número de cajas
    let clase, colorLetra, colorFondo;
    if (numeroDeCajas <= 8) {
        clase = 'vertical';
        colorLetra = '#f3c623';
        colorFondo = '#10375c';
    } else {
        clase = 'horizontal';
        colorLetra = '#10375c';
        colorFondo = '#f3c623';
    }

    // Aplicar la clase y estilos al contenedor
    contenedor.className = clase;

    for (let i = 1; i <= numeroDeCajas; i++) {
        let caja = document.createElement('div');
        caja.className = 'caja';
        caja.style.backgroundColor = colorFondo;
        caja.style.color = colorLetra;
        caja.textContent = 'Caja ' + i;
        contenedor.appendChild(caja);
    }
}

// Llamar a la función al cargar la página
window.onload = function() {
    crearCajas();
}
