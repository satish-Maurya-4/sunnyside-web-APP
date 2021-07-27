const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav__links');
const headerContent = document.querySelector('.header__content');
hamburger.addEventListener('click', ()=>{
    navLinks.classList.toggle('show__links');
    headerContent.classList.toggle('toggle__header__content');
})