/**
 * Given the root of a binary tree, return the preorder traversal of its nodes' values.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,null,2,3]
 * Output: [1,2,3]
 * Example 2:
 *
 * Input: root = []
 * Output: []
 * Example 3:
 *
 * Input: root = [1]
 * Output: [1]
 */

/**
 * @param {BinaryTreeNode} root
 * @return {number[]}
 */
export function preorderTraversal(root) {
    function dfs(node, path) {
        if (!node) {
            return path;
        }

        path.push(node.val);
        dfs(node.left, path);
        dfs(node.right, path);

        return path;
    }

    return dfs(root, []);
}
