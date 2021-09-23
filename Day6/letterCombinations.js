/**
 * @param {string} digits
 * @return {string[]}
 */
let digits = '23'

var letterCombinations = function (digits) {
  if (digits === '') return []
  let arr = [0, 0, 'abc', 'def', 'ghi', 'jkl', 'mno', 'pqrs', 'tuv', 'wxyz']
  let left = []
  let result = []
  for (let i = 0; i < digits.length; i++) {
    left.push(arr[parseInt(digits[i])])
  }
  combination(left, '')
  function combination(left, sum) {
    let res = sum
    if (left.length > 0) {
      let first = left[0]
      for (let i = 0; i < first.length; i++) {
        res += first[i]
        let templeft = left.shift()
        combination(left, res)
        //回溯
        left.unshift(templeft)
        res = res.slice(0, res.length - 1)
      }
    } else {
      if (sum.length == digits.length) {
        result.push(sum)
      }
    }
  }
  return result
}

letterCombinations(digits)
