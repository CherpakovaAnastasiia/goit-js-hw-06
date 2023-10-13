//HTML містить список категорій ul#categories.
//Напиши скрипт, який:

//Порахує і виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
//Для кожного элемента li.item у списку ul#categories, знайде і виведе в консоль текст заголовку елемента (тегу <h2>) і кількість елементів в категорії (усіх <li>, вкладених в нього).
//Для виконання цього завдання потрібно використати метод forEach() і властивості навігації по DOM.

//В результаті, в консолі будуть виведені наступні повідомлення.
//не використані властивості навігації по ДОМ у першому варіанті



const categoriesList = document.querySelectorAll('.item');
console.log(`Number of categoris: ${categoriesList.length}`);

const firstCategotiesItem = categoriesList.firstElementChild;
const lastCategoriesItem = categoriesList.lastElementChild;
const listItem = categoriesList.children;

categoriesList.forEach(category => {
    const categoryName = category.querySelector('h2').textContent;
    const elementsCount = category.querySelectorAll('ul > li').length;
    console.log(`Category: ${categoryName}`);
    console.log(`Elements: ${elementsCount}`);
    });



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