import {change} from "./GenerateRepeatedCombinationsOfN.js";

console.log(change(5, [1,2,5]));

// 5=5
// 5=2+2+1
// 5=2+1+1+1
// 5=1+1+1+1+1

//[ '1->1->1->1->1',
// '1->1->1->2',
// '1->2->2',
// '5' ]

