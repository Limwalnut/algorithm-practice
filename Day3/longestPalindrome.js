/**
 * @param {string} s
 * @return {string}
 */

let s = 'babad'
var longestPalindrome = function (s) {
  if (s.length < 2) return s
  let result = ''
  for (let cur = 0; cur < s.length; cur++) {
    checkPalindrome(cur, cur)
    checkPalindrome(cur, cur + 1)
  }
  function checkPalindrome(right, left) {
    while (right >= 0 && left < s.length && s[right] === s[left]) {
      right--
      left++
    }
    if (left - right - 1 > result.length) {
        result = s.slice(right + 1, left)
    }
  }
  return result
}

longestPalindrome(s)
