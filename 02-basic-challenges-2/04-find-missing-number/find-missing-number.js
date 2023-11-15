/**
     * Returns the missing number in an array of unique numbers from 1 to n (inclusive).
     * @param {number[]} arr - The array of numbers.
     * @returns {number} - The missing number.
     */
function findMissingNumber(arr) {
  const perfectArr =  Array.from({length: Math.max(...arr)}, (v, i) => i + 1)
  if(arr.length === 0) return 1
  for (const val of perfectArr){
    if(!(arr.includes(val))){
      return val
    }
  }
}

module.exports = findMissingNumber;
