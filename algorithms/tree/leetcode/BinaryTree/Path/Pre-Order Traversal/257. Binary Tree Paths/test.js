import {binaryTreePaths_v1} from "./binaryTreePaths_v1.js";
import {binaryTreePaths_v2_incorrect} from "./binaryTreePaths_v2_incorrect.js";

import {buildBinaryTreeFromArray} from "../../../../../utils/Converters.js";
import {binaryTreePaths_v3} from "./binaryTreePaths_v3.js";
import {printBinaryTree} from "../../../../../utils/Visual.js";

const nums = [1,2,3,null,5];
const root = buildBinaryTreeFromArray(nums);
console.log(printBinaryTree(root));

console.log(binaryTreePaths_v1(root));
console.log(binaryTreePaths_v2_incorrect(root)); // Find out why it is wrong
console.log(binaryTreePaths_v3(root));
