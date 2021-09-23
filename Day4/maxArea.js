/**
 * @param {number[]} height
 * @return {number}
 */

let height = [1, 8, 6, 2, 5, 4, 8, 3, 7]
var maxArea = function (height) {
  let right = 0
  let left = height.length - 1
  let result = 0
  let area = 0
  while (right < left) {
    area = (left - right) * Math.min(height[right], height[left])

    result = result < area ? area : result

    if (height[right] >= height[left]) {
      left--
    } else {
      right++
    }
  }
  return result
}

maxArea(height)
