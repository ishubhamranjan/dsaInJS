// // STANDARD BUBBLE SORT
// function bubbleSort(arr) {
//     for(let i = arr.length; i > 0; i--) {
//         for(let j = 0; j < i - 1; j++) {
//             if(arr[j] > arr[j + 1]) {
//                 let temp = arr[j]
//                 arr[j] = arr[j + 1]
//                 arr[j + 1] = temp
//             }
//         }
//     }
//     return arr
// }

// // ES15 VERSION OF SWAP
// function bubbleSort(arr) {
//     let swap = (arr, idx1, idx2) => {
//         return [arr[idx1], arr[idx2]] = [arr[idx2], arr[idx1]]
//     }
//     for(let i = arr.length; i > 0; i--) {
//         for(let j = 0; j < i - 1; j++) {
//             if(arr[j] > arr[j + 1]) swap(arr, j, j + 1)
//         }
//     }
//     return arr
// }

// OPTIMISED BUBBLE SORT
function bubbleSort(arr) {
    let noSwaps
    for(let i = arr.length; i > 0; i--) {
        noSwaps = true
        for(let j = 0; j < i - 1; j++) {
            console.log(arr, arr[j], arr[j + 1])
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j]
                arr[j] = arr[j + 1]
                arr[j + 1] = temp
                noSwaps = false
            }
        }
        if(noSwaps) break
    }
    return arr
}

// bubbleSort([24,49,21,18,5,1,89])
bubbleSort([8,1,2,3,4,5,6,7])