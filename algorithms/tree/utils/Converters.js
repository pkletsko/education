export class BinaryTreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

export function buildBinaryTreeFromArray(arr) {
    function buildSubTree(index) {
        // Base case: If index is out of bounds or element is null
        if (index >= arr.length || !arr[index]) {
            return null;
        }

        // Create the current node
        let node = new BinaryTreeNode(arr[index]);

        // Recursively build the left and right subtrees
        node.left = buildSubTree(2 * index + 1);  // Left child index
        node.right = buildSubTree(2 * index + 2); // Right child index

        return node;
    }

    // Edge case: If the array is empty
    if (arr.length === 0) return null;

    // Start building the tree from the root node (index 0)
    return buildSubTree(0);
}

export function buildBinaryTreeFromArrayWithNullGaps(arr) {
    if (arr.length === 0) return null;

    // Create the root node
    let root = new BinaryTreeNode(arr[0]);

    // Initialize a queue to keep track of nodes to process
    let queue = [root];

    // Pointer to keep track of where we are in the array
    let index = 1;

    while (index < arr.length) {
        // Get the current node from the front of the queue
        let currentNode = queue.shift();

        // Assign the left child if available
        if (index < arr.length && arr[index] !== null) {
            currentNode.left = new BinaryTreeNode(arr[index]);
            queue.push(currentNode.left);
        }
        index++;

        // Assign the right child if available
        if (index < arr.length && arr[index] !== null) {
            currentNode.right = new BinaryTreeNode(arr[index]);
            queue.push(currentNode.right);
        }
        index++;
    }

    return root;
}
