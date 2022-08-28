let navMain = document.querySelector('.main-nav__list');
let navToggle = document.querySelector('.main-nav__toggle');
let navClose = document.querySelector('.site-list__close');

navMain.classList.remove('site-list--nojs');

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
