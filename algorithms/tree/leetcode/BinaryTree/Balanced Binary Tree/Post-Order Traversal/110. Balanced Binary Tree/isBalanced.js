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

        /**
         * Properties leftH (and similarly rightH) serves two purposes in the isBalanced function:
         *
         * Height Calculation:
         *
         * The primary role of leftH is to store the height of the left subtree.
         * This height is needed to determine if the current node is balanced and to calculate the height of the tree rooted at the current node.
         *
         * Balance Status:
         *
         * The secondary role of leftH is to indicate whether the subtree is balanced.
         * If the subtree rooted at the left child is unbalanced, leftH will be set to -1.
         * This special value is used to propagate the imbalance up the tree without further calculations,
         * allowing the function to short-circuit and return -1 as soon as it detects an imbalance.
         *
         */

        let leftH = dfs(root.left);
        let rightH = dfs(root.right);

        /**
         * Height Imbalance Check:
         *
         * After calculating the heights of both subtrees, the function checks if either subtree is already unbalanced (indicated by a return value of -1), or if the difference in heights between the two subtrees is greater than 1.
         * If either of these conditions is true, the current subtree is unbalanced, so the function returns -1.
         */
        if (leftH === -1 || rightH === -1 || Math.abs(leftH - rightH) > 1) {
            return -1;
        }

        return Math.max(leftH , rightH) + 1 ;
    }

    return dfs(root) !== -1;
}


