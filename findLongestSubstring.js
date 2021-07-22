// function findLongestSubstring(str) {
//   let longest = 0;
//   let seen = {};
//   let start = 0;
 
//   for (let i = 0; i < str.length; i++) {
//     let char = str[i];
//     if (seen[char]) {
//       start = Math.max(start, seen[char]);
//     }
//     // index - beginning of substring + 1 (to include current in count)
//     longest = Math.max(longest, i - start + 1);
//     // store the index of the next char so as to not double count
//     seen[char] = i + 1;
//   }
//   return longest;
// }

function findLongestSubstring(str) {
    let start = 0;
    let seen = {}
    let maxLength = 0
    if(str.length < 2) return str.length
    let j = 0
    let i = 0
    console.log(i,j)
    while(j < str.length) {
        let char = str[j]
        if(!str[char]) {
            str[char] = 1
        }
        if(str[char]) {
           j--
           i++
           str[arr[i]] = 0 
           maxLength = Math.max(maxLength, j - i + 1)
        }
        console.log(j)
        j++
    }
    return manLength
}

findLongestSubstring('rithmschool') // 7
// findLongestSubstring('thisisawesome') // 6