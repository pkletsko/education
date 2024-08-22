import {maxDepth} from "./maxDepth.js";
import {buildBinaryTreeFromArray} from "../../../../utils/Converters.js";
import {printBinaryTree} from "../../../../utils/Visual.js";

const nums = [3,9,20,null,null,15,7];
const root = buildBinaryTreeFromArray(nums);

console.log(printBinaryTree(root));

console.log(maxDepth(root));
