/* 
    【题目】
    给定两个有序数组arr1和arr2，已知两个数组的长度都为N，求两个数组中所有数的上中位数。要求时间复杂度O(logN)，空间复杂度O(1）

    【举例】
    例如 arr1 = [1, 2,3,4]，arr2 = [3,4,5,6]。

    总共8个数，则中位数就是第 4 小的数，为 3.

    例如 arr1 = [0,1,2]，arr2 = [3,4,5]。

    总共6个数，则中位数就是第 3 小的数，为 2.
*/

let arr1 = [1, 2, 3, 4]
let arr2 = [3, 4, 5, 6]

function ArrayMedian(arr1, arr2) {
  if (!arr1 || !arr2) return -1
  console.log(find(arr1, 0, arr1.length - 1, arr2, 0, arr2.length - 1))
}

function find(arr1, start1, end1, arr2, start2, end2) {
  if (start1 >= end1) {
    return Math.min(arr1[start1], arr2[start2])
  }
  let midPos1 = start1 + Math.floor((end1 - start1) / 2)
  let midPos2 = start2 + Math.floor((end2 - start2) / 2)
  let midArr1 = arr1[midPos1]
  let midArr2 = arr2[midPos2]
  let offset = arr1.length % 2 === 1 ? 0 : 1
  if (midArr1 < midArr2) {
    return find(arr1, midPos1 + offset, end1, arr2, start2, midPos2)
  } else if (midArr1 > midArr2) {
    return find(arr1, start1, midPos1, arr2, midPos2 + offset, end2)
  } else {
    return midArr1
  }
}

ArrayMedian(arr1, arr2)
