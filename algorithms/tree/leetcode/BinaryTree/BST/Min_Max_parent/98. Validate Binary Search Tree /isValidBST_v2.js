/**
 * Given the root of a binary tree, determine if it is a valid binary search tree (BST).
 *
 * A valid BST is defined as follows:
 *
 * The left
 * subtree
 *  of a node contains only nodes with keys less than the node's key.
 * The right subtree of a node contains only nodes with keys greater than the node's key.
 * Both the left and right subtrees must also be binary search trees.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [2,1,3]
 * Output: true
 * Example 2:
 *
 *
 * Input: root = [5,1,4,null,null,3,6]
 * Output: false
 * Explanation: The root node's value is 5 but its right child's value is 4.
 */

/**
 * @param {BinaryTreeNode} root
 * @return {boolean}
 */
function validBst(root) {
    function dfs(root, min_val, max_val) {
        // empty nodes are always valid
        if (!root) return true;

        if (!(min_val < root.val && root.val < max_val)) return false;

        // see notes below
        return dfs(root.left, min_val, root.val) && dfs(root.right, root.val, max_val);
    }

    return dfs(root, Number.NEGATIVE_INFINITY, Number.POSITIVE_INFINITY) // root is always valid
}
