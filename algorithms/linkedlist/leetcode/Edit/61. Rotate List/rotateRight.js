/**
 * Given the head of a linked list, rotate the list to the right by k places.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,4,5], k = 2
 * Output: [4,5,1,2,3]
 * Example 2:
 *
 *
 * Input: head = [0,1,2], k = 4
 * Output: [2,0,1]
 *
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [0, 500].
 * -100 <= Node.val <= 100
 * 0 <= k <= 2 * 109
 */

/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
    let total = 0;

    function dfs(node) {
        if(!node) {
            if (k >= total) {
                k = k % total;
            }
            return head;
        }

        total++;
        let rotatedHead = dfs(node.next);

        if (k > 0) {
            k--;
            node.next = rotatedHead;
            return node;
        } else if (k === 0) {
            k--;
            node.next = null;
        }

        return rotatedHead;
    }

    return dfs(head);
};
