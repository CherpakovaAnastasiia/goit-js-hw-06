//HTML містить список категорій ul#categories.
//Напиши скрипт, який:

//Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
//Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

//В результаті, в консолі будуть виведені наступні повідомлення.
//не використані властивості навігації по ДОМ у першому варіанті



const categories = document.getElementById("categories");
console.log(categories);

const categoryElements = Array.from(categories.children);

const allCategories = categories.children.length;
console.log(`Number of categories: ${categories.children.length}`);



allCategories.forEach((category) => {
  const categoryTitle = category.querySelector("h2").textContent;
  const categoryItemsList = category.querySelectorAll("li");

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItemsList.length}`);
});


// const firstListItem = list.firstElementChild;
// console.log(firstListItem);

// const lastListItem = list.lastElementChild;
// console.log(lastListItem);

// const listItems = list.children;
// console.log(listItems);


// ПЕРШИЙ ВАРІАНТ


// const categoriesList = document.getElementById("categories");

// const categoryItems = categoriesList.querySelectorAll("li.item");

// console.log(`Number of categories: ${categoryItems.length}`);

// categoryItems.forEach((categoryItem) => {

//   const categoryTitle = categoryItem.querySelector("h2").textContent;
//   const categoryItemsList = categoryItem.querySelectorAll("li");

//   console.log(`Category: ${categoryTitle}`);
//   console.log(`Elements: ${categoryItemsList.length}`);
// });

// // 1. зверт.до списку
// // 2. спуск.до лі
// // 3. кіл - ть лі через довжину
// // 4. фор іч для лі
// // 5. дістати Ш2 ш лі через довжину