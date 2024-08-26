/**
 * You are given the root of a binary tree where each node has a value 0 or 1. Each root-to-leaf path represents a binary number starting with the most significant bit.
 *
 * For example, if the path is 0 -> 1 -> 1 -> 0 -> 1, then this could represent 01101 in binary, which is 13.
 * For all leaves in the tree, consider the numbers represented by the path from the root to that leaf. Return the sum of these numbers.
 *
 * The test cases are generated so that the answer fits in a 32-bits integer.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,0,1,0,1,0,1]
 * Output: 22
 * Explanation: (100) + (101) + (110) + (111) = 4 + 5 + 6 + 7 = 22
 * Example 2:
 *
 * Input: root = [0]
 * Output: 0
 */

/**
 * @param {BinaryTreeNode} root
 * @return {number}
 */
export function sumRootToLeaf_v3(root) {
    let sum = 0;
    function dfs(node, path) {
        if (!node) {
            return;
        }

        path.push(node.val);

        dfs(node.left, path);
        dfs(node.right, path);

        if (!node.left && !node.right) {
            sum += parseInt(path.join(''), 2);
        }

        path.pop();
    }

    dfs(root, []);

    return sum;
}
