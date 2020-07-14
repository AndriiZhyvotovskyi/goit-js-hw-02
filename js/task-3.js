"use strict";

const findLongestWord = function (string) {
  const value = string.split(" ");
  let longestWord = value[0];
  for (let i = 1; i < value.length; i += 1) {
    if (value[i].length > longestWord.length) {
      longestWord = value[i];
    }
  }

  return longestWord;
};

console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'
