import {generateAllSubArrays} from "../main/subarray/recursion/AllSubArrays.js";
import {generateAllCombinationsOrSubSequences} from "../main/combination-subsequence/recursion/GenerateAllCombinationsOrSubSequences.js";
import {generatePermutations} from "../main/permutation/recursion/GeneratePermutations.js";
import {generateRepeatedCombinations} from "../main/combination-subsequence/recursion/GenerateRepeatedCombinations.js";
import {generateRepeatedPermutations} from "../main/permutation/recursion/GenerateRepeatedPermutations.js";

let baseArray = [1,2,3];
// What can we do with this array?

//All sub-arrays
console.log("All sub-arrays");
console.log(generateAllSubArrays(0, baseArray, [], []));

//Note !!!
//All sub-sequences or sub-sets or combinations (it is the same in terms of generated result)
console.log("All sub-sequences or sub-sets or all combinations");
console.log(generateAllCombinationsOrSubSequences(0, baseArray, [], []));

//All repeated combinations
console.log("All repeated combinations");
console.log(generateRepeatedCombinations(0, 0, baseArray, [], []));

//All permutations
console.log("All permutations");
console.log(generatePermutations(new Set(), baseArray, [], []));

//All repeated permutations
console.log("All repeated permutations");
console.log(generateRepeatedPermutations(0, baseArray, [], []));
