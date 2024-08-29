import {lowestCommonAncestor} from "./lowestCommonAncestor.js";

import {level_order_deserialization_from_array} from "../../../../../utils/Converters.js";
import {printBinaryTree} from "../../../../../utils/Visual.js";

let nums = [3,5,1,6,2,0,8,null,null,7,4];
let root = level_order_deserialization_from_array(nums);

let p = root.left;
let q = root.right;

console.log(printBinaryTree(root));
console.log(lowestCommonAncestor(root, p, q));
