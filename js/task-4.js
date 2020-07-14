"use strict";

const formatString = function (string) {
  console.log(`количество символов - ${string.length}`);
  const maxLength = 40;

  if (string.length > maxLength) {
    return string.slice(0, maxLength) + "...";
  }
  return string;
};

console.log(formatString("Curabitur ligula sapien, tincidunt non."));
// вернется оригинальная строка

console.log(formatString("Vestibulum facilisis, purus nec pulvinar iaculis."));
// // вернется форматированная строка

console.log(formatString("Curabitur ligula sapien."));
// // вернется оригинальная строка

console.log(
  formatString(
    "Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."
  )
); //вернется форматированная строка
