"use strict";

const checkForSpam = function (message) {
  let stringTest = message.toLowerCase();

  return stringTest.includes("spam") || stringTest.includes("sale");
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
