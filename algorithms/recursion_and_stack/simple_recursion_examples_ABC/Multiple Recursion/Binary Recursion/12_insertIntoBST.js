class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function insertIntoBST(root, val) {
    // If the root is null, we found the position to insert the new value
    if (root === null) {
        return new TreeNode(val);
    }

    // If the value is less than the current node's value, go to the left subtree
    if (val < root.val) {
        root.left = insertIntoBST(root.left, val);
    }
    // If the value is greater than the current node's value, go to the right subtree
    else if (val > root.val) {
        root.right = insertIntoBST(root.right, val);
    }

    // Return the unchanged node pointer
    return root;
}

// Example usage:
let root = new TreeNode(4);
root = insertIntoBST(root, 2);
root = insertIntoBST(root, 7);
root = insertIntoBST(root, 1);
root = insertIntoBST(root, 3);

// Printing the tree in In-Order Traversal to check insertion
function inOrderTraversal(node) {
    if (node !== null) {
        inOrderTraversal(node.left);
        console.log(node.val); // Output the node's value
        inOrderTraversal(node.right);
    }
}

inOrderTraversal(root);
// Expected Output: 1 2 3 4 7
