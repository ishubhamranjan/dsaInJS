function capitalizeWords (arr) {
    if(arr.length === 1) return [arr[0].toUpperCase()]
    return capitalizeWords()
}