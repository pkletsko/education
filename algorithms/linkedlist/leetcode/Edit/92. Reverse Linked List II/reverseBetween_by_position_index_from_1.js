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
    let beforeLeft = null;
    let afterRight = null;

    // Function to find `beforeLeft` and `afterRight` nodes
    function dfs_find(node, index) {
        if (!node) {
            return;
        }

        if (index === left - 1) {
            beforeLeft = node;
        }
        if (index === right) {
            afterRight = node.next;
        }

        dfs_find(node.next, index + 1);
    }

    // Recursive function to reverse the linked list segment
    function reverse(node) {
        if (!node || !node.next) {
            return node;
        }
        if (node.next === afterRight) {
            node.next = null; // This handles the end of the reversed section
            return node;
        }

        let newHead = reverse(node.next);

        node.next.next = node;
        node.next = null;

        return newHead;
    }

    // Find the nodes before `left` and after `right`
    dfs_find(head, 1);

    let reversed;

    if (beforeLeft) {
        reversed = reverse(beforeLeft.next);
        beforeLeft.next = reversed;
    } else {
        reversed = reverse(head);
        head = reversed; // If reversing starts from the head, update the head
    }

    // Connect the end of the reversed list to `afterRight`
    let last = beforeLeft ? beforeLeft.next : head;
    while (last && last.next) {
        last = last.next;
    }
    last.next = afterRight;

    return head;
};
