/**
 * @param {BinaryTreeNode} root
 * @param {BinaryTreeNode} p
 * @param {BinaryTreeNode} q
 * @return {BinaryTreeNode}
 */
export function lowestCommonAncestor(root, p, q) {

    function dfs(node) {
        if (!node) {
            return null;
        }

        // NOTE !! we are not comparing values but the whole object
        if (node === p || node === q) {
            return node;
        }

        let left = dfs(node.left);
        let right = dfs(node.right);

        // NOTE !!! post-order traversal  Left Subtree → Right Subtree → Node.
        if (left && right) {
            return node;
        }

        return left ? left : right;
    }

    return dfs(root);
}
