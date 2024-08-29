/**
 * Given the root of a binary search tree, return a balanced binary search tree with the same node values. If there is more than one answer, return any of them.
 *
 * A binary search tree is balanced if the depth of the two subtrees of every node never differs by more than 1.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,null,2,null,3,null,4,null,null]
 * Output: [2,1,3,null,null,null,4]
 * Explanation: This is not the only correct answer, [3,1,4,null,2] is also correct.
 * Example 2:
 *
 *
 * Input: root = [2,1,3]
 * Output: [2,1,3]
 *
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [1, 104].
 * 1 <= Node.val <= 105
 */

import {BinaryTreeNode} from "../../../../../utils/Converters.js";

/**
 * @param {BinaryTreeNode} root
 * @return {BinaryTreeNode}
 */
var balanceBST = function(root) {
    const values = [];

    function getValues (node) {
        if (!node) return;

        getValues(node.left);
        values.push(node.val);
        getValues(node.right);
    }

    getValues(root);

    function buildTree (low, high) {
        if (low > high) return null;

        const mid = Math.floor((low + high) / 2);
        const node = new BinaryTreeNode(values[mid]);

        node.left = buildTree(low, mid - 1);
        node.right = buildTree(mid + 1, high);

        return node;
    }

    return buildTree(0, values.length - 1);
};
