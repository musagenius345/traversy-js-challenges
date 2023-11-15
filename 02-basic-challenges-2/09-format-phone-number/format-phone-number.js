/**
 * Returns a string representing a phone number.
 * @param {number[]} numbers - The numbers to use in the phone number.
 * @returns {string} - The formatted phone number.
 */ 
const formatPhoneNumber = (numbers) => numbers.join('').replace(/(\d{3})(\d{3})(\d{4})/, '($1) $2-$3')

module.exports = formatPhoneNumber;
