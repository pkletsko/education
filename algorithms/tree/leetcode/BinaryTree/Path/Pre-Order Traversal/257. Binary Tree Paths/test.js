import {binaryTreePaths_v1} from "./binaryTreePaths_v1.js";
import {binaryTreePaths_v2} from "./binaryTreePaths_v2.js";

import {level_order_deserialization_from_array} from "../../../../../utils/Converters.js";
import {binaryTreePaths_v3} from "./binaryTreePaths_v3.js";
import {printBinaryTree} from "../../../../../utils/Visual.js";

const nums = [1,2,3,null,5];
const root = level_order_deserialization_from_array(nums);
console.log(printBinaryTree(root));

console.log(binaryTreePaths_v1(root));
console.log(binaryTreePaths_v2(root)); // Find out why it is wrong
console.log(binaryTreePaths_v3(root));
