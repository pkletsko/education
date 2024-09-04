/**
 * Given the head of a singly linked list where elements are sorted in ascending order, convert it to a
 * height-balanced
 *  binary search tree.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: head = [-10,-3,0,5,9]
 * Output: [0,-3,9,-10,null,5]
 * Explanation: One possible answer is [0,-3,9,-10,null,5], which represents the shown height balanced BST.
 * Example 2:
 *
 * Input: head = []
 * Output: []
 */

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    // Helper function to find the middle of the linked list
    function findMiddle(start, end) {
        let slow = start;
        let fast = start;

        while (fast !== end && fast.next !== end) {
            slow = slow.next;
            fast = fast.next.next;
        }

        return slow;
    }

    // Recursive function to convert the list to a BST
    function convertListToBST(start, end) {
        if (start === end) {
            return null;
        }

        // Find the middle element for the root
        let mid = findMiddle(start, end);

        // The middle element becomes the root
        let node = new TreeNode(mid.val);

        // Recursively build the left and right subtrees
        node.left = convertListToBST(start, mid);
        node.right = convertListToBST(mid.next, end);

        return node;
    }

    return convertListToBST(head, null);
};
