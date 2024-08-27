/**
 * Serialization is converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
 *
 * Design an algorithm to serialize and deserialize a binary search tree. There is no restriction on how your serialization/deserialization algorithm should work. You need to ensure that a binary search tree can be serialized to a string, and this string can be deserialized to the original tree structure.
 *
 * The encoded string should be as compact as possible.
 *
 *
 *
 * Example 1:
 *
 * Input: root = [2,1,3]
 * Output: [2,1,3]
 * Example 2:
 *
 * Input: root = []
 * Output: []
 *
 *
 * Constraints:
 *
 * The number of nodes in the tree is in the range [0, 104].
 * 0 <= Node.val <= 104
 * The input tree is guaranteed to be a binary search tree.
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
    let res = [];

    function dfs(node) {
        if (!node) {
            res.push('null');
            return;
        }

        res.push(node.val);
        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return res.join(',');
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    const values = data.split(',');
    let index = 0;

    function dfs() {
        if (values[index] === 'null') {
            index++;
            return null;
        }

        // Create the current node with the current value
        const node = new TreeNode(parseInt(values[index]));
        index++;

        // Recursively build the left and right subtrees
        node.left = dfs();
        node.right = dfs();

        return node;
    }

    return dfs();

};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */
