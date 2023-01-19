// Search
let searchOpener = document.querySelector('.search');
let searchForm = document.querySelector('.header__form');
let searchClose = document.querySelector('.form__btn-close');

searchOpener.addEventListener('click', (e) => {
  searchForm.classList.add('header__form--active');
});

searchClose.addEventListener('click', (e) => {
  e.preventDefault();
  searchForm.classList.remove('header__form--active');
});

// Burger

let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',function () {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');
})

menuLinks.forEach(function (el) {
el.addEventListener('click', function () {

  burger.classList.toggle('burger--active');

  menu.classList.toggle('header__nav--active');

  document.body.classList.toggle('stop-scroll');

})
})

// Swiper
const swiper = new Swiper('.swiper', {
  speed: 800,
  loop: true,
  spaceBetween: 30,
  pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },
  mousewheel: {
    invert: false,
    forceToAxis: true,
  },
});

// Accordion
let stepsBtn = document.querySelectorAll('.steps__btn');
let stepsItem = document.querySelectorAll('.steps-item');

stepsBtn.forEach(function(el) {
  el.addEventListener('click', function(e) {
    const path = e.currentTarget.dataset.path;

    stepsBtn.forEach(function(btn){ btn.classList.remove('steps__btn--active')});
    e.currentTarget.classList.add('steps__btn--active');

    stepsItem.forEach(function(element){ element.classList.remove('steps-item--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('steps-item--active');
  })
});

new Accordion('.accordion-container', {
  duration: 800,
});
