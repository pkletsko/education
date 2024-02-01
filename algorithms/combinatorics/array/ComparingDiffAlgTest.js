import {generateAllSubArrays} from "./subarray/recursion/AllSubArrays.js";
import {generateAllSubSequences} from "./subsequence/recursion/AllSubSequences.js";
import {generateCombinations} from "./combination/recursion/GenerateCombinations.js";
import {generatePermutations} from "./permutation/recursion/GeneratePermutations.js";
import {generateRepeatedCombinations} from "./combination/recursion/GenerateRepeatedCombinations.js";
import {generateRepeatedPermutations} from "./permutation/recursion/GenerateRepeatedPermutations.js";

let baseArray = [1,2,3];
// What we can do with this array?

//All sub-arrays
console.log("All sub-arrays");
console.log(generateAllSubArrays(0, baseArray, [], []));

//Note !!!
console.log("Algorithms generateAllSubSequences and generateCombinations are identical.")
//All sub-sequences or sub-sets (it is the same in terms of generated result)
console.log("All sub-sequences or sub-sets");
console.log(generateAllSubSequences(0, baseArray, [], []));

//All combinations
console.log("All combinations");
console.log(generateCombinations(0, baseArray, [], []));

//All repeated combinations
console.log("All repeated combinations");
console.log(generateRepeatedCombinations(0, 0, baseArray, [], []));

//All permutations
console.log("All permutations");
console.log(generatePermutations(new Set(), baseArray, [], []));

//All repeated permutations
console.log("All repeated permutations");
console.log(generateRepeatedPermutations(0, baseArray, [], []));
