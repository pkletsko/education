import {isBalanced} from "./isBalanced.js";
import {level_order_deserialization_from_array} from "../../../../../utils/Converters.js";
import {printBinaryTree} from "../../../../../utils/Visual.js";

let nums = [3,9,20,null,null,15,7];
let root = level_order_deserialization_from_array(nums);

console.log(printBinaryTree(root));

console.log(isBalanced(root));


nums = [1,2,2,3,3,null,null,4,4];
root = level_order_deserialization_from_array(nums);
console.log(printBinaryTree(root));

console.log(isBalanced(root));
