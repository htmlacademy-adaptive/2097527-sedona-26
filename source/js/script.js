let navMain = document.querySelector('.main-nav__list');
let navLogo = document.querySelector('.main-header__logo');
let navToggle = document.querySelector('.main-nav__toggle');
let navClose = document.querySelector('.site-list__close');

navMain.classList.remove('site-list--nojs');
navLogo.classList.remove('main-header__logo--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('site-list--closed')) {
    navMain.classList.remove('site-list--closed');
    navMain.classList.add('site-list--active');
  } else {
    navMain.classList.add('site-list--closed');
    navMain.classList.remove('site-list--active');
  }
});

navClose.addEventListener('click', function () {
  if (navMain.classList.contains('site-list--closed')) {
    navMain.classList.remove('site-list--closed');
    navMain.classList.add('site-list--active');
  } else {
    navMain.classList.add('site-list--closed');
    navMain.classList.remove('site-list--active');
  }
});
