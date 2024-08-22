import {generateAllCombinationsOrSubSequences_for_loop} from "./GenerateAllCombinationsOrSubSequences_for_loop.js";
import {
    generateAllCombinationsOrSubSequences_not_include
} from "./GenerateAllCombinationsOrSubSequences_not_include.js";
import {
    generateAllCombinationsOrSubSequences_for_loop_from_each_point
} from "./GenerateAllCombinationsOrSubSequences_for_loop_from_each_point.js";


const nums = [1,2,3,4];

console.log(generateAllCombinationsOrSubSequences_for_loop(nums));
console.log(generateAllCombinationsOrSubSequences_not_include(nums));
console.log(generateAllCombinationsOrSubSequences_for_loop_from_each_point(nums));
