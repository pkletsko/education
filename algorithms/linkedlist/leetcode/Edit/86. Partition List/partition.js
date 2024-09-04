/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function(head, x) {
    function dfs(node) {
        if (!node) {
            return null;
        }

        node.next = dfs(node.next);

        if (node.val < x || !node.next) {
            return node;
        }

        // Find the first node in the list that should be moved before the current node
        // 3225 -> 32 _2_ 5
        // 52   -> 52 _null_
        //422235  -> 422 _2_ 35
        let moveToNode = node;
        while (moveToNode.next && moveToNode.next.val <= x) {
            moveToNode = moveToNode.next;
        }

        // //corner case
        // if (moveToNode && moveToNode.next && moveToNode.next.val === x && !moveToNode.next.next) {
        //     moveToNode = moveToNode.next;
        // }

        //console.log(moveToNode);

        let currentToMove = node;
        let newHead = node.next;
        node.next = null;

        // place currentToMove to a new place
        let end = moveToNode.next;
        moveToNode.next = currentToMove;
        currentToMove.next = end;

        return newHead;
    }

    // Run the recursive partition function starting from the head
    return dfs(head);
};

