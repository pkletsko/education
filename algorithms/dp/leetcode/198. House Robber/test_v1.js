import {houseRobberPlus} from "./From_0_To_TheEnd.js";
import {houseRobberMinus} from "./From_TheEnd_To_0.js";
//import {rob, rob_v2} from "./bad_examples/alg_v1.js";

console.log("Answer 4 = " + houseRobberPlus([2,1,1,2]));
console.log("Answer 4 = " + houseRobberMinus([2,1,1,2]));

console.log("----------");
console.log("Answer 4173 = " + houseRobberPlus([114,117,207,117,235,82,90,67,143,146,53,108,200,91,80,223,58,170,110,236,81,90,222,160,165,195,187,199,114,235,197,187,69,129,64,214,228,78,188,67,205,94,205,169,241,202,144,240]));
console.log("Answer 4173 = " + houseRobberMinus([114,117,207,117,235,82,90,67,143,146,53,108,200,91,80,223,58,170,110,236,81,90,222,160,165,195,187,199,114,235,197,187,69,129,64,214,228,78,188,67,205,94,205,169,241,202,144,240]));

// console.log(rob([2,1,1,2]));
// console.log(rob_v2([2,1,1,2]));
//
// console.log(rob([1,2,3,1]));
// console.log(rob_v2([1,2,3,1]));
//
// console.log(rob([2,7,9,3,1]));
// console.log(rob_v2([2,7,9,3,1]));
