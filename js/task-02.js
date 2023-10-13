const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

// Завдання 2 - всі елементи мають бути вставлені в ДОМ за одну операцію, а у вас вони вставляються в циклі.


const ul = document.getElementById("ingredients");
const liElements = [];

ingredients.forEach((ingredient) => {
  const li = document.createElement("li");
  li.textContent = ingredient;
  li.classList.add("item");
  liElements.push(li);
});

ul.append(...liElements);


// Первый вариант

// const ul = document.getElementById("ingredients");

// ingredients.forEach((ingredient) => {
//   const li = document.createElement("li");
//   li.textContent = ingredient;
//   li.classList.add("item");
//  ul.appendChild(li);
// });

