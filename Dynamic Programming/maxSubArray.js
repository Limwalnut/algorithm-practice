/* 
    给定一个整数数组 nums，
    找到一个具有最大和的连续子数组（子数组最少包含一个元素），返回其最大和。
*/

/**
 * @param {number[]} nums
 * @return {number}
 */

nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]

var maxSubArray = function (nums) {
  let sum = 0
  let res = nums[0]
  for (let i = 0; i < nums.length; i++) {
    if (sum > 0) {
      sum += nums[i]
    } else {
      sum = nums[i]
    }
    res = Math.max(res, sum)
  }
  return res
}

maxSubArray(nums)
