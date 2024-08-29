/**
 * Given the root of a binary search tree (BST) with duplicates, return all the mode(s) (i.e., the most frequently occurred element) in it.
 *
 * If the tree has more than one mode, return them in any order.
 *
 * Assume a BST is defined as follows:
 *
 * The left subtree of a node contains only nodes with keys less than or equal to the node's key.
 * The right subtree of a node contains only nodes with keys greater than or equal to the node's key.
 * Both the left and right subtrees must also be binary search trees.
 *
 *
 * Example 1:
 *
 *
 * Input: root = [1,null,2,2]
 * Output: [2]
 * Example 2:
 *
 * Input: root = [0]
 * Output: [0]
 */

/**
 * @param {BinaryTreeNode} root
 * @return {number[]}
 */
var findMode = function(root) {
    let map = new Map();
    const traverse = (node) => {
        if(!node) return null;
        map.set(node.val, (map.get(node.val) || 0) + 1);
        traverse(node.left);
        traverse(node.right);
    }
    traverse(root);
    let ans = [];
    let mfe = -Infinity;

    map.forEach((val, key) => {
        mfe = Math.max(mfe, val);
    })

    map.forEach((val, key) => {
        if(val === mfe) ans.push(key);
    })

    return ans;
};
