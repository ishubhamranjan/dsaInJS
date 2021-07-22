function binarySearch(arr, key) {
    let l = 0, r = arr.length - 1, m = Math.floor((r + l) / 2)
    for(let i = 0; i < arr.length; i++) {
        if(arr[m] === key) { return m }
        else if(key > arr[m]) { l = m + 1 }
        else if(key < arr[m]) { r = m - 1 }
        m = Math.floor((r + l) / 2)
    }
    return -1
}


// binarySearch([10,20,30,40,50,60,70,80,90,100], 90)
// binarySearch([10,20,30,40,50,60,70,80,90,100], 40)
// binarySearch([10,20,30,40,50,60,70,80,90,100], 5)
// binarySearch([10,20,30,40,50,60,70,80,90,100], 105)
binarySearch([10,20,30,40,50,60,70,80,90,100], 105)
// binarySearch([], 30)