/**
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
export function reverseList(head) {
  let result = null;
  let current = null;

  while(head) {
      // taking current list as a copy
      current = head;
      // just moving to the next element (simple traverse of linked list)
      head = head.next;
      // * actual swap operation *
      // next will point to the reverted chain (For example: it was "2 -> 3 -> 4" than we will have "2 -> 1 -> null" )
      current.next = result;
      // save whole new chain 2 -> 1 -> null
      result = current;
  }

  return result;
}
