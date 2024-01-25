import {generateAllSubArrays} from "./subarray/AllSubArrays.js";
import {generateAllSubSequences} from "./subsequences/AllSubSequences.js";
import {generateCombinationsOfN} from "./combination/GenerateCombinationsOfN.js";
import {generateRepeatedCombinationsOfN} from "./combination/GenerateRepeatedCombinationsOfN.js";
import {generatePermutationsOfN} from "./permutation/GeneratePermutationsOfN.js";
import {generateRepeatedPermutationsOfN} from "./permutation/GenerateRepeatedPermutationsOfN.js";

let baseArray = [1,2,3];
// What we can do with this array?

//All sub-arrays
console.log("All sub-arrays");
console.log(generateAllSubArrays(0, baseArray, [], []));

//All sub-sequences or sub-sets (it is the same in terms of generated result)
console.log("All sub-sequences or sub-sets");
console.log(generateAllSubSequences(0, baseArray, [], []));

//All combinations
for (let i = 1; i <= baseArray.length; i++) {
    console.log("All combinations for N=" + i);
    console.log(generateCombinationsOfN(0, baseArray, [], [], i));
}

//All repeated combinations
for (let i = 1; i <= baseArray.length; i++) {
    console.log("All repeated combinations for N=" + i);
    console.log(generateRepeatedCombinationsOfN(baseArray, [], [], i));
}

//All permutations
for (let i = 1; i <= baseArray.length; i++) {
    console.log("All permutations for N=" + i);
    console.log(generatePermutationsOfN(new Set(), baseArray, [], [], i));
}

//All repeated permutations
for (let i = 1; i <= baseArray.length; i++) {
    console.log("All repeated permutations for N=" + i);
    console.log(generateRepeatedPermutationsOfN(0, baseArray, [], [], i));
}
