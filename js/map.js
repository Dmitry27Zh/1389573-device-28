var buttonMap = document.querySelector('.button-map');
var modalMap = document.querySelector('.modal-map');
var modalClose = modalMap.querySelector('.modal-close');

buttonMap.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.add('modal-show');
})

modalClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalMap.classList.remove('modal-show');
})

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    modalMap.classList.remove('modal-show');
  }
})