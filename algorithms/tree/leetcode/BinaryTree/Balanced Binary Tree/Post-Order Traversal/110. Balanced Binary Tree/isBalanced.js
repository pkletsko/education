/**
 * Given a binary tree, determine if it is
 * height-balanced
 * .
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [3,9,20,null,null,15,7]
 * Output: true
 * Example 2:
 *
 *
 * Input: root = [1,2,2,3,3,null,null,4,4]
 * Output: false
 * Example 3:
 *
 * Input: root = []
 * Output: true
 */

/**
 * @param {BinaryTreeNode} root
 * @return {boolean}
 */
export function isBalanced(root) {
    function dfs(root) {
        if (!root) {
            return 0;
        }

        let leftH = dfs(root.left);
        let rightH = dfs(root.right);

        if (leftH === -1 || rightH === -1 || Math.abs(leftH - rightH) > 1) {
            return -1;
        }

        return Math.max(leftH , rightH) + 1 ;
    }

    return dfs(root) !== -1;
}


