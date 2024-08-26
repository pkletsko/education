/**
 * Given the root of a binary tree, return the length of the diameter of the tree.
 *
 * The diameter of a binary tree is the length of the longest path between any two nodes in a tree. This path may or may not pass through the root.
 *
 * The length of a path between two nodes is represented by the number of edges between them.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,3,4,5]
 * Output: 3
 * Explanation: 3 is the length of the path [4,2,1,3] or [5,2,1,3].
 * Example 2:
 *
 * Input: root = [1,2]
 * Output: 1
 */

/**
 * @param {BinaryTreeNode} root
 * @return {number}
 */
export function diameterOfBinaryTree_v2(root) {
    let max = 0;

    function dfs(node) {
        if (!node) {
            return 0;
        }

        let left  = dfs(node.left);
        let right = dfs(node.right);

        let diameter = left + right;
        // this case define that we are in a leaf node, and that is why we already have at least one edge between root and leaf
        if (diameter === 0) {
            diameter = 1;
        }

        max = Math.max(max, diameter);

        return Math.max(left, right) + 1;
    }

    dfs(root);

    return max;
}
