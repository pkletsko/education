/**
 * Given the root of a binary tree, return the postorder traversal of its nodes' values.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,null,2,3]
 * Output: [3,2,1]
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
export function postorderTraversal(root) {
    function dfs(node, path) {
        if (!node) {
            return path;
        }

        dfs(node.left, path);
        dfs(node.right, path);
        path.push(node.val);

        return path;
    }

    return dfs(root, []);
}

