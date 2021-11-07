' use strict ';

const tablica = document.querySelectorAll('#categories .item');
console.log(`Number of categories: ${tablica.length}`);
tablica.forEach(item => {
  let header = item.querySelector('h2').textContent;
  console.log('Category:', header);
  let amountOfChildren = item.querySelectorAll('li').length;
  console.log('Elements:', amountOfChildren);
});
