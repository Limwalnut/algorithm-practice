/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

let l1 = [2, 4, 3]
let l2 = [5, 6, 4]
var addTwoNumbers = function (l1, l2) {
    l1 = l1.reverse()
    l2 = l2.reverse()
    let num1 = ''
    let num2 = ''
    for (const num of l1) {
        num1 = `${num1}${num}`
    }
    for (const num of l2) {
        num2 = `${num2}${num}`
    }
    let result = parseInt(num1) + parseInt(num2)
    return result.toString().split('').reverse()
}

addTwoNumbers(l1, l2)
