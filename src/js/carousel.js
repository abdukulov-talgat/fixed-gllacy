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



function getCurrentOffset(){
    let str = container.style.transform;
    const reg = new RegExp(/translateX\((-?\d*)px\)/);

    let result = reg.exec(str);
    console.log(result);
    if(result && result.length > 1)
        return +result[1];
    return 0;

}


function previousSlide(){
    slides[currentIndex].classList.remove(activeSlideClass);
    currentIndex = currentIndex > 0 ? currentIndex - 1 : slides.length - 1;

    setSlide();
}

function nextSlide(){

    slides[currentIndex].classList.remove(activeSlideClass);
    currentIndex = currentIndex < slides.length - 1 ? currentIndex + 1 : 0;

    setSlide();
}

function setSlide(){
    slides[currentIndex].classList.add(activeSlideClass);
    container.style.transform = `translateX(${-offsetPerSlide * currentIndex}px)`;
}







