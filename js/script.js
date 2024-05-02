let menu = document.querySelector('#menu-barra');
let navegacion = document.querySelector('.navegacion');

// click al menu hambuguesa
menu.addEventListener('click', () => {

    menu.classList.toggle('fa-times');
    navegacion.classList.toggle('nave-toggle');

});

// remove el menu hambuguesa
window.onscroll = () => {

    menu.classList.remove('fa-times');
    navegacion.classList.remove('nave-toggle');

}