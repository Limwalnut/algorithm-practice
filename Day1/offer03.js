/**
 * @param {number[]} nums
 * @return {number}
 * 

    找出数组中重复的数字。
    在一个长度为 n 的数组 nums 里的所有数字都在 0～n-1 的范围内。数组中某些数字是重复的，但不知道有几个数字重复了，也不知道每个数字重复了几次。请找出数组中任意一个重复的数字。

    示例 1：

    输入：
    [2, 3, 1, 0, 2, 5, 3]
    输出：2 或 3 
     

    限制：2 <= n <= 100000
 */

let arr = [0, 1, 2, 3, 4, 11, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
var findRepeatNumber = function (nums) {
  for (let index = 0; index < nums.length; index++) {
    const num = nums[index]
    for (let index2 = index + 1; index2 < nums.length; index2++) {
      const num2 = nums[index2]
      if (num === num2) {
        return num
      }
    }
  }
}

var findRepeatNumber2 = function (nums) {
  for (let index = 0; index < nums.length; index++) {
    if (nums.indexOf(nums[index], index + 1) > 0) {
      return nums[index]
    }
  }
}

// hash表
var findRepeatNumber3 = function (nums) {
  let hashTable = new Map()
  for (const num of nums) {
    if (hashTable.has(num)) return num
    hashTable.set(num, 1)
  }
  return null
}

// 原地置换 [2, 3, 1, 0, 2, 5, 3]
var findRepeatNumber4 = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === i) {
      continue
    }
    let temp = nums[nums[i]]
    nums[nums[i]] = nums[i]
    nums[i] = temp
    if (nums[i] === nums[nums[i]]) {
      console.log(nums[i])
      return nums[i]
    }
  }
}

findRepeatNumber4(arr)
