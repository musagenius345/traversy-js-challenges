function countVowels(str) {
  str = str.toLowerCase()
  const map = new Map()
  map.set('a', 0)
  map.set('e', 0)
  map.set('i', 0)
  map.set('o', 0)
  map.set('u', 0)


  for (const char of str){
    if (map.has(char)){
      map.set(char, map.get(char) + 1)
    }
  }

  return map.get('a') + map.get('e') + map.get('i') + map.get('o') + map.get('u')
}

module.exports = countVowels;
