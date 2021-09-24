/* 
    【题目】
    给定两个有序数组arr1和arr2，已知两个数组的长度分别为 m1 和 m2，求两个数组中的中位数。要求时间复杂度O(log(m1 + m2))。

    【举例】
    例如 arr1 = [1, 3]，arr2 = [2].

    则中位数为 2.

    例如 arr1 = [1,2]，arr2 = [3,4].

    则中位数是 (2 + 3)/2 = 2.5
*/
arr1 = [1, 3]
arr2 = [2]

var findMedianSortedArrays = function (arr1, arr2) {
  let length1 = arr1.length
  let length2 = arr2.length
  let totalLength = length1 + length2
  let pos1 = 0
  let pos2 = 0
  let preValue = -1
  let curValue = -1
  for (let i = 0; i <= Math.floor(totalLength / 2); i++) {
    preValue = curValue
    if (pos1 < length1 && (pos2 >= length2 || arr1[pos1] < arr2[pos2])) {
      curValue = arr1[pos1]
      pos1++
    } else {
      curValue = arr2[pos2]
      pos2++
    }
  }

  return totalLength % 2 === 0 ? (preValue + curValue) / 2 : curValue
}

console.log(findMedianSortedArrays(arr1, arr2))
