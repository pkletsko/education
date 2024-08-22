import {postorderTraversal} from "./postorderTraversal.js";
import {buildBinaryTreeFromArrayWithNullGaps} from "../../../../utils/Converters.js";
import {printBinaryTree} from "../../../../utils/Visual.js";

// const nums = [1,2,3,null,5];
// const root = buildBinaryTreeFromArray(nums);
// console.log(postorderTraversal(root));


const nums2 = [1,null,2,3];
const root2 = buildBinaryTreeFromArrayWithNullGaps(nums2);
console.log(printBinaryTree(root2));
console.log(postorderTraversal(root2)); //Output: [3,2,1]
