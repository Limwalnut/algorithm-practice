/* 在一个 n * m 的二维数组中，每一行都按照从左到右递增的顺序排序，每一列都按照从上到下递增的顺序排序。请完成一个高效的函数，输入这样的一个二维数组和一个整数，判断数组中是否含有该整数。

示例:
现有矩阵 matrix 如下：
[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
给定 target = 5，返回 true。

给定 target = 20，返回 false。

限制：
0 <= n <= 1000
0 <= m <= 1000
 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
let arr = [[1,3,5]]

var findNumberIn2DArray = function (matrix, target) {
  if (!matrix[0] && matrix !== target) {
    return false
  }
  let length = matrix[0].length
  let height = matrix.length
  if (target < matrix[0][0] || target > matrix[height - 1][length - 1]) {
    return false
  }
  let n = height - 1
  let m = 0
  for (let i = 0; i < length * height; i++) {
    if (matrix[n][m] === target) {
      return true
    } else if (matrix[n][m] > target && n > 0) {
      n -= 1
    } else if (matrix[n][m] < target && m < length-1) {
      m += 1
    }
  }
  return false
}

findNumberIn2DArray(arr, 20)
