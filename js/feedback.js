var buttonFeedback = document.querySelector('.button-feedback');
var modalFeedback = document.querySelector('.modal-feedback');
var modalClose = modalFeedback.querySelector('.modal-close');
var feedbackForm = modalFeedback.querySelector('.feedback');
var inputName = feedbackForm.querySelector('[name=user-name]');
var inputEmail = feedbackForm.querySelector('[name=user-email]');
var inputText = feedbackForm.querySelector('[name=text]');
var isStorageAvailable = true;
var storageName;
var storageEmail;

try {
  storageName = localStorage.getItem('user-name');
  storageEmail = localStorage.getItem('user-email');
} catch (error) {
  isStorageAvailable = false;
}

buttonFeedback.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalFeedback.classList.add('modal-show');
  if (isStorageAvailable) {
    inputName.value = storageName;
    inputEmail.value = storageEmail;
    inputText.focus();
  } else {
    inputName.focus();
  }
})

modalClose.addEventListener('click', function (evt) {
  evt.preventDefault();
  modalFeedback.classList.remove('modal-show');
  modalFeedback.classList.remove('modal-shake');
})

window.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    evt.preventDefault();
    modalFeedback.classList.remove('modal-show');
    modalFeedback.classList.remove('modal-shake');
  }
})

feedbackForm.addEventListener('submit', function (evt) {
  if (!inputName.value || !inputEmail.value || !inputText.value) {
    evt.preventDefault();
    modalFeedback.classList.remove('modal-shake');
    modalFeedback.offsetWidth = modalFeedback.offsetWidth;
    modalFeedback.classList.add('modal-shake');
  } else {
    localStorage.setItem('user-name', inputName.value);
    localStorage.setItem('user-email', inputEmail.value);
  }
})