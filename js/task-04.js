// Лічильник складається зі спану і кнопок, які по кліку повинні збільшувати і зменшувати його значення на одиницю.// Створи змінну counterValue, в якій буде зберігатися поточне значення лічильника та ініціалізуй її значенням 0.// Додай слухачів кліків до кнопок, всередині яких збільшуй або зменшуй значення лічильника.// Оновлюй інтерфейс новим значенням змінної counterValue.

// Стукаємося до ДОМ
const counterElement = document.querySelector("#value")

const decrementButton = document.querySelector('button[data-action="decrement"]')
const incrementButton = document.querySelector('button[data-action="increment"]')

//Робимо змінну
let counterValue = 0;

// Функція зміни
function updateCounter() {
  counterElement.textContent = counterValue;
}
// Слухачі
decrementButton.addEventListener('click', () => {
  counterValue -= 1;
  updateCounter();
});

incrementButton.addEventListener('click', () => {
  counterValue += 1;
  updateCounter();
});

// визиваємо
updateCounter();