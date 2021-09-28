/* 
    https://leetcode-cn.com/problems/trapping-rain-water/
*/

/**
 * @param {number[]} height
 * @return {number}
 */

height = [0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]

var trap = function (height) {
  var n = height.length
  var leftMax = new Array(n).fill(0)
  var rightMax = new Array(n).fill(0)
  leftMax[0] = height[0]
  rightMax[n - 1] = height[n - 1]
  for (let i = 1; i < n; i++) {
    leftMax[i] = Math.max(leftMax[i - 1], height[i - 1])
  }
  for (let i = n-2; i >= 0; i--) {
    rightMax[i] = Math.max(rightMax[i + 1], height[i + 1])
  }
  console.log(leftMax, rightMax)
  let result = 0
  for (let i = 0; i < n; i++) {
    if (Math.min(leftMax[i], rightMax[i]) > height[i]) {
      result =result + Math.min(leftMax[i], rightMax[i]) - height[i]
    }
  }
  return result
}

console.log(trap(height))
