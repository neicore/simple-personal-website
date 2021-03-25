//Make year in the footer dynamic
let yearUI = document.querySelector('.year');
let today = new Date();
yearUI.textContent = today.getFullYear();

//Animating menu button
let menuButton = document.querySelector('.menu-btn');
let hamburgerMenu = document.querySelector('.menu-btn-burger');
let nav = document.querySelector('.nav');
let menuNav = document.querySelector('.menu-nav');
let menuNavItems = document.querySelectorAll('.menu-nav-item')

let showMenu = false;

menuButton.addEventListener('click', toggleMenu);

function toggleMenu() {
    if (!showMenu){
        hamburgerMenu.classList.add('open');
        nav.classList.add('open');
        menuNav.classList.add('open');
        for (let i = 0; i < menuNavItems.length; i++) {
            menuNavItems[i].classList.add('open');
        }
        showMenu = true;
    } else{
        hamburgerMenu.classList.remove('open');
        nav.classList.remove('open');
        menuNav.classList.remove('open');
        for (let i = 0; i < menuNavItems.length; i++) {
            menuNavItems[i].classList.remove('open');
        };
        showMenu = false;
    }
}
