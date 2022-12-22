const openModal = document.querySelector('#create_market');
const modal = document.querySelector('.modal__create');
const closeModal = document.querySelector('.modal__create-close');
const cancel = document.querySelector('.modal__create-cancel');
const createMarket = document.querySelector('.modal__create-create');
const domain = document.querySelector('#domain');
const selects = document.querySelectorAll('.form-select');

function closingModal () {
    modal.classList.remove('modal__create--active');
    domain.value = '';
    selects.forEach((e) => {
        e.selectedIndex = 0;
    })
}
function openingModal() {
    modal.classList.add('modal__create--active');
}
openModal.addEventListener('click', openingModal);

closeModal.addEventListener('click', closingModal);

cancel.addEventListener('click', closingModal);

createMarket.addEventListener('click', closingModal);