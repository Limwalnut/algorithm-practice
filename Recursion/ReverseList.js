/**
 * 给定单链表的头节点 head ，请反转链表，并返回反转后的链表的头节点。
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */

function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

var head2 = new ListNode(20)
var head = new ListNode(10, head2)

var reverseList = function (head) {
  if (!head.next || !head) return head
  var newList = reverseList(head.next)
  head.next.next = head
  head.next = null
  return newList
}

console.log(reverseList(head))
