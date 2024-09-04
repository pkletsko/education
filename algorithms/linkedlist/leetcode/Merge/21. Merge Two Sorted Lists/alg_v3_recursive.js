import { ListNode } from '../../../utils/ListNode.js';

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
export function mergeTwoLists(l1, l2) {
    // Base case: if either list is empty, return the other list
    if (!l1) return l2;
    if (!l2) return l1;

    // Compare the values of the current nodes of both lists
    if (l1.val < l2.val) {
        // If l1's value is smaller, link l1 to the result of merging the rest
        l1.next = mergeTwoLists(l1.next, l2);
        return l1;
    } else {
        // If l2's value is smaller or equal, link l2 to the result of merging the rest
        l2.next = mergeTwoLists(l1, l2.next);
        return l2;
    }
}
