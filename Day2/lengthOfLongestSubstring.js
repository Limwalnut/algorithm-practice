/**
 * @param {string} s
 * @return {number}
 */

let s = 'pwwkew'
var lengthOfLongestSubstring = function(s) {
    let ans = 0
    let i = 0
    let j = 0
    const map = new Map()

    while (j < s.length) {
        const char = s[j]
        const pos = map.get(char)
        if (pos !== undefined && pos >= i) {
            i = pos + 1
        }
        map.set(char, j)
        ans = Math.max(j - i + 1, ans)
        j++
    }
    return ans
};


lengthOfLongestSubstring(s)
