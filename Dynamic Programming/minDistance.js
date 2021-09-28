/* 
给你两个单词 word1 和 word2，请你计算出将 word1 转换成 word2 所使用的最少操作数。
你可以对一个单词进行如下三种操作：
    插入一个字符
    删除一个字符
    替换一个字符
 */

/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */

var minDistance = function (word1, word2) {
  if (word1 === word2) return 0
  var m = word1.length
  var n = word2.length
  var arr = new Array(m).fill(0).map(() => new Array(n).fill(0))
  for (let i = 1; i < m; i++) {
    arr[i][0] = arr[i - 1][0] + 1
  }
  for (let i = 1; i < n; i++) {
    arr[0][i] = arr[0][i - 1] + 1
  }
  for (var i = 1; i < m; i++) {
    for (var j = 1; j < n; j++) {
      if (word1[i - 1] === word2[j - 1]) {
        arr[i][j] = arr[i - 1][j - 1]
      } else {
        arr[i][j] =
          Math.min(arr[i - 1][j - 1], arr[i - 1][j], arr[i][j - 1]) + 1
      }
    }
  }
  return arr[m][n]
}

console.log(minDistance('horse', 'ros'))
