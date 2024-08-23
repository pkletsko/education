import {sumRootToLeaf} from "./sumRootToLeaf.js";
import {buildBinaryTreeFromArray, buildBinaryTreeFromArraySupport_0} from "../../../../../utils/Converters.js";
import {printBinaryTree} from "../../../../../utils/Visual.js";
import {sumRootToLeaf_v2} from "./sumRootToLeaf_v2.js";

const nums = [1,0,1,0,1,0,1];
const root = buildBinaryTreeFromArraySupport_0(nums);

console.log(printBinaryTree(root));
console.log(sumRootToLeaf(root));
console.log(sumRootToLeaf_v2(root));
