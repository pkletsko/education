/**
 * Given the head of a linked list, return the node where the cycle begins. If there is no cycle, return null.
 *
 * There is a cycle in a linked list if there is some node in the list that can be reached again by continuously following the next pointer. Internally, pos is used to denote the index of the node that tail's next pointer is connected to (0-indexed). It is -1 if there is no cycle. Note that pos is not passed as a parameter.
 *
 * Do not modify the linked list.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: head = [3,2,0,-4], pos = 1
 * Output: tail connects to node index 1
 * Explanation: There is a cycle in the linked list, where tail connects to the second node.
 * Example 2:
 *
 *
 * Input: head = [1,2], pos = 0
 * Output: tail connects to node index 0
 * Explanation: There is a cycle in the linked list, where tail connects to the first node.
 * Example 3:
 *
 *
 * Input: head = [1], pos = -1
 * Output: no cycle
 * Explanation: There is no cycle in the linked list.
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    function findCycle(slow, fast) {
        // Base case: if fast reaches the end, there is no cycle
        if (!fast || !fast.next) {
            return null;
        }

        // Move the slow pointer by 1 step and the fast pointer by 2 steps
        slow = slow.next;
        fast = fast.next.next;

        // Check if slow and fast meet, indicating a cycle
        if (slow === fast) {
            return slow; // Cycle detected
        }

        // Recur for the next step
        return findCycle(slow, fast);
    }

    function findStart(slow, fast) {
        // Base case: when slow and fast meet, it's the start of the cycle
        if (slow === fast) {
            return slow;
        }

        // Move both pointers one step and recur
        return findStart(slow.next, fast.next);
    }

    // Start by trying to detect a cycle
    let meetingPoint = findCycle(head, head);

    // If no cycle is detected, return null
    if (!meetingPoint) {
        return null;
    }

    // If a cycle is detected, find the start of the cycle
    return findStart(head, meetingPoint);
};
