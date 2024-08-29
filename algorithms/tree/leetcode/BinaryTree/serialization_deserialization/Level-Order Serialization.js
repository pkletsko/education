import {BinaryTreeNode, level_order_deserialization_from_array} from "../../../utils/Converters.js";
import {printBinaryTree} from "../../../utils/Visual.js";

/**
 *     1
 *    / \
 *   2   3
 *  /   / \
 * 4   5   6
 *
 */

const nums = [1,2,3,4,null,5,6,null,null,null,null];

//example
const root = new BinaryTreeNode(1);
root.left = new BinaryTreeNode(2);
root.right = new BinaryTreeNode(3);

root.left.left = new BinaryTreeNode(4);

root.right.left = new BinaryTreeNode(5);
root.right.right = new BinaryTreeNode(6);

export function level_order_serialization(root) {
    if (!root) return [];

    const result = [];
    const queue = [root];

    while (queue.length > 0) {
        const node = queue.shift();
        if (node) {
            result.push(node.val);
            queue.push(node.left);
            queue.push(node.right);
        } else {
            result.push('null'); // Use null or "#" to represent absent nodes
        }
    }

    // Remove trailing nulls to reduce unnecessary space
    while (result[result.length - 1] === null) {
        result.pop();
    }

    return result;
}

export function level_order_deserialization(arr) {
    function dfs(index) {
        // Base case: If index is out of bounds or element is null
        if (index >= arr.length || !arr[index]) {
            return null;
        }

        // Create the current node
        let node = new BinaryTreeNode(arr[index]);

        // Recursively build the left and right subtrees
        node.left = dfs(2 * index + 1);  // Left child index
        node.right = dfs(2 * index + 2); // Right child index

        return node;
    }

    // Edge case: If the array is empty
    if (arr.length === 0) return null;

    // Start building the tree from the root node (index 0)
    return dfs(0);
}

const serialized = level_order_serialization(root);
let root_deserialized = level_order_deserialization(nums);

const nums_v = [];
for(let v of nums) {
    if (!v) {
        nums_v.push('null');
    } else {
        nums_v.push(v);
    }
}

console.log("Original of serialized tree:");
console.log("["+ nums_v.join(",") + "]");
console.log("Serialized tree:");
console.log("["+ serialized.join(",") + "]");

console.log("Example of tree:");
console.log(printBinaryTree(root));
console.log("Deserialized tree:");
console.log(printBinaryTree(root_deserialized));



