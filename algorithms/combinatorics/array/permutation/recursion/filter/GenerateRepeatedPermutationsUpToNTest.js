import {generateRepeatedPermutationsUpToN} from "./GenerateRepeatedPermutationsUpToN.js";


console.log(generateRepeatedPermutationsUpToN(0, [1,2,3], [], [], 1));
console.log(generateRepeatedPermutationsUpToN(0, [1,2,3], [], [], 2));
console.log(generateRepeatedPermutationsUpToN(0, [1,2,3], [], [], 3));

// valid situation when N > items in array
console.log(generateRepeatedPermutationsUpToN(0, [1,2,3], [], [], 4));
