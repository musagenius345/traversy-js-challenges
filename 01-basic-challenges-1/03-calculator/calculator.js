function calculator(a, b, operation) {
 const operators = new Map()
 operators.set('+', a + b)
 operators.set('-', a - b)
 operators.set('*', a * b)
 operators.set('/', a / b)
 
 if (operators.has(operation)) {
   return operators.get(operation)
 }
 
 return 'Invalid Operation'
}

module.exports = calculator;