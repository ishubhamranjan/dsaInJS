function maxSubarraySum(arr, num) {
    let maxSum = 0
    if (arr.length < num) return null
    for(let i = 0; i < num; i++) {
        maxSum += arr[i]
    }
    let slidingWindowSum = maxSum
    for(let i = num; i < arr.length; i++) {
        slidingWindowSum += arr[i] - arr[i - num]
        maxSum = Math.max(maxSum, slidingWindowSum)
        console.log(maxSum, slidingWindowSum)
    }
    return maxSum
}