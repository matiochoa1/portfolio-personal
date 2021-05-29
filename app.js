document.addEventListener('DOMContentLoaded', function() {
    eventListener();

    darkMode();
});

function darkMode() {
    const botonDarkMode = document.querySelector('.dark-mode-boton');

    botonDarkMode.addEventListener('click', () => document.body.classList.toggle('dark-mode'));
}

function eventListener() {
    const menuMovil = document.querySelector('.menu-movil');

    menuMovil.addEventListener('click', navegacionMovil);
}

function navegacionMovil() {
    const navegacion = document.querySelector('.navegacion');

    if( navegacion.classList.contains('mostrar') ) {
        navegacion.classList.remove('mostrar');
    } else {
        navegacion.classList.add('mostrar');
    }
}