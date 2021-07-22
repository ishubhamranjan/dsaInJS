function minSubArrayLen(arr, target) {
	let slidingWindowSum = arr[0]
	let minLength = 0, start = 0, j = 1, isStartIncremented = false
	while(j < arr.length || start < arr.length) {
		slidingWindowSum += arr[j]
		console.log('##########################')
		console.log('slidingWindowSum', slidingWindowSum)
		if(slidingWindowSum >= target) {
			if(minLength !== 0) minLength = Math.min(minLength, j - start + 1)
			else minLength = j - start + 1
			slidingWindowSum -= arr[start]
			console.log('hit-->',start, j)
			start++
			isStartIncremented = true
		} else {
			console.log('less than-->',start, j)
		}
		if(j < arr.length - 1) { 
			console.log('incrementing j')
			j++ 
			console.log('val of incremented j', j)
		} else if(isStartIncremented || start < arr.length) { 
			console.log('incrementing start')
			start++ 
			isStartIncremented = false 
		}
		

	}
	return minLength
}

minSubArrayLen([2,3,1,2,2,4,3], 7)
