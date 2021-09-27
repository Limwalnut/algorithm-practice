/* 一个机器人位于一个 m x n 网格的左上角 （起始点在下图中标记为 “Start” ）。
机器人每次只能向下或者向右移动一步。机器人试图达到网格的右下角（在下图中标记为 “Finish” ）。
问总共有多少条不同的路径？
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
  if (m <= 0 || n <= 0) return 0
  var arr = []
  for (var i = 0; i < m; i++) {
    arr[i] = new Array()
    for (var j = 0; j < n; j++) {
      arr[i][j] = 0
    }
  }
  for (let i = 0; i < m; i++) {
    arr[i][0] = 1
  }
  for (let i = 0; i < n; i++) {
    arr[0][i] = 1
  }
  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      arr[i][j] = arr[i-1][j] + arr[i][j-1]
    }
  }
  return arr[m-1][n-1]
}

console.log(uniquePaths(3, 7))

