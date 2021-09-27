/* 
    实现 pow(x, n) ，即计算 x 的 n 次幂函数（即，xn）。  
*/

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */

let x = 0.00001
let n = 2147483647

var myPow = function (x, n) {
  if (n === 0) return 1
  return n > 0 ? getPow(x, n) : 1 / getPow(x, n)
}

var getPow = function (x, n) {
  if (n === 1 || n === -1) return x
  let res = getPow(x, parseInt(n / 2))
  return n % 2 === 0 ? res * res : res * res * x
}

console.log(myPow(x, n))
