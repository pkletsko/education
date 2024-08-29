/**
 *     1
 *    / \
 *   2   3
 *  /   / \
 * 4   5   6
 *
 */
import {printBinaryTree} from "../../../../utils/Visual.js";
import {BinaryTreeNode} from "../../../../utils/Converters.js";


const nums = [1,2,3,4,5,6,7];

// Example BST
const root = new BinaryTreeNode(4,
    new BinaryTreeNode(2, new BinaryTreeNode(1), new BinaryTreeNode(3)),
    new BinaryTreeNode(6, new BinaryTreeNode(5), new BinaryTreeNode(7))
);

export function in_order_serialization_bst(root) {
    const result = [];

    function dfs(node) {
        if (!node) {
            // NOTE !!! We dont need it (and the result will look as sorted array)
            //result.push('null'); // or use "#" to indicate the absence of a node
            return;
        }

        dfs(node.left); // Visit left subtree
        result.push(node.val); // Visit current node
        dfs(node.right); // Visit right subtree
    }

    dfs(root);
    return result;
}

export function in_order_deserialization_bst(values) {

    function dfs(start, end) {
        if (start > end) return null;

        const mid = Math.floor((start + end) / 2);

        const node = new BinaryTreeNode(values[mid]);

        node.left = dfs(start, mid - 1);
        node.right = dfs(mid + 1, end);

        return node;
    }

    return dfs(0, values.length - 1);
}

const serialized = in_order_serialization_bst(root);
let root_deserialized = in_order_deserialization_bst(nums);

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
