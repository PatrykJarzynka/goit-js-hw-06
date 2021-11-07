let counterValue = 0;
let decrementButton = document.querySelector('[data-action="decrement"]');
let incrementButton = document.querySelector('[data-action="increment"]');
let number = document.querySelector('#value');
const incrementValue = () => {
  counterValue += 1;
  number.textContent = counterValue;
};
const decrementValue = () => {
  counterValue -= 1;
  number.textContent = counterValue;
};
decrementButton.addEventListener('click', () => decrementValue());
incrementButton.addEventListener('click', () => incrementValue());
