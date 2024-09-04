/**
 * You are given two linked lists: list1 and list2 of sizes n and m respectively.
 *
 * Remove list1's nodes from the ath node to the bth node, and put list2 in their place.
 *
 * The blue edges and nodes in the following figure indicate the result:
 *
 *
 * Build the result list and return its head.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: list1 = [10,1,13,6,9,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
 * Output: [10,1,13,1000000,1000001,1000002,5]
 * Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.
 * Example 2:
 *
 *
 * Input: list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]
 * Output: [0,1,1000000,1000001,1000002,1000003,1000004,6]
 * Explanation: The blue edges and nodes in the above figure indicate the result.
 *
 */

/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeInBetween = function(list1, a, b, list2) {
    // Recursive function to traverse and modify the list
    function recursiveMerge(node, currentPos) {
        if (!node) {
            return null;
        }

        // Base case to identify the end of the segment to be replaced
        if (currentPos === b) {
            // `node` is the node at position `b`
            let list2Last = list2;
            while (list2Last.next) {
                list2Last = list2Last.next;
            }
            list2Last.next = node.next; // Attach the rest of list1 after `b` to the end of `list2`
            return list2;
        }

        // Recursive call to continue traversing the list
        let nextNode = recursiveMerge(node.next, currentPos + 1);

        // If `currentPos` is `a-1`, we need to connect `list2` to `list1`
        if (currentPos === a - 1) {
            node.next = list2;
        }

        // Return the modified node (for chaining purposes)
        return nextNode;
    }

    // Start the recursion with the head of list1 and position 0
    return recursiveMerge(list1, 0);
};
