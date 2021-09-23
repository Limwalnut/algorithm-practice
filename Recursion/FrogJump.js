/* 
    一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。
    求该青蛙跳上一个 n 级的台阶总共有多少种跳法。
    答案需要取模 1e9+7（1000000007），如计算初始结果为：1000000008，请返回 1。
*/

// 传统递归计算重复的子问题会耗费大量时间，时间复杂度:O(2^n)
// function FrogJump(n) {
//   if (n < 2) return 1
//   if (n === 2) return 2;
//   return (FrogJump(n - 1) + FrogJump(n - 2)) % (1000000007)
// }

// 使用cache储存之前的计算结果，避免重复计算
function FrogJump(n) {
  let cache = []
  getCache(n, cache)
  return cache[n]
}

function getCache(n, cache) {
  if (n < 2) cache[n] = 1
  if (n === 2) cache[n] = 2
  if (cache[n]) return cache[n]
  else cache[n] = (getCache(n - 1, cache) + getCache(n - 2, cache)) % 1000000007
  return chache[n]
}

console.log(FrogJump(4))
