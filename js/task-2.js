"use strict";

const calculateEngravingPrice = function (message, pricePerWord) {
  const value = message.split(" ");
  const quantity = value.length;

  console.log(`фраза - ${message}`);
  console.log(
    `количество слов - ${quantity}, гравировка одного слова - ${pricePerWord}. общая сумма - ${
      pricePerWord * quantity
    }`
  );
};

calculateEngravingPrice(
  "Proin sociis natoque et magnis parturient montes mus",
  10
);

calculateEngravingPrice(
  "Proin sociis natoque et magnis parturient ontes mus",
  20
);

calculateEngravingPrice("Donec orci lectus aliquam est magnis", 40);

calculateEngravingPrice("Donec orci lectus aliquam est magnis", 20);
