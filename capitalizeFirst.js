function capitalizeFirst(arr) {
    if(arr.length === 1) return [arr[0][0].toUpperCase() + arr[0].slice(1)]
    return [arr[0][0].toUpperCase() + arr[0].slice(1)].concat(capitalizeFirst(arr.slice(1)))
}

capitalizeFirst(['apple', 'banana', 'carrot'])