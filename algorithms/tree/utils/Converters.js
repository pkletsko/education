export class BinaryTreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

export class NAryTreeNode {
    constructor(val, children = []) {
        this.val = val;
        this.children = children;
    }
}

export function buildNAryTree(serialized) {
    if (serialized.length === 0) return null;

    // Create the root node
    const root = new NAryTreeNode(serialized[0]);
    const queue = [root];  // Queue to manage nodes
    let index = 1;  // Start from the second element in the serialized array

    while (index < serialized.length) {
        let currentNode = queue.shift();  // Dequeue the next node to process
        let children = [];

        // Skip over the null separator if present
        if (index < serialized.length && serialized[index] === null) {
            index++;  // Move past the null separator
        }

        // Process children for the current node
        while (index < serialized.length && serialized[index] !== null) {
            const child = new NAryTreeNode(serialized[index++]);
            children.push(child);
            queue.push(child);  // Enqueue the child node
        }

        // Assign the collected children to the current node
        currentNode.children = children;


    }

    return root;
}

//Level-order representation
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

export function buildBinaryTreeFromArraySupport_0(arr) {
    function buildSubTree(index) {
        // Base case: If index is out of bounds or element is null
        if (index >= arr.length) {
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
