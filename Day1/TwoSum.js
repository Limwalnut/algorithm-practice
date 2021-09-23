/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 * 
    给定一个整数数组 nums 和一个整数目标值 target，请你在该数组中找出 和为目标值 target  的那 两个 整数，并返回它们的数组下标。
    你可以假设每种输入只会对应一个答案。但是，数组中同一个元素在答案里不能重复出现。
    你可以按任意顺序返回答案。
 */
let nums = [-1, -2, -3, -4, -5, -1,-2]
let target = -8

var twoSum = function (nums, target) {
  for (const [idx, num] of nums.entries()) {
    let otherIdx = nums.indexOf(target - num, idx + 1)
    if (otherIdx > -1 && otherIdx !== idx) {
      console.log(idx, otherIdx)
      return [idx, otherIdx]
    }
  }
  return []
}

var twoSum2 = function (nums, target) {
  let map = new Map()
  for (let index = 0; index < nums.length; index++) {
      if (map.has(target - nums[index])) {
          return [index, map.get(target - nums[index])]
      }else {
          map.set(nums[index], index)
          console.log(map)
      }
  }
}

// twoSum(nums, target)
twoSum2(nums, target)
