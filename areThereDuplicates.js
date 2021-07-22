function areThereDuplicates() {
  let sortedArr = Array.from(arguments).sort()
  console.log('sortedArr', sortedArr)
  let i = 0;
  for(let j = 1; j < sortedArr.length; j++) {
      if(sortedArr[i] === sortedArr[j]) {
        return true
      } else {
          i++
      }
  }
  return false;
}

areThereDuplicates('a', 'c', 'b')