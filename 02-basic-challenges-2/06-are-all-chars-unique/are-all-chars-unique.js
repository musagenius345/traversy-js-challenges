/**
     * Returns true if all characters in a string are unique.
     * @param {string} str - The string to check.
     * @returns {boolean} - Whether all characters in the string are unique.
     */
function areAllCharactersUnique(str) {
  const arr = str.split('')
  const set = new Set(arr)
  return arr.length === set.size
}

module.exports = areAllCharactersUnique;
