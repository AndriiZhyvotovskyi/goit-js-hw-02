"use strict";

const checkForSpam = function (message) {
  let stringTest = message.toLowerCase();
  if (stringTest.indexOf("spam") !== -1 || stringTest.indexOf("sale") !== -1) {
    return true;
  }
  return false;
};

console.log(checkForSpam("Latest technology news")); // false

console.log(checkForSpam("JavaScript weekly newsletter")); // false

console.log(checkForSpam("Get best sale offers now!")); // true

console.log(checkForSpam("[SPAM] How to earn fast money?")); // true
