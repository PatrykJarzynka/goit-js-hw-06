const input = document.getElementsByTagName('input')[0];
const btn1 = document.querySelector('[data-create]');
const btn2 = document.querySelector('[data-destroy]');
const boxes = document.querySelector('#boxes');

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const createBoxes = () => {
  let tablica = [];
  let wymiary = 30;
  for (let i = 0; i < input.value; i++) {
    if (i === 0) {
      tablica.push(document.createElement('div'));
      tablica[i].style.width = wymiary + 'px';
      tablica[i].style.height = wymiary + 'px';
      tablica[i].style.backgroundColor = getRandomHexColor();
      wymiary += 10;
      continue;
    }
    tablica.push(document.createElement('div'));
    tablica[i].style.width = wymiary + 'px';
    tablica[i].style.height = wymiary + 'px';
    tablica[i].style.backgroundColor = getRandomHexColor();
    wymiary += 10;
  }
  boxes.append(...tablica);
}

const destroyBoxes = () => (boxes.innerHTML = '');

btn1.addEventListener('click', createBoxes);
btn2.addEventListener('click', destroyBoxes);
