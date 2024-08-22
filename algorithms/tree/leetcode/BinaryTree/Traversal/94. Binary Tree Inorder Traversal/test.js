import {inorderTraversal} from "./inorderTraversal.js";
import {buildBinaryTreeFromArrayWithNullGaps} from "../../../../utils/Converters.js";

const nums2 = [1,null,2,3];
const root2 = buildBinaryTreeFromArrayWithNullGaps(nums2);
console.log(inorderTraversal(root2)); //Output: [1,3,2]
