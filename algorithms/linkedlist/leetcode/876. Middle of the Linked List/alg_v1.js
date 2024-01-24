import { ListNode } from '../../utils/ListNode.js';

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export function middleNode(head) {
    if (head === null) {
        return head;
    }

    if (head.next === null) {
        return head;
    }

    let slow = head.next;
    let fast = head.next.next;

    while(fast != null && fast.next != null) {
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}
