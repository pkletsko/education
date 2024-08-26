/**
 * Given the root of a binary tree, return all root-to-leaf paths in any order.
 *
 * A leaf is a node with no children.
 *
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,2,3,null,5]
 * Output: ["1->2->5","1->3"]
 * Example 2:
 *
 * Input: root = [1]
 * Output: ["1"]
 */

/**
 * @param {BinaryTreeNode} root
 * @return {string[]}
 */
export function binaryTreePaths_v3(root) {
    const res = [];

    function dfs(node, pathStr) {
        if (!node) {
            return;
        }

        pathStr += node.val + "->";

        if(!node.left && !node.right) {
            res.push(pathStr.slice(0, pathStr.length - 2));
            return;
        }

        dfs(node.left, pathStr);
        dfs(node.right, pathStr);
    }

    dfs(root, "");

    return res;
}
