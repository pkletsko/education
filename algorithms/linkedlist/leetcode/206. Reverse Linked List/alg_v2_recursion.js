import { ListNode } from '../../utils/ListNode.js';

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
export function reverseList(head) {
    function dfs(node) {
        // Base case: if the node is null or it's the last node, return it
        if (node === null || node.next === null) {
            return node;
        }

        // Recursively reverse the rest of the list
        let newHead = dfs(node.next);

        // Reverse the current node's next pointer
        node.next.next = node;
        node.next = null;

        return newHead;
    }

    // Start the DFS from the head of the list
    return dfs(head);
}

// A -> B -> C

// null

// node = A > B
// head = B -> C
// node = A > null
// current A > null
//---------

// node = B -> C
// head = C-> null
// node = A > null
