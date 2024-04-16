window.addEventListener('DOMContentLoaded', (event) => {
    // Cuando el DOM esté completamente cargado, inicializa Typed.js
    const elements = document.querySelectorAll('.seccion-titulo , .titl-style h2');

    // Crea un nuevo Intersection Observer
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            // Si el elemento está en la ventana gráfica, inicia Typed.js
            if (entry.isIntersecting) {
                // Guarda el texto original y luego borra el texto del elemento
                const originalText = entry.target.textContent;
                entry.target.textContent = '';

                new Typed(entry.target, {
                    strings: [originalText],  // Usa el texto original aquí
                    typeSpeed: 70,  // Velocidad de tipeo
                    startDelay: 0,  // Retraso antes de que comience a escribir
                    backSpeed: 0,  // Desactiva el borrado
                    backDelay: Infinity,  // Nunca comienza a borrar
                    loop: false,  // Desactiva el bucle
                    shuffle: true,
                    showCursor: false
                });

                // Una vez que la animación ha comenzado, ya no necesitamos observar este elemento
                observer.unobserve(entry.target);
            }
        });
    });

    // Observa cada uno de los elementos
    elements.forEach(element => {
        observer.observe(element);
    });
});



