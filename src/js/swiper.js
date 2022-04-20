import Swiper, { Navigation, Pagination, Controller } from 'swiper';

import 'swiper/css';
// import 'swiper/css/bundle';


const swiper = new Swiper('.swiper', {
    loop: true,

    modules: [Navigation, Pagination, Controller],
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});

const swiperThumb = new Swiper('.swiper-thumb', {
    slidesPerView: 'auto',
    loop: true,
    spaceBetween: 41,
    initialSlide: swiper.activeIndex,
    allowTouchMove: false,

    wrapperClass: 'swiper-thumb__wrapper',
    slideClass: 'swiper-thumb__slide',
    slideActiveClass: 'swiper-thumb__slide--active'
});

swiper.controller.control = swiperThumb;


swiper.on('slideChangeTransitionEnd', function (swiper) {
    setContent(
        swiper.slides[swiper.activeIndex].dataset.title,
        swiper.slides[swiper.activeIndex].dataset.text,
        swiper.slides[swiper.activeIndex].dataset.link,
        swiper.slides[swiper.activeIndex].dataset.color,
    )
});



const titleEl = document.querySelector('.carousel__title');
const textEl = document.querySelector('.carousel__text');
const linkEl = document.querySelector('.carousel__link');

function setContent(title, text, link, color) {
    titleEl.textContent = title;
    textEl.textContent = text;
    linkEl.setAttribute('href', link);
    document.body.style.backgroundColor = color;
}
