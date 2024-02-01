import {generateAllSubArrays} from "./subarray/AllSubArrays.js";
import {generateAllSubSequences} from "./subsequences/AllSubSequences.js";
import {generateCombinations} from "./combination/GenerateCombinations.js";
import {generatePermutations} from "./permutation/GeneratePermutations.js";
import {generateRepeatedCombinations} from "./combination/GenerateRepeatedCombinations.js";
import {generateRepeatedPermutations} from "./permutation/GenerateRepeatedPermutations.js";

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
