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
    let maxFreq = 0;
    let currentFreq = 0;
    let modes = [];
    let prevVal = null;

    // Helper function to perform in-order traversal and find modes
    function traverse(node) {
        if (!node) return;

        traverse(node.left);

        // Count occurrences of the current node value
        if (node.val === prevVal) {
            currentFreq++;
        } else {
            currentFreq = 1;
            prevVal = node.val;
        }

        // Update max frequency and modes array
        if (currentFreq > maxFreq) {
            maxFreq = currentFreq;
            modes = [node.val];
        } else if (currentFreq === maxFreq) {
            modes.push(node.val);
        }

        traverse(node.right);
    }

    traverse(root);
    return modes;
};
