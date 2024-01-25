import {generateRepeatedCombinationsOfN} from "./GenerateRepeatedCombinationsOfN.js";

console.log(generateRepeatedCombinationsOfN([1,2,3], [], [], 1));
console.log(generateRepeatedCombinationsOfN([1,2,3], [], [], 2));
console.log(generateRepeatedCombinationsOfN([1,2,3], [], [], 3));

// valid situation when N > items in array
console.log(generateRepeatedCombinationsOfN([1,2,3], [], [], 4));

