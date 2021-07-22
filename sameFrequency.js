function sameFrequency (num1, num2){
  num1 = num1.toString()
  num2 = num2.toString()
  let numObj1 = {}
  let numObj2 = {}
  if(num1.length !== num2.length) {
      return false
  }
  for(let num of num1) {
      numObj1[num] = ++numObj1[num] || 1
  }
  for(let num of num2) {
      numObj2[num] = ++numObj2[num] || 1
  }
  for(let key in numObj1) {
      if(!(key in numObj2)) {
          return false
      }
      if(numObj1[key] !== numObj2[key]) {
          return false
      }
  }
  return true
}

sameFrequency(2233, 2233)