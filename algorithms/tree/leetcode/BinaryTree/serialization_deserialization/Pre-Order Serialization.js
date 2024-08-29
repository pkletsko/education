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

const nums = [1,2,4,null,null,null,3,5,null,null,6,null,null];

//example
const root = new BinaryTreeNode(1);
root.left = new BinaryTreeNode(2);
root.right = new BinaryTreeNode(3);

root.left.left = new BinaryTreeNode(4);

root.right.left = new BinaryTreeNode(5);
root.right.right = new BinaryTreeNode(6);

export function pre_order_serialization(root) {
    const result = [];

    function dfs(node) {
        if (!node) {
            result.push('null');
            return;
        }

        result.push(node.val);

        dfs(node.left);
        dfs(node.right);
    }

    dfs(root);
    return result;
}

export function pre_order_deserialization(data) {
    let index = 0;

    function dfs() {
        if (!data[index]) {
            index++;
            return null;
        }

        // Create the current node with the current value
        const node = new BinaryTreeNode(parseInt(data[index]));
        index++;

        // Recursively build the left and right subtrees
        node.left = dfs();
        node.right = dfs();

        return node;
    }

    return dfs();
}

const serialized = pre_order_serialization(root);
let root_deserialized = pre_order_deserialization(nums);

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
