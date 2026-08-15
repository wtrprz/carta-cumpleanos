const btnAbrir = document.getElementById('btn-abrir');
const pantallaInicio = document.getElementById('pantalla-inicio');
const pantallaCarta = document.getElementById('pantalla-carta');
const musica = document.getElementById('musica');

btnAbrir.addEventListener('click', () => {
    // Cambiar de pantalla
    pantallaInicio.classList.remove('activa');
    pantallaCarta.classList.add('activa');
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Reproducir música
    musica.volume = 0.45; // volumen (0.0 a 1.0)
    musica.play().catch(error => {
        console.log("El navegador bloqueó la reproducción automática");
    });

    // Lanzar confeti
    lanzarConfeti();
});

// Función de confeti
function lanzarConfeti() {
    confetti({
        particleCount: 120,
        spread: 80,
        origin: { y: 0.6 },
        colors: ['#ff6b6b', '#ff8e53', '#ff9ff3', '#feca57', '#48dbfb']
    });

    setTimeout(() => {
        confetti({
            particleCount: 60,
            angle: 60,
            spread: 55,
            origin: { x: 0 }
        });
        confetti({
            particleCount: 60,
            angle: 120,
            spread: 55,
            origin: { x: 1 }
        });
    }, 250);
}

// Botón de sorpresa
const btnSorpresa = document.getElementById('btn-sorpresa');
const sorpresa = document.getElementById('sorpresa');

btnSorpresa.addEventListener('click', () => {
    sorpresa.classList.toggle('oculto');
    confetti({
        particleCount: 70,
        spread: 70,
        origin: { y: 0.7 }
    });
});