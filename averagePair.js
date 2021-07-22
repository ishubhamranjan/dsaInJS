function averagePair(arr, target) {
  let i = 0
  let j = arr.length - 1
  while(i < j) {
      let avg = (arr[i] + arr[j]) / 2
      if(avg === target) {
          return true
      } else if(avg < target) {
          i++
      } else {
          j--
      }
  }
  return false
}