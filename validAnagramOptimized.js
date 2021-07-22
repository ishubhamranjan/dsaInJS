function validAnagramOptimized(first, second) {
    if(first.length !== second.length) {
        return false
    }
    let lookup = {}
    for(let letter of first) {
        lookup[letter] = ++lookup[letter] || 1
    }
    for(let letter of second) {
        if(!(letter in lookup)) {
            return false;
        } else {
            lookup[letter] -= 1
        }
    }
    return true
}

validAnagramOptimized('hello', 'hllex')