"use strict";

let total = 0;
const numbers = [];
let input;

while (input !== null) {
  input = prompt("Введите число");

  if (input === null) {
    console.log("Отменено пользователем!");
    break;
  }

  const conversionNumber = Number(input);
  if (isNaN(conversionNumber)) {
    alert("Было введено не число, попробуйте еще раз");
    continue;
  }
  numbers.push(conversionNumber);
}

if (numbers.length > 0) {
  console.log(numbers);
  for (let value of numbers) {
    total += value;
  }
  console.log(`Общая сумма чисел равна ${total}`);
}
