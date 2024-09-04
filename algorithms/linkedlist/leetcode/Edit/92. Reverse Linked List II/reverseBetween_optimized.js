/**
 * Given the head of a singly linked list and two integers left and right where left <= right, reverse the nodes of the list from position left to position right, and return the reversed list.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,3,4,5], left = 2, right = 4
 * Output: [1,4,3,2,5]
 * Example 2:
 *
 * Input: head = [5], left = 1, right = 1
 * Output: [5]
 */

/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    let successor = null; // To keep track of the node after the reversed section.

    // Recursive function to reverse the first `n` nodes
    function reverseN(node, n) {
        if (n === 1) {
            successor = node.next;
            return node;
        }

        let newHead = reverseN(node.next, n - 1);

        node.next.next = node;
        node.next = successor;

        return newHead;
    }

    // Function to start the reverse operation from the `left` position
    function reverseBetweenHelper(node, left, right) {
        if (left === 1) {
            // Start reversing from this node
            return reverseN(node, right);
        }

        // Move to the next node and decrease `left` and `right`
        node.next = reverseBetweenHelper(node.next, left - 1, right - 1);
        return node;
    }

    return reverseBetweenHelper(head, left, right);
};
