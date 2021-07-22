function stringifyNumbers(obj) {
    var newObj = {}
    for(let key in obj) {
        if(typeof obj[key] === 'object') {
            newObj[key] = stringifyNumbers(obj[key])
        } else if(typeof obj[key] === 'number') {
            newObj[key] = obj[key].toString()
        } else {
            newObj[key] = obj[key]
        }
    }
    return newObj
}

let obj = {
    num: 1,
    test: [],
    data: {
        val: 4,
        info: {
            isRight: true,
            random: 66
        }
    }
}

stringifyNumbers(obj)

// {
//     num: "1",
//     test: [],
//     data: {
//         val: "4",
//         info: {
//             isRight: true,
//             random: "66"
//         }
//     }
// }