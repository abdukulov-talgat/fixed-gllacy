const pagination = document.querySelector('.carousel__pagination');
const container = document.querySelector('.carousel__container');
const prev = document.querySelector('.carousel__arrow--prev');
const next = document.querySelector('.carousel__arrow--next');

const title = document.querySelector('.carousel__title');
const text = document.querySelector('.carousel__text');
const link = document.querySelector('.carousel__link');

const offsetPerSlide = 100 + 41; // width + margin
const slides = container.children;
const activeSlideClass = 'carousel__slide--active';
let currentIndex = 0;

prev.addEventListener('click', () => {
    previousSlide();
});

next.addEventListener('click', () => {
    nextSlide();
});


function previousSlide() {
    const removed = container.removeChild(container.lastElementChild);
    container.firstElementChild.classList.remove(activeSlideClass);
    removed.classList.add(activeSlideClass);
    container.prepend(removed);
}

function nextSlide() {
    const removed = container.removeChild(container.firstElementChild);
    container.firstElementChild.classList.add(activeSlideClass);
    removed.classList.remove(activeSlideClass);
    container.appendChild(removed);
}

function setSlide() {

}







