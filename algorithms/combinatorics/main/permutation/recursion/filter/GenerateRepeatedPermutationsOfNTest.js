import {generateRepeatedPermutationsOfN} from "./GenerateRepeatedPermutationsOfN.js";


console.log(generateRepeatedPermutationsOfN(0, [1,2,3], [], [], 1));
console.log(generateRepeatedPermutationsOfN(0, [1,2,3], [], [], 2));
console.log(generateRepeatedPermutationsOfN(0, [1,2,3], [], [], 3));

// valid situation when N > items in array
console.log(generateRepeatedPermutationsOfN(0, [1,2,3], [], [], 4));
