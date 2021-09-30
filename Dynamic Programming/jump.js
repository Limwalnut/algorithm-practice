/* 
    给你一个非负整数数组 nums ，你最初位于数组的第一个位置。
    数组中的每个元素代表你在该位置可以跳跃的最大长度。
    你的目标是使用最少的跳跃次数到达数组的最后一个位置。
    假设你总是可以到达数组的最后一个位置。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

var nums = [2, 3, 1, 1, 4]
var jump = function (nums) {
  let n = nums.length
  let arr = new Array(n).fill(-1)
  arr[0] = 0
  for (let i = 0; i < n; i++) {
    for (let j = i; j < n && j <= i + nums[i]; j++) {
      if (arr[j] === -1) {
        arr[j] = arr[i] + 1
      } else {
        arr[j] = Math.min(arr[i] + 1, arr[j])
      }
    }
  }
  return arr[n - 1]
}
console.log(jump(nums))
