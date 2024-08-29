import {
    BinaryTreeNode,
} from "../../../utils/Converters.js";
import {printBinaryTree} from "../../../utils/Visual.js";

/**
 *     1
 *    / \
 *   2   3
 *  /   / \
 * 4   5   6
 *
 */

const nums = [null,null,4,null,2,null,null,5,null,null,6,3,1];

//example
const root = new BinaryTreeNode(1);
root.left = new BinaryTreeNode(2);
root.right = new BinaryTreeNode(3);

root.left.left = new BinaryTreeNode(4);

root.right.left = new BinaryTreeNode(5);
root.right.right = new BinaryTreeNode(6);

export function post_order_serialization(root) {
    const result = [];

    function dfs(node) {
        if (!node) {
            result.push('null');
            return;
        }

        dfs(node.left);
        dfs(node.right);

        result.push(node.val);
    }

    dfs(root);
    return result;
}

export function post_order_deserialization(data) {
    // Start from the end of the list since it's post-order (left-right-root).
    let index = data.length - 1;

    function dfs() {
        // Base case: if we hit a null, this is a leaf node.
        if (index < 0 || !data[index]) {
            index--; // Move to the next element in the list.
            return null;
        }

        // Create a new node with the current value.
        const node = new BinaryTreeNode(data[index--]);

        // Since it's post-order, we need to build the right subtree first, then the left.
        node.right = dfs();
        node.left = dfs();

        return node;
    }

    return dfs();
}

const serialized = post_order_serialization(root);
let root_deserialized = post_order_deserialization(nums);

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
