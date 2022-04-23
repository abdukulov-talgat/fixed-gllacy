const btn = document.querySelector('.feedback__button');
const feedback = document.querySelector('.modal-feedback');
const overlay = document.querySelector('.modal-overlay');

const modalOpen = 'modal-open';

function initModals() {
    btn.addEventListener('click', () => {
        feedback.classList.toggle(modalOpen);
        overlay.classList.toggle(modalOpen);
    });

    overlay.addEventListener('click', () => {
        overlay.classList.toggle(modalOpen);
        document.querySelectorAll('.modal').forEach((m) => m.classList.remove(modalOpen));
    });

    document.querySelectorAll('.modal__close').forEach((c) => {
        c.addEventListener('click', () => {
            c.parentElement.classList.remove(modalOpen);
            overlay.classList.remove(modalOpen);
        })
    });
}




export default initModals;
