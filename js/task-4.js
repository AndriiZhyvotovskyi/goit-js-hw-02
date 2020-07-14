"use strict";

const formatString = function (string) {
  console.log(`количество символов - ${string.length}`);
  const maxLength = 40;

  if (string.length > maxLength) {
    const latersLook = string.split("");
    latersLook.splice(maxLength);
    latersLook.push("...");
    const normalizeString = latersLook.join("");
    console.log(normalizeString);
  }
  if (string.length <= maxLength) {
    console.log(string);
  }
};

formatString("Curabitur ligula sapien, tincidunt non.");
// вернется оригинальная строка

formatString("Vestibulum facilisis, purus nec pulvinar iaculis.");
// // вернется форматированная строка

formatString("Curabitur ligula sapien.");
// // вернется оригинальная строка

formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique."); //вернется форматированная строка
