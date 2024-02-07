import {shortestCommonSupersequencePlus} from "./From_0_To_Target.js";
import {shortestCommonSupersequencePlus_v2} from "./From_0_To_Target_v2.js";
import {shortestCommonSupersequenceMinus} from "./From_Target_To_0.js";

console.log(shortestCommonSupersequencePlus_v2("abac", "cab"));
console.log(shortestCommonSupersequencePlus("abac", "cab"));

// there is a bug
console.log(shortestCommonSupersequenceMinus("abac", "cab"));

