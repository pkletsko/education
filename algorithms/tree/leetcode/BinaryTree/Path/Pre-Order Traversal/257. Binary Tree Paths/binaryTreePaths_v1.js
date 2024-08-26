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
export function binaryTreePaths_v1(root) {
    const res = [];

    function dfs(node, path) {
        if (!node) {
            return;
        }

        if(!node.left && !node.right) {
            res.push([...path].join("->"));
            return;
        }

        if (node.left) {
            path.push(node.left.val);
            dfs(node.left, path);
            path.pop();
        }

        if (node.right) {
            path.push(node.right.val);
            dfs(node.right, path);
            path.pop();
        }
    }

    dfs(root, [root.val]);

    return res;
}
