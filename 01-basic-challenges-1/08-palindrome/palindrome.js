const reverseString = require('../07-reverse-string/reverse-string')
const isPalindrome = (str) => str === reverseString(str)

module.exports = isPalindrome;
