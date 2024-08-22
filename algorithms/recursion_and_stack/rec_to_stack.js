class TreeNode {
    constructor(value = 0, left = null, right = null) {
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function preOrderTraversal(root) {
    if (!root) return [];

    return [
        root.value,
        ...preOrderTraversal(root.left),
        ...preOrderTraversal(root.right)
    ];
}

function preOrderTraversal_stack(root) {
    const result = [];
    if (!root) return result;

    const stack = [];
    stack.push(root);

    while (stack.length > 0) {
        const node = stack.pop();
        result.push(node.value);

        // Push right child first so that left child is processed first
        if (node.right) {
            stack.push(node.right);
        }

        if (node.left) {
            stack.push(node.left);
        }
    }

    console.log("Pre-order traversal result:", result);
    return result;
}

// Example usage:
const root = new TreeNode(1,
    new TreeNode(2,
        new TreeNode(4),
        new TreeNode(5)
    ),
    new TreeNode(3)
);
console.log(preOrderTraversal(root));  // Output: [1, 2, 4, 5, 3]
console.log(preOrderTraversal_stack(root));
