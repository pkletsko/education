import {preorderTraversal} from "./preorderTraversal.js";

import {buildBinaryTreeFromArrayWithNullGaps} from "../../../../utils/Converters.js";

const nums2 = [1,null,2,3];
const root2 = buildBinaryTreeFromArrayWithNullGaps(nums2);
console.log(preorderTraversal(root2)); //Output: [1,2,3]
