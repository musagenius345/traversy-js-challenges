const range = (start, stop, step) => Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step)

/**
     * Returns the missing letter in an array of consecutive letters.
     * @param {string[]} arr - An array of consecutive letters.
     * @returns {string} - The missing letter.
     */
function findMissingLetter(arr) {
  if(arr.length === 0) return ''

  const lastChar = arr[arr.length - 1]
  const firstChar = arr[0]
  const perfectArr = range(firstChar.charCodeAt(0), lastChar.charCodeAt(0), 1).map((x) => String.fromCharCode(x))

  for (const val of perfectArr){
    if(!arr.includes(val)){
      return val
    }
  }
}

module.exports = findMissingLetter;
