function arrayIntersection(arr1, arr2) {
  const set1 = new Set(arr1)
  const set2 = new Set(arr2)
  let intersection = []

  for( const val of set1){
    if(set2.has(val)){
      intersection = [...intersection, val]
    }
  }

  return intersection
}

module.exports = arrayIntersection;
