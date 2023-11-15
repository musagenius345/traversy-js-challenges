function fizzBuzzArray(num) {
  return Array.from({length: num}, (v, i) => i + 1)
  .map(x => (x % 5 === 0 && x % 3 === 0) 
    ? 'FizzBuzz' 
    : ( x % 3  === 0 ) ? 'Fizz'
    : ( x % 5 === 0 ) ? 'Buzz'
    : x)
}
module.exports = fizzBuzzArray;
