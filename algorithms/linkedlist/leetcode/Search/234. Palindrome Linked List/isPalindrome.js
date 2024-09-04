/**
 * Given the head of a singly linked list, return true if it is a
 * palindrome
 *  or false otherwise.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: head = [1,2,2,1]
 * Output: true
 * Example 2:
 *
 *
 * Input: head = [1,2]
 * Output: false
 *
 *
 * Constraints:
 *
 * The number of nodes in the list is in the range [1, 105].
 * 0 <= Node.val <= 9
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    let frontPointer = head;

    function dfs(current) {
        if (current !== null) {

            if (!dfs(current.next)) {
                return false;
            }

            if (frontPointer.val !== current.val) {
                return false;
            }

            frontPointer = frontPointer.next;
        }
        return true;
    }

    return dfs(head);

};
