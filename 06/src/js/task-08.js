const form = document.querySelector('.login-form');

form.addEventListener('submit', event => {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;
  if (email.value === '' || password.value === '')
    alert('Wszystkie pola powinny zostać wypełnione!');
  console.log('Email:', email.value);
  console.log('Haslo:', password.value);
  event.currentTarget.reset();
});
