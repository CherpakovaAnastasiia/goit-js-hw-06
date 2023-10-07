//Напиши скрипт, який під час набору тексту в інпуті input#name-input (подія input), підставляє його поточне значення в span#name-output. Якщо інпут порожній, у спані повинен відображатися рядок "Anonymous".

//Варіант перший. Видає помилку.

// const inputName = document.querySelector("input#name-input");

// const spanName = document.querySelector("span#name-output");

// inputName.addEventListener("input", (event) => {
//     spanName.textContent = event.currentTarget.value
// });

// Варіант 2
const inputName = document.getElementById('name-input');
const outputName = document.getElementById('name-output');

inputName.addEventListener('input', function() {
  // якщо порожній, то анонімус, якщо ні -  вєлюю
  if (inputName.value === '') {
    outputName.textContent = 'Anonymous'; 
  } else {
    outputName.textContent = inputName.value; 
  }
});