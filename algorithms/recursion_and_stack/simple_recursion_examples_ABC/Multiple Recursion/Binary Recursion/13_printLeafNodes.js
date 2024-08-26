class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

function printLeafNodes_pre_order(root) {
    // Base case: If the node is null, return
    if (root === null) {
        return;
    }

    // If the node is a leaf (no left and right children), print its value
    if (root.left === null && root.right === null) {
        console.log(root.val);
        return;
    }

    // Recursively traverse the left and right subtrees
    if (root.left !== null) {
        printLeafNodes_pre_order(root.left);
    }
    if (root.right !== null) {
        printLeafNodes_pre_order(root.right);
    }
}

function printLeafNodes_v2_post_oreder(root) {
    // Base case: If the node is null, return
    if (root === null) {
        return null;
    }

    // Recursively traverse the left and right subtrees
    let left = printLeafNodes_v2_post_oreder(root.left);
    let right = printLeafNodes_v2_post_oreder(root.right);

    // If the node is a leaf (no left and right children), print its value
    if (!left && !right) {
        console.log(root.val);
    }
    return root.val;
}


// Example usage:
let root = new TreeNode(1);
root.left = new TreeNode(2);
root.right = new TreeNode(3);
root.left.left = new TreeNode(4);
root.left.right = new TreeNode(5);
root.right.left = new TreeNode(6);
root.right.right = new TreeNode(7);

console.log("Leaf nodes:");
printLeafNodes_pre_order(root);
console.log("Leaf nodes v2:");
printLeafNodes_v2_post_oreder(root);
// Expected Output:
// 4
// 5
// 6
// 7
