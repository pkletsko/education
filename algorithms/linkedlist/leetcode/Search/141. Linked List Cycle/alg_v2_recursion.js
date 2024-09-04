import { ListNode } from '../../../utils/ListNode.js';


/**
 * @param {ListNode} head
 * @return {boolean}
 */
export function hasCycle(head) {

    function dfs(slow, fast) {
        // Base case: if fast or fast.next is null, there's no cycle
        if (!fast || !fast.next) {
            return false;
        }

        // Move the pointers
        slow = slow.next;
        fast = fast.next.next;

        // If they meet, a cycle exists
        if (slow === fast) {
            return true;
        }

        // Recur with the updated pointers
        return dfs(slow, fast);
    }

    // Start the recursion with both slow and fast at the head
    return dfs(head, head);
}
