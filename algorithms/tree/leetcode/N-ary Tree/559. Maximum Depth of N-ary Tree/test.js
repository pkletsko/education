import {buildNAryTree} from "../../../utils/Converters.js";
import {maxDepth_v1} from "./maxDepth_v1.js";
import {maxDepth_v2} from "./maxDepth_v2.js";

let nums = [1,null,3,2,4,null,5,6];
let root = buildNAryTree(nums);

console.log(maxDepth_v1(root));
console.log(maxDepth_v2(root));

nums = [1,null,2,3,4,5,null,null,6,7,null,8,null,9,10,null,null,11,null,12,null,13,null,null,14];
root = buildNAryTree(nums);

console.log(maxDepth_v1(root));
console.log(maxDepth_v2(root));

