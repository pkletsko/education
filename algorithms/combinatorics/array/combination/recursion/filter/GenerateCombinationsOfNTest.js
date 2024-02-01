import {generateCombinationsOfN} from "./GenerateCombinationsOfN.js";


console.log(generateCombinationsOfN(0, [1,2,3], [], [], 1));
console.log(generateCombinationsOfN(0, [1,2,3], [], [], 2));
console.log(generateCombinationsOfN(0, [1,2,3], [], [], 3));

//not possible case: N > then items in array
console.log(generateCombinationsOfN(0, [1,2,3], [], [], 4));
