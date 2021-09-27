/* 
    给定一个包含非负整数的 m x n 网格 grid ，请找出一条从左上角到右下角的路径，
    使得路径上的数字总和为最小。
    说明：每次只能向下或者向右移动一步。
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
grid = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1]
]

var minPathSum = function (grid) {
  let m = grid.length
  let n = grid[0].length
  if (m <= 0 || n <= 0) return 0
  var arr = new Array(m).fill(0).map(() => new Array(n).fill(0))
  arr[0][0] = grid[0][0]
  //填充arr第一列
  for (let i = 1; i < m; i++) {
    arr[i][0] = arr[i - 1][0] + grid[i][0]
  }
  //填充arr第一行
  for (let i = 1; i < n; i++) {
    arr[0][i] = arr[0][i - 1] + grid[0][i]
  }

  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      arr[i][j] = Math.min(arr[i - 1][j], arr[i][j - 1]) + grid[i][j]
    }
  }
  return arr[m - 1][n - 1]
}

console.log(minPathSum(grid))
