'use strict';

function toogleMainNav() {
    const nav = document.querySelector('.main-nav'),
          openBtn = document.querySelector('.main-nav__button-open'),
          closeBtn = document.querySelector('.main-nav__button-close');

    openBtn.addEventListener('click', (evt) => {
        evt.preventDefault();
        nav.classList.add('main-nav_opened');
        document.body.style.overflow = 'hidden';
    });

    closeBtn.addEventListener('click', (evt) => {
        evt.preventDefault();
        nav.classList.remove('main-nav_opened');
        document.body.style.overflow = '';
    });
}

export default toogleMainNav;