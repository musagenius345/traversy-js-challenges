// const uniqueChar = require('../06-are-all-chars-unique/are-all-chars-unique.js')
const countOccurence = require('../../01-basic-challenges-1/04-count-occurrences/count-occurrences.js')
/**
     * Returns the first non-repeating character in a string.
     * @param {string} str - The string to search.
     * @returns {string | null} - The first non-repeating character in the string or null if there are no non-repeating
  characters.
     */
function findFirstNonRepeatingCharacter(str) {
  // if(uniqueChar(str)) return null
  let char = ''
  const map = new Map()

  for(let i = 0; i < str.length; i++){
    const count = countOccurence(str, str[i])
    map.set(str[i], count)
  }

  for (const [key, val] of map){
     if(val === 1){
      char = key
      break
    }
  }

  return char ? char : null
}

module.exports = findFirstNonRepeatingCharacter;
