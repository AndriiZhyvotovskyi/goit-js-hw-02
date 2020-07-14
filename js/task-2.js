"use strict";

const calculateEngravingPrice = function (message, pricePerWord) {
  const value = message.split(" ");
  const quantity = value.length;

  console.log(`фраза - ${message}`);
  return `количество слов - ${quantity}, гравировка одного слова - ${pricePerWord}. общая сумма - ${
    pricePerWord * quantity
  }`;
};

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient montes mus",
    10
  )
);

console.log(
  calculateEngravingPrice(
    "Proin sociis natoque et magnis parturient ontes mus",
    20
  )
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40)
);

console.log(
  calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20)
);
