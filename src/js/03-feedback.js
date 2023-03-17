import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const email = document.querySelector('input');
const message = document.querySelector('textarea');
const savedForm = localStorage.getItem('feedback-form-state');
const parsedForm = JSON.parse(savedForm);
const throttled = throttle(savingForm, 500);

function savingForm() {
  const formValue = {
    email: email.value,
    message: message.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formValue));
}

function clickSubmit(event) {
  event.preventDefault();
  console.log(JSON.parse(localStorage.getItem('feedback-form-state')));
  localStorage.removeItem('feedback-form-state');
  email.value = '';
  message.value = '';
}

form.addEventListener('input', throttled);
form.addEventListener('submit', clickSubmit);

if (
  parsedForm !== null
) {
  email.value = parsedForm.email;
  message.value = parsedForm.message;
}
