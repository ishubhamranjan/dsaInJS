function validAnagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false
    }
    let strObj1 = {}
    let strObj2 = {}
    for(let ele of str1) {
        strObj1[ele] = ++strObj1[ele] || 1
    }
    for(let ele of str2) {
        strObj2[ele] = ++strObj2[ele] || 1
    }
    for(let key in strObj1) {
        if(!(key in strObj2)) {
            return false
        }
        if(strObj1[key] !== strObj2[key]) {
            return false
        }
    }
    return true
}

validAnagram('', '')