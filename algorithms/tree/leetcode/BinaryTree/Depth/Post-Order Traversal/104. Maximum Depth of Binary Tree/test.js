import {maxDepth} from "./maxDepth.js";
import {level_order_deserialization_from_array} from "../../../../../utils/Converters.js";
import {printBinaryTree} from "../../../../../utils/Visual.js";

const nums = [3,9,20,null,null,15,7];
const root = level_order_deserialization_from_array(nums);

console.log(printBinaryTree(root));

console.log(maxDepth(root));
