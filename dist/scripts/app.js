"use strict";

var openModal = document.querySelector('#create_market');
var modal = document.querySelector('.modal__create');
var closeModal = document.querySelector('.modal__create-close');
var cancel = document.querySelector('.modal__create-cancel');
var createMarket = document.querySelector('.modal__create-create');
var domain = document.querySelector('#domain');
var selects = document.querySelectorAll('.form-select');
function closingModal() {
  modal.classList.remove('modal__create--active');
  domain.value = '';
  selects.forEach(function (e) {
    e.selectedIndex = 0;
  });
}
function openingModal() {
  modal.classList.add('modal__create--active');
}
openModal.addEventListener('click', openingModal);
closeModal.addEventListener('click', closingModal);
cancel.addEventListener('click', closingModal);
createMarket.addEventListener('click', closingModal);