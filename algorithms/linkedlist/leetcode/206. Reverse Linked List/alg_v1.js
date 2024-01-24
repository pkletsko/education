import { ListNode } from '../../utils/ListNode.js';

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export function reverseList(head) {
  let current = null;
  let node = null;

  while(head) {
      node = head;
      head = head.next;
      node.next = current;
      current = node;
  }

  return current;
}

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
