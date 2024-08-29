/**
 * Given the root of a Binary Search Tree (BST), return the minimum difference between the values of any two different nodes in the tree.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [4,2,6,1,3]
 * Output: 1
 * Example 2:
 *
 *
 * Input: root = [1,0,48,null,null,12,49]
 * Output: 1
 *
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [2, 100].
 * 0 <= Node.val <= 105
 */

/**
 * @param {BinaryTreeNode} root
 * @return {number}
 */
var minDiffInBST = function(root) {
    let min = Infinity;

    function dfs(node, min_val, max_val) {
        if (!node) {
            return;
        }

        if (min_val !== -Infinity ) {
            min = Math.min(min, Math.abs(node.val - min_val));
        }

        if (max_val !== Infinity) {
            min = Math.min(min, Math.abs(node.val - max_val));
        }

        dfs(node.left, min_val, node.val);
        dfs(node.right, node.val, max_val);
    }

    dfs(root, -Infinity, Infinity);

    return min;
};
