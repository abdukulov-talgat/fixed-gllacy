const pagination = document.querySelector('.carousel__pagination');
const container = document.querySelector('.carousel__container');
const prev = document.querySelector('.carousel__arrow--prev');
const next = document.querySelector('.carousel__arrow--next');



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



// let clones = [];
// for (let i = 0; i < container.children.length; i++)
//     clones.push(container.children[i].cloneNode(true));

// for (let i = 0; i < clones.length; i++) {
//     container.prepend(clones[i].cloneNode(true));
//     container.appendChild(clones[i].cloneNode(true));
// }



function previousSlide() {
    // container.firstElementChild.classList.remove(activeSlideClass);
    // const removed = container.removeChild(container.lastElementChild);
    // removed.classList.add(activeSlideClass);
    // container.prepend(removed);

    // setContent(removed.dataset.title, removed.dataset.text, removed.dataset.link, removed.dataset.color);
}

function nextSlide() {
    container.children[currentIndex].classList.remove(activeSlideClass);

    currentIndex = (currentIndex + 1) > (container.children.length - 1) ? 0 : currentIndex + 1;
    container.children[currentIndex].classList.add(activeSlideClass);
    pushClones();

    container.style.transform = `translateX(${-offsetPerSlide * currentIndex}px)`
}



function pushClones() {

}



