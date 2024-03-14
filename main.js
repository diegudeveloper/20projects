/*document.addEventListener('DOMContentLoaded', function() {
    Obtener todos los botones y contadores
    const botones = document.querySelectorAll('.textCard .boton');

    Cargar contadores desde el almacenamiento local
    for (let i = 0; i < botones.length; i++) {
        const contadorGuardado = localStorage.getItem('contador-' + i);
        if (contadorGuardado !== null) {
            document.getElementById('contador-' + i).textContent = contadorGuardado;
        }
    }

    Agregar un event listener para cada botón
    botones.forEach((boton) => {
        boton.addEventListener('click', function() {
            const indice = parseInt(this.getAttribute('data-indice'));
            let contador = document.getElementById('contador-' + indice);
            let contadorActual = parseInt(contador.textContent) + 1;
            contador.textContent = contadorActual;
            localStorage.setItem('contador-' + indice, contadorActual);
        });
    });
});*/

import { getDatabase, ref, transaction } from "https://www.gstatic.com/firebasejs/10.9.0/firebase-database.js";

// Obtener la referencia de la base de datos
const db = getDatabase();

// Función para incrementar el contador en Firebase
export function incrementarContador(ejercicioIndex) {
  const contadorRef = ref(db, 'contadores/ejercicio' + ejercicioIndex + '/vistas');
  transaction(contadorRef, (currentCount) => {
    // Incrementar el contador
    return (currentCount || 0) + 1;
  })
  .then(() => {
    console.log('Contador incrementado correctamente');
  })
  .catch((error) => {
    console.error('Error al incrementar el contador:', error);
  });
}