// Напиши скрипт, який під час втрати фокусу на інпуті (подія blur), перевіряє його вміст щодо правильної кількості введених символів.
//Яка кількість символів повинна бути в інпуті, зазначається в його атрибуті data-length.

//Якщо введена правильна кількість символів, то border інпуту стає зеленим, якщо неправильна кількість - червоним.
//Для додавання стилів використовуй CSS-класи valid і invalid, які ми вже додали у вихідні файли завдання.


const inputText = document.getElementById("validation-input");

const length = parseInt(inputText.getAttribute('data-length'));

inputText.addEventListener("blur", function () {
    if (inputText.value.length === length) {
     inputText.classList.add('valid');
     inputText.classList.remove('invalid');
    } else {
      inputText.classList.add('invalid');
      inputText.classList.remove('valid');
    }
});