function collectStrings(obj) {
    let arr = []
    for(let key in obj) {
        if(typeof obj[key] === 'string') {
            arr.push(obj[key])
        } else {
            arr = arr.concat(collectStrings(obj[key]))
        }
    }
    return arr
}