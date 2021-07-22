function linearSearch(arr, key) {
    if(arr.length < 1) return -1
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === key) return i
    }
    return -1
}

// linearSearch([2,5,9,1,3,6], 7)
// linearSearch([2,5,9,1,3,6], 4)
// linearSearch([2,5,9,1,3,6], 3)
linearSearch([])