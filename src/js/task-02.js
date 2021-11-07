'use strict';

const ingredients = ['Potatoes', 'Mushrooms', 'Garlic', 'Tomatos', 'Herbs', 'Condiments'];

const list = document.querySelector('#ingredients');
let tablica = [];

ingredients.forEach(element => {
  let elementList = document.createElement('li');
  elementList.textContent = element;
  elementList.classList.add('item');
  //list.append(elementList) - było by chyba szybciej, ale staram się zrobić
  //to zgodnie z zadaniem, czyli dodać całość jedną operacją.
  tablica.push(elementList);
});

list.append(...tablica);
