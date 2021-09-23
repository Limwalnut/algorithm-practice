/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
let nums1 = [1,3,5,7]
let nums2 = [2,4,6,8]
var findMedianSortedArrays = function(nums1, nums2) {
    let length1 = nums1.length
    let length2 = nums2.length
    if (length1 > length2) {
        let temp = []
        temp = nums1
        nums1 = nums2
        nums2 = temp
    }
    let min = 0
    let max = length1
    let half = Math.floor((length1 + length2 + 1) / 2);
    while(max >= min){

    }
};

findMedianSortedArrays()
