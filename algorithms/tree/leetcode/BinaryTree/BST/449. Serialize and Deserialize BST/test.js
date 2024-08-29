import {serialize} from "./solution.js";
import {deserialize} from "./solution.js";
import {
    level_order_deserialization_from_array,
    buildBinaryTreeFromArraySupport_0,
    buildBinaryTreeFromArrayWithNullGaps
} from "../../../../utils/Converters.js";
import {printBinaryTree} from "../../../../utils/Visual.js";

// leetcode serialization
console.log("leetcode serialization:");

//let nums = [3,5,1,6,2,0,8,null,null,7,4];
// we create tree from different tree representations
//2 * index + 1
//2 * index + 2
const nums = [1,null,2,null, null,3,null];
console.log("Original : " + nums.join(','));
let root = level_order_deserialization_from_array(nums);

//console.log(printBinaryTree(root));
const serialized = serialize(root);
console.log("Serialized Pre-order : " + serialized);

const deserialized = deserialize(serialized);
console.log(deserialized);

// const nums2 = [1,0,1,0,1,0,1];
// console.log(nums2.join(','));
// const root2 = buildBinaryTreeFromArraySupport_0(nums2);
// console.log(printBinaryTree(root2));
// console.log(serialize(root2));

const nums3 = [1,null,2,3];
console.log("Original : " + nums3.join(','));
const root3 = buildBinaryTreeFromArrayWithNullGaps(nums3);

//console.log(printBinaryTree(root3));
const serialized3 = serialize(root3);
console.log("Serialized Pre-order : " + serialized3);

const deserialized3 = deserialize(serialized3);
console.log(deserialized3);
