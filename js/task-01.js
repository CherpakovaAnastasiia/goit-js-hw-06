
const categoriesList = document.getElementById("categories");

const categoryItems = categoriesList.querySelectorAll("li.item");

console.log(`Number of categories: ${categoryItems.length}`);

categoryItems.forEach((categoryItem) => {

  const categoryTitle = categoryItem.querySelector("h2").textContent;
  const categoryItemsList = categoryItem.querySelectorAll("li");

  console.log(`Category: ${categoryTitle}`);
  console.log(`Elements: ${categoryItemsList.length}`);
});

// 1. зверт.до списку
// 2. спуск.до лі
// 3. кіл - ть лі через довжину
// 4. фор іч для лі
// 5. дістати Ш2 ш лі через довжину