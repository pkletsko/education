/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    let lessHead = { val: 0, next: null };  // Dummy head for nodes < x
    let moreHead = { val: 0, next: null };  // Dummy head for nodes >= x
    let less = lessHead;
    let more = moreHead;

    function dfs(node) {
        if (!node) {
            // End of the list reached, connect the two lists
            less.next = moreHead.next;
            more.next = null;  // End the `more` list
            return lessHead.next;  // Return the head of the combined list
        }

        // Add the current node to the appropriate list
        if (node.val < x) {
            less.next = node;
            less = less.next;
        } else {
            more.next = node;
            more = more.next;
        }

        // Recur for the next node
        return dfs(node.next);
    }

    return dfs(head);
};

