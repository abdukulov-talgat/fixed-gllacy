const buttons = document.querySelectorAll('.user-nav__link');
const popupShowClass = 'user-nav__link--active';



function closeOtherPopups(){
    buttons.forEach((btn) => btn.classList.remove(popupShowClass));
}

function initPopups(){
    buttons.forEach((btn) => {
        btn.addEventListener('click', () => {
            let isOpen = btn.classList.contains(popupShowClass);
            closeOtherPopups();

            if (!isOpen) btn.classList.add(popupShowClass);
        });
    });
}


export default initPopups;
