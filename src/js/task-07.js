let input = document.querySelector('#font-size-control');
let text = document.querySelector('#text');

const changeSize = () => {
  text.style.fontSize = input.value + 'px';
};

input.addEventListener('input', changeSize);
