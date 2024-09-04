import { ListNode } from '../../../utils/ListNode.js';

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

var reverseList_v2 = function(head) {
    let prev = null;
    let current = head;
    let next = null;

    while (current !== null) {
        // Save the next node
        next = current.next;

        // Reverse the current node's pointer
        current.next = prev;

        // Move the pointers one position ahead
        prev = current;
        current = next;
    }

    // prev will be the new head of the reversed list
    return prev;
};

// A -> B -> C

// null

// node = A > B
// head = B -> C
// node = A > null
// current A > null
//---------

// node = B -> C
// head = C-> null
// node = A > null
