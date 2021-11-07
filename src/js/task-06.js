let input = document.querySelector('#validation-input');

const changeClasses = () => {
  input.addEventListener('focus', () => input.classList.remove('valid', 'invalid'));
  input.addEventListener('blur', () => {
    if (input.value.length == input.dataset.length) input.classList.add('valid');
    else if (input.value.length !== input.dataset.length) input.classList.add('invalid');
  });
};

input.addEventListener('input', changeClasses);
