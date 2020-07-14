"use strict";

let total = 0;
const numbers = [];

do {
  let input = prompt("Введите число");

  if (input === null) {
    console.log("Отменено пользователем!");
    break;
  }

  input = Number(input);
  if (isNaN(input)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }

  numbers.push(input);
} while (true);

if (numbers.length > 0) {
  console.log(numbers);
  for (let value of numbers) {
    total += value;
  }
  console.log(`Общая сумма чисел равна [${total}]`);
}
