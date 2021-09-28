/* 
    数字 n 代表生成括号的对数，请你设计一个函数，用于能够生成所有可能的并且 有效的 括号组合。

    有效括号组合需满足：左括号必须以正确的顺序闭合。
*/

/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  if (n === 0) return []
  let dp = new Array(n + 1).fill(0).map(() => [])
  dp[0].push('')
  dp[1].push('()')
  for (let i = 2; i <= n; i++) {
    for (let j = 0; j < i; j++) {
      let p = dp[j]
      let q = dp[i - 1 - j]
      for (const m of p) {
          for (const n of q) {
              dp[i].push(`(${m})${n}`)
          }
      }
    }
  }
  return dp[n]
}

console.log(generateParenthesis(3))

