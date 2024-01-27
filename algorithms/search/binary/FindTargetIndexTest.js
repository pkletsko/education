import {findTargetIndex} from "./FindTargetIndex.js";


console.log("Correct answer is index 1 - > we got " + findTargetIndex([1,2,3,4,5,6,7], 2));
console.log("Correct answer is index 0 - > we got " + findTargetIndex([1,2,3,4,5,6,7], 1));
console.log("Correct answer is index 6 - > we got " + findTargetIndex([1,2,3,4,5,6,7], 7));
console.log("Correct answer is index -1 - > we got " + findTargetIndex([1,2,3,4,5,6,7], 100));

console.log("Correct answer is index 0 - > we got " + findTargetIndex([8], 8));
