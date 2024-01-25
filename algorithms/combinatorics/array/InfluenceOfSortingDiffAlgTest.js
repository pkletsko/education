import {generateAllSubArrays} from "./subarray/AllSubArrays.js";
import {generateAllSubSequences} from "./subsequences/AllSubSequences.js";
import {generateCombinationsOfN} from "./combination/GenerateCombinationsOfN.js";
import {generateRepeatedCombinationsOfN} from "./combination/GenerateRepeatedCombinationsOfN.js";
import {generatePermutationsOfN} from "./permutation/GeneratePermutationsOfN.js";
import {generateRepeatedPermutationsOfN} from "./permutation/GenerateRepeatedPermutationsOfN.js";

let unsortedBaseArray = [3,1,2];
let sortedBaseArray = [1,2,3]; // [1, 2, 3]
// What we can do with this array?

console.log("unsortedBaseArray: " + unsortedBaseArray);
console.log("sortedBaseArray: " + sortedBaseArray);
console.log("-------------------------------------------------------");

//All sub-arrays
console.log("All sub-arrays");
console.log(generateAllSubArrays(0, unsortedBaseArray, [], []).sort());
console.log(generateAllSubArrays(0, sortedBaseArray, [], []).sort());
console.log("Sub-arrays are different if order of original array was changed by sort");
console.log("-------------------------------------------------------");

//All sub-sequences or sub-sets (it is the same in terms of generated result)
console.log("All sub-sequences or sub-sets");
console.log(generateAllSubSequences(0, unsortedBaseArray, [], []).sort());
console.log(generateAllSubSequences(0, sortedBaseArray, [], []).sort());
console.log("sub-sequences are different if order of original array was changed by sort");
console.log("-------------------------------------------------------");

//All combinations
for (let i = 1; i <= unsortedBaseArray.length; i++) {
    console.log("All combinations for N=" + i);
    console.log(generateCombinationsOfN(0, unsortedBaseArray, [], [], i).sort());
    console.log(generateCombinationsOfN(0, sortedBaseArray, [], [], i).sort());
}
console.log("The order of the elements doesn't matter. The same set of items chosen in a different order is considered the same combination.");
console.log("-------------------------------------------------------");

//All repeated combinations
for (let i = 1; i <= unsortedBaseArray.length; i++) {
    console.log("All repeated combinations for N=" + i);
    console.log(generateRepeatedCombinationsOfN(unsortedBaseArray, [], [], i).sort());
    console.log(generateRepeatedCombinationsOfN(sortedBaseArray, [], [], i).sort());
}
console.log("The order of the elements doesn't matter. The same set of items chosen in a different order is considered the same combination.");
console.log("-------------------------------------------------------");

//All permutations
for (let i = 1; i <= unsortedBaseArray.length; i++) {
    console.log("All permutations for N=" + i);
    console.log(generatePermutationsOfN(new Set(), unsortedBaseArray, [], [], i).sort());
    console.log(generatePermutationsOfN(new Set(), sortedBaseArray, [], [], i).sort());
}
console.log("The order of the elements matters. Different arrangements of the same set of items are considered distinct permutations.")
console.log("Sort of original array doesn't matter. We will get the same distinct permutations.");
console.log("-------------------------------------------------------");

//All repeated permutations
for (let i = 1; i <= unsortedBaseArray.length; i++) {
    console.log("All repeated permutations for N=" + i);
    console.log(generateRepeatedPermutationsOfN(0, unsortedBaseArray, [], [], i).sort());
    console.log(generateRepeatedPermutationsOfN(0, sortedBaseArray, [], [], i).sort());
}
console.log("The order of the elements matters. Different arrangements of the same set of items are considered distinct permutations.")
console.log("Sort of original array doesn't matter. We will get the same distinct permutations.");
console.log("-------------------------------------------------------");
