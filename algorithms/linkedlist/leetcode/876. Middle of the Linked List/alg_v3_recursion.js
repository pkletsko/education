import { ListNode } from '../../utils/ListNode.js';

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export function middleNode(head) {
    // Helper function to perform the DFS
    function dfs(slow, fast) {
        // Base case: if fast or fast.next is null, slow is at the middle node
        if (!fast || !fast.next) {
            return slow;
        }

        // Recursive case: move slow by one and fast by two nodes
        return dfs(slow.next, fast.next.next);
    }

    // Start the DFS with both slow and fast at the head
    return dfs(head, head);
}
