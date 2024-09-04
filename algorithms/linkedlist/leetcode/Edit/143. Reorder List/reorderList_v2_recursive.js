/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
    if (!head || !head.next) return;

    // Helper function to reverse the linked list
    function reverseList(head) {
        if (!head || !head.next) return head;

        let newHead = reverseList(head.next);
        head.next.next = head;
        head.next = null;

        return newHead;
    }

    // Recursive helper function to find the middle of the list
    function findMiddle(slow, fast) {
        // Base case: If fast is null or reaches the end, slow is at the middle
        if (!fast || !fast.next) {
            return slow;
        }
        return findMiddle(slow.next, fast.next.next);
    }

    // Helper function to merge two lists
    function mergeLists(l1, l2) {
        // Base case: if either list is empty, return the other list
        if (!l1) return l2;
        if (!l2) return l1;

        // Save the next nodes before linking
        let next1 = l1.next;
        let next2 = l2.next;

        // Link the first node of l1 to the first node of l2
        l1.next = l2;

        // Recursively merge the remaining nodes, making sure we don't create a cycle
        if (next1 !== l2) { // Prevent the cycle by ensuring we aren't linking a node to itself
            l2.next = mergeLists(next1, next2);
        }

        return l1;
    }

    // Step 1: Find the middle of the list
    let mid = findMiddle(head, head);
    //console.log(mid);

    // Step 2: Reverse the second half of the list
    let secondHalf = reverseList(mid);
    //console.log(secondHalf);

    // Step 3: Merge the two halves
    mergeLists(head, secondHalf);
};
