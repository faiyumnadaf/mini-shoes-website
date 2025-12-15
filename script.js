let hamburger = document.querySelector('#hamburger');
let menu = document.querySelector('#menu');
let bars = document.querySelector('.fa-bars');

hamburger.addEventListener('click', ()=>{
    menu.classList.toggle('mobile-menu-active');
    bars.classList.toggle('fa-xmark');
    bars.classList.toggle('fa-bars');
})