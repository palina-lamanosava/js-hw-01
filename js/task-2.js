// Задание 2
// Напиши скрипт проверки количества товаров на складе. Есть переменные total (количество товаров на складе) и ordered (единиц товара в заказе).

// Сравни эти значения и по результатам выведи:

// Если в заказе указано число, превышающее количество товаров на складе, то выведи сообщение "На складе недостаточно твоаров!".
// В другом случае выводи сообщение "Заказ оформлен, с вами свяжется менеджер".
// Проверь работоспособность кода с разными значениями переменной ordered, например 20, 80 и 130.

// const total = 100;
// const ordered = 50;

const total = 90;
let ordered = prompt("Please enter quantity");

let orderResult = Number(ordered);
if (orderResult === 0) {
    console.log("Недостаточно для заказа");
} else if (orderResult <= total) {
    console.log("Заказ оформлен, с вами свяжется менеджер");
} else {
    console.log("На складе недостаточно твоаров!");
}


