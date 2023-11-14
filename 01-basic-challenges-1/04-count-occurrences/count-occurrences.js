/**
  * @param {string} word
  * @param {string} char
  * @returns {number}
  */

function countOccurrences(word, char) {
  return word.trim().split('').filter( el => el === char).length
}

module.exports = countOccurrences;
