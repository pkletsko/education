import {generatePermutationsOfN} from "./GeneratePermutationsOfN.js";


//[[1, 2], [1, 3], [2, 1], [2, 3], [3, 1], [3, 2]]
//    1      2      3     [[1], [2], [3]]
//   2 3    1 3    1 2    [[1,2], [1,3], [2,1], [2,3], [3,1], [3,2]]
//   3 2    3 1    2 1

console.log(generatePermutationsOfN(new Set(), [1,2,3], [], [], 1));
console.log(generatePermutationsOfN(new Set(), [1,2,3], [], [], 2));
console.log(generatePermutationsOfN(new Set(), [1,2,3], [], [], 3));

//not possible case: N > then items in array
console.log(generatePermutationsOfN(new Set(), [1,2,3], [], [], 4));
