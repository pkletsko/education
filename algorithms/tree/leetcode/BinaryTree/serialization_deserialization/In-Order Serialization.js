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

const nums = [null,4,null,2,null,1,null,5,null,3,null,6,null];

//example
const root = new BinaryTreeNode(1);
root.left = new BinaryTreeNode(2);
root.right = new BinaryTreeNode(3);

root.left.left = new BinaryTreeNode(4);

root.right.left = new BinaryTreeNode(5);
root.right.right = new BinaryTreeNode(6);

export function in_order_serialization(root) {
    const result = [];

    function dfs(node) {
        if (!node) {
            result.push('null'); // or use "#" to indicate the absence of a node
            return;
        }

        dfs(node.left); // Visit left subtree
        result.push(node.val); // Visit current node
        dfs(node.right); // Visit right subtree
    }

    dfs(root);
    return result;
}

export function in_order_deserialization(data) {
   // ???
}

const serialized = in_order_serialization(root);
let root_deserialized = in_order_deserialization(nums);

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
//console.log(printBinaryTree(root_deserialized));


/**
 * To deserialize a binary tree from its in-order and pre-order traversals,
 * you'll need both traversals because in-order traversal alone does not provide enough information to reconstruct the tree structure.
 * Here’s a detailed example showing how to deserialize a binary tree given both in-order and pre-order traversal arrays.
 */

function deserializeInOrderPreOrder(inorder, preorder) {
    let preorderIndex = 0;

    function buildTree(inorderStart, inorderEnd) {
        if (inorderStart > inorderEnd) {
            return null;
        }

        // Get the root value from the preorder array
        const rootValue = preorder[preorderIndex++];
        const root = new BinaryTreeNode(rootValue);

        // Find the index of the root value in the inorder array
        const inorderIndex = inorder.indexOf(rootValue);

        // Build left and right subtrees
        root.left = buildTree(inorderStart, inorderIndex - 1);
        root.right = buildTree(inorderIndex + 1, inorderEnd);

        return root;
    }

    return buildTree(0, inorder.length - 1);
}

// Example usage
const inorder = [4, 2, 5, 1, 6, 3];
const preorder = [1, 2, 4, 5, 3, 6];
const root = deserializeInOrderPreOrder(inorder, preorder);
