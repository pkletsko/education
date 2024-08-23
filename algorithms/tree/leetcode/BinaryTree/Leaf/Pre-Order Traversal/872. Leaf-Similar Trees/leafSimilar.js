/**
 * Consider all the leaves of a binary tree, from left to right order, the values of those leaves form a leaf value sequence.
 *
 *
 *
 * For example, in the given tree above, the leaf value sequence is (6, 7, 4, 9, 8).
 *
 * Two binary trees are considered leaf-similar if their leaf value sequence is the same.
 *
 * Return true if and only if the two given trees with head nodes root1 and root2 are leaf-similar.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root1 = [3,5,1,6,2,9,8,null,null,7,4], root2 = [3,5,1,6,7,4,2,null,null,null,null,null,null,9,8]
 * Output: true
 * Example 2:
 *
 *
 * Input: root1 = [1,2,3], root2 = [1,3,2]
 * Output: false
 *
 */

/**
 * @param {BinaryTreeNode} root1
 * @param {BinaryTreeNode} root2
 * @return {boolean}
 */
export function leafSimilar(root1, root2) {
    let leafs1 = [];
    let leafs2 = [];

    function dfs(node, leafs) {
        if (!node) {
            return;
        }

        if (!node.left && !node.right) {
            leafs.push(node.val);
            return;
        }

        dfs(node.left, leafs);
        dfs(node.right, leafs);
    }

    dfs(root1, leafs1);
    dfs(root2, leafs2);

    // if (leafs1.length === leafs2.length) {
    //     for(let i = 0; i < leafs2.length; i++) {
    //         if (leafs1[i] !== leafs2[i]) {
    //             return false;
    //         }
    //     }
    // } else {
    //     return false;
    // }
    //
    // return true;

    return leafs1.length === leafs2.length && leafs1.every((node, idx) => node === leafs2[idx]);
}
