import {generateAllSubArrays} from "../main/subarray/recursion/AllSubArrays.js";
import {generateAllCombinationsOrSubSequences} from "../main/combination-subsequence/recursion/GenerateAllCombinationsOrSubSequences.js";
import {generateRepeatedCombinations} from "../main/combination-subsequence/recursion/GenerateRepeatedCombinations.js";
import {generatePermutations} from "../main/permutation/recursion/GeneratePermutations.js";
import {generateRepeatedPermutations} from "../main/permutation/recursion/GenerateRepeatedPermutations.js";

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

//All combinations
console.log("All combinations or sub-sequences or sub-sets");
console.log(generateAllCombinationsOrSubSequences(0, unsortedBaseArray, [], []).sort());
console.log(generateAllCombinationsOrSubSequences(0, sortedBaseArray, [], []).sort());
console.log("The order of the elements doesn't matter. The same set of items chosen in a different order is considered the same combination.");
console.log("-------------------------------------------------------");
console.log("sub-sequences are different if order of original array was changed by sort");
console.log("-------------------------------------------------------");

//All repeated combinations
console.log("All repeated combinations");
console.log(generateRepeatedCombinations(0,0, unsortedBaseArray, [], []).sort());
console.log(generateRepeatedCombinations(0,0, sortedBaseArray, [], []).sort());
console.log("The order of the elements doesn't matter. The same set of items chosen in a different order is considered the same combination.");
console.log("-------------------------------------------------------");

//All permutations
console.log("All permutations");
console.log(generatePermutations(new Set(), unsortedBaseArray, [], []).sort());
console.log(generatePermutations(new Set(), sortedBaseArray, [], []).sort());
console.log("The order of the elements matters. Different arrangements of the same set of items are considered distinct permutations.")
console.log("Sort of original array doesn't matter. We will get the same distinct permutations.");
console.log("-------------------------------------------------------");

//All repeated permutations
console.log("All repeated permutations");
console.log(generateRepeatedPermutations(0, unsortedBaseArray, [], []).sort());
console.log(generateRepeatedPermutations(0, sortedBaseArray, [], []).sort());
console.log("The order of the elements matters. Different arrangements of the same set of items are considered distinct permutations.")
console.log("Sort of original array doesn't matter. We will get the same distinct permutations.");
console.log("-------------------------------------------------------");
