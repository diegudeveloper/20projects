document.addEventListener('DOMContentLoaded', function() {
    // Obtener todos los botones y contadores
    const botones = document.querySelectorAll('.textCard .boton');

    // Cargar contadores desde el almacenamiento local
    for (let i = 0; i < botones.length; i++) {
        const contadorGuardado = localStorage.getItem('contador-' + i);
        if (contadorGuardado !== null) {
            document.getElementById('contador-' + i).textContent = contadorGuardado;
        }
    }

    // Agregar un event listener para cada botón
    botones.forEach((boton) => {
        boton.addEventListener('click', function() {
            const indice = parseInt(this.getAttribute('data-indice'));
            let contador = document.getElementById('contador-' + indice);
            let contadorActual = parseInt(contador.textContent) + 1;
            contador.textContent = contadorActual;
            localStorage.setItem('contador-' + indice, contadorActual);
        });
    });
});