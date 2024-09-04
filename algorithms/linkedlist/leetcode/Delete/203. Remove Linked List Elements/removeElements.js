/**
 * Given the head of a linked list and an integer val, remove all the nodes of the linked list that has Node.val == val, and return the new head.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,6,3,4,5,6], val = 6
 * Output: [1,2,3,4,5]
 * Example 2:
 *
 * Input: head = [], val = 1
 * Output: []
 * Example 3:
 *
 * Input: head = [7,7,7,7], val = 7
 * Output: []
 *
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [0, 104].
 * 1 <= Node.val <= 50
 * 0 <= val <= 50
 */

/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function(head, val) {

    function dfs(node) {
        // Base case: if the current node is null, return null
        if (!node) {
            return null;
        }

        // Recur for the next node
        node.next = dfs(node.next);

        // If the current node needs to be removed, return the next node
        return node.val === val ? node.next : node;
    }

    // The head of the new list may be different, so we start with dfs on the head
    return dfs(head);
};
